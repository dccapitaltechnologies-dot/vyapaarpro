import { useEffect, useState } from 'react'
import { Logo } from './Logo'
import { Reveal } from './Reveal'

const LINKS = [
  { label: 'Listings', href: '#listings' },
  { label: 'About', href: '#about' },
  { label: 'Brokers', href: '#brokers' },
  { label: 'Contact', href: '#contact' },
] as const

/** Quiet back-to-top control that appears once the reader is deep in the page. */
function BackToTop() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > window.innerHeight * 1.2)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <a
      href="#top"
      aria-label="Back to top"
      className={`flex h-9 w-9 items-center justify-center rounded-full border border-ink/15 text-[12px] text-ink-2 transition-all duration-500 hover:border-ink/40 hover:bg-ink hover:text-paper ${
        show ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-1 opacity-0'
      }`}
    >
      <span aria-hidden>↑</span>
    </a>
  )
}

export function Footer() {
  return (
    <footer id="contact" className="relative scroll-mt-24 overflow-hidden border-t border-line bg-paper-2">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 right-0 h-[24rem] w-[36rem] rounded-full bg-accent/[0.07] blur-[100px]"
      />
      <div className="relative mx-auto w-full max-w-[1320px] px-[var(--space-gutter)] pt-[clamp(3.5rem,7vw,5.5rem)] pb-8 sm:px-8 lg:px-10">
        {/* Big closing line */}
        <div className="grid gap-9 border-b border-line pb-12 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <Reveal>
              <h2 className="font-display text-display-md text-ink">
                Ready to see what's{' '}
                <span className="text-ink-3 italic">actually available?</span>
              </h2>
            </Reveal>
          </div>
          <div className="lg:col-span-4 lg:col-start-9 lg:flex lg:justify-end">
            <Reveal delay={90}>
              <a
                href="mailto:hello@lerex.com"
                className="btn btn--solid gap-3 px-7 py-3.5 text-[14px]"
              >
                hello@lerex.com
                <span aria-hidden className="btn__arrow">
                  →
                </span>
              </a>
            </Reveal>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-x-8 gap-y-5 py-8">
          <Logo />
          <nav aria-label="Footer" className="ml-auto flex flex-wrap items-center gap-x-7 gap-y-2 text-[13px]">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="link-underline text-ink-2 transition-colors duration-300 hover:text-ink"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <BackToTop />
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-line pt-6 text-[12px] text-ink-3">
          <span>© 2026 Lerex. All rights reserved.</span>
          <span className="tracking-[0.02em]">Real estate, in real time.</span>
        </div>
      </div>
    </footer>
  )
}
