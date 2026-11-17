import { ArrowUp, ArrowUpRight } from 'lucide-react'

import { Wordmark } from './Wordmark'
import { Button } from './ui/button'
import { SITE, NAV_LINKS, JOURNAL } from '../content/site'

const COLUMNS = [
  {
    title: 'Explore',
    links: NAV_LINKS.map((link) => ({ label: link.label, href: `#${link.id}` })),
  },
  {
    title: 'Practice',
    links: [
      { label: 'Private acquisition', href: '#services' },
      { label: 'Representation', href: '#services' },
      { label: 'Building advisory', href: '#services' },
      { label: 'Estate stewardship', href: '#services' },
    ],
  },
  {
    title: 'Reading',
    links: JOURNAL.map((entry) => ({ label: entry.title, href: '#journal' })),
  },
] as const

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-forest text-bone">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brass-2/40 to-transparent"
      />

      <div className="mx-auto w-full max-w-[86rem] px-[var(--spacing-gutter)]">
        {/* ---- Top: invite + columns ---- */}
        <div className="grid gap-12 py-16 lg:grid-cols-12 lg:gap-10 lg:py-20">
          <div className="lg:col-span-4">
            <Wordmark tone="bone" />
            <p className="mt-5 max-w-[19rem] text-[12.5px] leading-[1.75] text-bone/50">
              A private brokerage for architecturally significant houses, from the Pacific coast
              to the high desert.
            </p>
            <Button asChild variant="outline-light" size="sm" uppercaseTracking className="mt-7">
              <a href="#contact">
                Book a consultation
                <ArrowUpRight />
              </a>
            </Button>
          </div>

          <nav aria-label="Footer" className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-8 lg:gap-6">
            {COLUMNS.map((column) => (
              <div key={column.title}>
                <h2 className="label text-bone/35">{column.title}</h2>
                <ul className="mt-4 space-y-2.5">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="link-underline text-[12.5px] text-bone/75 transition-colors hover:text-bone"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        {/* ---- Oversized wordmark: the sign-off ---- */}
        <div aria-hidden className="relative select-none overflow-hidden pb-4">
          <p className="font-display text-[clamp(4.5rem,17.5vw,15rem)] leading-[0.78] tracking-[-0.045em] text-bone/[0.07]">
            Leverius
          </p>
        </div>

        {/* ---- Base rule ---- */}
        <div className="flex flex-col gap-4 border-t border-line-ink py-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[11px] text-bone/40">
            © {SITE.founded}–2026 {SITE.name}. Licensed real estate brokerage, Oregon.
          </p>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <a href="#contact" className="text-[11px] text-bone/40 transition-colors hover:text-bone">
              Privacy
            </a>
            <a href="#contact" className="text-[11px] text-bone/40 transition-colors hover:text-bone">
              Terms
            </a>
            <a href="#top" className="group inline-flex items-center gap-1.5 text-[11px] text-bone/40 transition-colors hover:text-bone">
              Back to top
              <ArrowUp className="size-3 transition-transform duration-300 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
