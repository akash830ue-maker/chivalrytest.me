import Link from 'next/link';

const FOOTER_COLUMNS = [
  {
    title: 'About Us',
    links: [{ href: '/#what-is-chivalry', label: 'What is Chivalry' }],
  },
  {
    title: 'Services',
    links: [
      { href: '/test', label: 'Take the Test' },
      { href: '/result', label: 'View Results' },
    ],
  },
  {
    title: 'Help Center',
    links: [{ href: '/#faq', label: 'FAQ' }],
  },
] as const;

function FooterLink({ href, label }: { href: string; label: string }) {
  return (
    <Link href={href} className="text-sm transition-colors hover:text-white">
      {label}
    </Link>
  );
}

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
          {FOOTER_COLUMNS.map((column) => (
            <div key={column.title}>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-200">
                {column.title}
              </h3>
              <ul className="space-y-2">
                {column.links.map((link) => (
                  <li key={`${column.title}-${link.href}-${link.label}`}>
                    <FooterLink href={link.href} label={link.label} />
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-200">
              Contact
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="mailto:akash830ue@gmail.com"
                  className="text-sm transition-colors hover:text-white"
                >
                  akash830ue@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-800">
        <div className="mx-auto max-w-6xl px-6 py-8">
          <p className="mx-auto max-w-3xl text-center text-xs leading-relaxed text-slate-500">
            Disclaimer: The Chivalry Test is designed for entertainment and
            self-reflection purposes only. It is not a scientifically validated
            psychological instrument and should not be used for professional
            diagnosis or evaluation.
          </p>
          <div className="mx-auto mt-6 flex max-w-6xl flex-col items-center justify-between gap-3 text-center text-sm sm:flex-row sm:text-left">
            <p>© 2024 Chivalry Test. All rights reserved.</p>
            <p className="flex flex-wrap items-center justify-center gap-1">
              <Link
                href="/privacy"
                className="transition-colors hover:text-white"
              >
                Privacy Policy
              </Link>
              <span aria-hidden="true">|</span>
              <Link href="/terms" className="transition-colors hover:text-white">
                Terms of Service
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
