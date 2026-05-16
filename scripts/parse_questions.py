import re
from pathlib import Path

text = Path("question_bank_extracted.txt").read_text(encoding="utf-8")
text = text.replace("\r\n", "\n").replace("\r", "\n")

TRAIT_MAP = {
    "Mercy": "mercy",
    "Valor": "valor",
    "Oath": "oath",
    "Loyalty": "loyalty",
    "Honor": "honor",
    "Justice": "justice",
}

SCORES = {"A": 1, "B": 2, "C": 3, "D": 4}

chunks = re.split(r"(?=^(?:Mercy|Valor|Oath|Loyalty|Honor|Justice)$)", text, flags=re.M)

questions: list[dict] = []

for chunk in chunks:
    chunk = chunk.strip()
    if not chunk:
        continue
    lines = chunk.split("\n")
    trait_name = lines[0].strip()
    if trait_name not in TRAIT_MAP:
        continue
    trait = TRAIT_MAP[trait_name]
    body = "\n".join(lines[1:])

    q_parts = re.split(r"Question (\d+)\n", body)
    i = 1
    while i < len(q_parts):
        qnum = q_parts[i]
        content = q_parts[i + 1] if i + 1 < len(q_parts) else ""
        i += 2

        options: list[tuple[str, str]] = []
        opt_matches = list(re.finditer(r'Option ([A-D]) "([^"]*)"', content))

        if len(opt_matches) >= 4:
            qtext = content[: opt_matches[0].start()].strip()
            for m in opt_matches[:4]:
                options.append((m.group(1), m.group(2)))
        else:
            lines_q = content.split("\n")
            q_lines: list[str] = []
            opt_start = None
            for idx, ln in enumerate(lines_q):
                if re.match(r"^[A-D] ", ln):
                    opt_start = idx
                    break
                q_lines.append(ln)
            qtext = "\n".join(q_lines).strip()
            if opt_start is not None:
                opt_text = "\n".join(lines_q[opt_start:])
                for letter in "ABCD":
                    pat = rf"^{letter} (.+?)(?=\n[A-D] |\Z)"
                    m = re.search(pat, opt_text, re.S | re.M)
                    if m:
                        options.append((letter, m.group(1).strip()))

        if len(options) != 4:
            print(f"WARN {trait}-{qnum}: {len(options)} options")
            continue

        questions.append(
            {
                "id": f"{trait}-{qnum}",
                "trait": trait,
                "text": qtext,
                "options": options,
            }
        )

print("total", len(questions))
for t in TRAIT_MAP.values():
    print(t, sum(1 for q in questions if q["trait"] == t))

def esc(s: str) -> str:
    return s.replace("\\", "\\\\").replace("`", "\\`").replace("${", "\\${")

lines_out = [
    "export type Trait = 'valor' | 'honor' | 'oath' | 'justice' | 'loyalty' | 'mercy';",
    "",
    "export interface AnswerOption {",
    "  text: string;",
    "  score: number;",
    "}",
    "",
    "export interface Question {",
    "  id: string;",
    "  trait: Trait;",
    "  text: string;",
    "  options: AnswerOption[];",
    "}",
    "",
    "export const questions: Question[] = [",
]

for q in questions:
    lines_out.append("  {")
    lines_out.append(f"    id: '{q['id']}',")
    lines_out.append(f"    trait: '{q['trait']}',")
    lines_out.append(f"    text: `{esc(q['text'])}`,")
    lines_out.append("    options: [")
    for letter, opt_text in q["options"]:
        lines_out.append(f"      {{ text: `{esc(opt_text)}`, score: {SCORES[letter]} }},")
    lines_out.append("    ],")
    lines_out.append("  },")

lines_out.append("];")
lines_out.append("")

Path("lib/questions.ts").write_text("\n".join(lines_out), encoding="utf-8")
print("Wrote lib/questions.ts")
