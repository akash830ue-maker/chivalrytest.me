"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  calculateChivalry,
  type Trait,
  type SoulResult,
  type RawScores,
} from "@/lib/algorithm";

const SHARE_URL = "https://chivalrytest.me";

const TRAITS: Trait[] = [
  "valor",
  "honor",
  "oath",
  "justice",
  "loyalty",
  "mercy",
];

const TRAIT_EMOJI: Record<Trait, string> = {
  valor: "🗡️",
  honor: "🛡️",
  oath: "📜",
  justice: "⚖️",
  loyalty: "⚓",
  mercy: "🕊️",
};

const TRAIT_LABELS_EN: Record<Trait, string> = {
  valor: "Valor",
  honor: "Honor",
  oath: "Oath",
  justice: "Justice",
  loyalty: "Loyalty",
  mercy: "Mercy",
};

const KERNEL_ARCHETYPES: Record<
  Trait,
  { title: string; desc: string }
> = {
  valor: {
    title: "[ Blade of Valor ]",
    desc: "You are an unyielding sword. In your belief, the courage to draw your blade against tyranny far outweighs useless sympathy for the weak.",
  },
  honor: {
    title: "[ Iron Guard of Honor ]",
    desc: "Valuing reputation above life itself, you refuse to tarnish your faith with lies or despicable acts.",
  },
  oath: {
    title: "[ Guardian of the Oath ]",
    desc: "Rules stand higher than personal desires. You are the bedrock of the modern contractual spirit, keeping your word even in the darkest storms.",
  },
  justice: {
    title: "[ Scales of Justice ]",
    desc: "Stripping away hypocritical privilege, you uphold absolute fairness and the purest candor in a complex world.",
  },
  loyalty: {
    title: "[ Anchor of Loyalty ]",
    desc: "True bonds are forged walking side by side in the dark. You would never abandon your allies in their lowest moments.",
  },
  mercy: {
    title: "[ Shield of Mercy ]",
    desc: "The truly strong know when to sheathe their blades. When others seek vengeance, you choose to offer understanding and forgiveness.",
  },
};

function isRawScores(value: unknown): value is RawScores {
  if (!value || typeof value !== "object") {
    return false;
  }
  return TRAITS.every(
    (trait) =>
      typeof (value as RawScores)[trait] === "number" &&
      !Number.isNaN((value as RawScores)[trait]),
  );
}

type PagePhase = "loading" | "empty" | "ready";

export default function ResultPage() {
  const [results, setResults] = useState<SoulResult[]>([]);
  const [phase, setPhase] = useState<PagePhase>("loading");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const raw = localStorage.getItem("chivalry_raw_scores");

    if (!raw) {
      setPhase("empty");
      return;
    }

    try {
      const parsed: unknown = JSON.parse(raw);

      if (!isRawScores(parsed)) {
        setPhase("empty");
        return;
      }

      setResults(calculateChivalry(parsed));
      setPhase("ready");
    } catch {
      setPhase("empty");
    }
  }, []);

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(SHARE_URL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error("Failed to copy link:", error);
    }
  };

  if (phase === "loading") {
    return (
      <main className="relative min-h-screen overflow-hidden bg-slate-950 px-4 py-24 sm:px-6">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[min(90vw,560px)] w-[min(90vw,560px)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-500/10 blur-[150px]" />
        <div className="relative z-10 mx-auto flex max-w-lg flex-col items-center justify-center gap-4 text-center">
          <div className="h-10 w-10 animate-pulse rounded-full border-2 border-amber-500/40 border-t-amber-400" />
          <p className="text-sm font-medium tracking-wide text-slate-400">
            Unveiling the composition of your soul…
          </p>
        </div>
      </main>
    );
  }

  if (phase === "empty") {
    return (
      <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-slate-950 px-4 py-20 sm:px-6">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[min(90vw,560px)] w-[min(90vw,560px)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-500/10 blur-[150px]" />
        <div className="relative z-10 mx-auto max-w-md space-y-8 text-center">
          <p className="font-serif text-lg leading-relaxed text-slate-300 sm:text-xl">
            The fog obscures your soul. Please complete the test first.
          </p>
          <Link
            href="/test"
            className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-amber-600 to-amber-500 px-8 py-4 text-base font-bold text-slate-950 shadow-[0_0_24px_rgba(245,158,11,0.25)] transition hover:from-amber-500 hover:to-amber-400 hover:shadow-[0_0_32px_rgba(245,158,11,0.35)]"
          >
            Take the Chivalry Test
          </Link>
        </div>
      </main>
    );
  }

  const topResult = results[0];
  const kernel = topResult ? KERNEL_ARCHETYPES[topResult.trait] : null;

  const shareText =
    topResult && kernel
      ? `I just took the Chivalry Test and discovered my soul archetype is ${TRAIT_EMOJI[topResult.trait]} ${kernel.title}! Pierce through the fog of the modern world and find your classical virtue here: `
      : "";

  const twitterShareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(SHARE_URL)}`;
  const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(SHARE_URL)}`;

  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-950 px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="pointer-events-none absolute left-1/2 top-[28%] h-[min(100vw,720px)] w-[min(100vw,720px)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-500/10 blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-3xl">
        <header className="mb-12 text-center">
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.25em] text-amber-500/90">
            Your result
          </p>
          <h1 className="text-3xl font-bold tracking-tight text-slate-100 sm:text-4xl">
            Soul Composition
          </h1>
        </header>

        <section
          aria-labelledby="soul-composition-heading"
          className="mb-12 space-y-4"
        >
          <h2
            id="soul-composition-heading"
            className="sr-only"
          >
            Virtue percentages
          </h2>
          {results.map((item) => (
            <div
              key={item.trait}
              className="rounded-2xl border border-slate-800 bg-slate-900/80 px-5 py-4 shadow-xl backdrop-blur-sm sm:px-6 sm:py-5"
            >
              <div className="mb-3 flex items-center justify-between gap-3">
                <span className="flex items-center gap-2 text-sm font-semibold text-slate-200">
                  <span aria-hidden>{TRAIT_EMOJI[item.trait]}</span>
                  {TRAIT_LABELS_EN[item.trait]}
                </span>
                <span className="tabular-nums text-sm font-bold text-amber-400/95">
                  {item.percentage}%
                </span>
              </div>
              <div className="h-3 w-full overflow-hidden rounded-full bg-slate-800">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-amber-600 to-amber-400 transition-[width] duration-700 ease-out"
                  style={{ width: `${item.percentage}%` }}
                  role="presentation"
                />
              </div>
            </div>
          ))}
        </section>

        {kernel && topResult ? (
          <>
            <section className="mb-12 rounded-2xl border border-amber-500/30 bg-slate-900/50 px-6 py-10 shadow-[0_0_30px_rgba(245,158,11,0.1)] backdrop-blur-sm sm:px-10 sm:py-12">
              <p className="mb-4 text-center text-xs font-bold uppercase tracking-[0.2em] text-amber-500/80">
                Soul archetype
              </p>
              <p className="mx-auto mb-8 max-w-xl text-center text-sm leading-relaxed text-slate-400">
                Through the assessment, the true knightly core within your soul
                is:
              </p>
              <h2
                className="mb-8 text-center text-3xl font-extrabold leading-tight sm:text-4xl md:text-5xl lg:text-6xl"
                style={{ lineHeight: 1.15 }}
              >
                <span className="block bg-gradient-to-r from-amber-200 via-amber-400 to-amber-600 bg-clip-text text-transparent drop-shadow-[0_0_24px_rgba(251,191,36,0.15)]">
                  {kernel.title}
                </span>
              </h2>
              <p className="text-center text-base leading-relaxed text-slate-300 sm:text-left sm:text-[0.95rem]">
                {kernel.desc}
              </p>
            </section>

            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-4">
              <a
                href={twitterShareUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-900/80 px-6 py-3.5 text-sm font-semibold text-slate-100 shadow-lg transition hover:border-slate-500 hover:bg-slate-800"
              >
                <svg
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
                Share on X
              </a>
              <a
                href={facebookShareUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-600 bg-[#1877f2]/15 px-6 py-3.5 text-sm font-semibold text-[#8ab4ff] shadow-lg transition hover:border-[#1877f2]/50 hover:bg-[#1877f2]/25"
              >
                <svg
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                Share on Facebook
              </a>
              <button
                type="button"
                onClick={handleCopyLink}
                className="inline-flex items-center justify-center rounded-xl border border-slate-700 bg-transparent px-6 py-3.5 text-sm font-semibold text-slate-300 transition hover:border-amber-500/40 hover:text-amber-200"
              >
                {copied ? "Copied!" : "Copy link"}
              </button>
            </div>
          </>
        ) : null}
      </div>
    </main>
  );
}
