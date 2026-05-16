import Link from 'next/link';
import FaqAccordion from '@/components/home/FaqAccordion';

const SIX_VIRTUES = [
  {
    emoji: '⚔️',
    name: 'Valor',
    tagline: 'Courage & Protection',
    description:
      'Drawing a sword is not for slaughter, but to stand up against injustice when others choose to play it safe.',
  },
  {
    emoji: '📜',
    name: 'Oath',
    tagline: 'Discipline & Duty',
    description:
      'A vow is heavier than mountains. You fulfill your responsibilities like bedrock, resisting massive temptations.',
  },
  {
    emoji: '🤝',
    name: 'Loyalty',
    tagline: 'Bonds & Trust',
    description:
      'True bonds are forged in the dark. You stand by your allies even when they hit rock bottom and face abandonment.',
  },
  {
    emoji: '🕊️',
    name: 'Mercy',
    tagline: 'Compassion & Forgiveness',
    description:
      'The greatest power of the strong lies in knowing when to sheathe their blades and offer understanding.',
  },
  {
    emoji: '⚖️',
    name: 'Justice',
    tagline: 'Equality & Candor',
    description:
      'Stripping away hypocritical privilege, you hold the scales of absolute fairness in complex interpersonal conflicts.',
  },
  {
    emoji: '🛡️',
    name: 'Honor',
    tagline: 'Faith & Reputation',
    description:
      'Valuing reputation above life, you refuse to tarnish your beliefs with despicable acts or shortcuts.',
  },
];

const HOME_FAQS = [
  {
    question: 'What is the Chivalry Test and how does it work?',
    answer:
      'The Chivalry Test is a deep psychological character assessment wrapped in an epic historical experience. Instead of asking ordinary personality questions, the test places you in immersive medieval scenarios—such as brutal siege defenses, harsh winters, and battlefield dilemmas. By analyzing the difficult choices you make in these extreme situations, it reveals your underlying ethical framework and true character.',
  },
  {
    question: 'Is the Chivalry Test really free to take?',
    answer:
      'Yes, the test is 100% completely free. There are no hidden paywalls, and you do not need to pay or subscribe to unlock your final results or your comprehensive character report. Our goal is to make this deep self-exploration accessible to everyone.',
  },
  {
    question: 'How long does it take to complete the Chivalry Test?',
    answer:
      'The assessment consists of 48 in-depth scenario questions (8 questions for each of the 6 core virtues). Because the moral dilemmas require deep thought and reflection, it typically takes users about 15 minutes to complete the entire journey.',
  },
  {
    question: 'How is the test scored? Are there "right" or "wrong" answers?',
    answer:
      'There are no right or wrong answers, and you cannot "fail" this test. Our scoring logic is inspired by the established Big Five Personality (OCEAN) model. Instead of judging your morality as black or white, the algorithm calculates the weight of your choices to measure your tendencies on a spectrum, evaluating how you balance different ethical priorities.',
  },
  {
    question: 'What are the core virtues measured in the test?',
    answer:
      'The assessment specifically evaluates your alignment with six classical virtues: Honor (Integrity & Transparency), Valor (Courage & Protection), Oath (Duty & Reliability), Loyalty (Camaraderie & Devotion), Mercy (Empathy & Forgiveness), and Justice (Equity & Fairness).',
  },
  {
    question: 'How can medieval chivalry apply to modern life?',
    answer:
      'While the era of knights and feudalism is over, the ethical core of chivalry is more relevant than ever. The test translates your medieval choices to reflect your modern problem-solving style—such as showing integrity in the workplace, standing up against bullying, maintaining loyalty in relationships, and choosing fairness over personal gain.',
  },
  {
    question: 'What do I receive after completing the Chivalry Test?',
    answer:
      'Upon completion, you will instantly receive a detailed character dashboard. This includes a precise percentage breakdown of your alignment with the six classical virtues and your ultimate [ Soul Archetype Result ] (e.g., "Shield of Mercy"). This personalized report highlights your inner strengths and explains your unique moral compass.',
  },
  {
    question: 'Is my Chivalry Test data kept private and secure?',
    answer:
      'Absolutely. We prioritize your privacy. Your answers are processed anonymously to generate your results. We do not sell your personal assessment data to third parties, ensuring your psychological profile remains completely confidential.',
  },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: HOME_FAQS.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
};

const MODERN_CHIVALRY_POINTS = [
  'Maintain integrity and bottom lines.',
  'Confront unfairness with courage.',
  'Reshape the spirit of the contract.',
  'Practice empathy and tolerance.',
];

const HOW_IT_WORKS_STEPS = [
  {
    step: 1,
    title: 'Understand the Six Virtues',
    time: '2 minutes',
    description:
      'Learn how Honor, Valor, Oath, Loyalty, Mercy, and Justice shape the medieval code—and how each virtue maps to choices in the modern world.',
  },
  {
    step: 2,
    title: 'Navigate 48 Moral Scenarios',
    time: '12 minutes',
    description:
      'Immerse yourself in vivid dilemmas drawn from chivalric tradition. Each answer reveals which classical principle guides your instincts.',
  },
  {
    step: 3,
    title: 'Reveal Your Knight Archetype',
    time: '1 minute',
    description:
      'Our soul-stripping algorithm calculates your virtue composition and crowns your dominant knight kernel—the force that defines your noble soul.',
  },
];

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="min-h-screen bg-white">
        <header className="hero-section relative overflow-hidden bg-slate-950 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] px-6 pt-32 pb-40">
          <div
            className="absolute left-1/2 top-0 h-[500px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-500/30 blur-[120px] -z-10"
            aria-hidden
          />
          <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center text-center">
            <span className="mb-8 inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-medium text-slate-300">
              ✦ Free Online Archetype Assessment
            </span>

            <h1 className="text-5xl font-extrabold tracking-tight text-white md:text-6xl md:leading-[1.1]">
              Take the{' '}
              <span className="bg-gradient-to-r from-amber-500 to-yellow-600 bg-clip-text text-transparent">
                Chivalry Test
              </span>
              : Which Classical Virtue Do You Embody?
            </h1>

            <p className="mt-8 max-w-3xl text-lg leading-relaxed text-slate-300 md:text-xl">
              A set of untouchable principles slumbers within us all. Are you an
              unwavering guardian of the Oath, or the embodiment of Valor
              fighting against injustice? Take our comprehensive Chivalry Test
              to pierce through the fog of the modern world, reveal your true
              character archetype, and discover the hidden forces that define
              your noble soul.
            </p>

            <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/test"
                className="inline-flex items-center justify-center rounded-full border-0 bg-amber-600 px-8 py-4 text-base font-semibold text-white transition-all hover:bg-amber-500"
              >
                Reveal My Knight Archetype ➔
              </Link>
              <a
                href="#what-is-chivalry"
                className="inline-flex items-center justify-center rounded-full border border-slate-700 bg-transparent px-8 py-4 text-base font-semibold text-slate-300 transition-colors hover:bg-white/5 hover:text-white"
              >
                What is Chivalry?
              </a>
            </div>
          </div>
          <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-0 h-48 bg-gradient-to-b from-transparent to-white" />
        </header>

        <section
          className="-mt-16 relative z-10 px-6"
          aria-label="Trust statistics"
        >
          <div className="mx-auto max-w-5xl rounded-2xl border border-slate-100 bg-white p-8 shadow-xl">
            <div className="grid grid-cols-2 gap-8 text-center md:grid-cols-4">
              <div>
                <svg
                  className="mx-auto mb-4 h-8 w-8 text-amber-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden
                >
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
                <p className="text-3xl font-extrabold text-slate-900">
                  30,000+
                </p>
                <p className="mt-2 text-sm font-medium text-slate-500">
                  Assessments
                </p>
              </div>
              <div>
                <svg
                  className="mx-auto mb-4 h-8 w-8 text-amber-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
                <p className="text-3xl font-extrabold text-slate-900">
                  4.9/5
                </p>
                <p className="mt-2 text-sm font-medium text-slate-500">
                  User Rating
                </p>
              </div>
              <div>
                <svg
                  className="mx-auto mb-4 h-8 w-8 text-amber-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 6v6l4 2" />
                </svg>
                <p className="text-3xl font-extrabold text-slate-900">
                  10-15 mins
                </p>
                <p className="mt-2 text-sm font-medium text-slate-500">
                  Completion Time
                </p>
              </div>
              <div>
                <svg
                  className="mx-auto mb-4 h-8 w-8 text-amber-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
                <p className="text-3xl font-extrabold text-slate-900">6</p>
                <p className="mt-2 text-sm font-medium text-slate-500">
                  Core Virtues
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          aria-label="How the test works"
          className="bg-slate-50/50 px-6 py-20 md:py-28"
        >
          <div className="mx-auto max-w-6xl">
            <div className="mb-14 text-center">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
                Your Journey to Understanding Chivalry
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-slate-600">
                Our free online chivalry test takes you through a systematic
                evaluation of the virtues that defined knights for centuries—and
                still echo in how we lead, love, and stand for what is right
                today.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {HOW_IT_WORKS_STEPS.map((item) => (
                <article
                  key={item.step}
                  className="flex flex-col rounded-2xl border-t-4 border-amber-500 bg-white p-8 shadow-md transition-shadow hover:shadow-xl"
                >
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-amber-100 text-lg font-bold text-amber-700">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="mt-2 flex items-center gap-1.5 text-sm font-medium text-amber-700/90">
                    <span aria-hidden="true">🕐</span>
                    {item.time}
                  </p>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-slate-600">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>

            <p className="mt-12 text-center text-sm leading-relaxed text-slate-500">
              Total Time: Approximately 15 minutes for a comprehensive
              chivalry character assessment that maps your moral choices
              against six timeless virtues—and reveals the knight kernel at the
              heart of your soul.
            </p>
          </div>
        </section>

        <article
          id="what-is-chivalry"
          className="virtues-grid px-6 py-20 md:py-28"
        >
          <div className="mx-auto max-w-6xl">
            <div className="mb-14 text-center">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
                The Six Pillars of Chivalry
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-slate-600">
                These timeless principles offer clear signals for modern moral
                dilemmas.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {SIX_VIRTUES.map((virtue) => (
                <div
                  key={virtue.name}
                  className="rounded-xl border border-slate-200 bg-white p-8 transition-shadow hover:shadow-md"
                >
                  <span className="text-3xl" aria-hidden="true">
                    {virtue.emoji}
                  </span>
                  <h3 className="mt-4 text-xl font-bold text-slate-900">
                    {virtue.name}
                  </h3>
                  <p className="mt-1 text-sm font-semibold text-amber-700/90">
                    {virtue.tagline}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-slate-600">
                    {virtue.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </article>

        <section
          aria-label="Classical vs Modern Values"
          className="bg-slate-50 px-6 py-20 md:py-28"
        >
          <div className="mx-auto flex max-w-6xl flex-col items-center gap-12 lg:flex-row">
            <div className="flex-1">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
                Understanding Chivalry: Medieval Values in Modern Life
              </h2>
              <div className="mt-8 space-y-6 text-lg leading-relaxed text-slate-600">
                <p>
                  Chivalry originated in the 11th century to restrain armed
                  cavalry—turning raw martial power into a code of conduct. What
                  began on the battlefield has since become a language for
                  navigating the moral compasses of everyday life.
                </p>
                <p>
                  Today, it translates into standing against bullying,
                  maintaining integrity in the workplace, and upholding
                  contracts when convenience tempts you to bend the rules. It is
                  not nostalgia for a vanished age—it is an advanced life
                  attitude against worldly cynicism.
                </p>
              </div>
            </div>

            <aside className="w-full flex-shrink-0 lg:w-[22rem] xl:w-[26rem]">
              <div className="rounded-2xl bg-slate-900 p-8 text-white">
                <h3 className="text-lg font-semibold text-amber-400">
                  Chivalry in Practice
                </h3>
                <ul className="mt-6 space-y-4">
                  {MODERN_CHIVALRY_POINTS.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-3 text-sm leading-relaxed text-slate-300"
                    >
                      <span
                        className="mt-0.5 shrink-0 font-bold text-amber-400"
                        aria-hidden="true"
                      >
                        ✓
                      </span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </section>

        <section
          id="faq"
          aria-label="Frequently Asked Questions"
          className="bg-slate-50/50 px-6 py-20 md:py-28"
        >
          <div className="mx-auto max-w-3xl">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
                Chivalry Test FAQ
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-slate-600">
                Find detailed answers about our comprehensive character assessment
              </p>
            </div>

            <FaqAccordion faqs={HOME_FAQS} />
          </div>
        </section>
      </main>
    </>
  );
}
