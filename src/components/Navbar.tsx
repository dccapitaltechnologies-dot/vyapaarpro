import { useEffect, useState } from 'react'
import { Logo, LogoMark } from './Logo'
import { useScrollSpy } from '../hooks/useScrollSpy'

const LINKS = [
  { label: 'Listings', href: '#listings' },
  { label: 'About', href: '#about' },
  { label: 'Brokers', href: '#brokers' },
  { label: 'Contact', href: '#contact' },
] as const

const SECTION_IDS = LINKS.map((l) => l.href.slice(1))

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const activeId = useScrollSpy(SECTION_IDS)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = prev
    }
  }, [open])

  return (
    <>
      <header
        className={`sticky top-0 z-40 border-b transition-[background-color,border-color,box-shadow,backdrop-filter] duration-500 ${
          scrolled
            ? 'border-line/80 bg-paper/85 shadow-[0_1px_0_rgb(23_21_18/0.04),0_12px_32px_-24px_rgb(23_21_18/0.45)] backdrop-blur-xl backdrop-saturate-150'
            : 'border-transparent bg-transparent'
        }`}
      >
        <nav
          aria-label="Primary"
          className={`mx-auto flex w-full max-w-[1320px] items-center justify-between gap-6 px-[var(--space-gutter)] transition-[height] duration-500 sm:px-8 lg:px-10 ${
            scrolled ? 'h-[62px]' : 'h-[76px]'
          }`}
        >
          <Logo />

          {/* Desktop links */}
          <div className="hidden items-center gap-8 md:flex">
            {LINKS.map((l) => {
              const isActive = activeId === l.href.slice(1)
              return (
                <a
                  key={l.href}
                  href={l.href}
                  aria-current={isActive ? 'true' : undefined}
                  data-active={isActive}
                  className={`link-underline text-[13px] font-medium transition-colors duration-300 ${
                    isActive ? 'text-ink' : 'text-ink-3 hover:text-ink'
                  }`}
                >
                  {l.label}
                </a>
              )
            })}
          </div>

          <div className="flex items-center gap-2">
            <a href="#contact" className="btn btn--solid hidden sm:inline-flex">
              Book a viewing
            </a>
            <button
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              aria-expanded={open}
              className="group flex cursor-pointer items-center gap-2 rounded-full border border-ink/15 bg-paper/40 px-4 py-2.5 text-[13px] font-medium text-ink transition-colors duration-300 hover:border-ink/35 hover:bg-paper/80 md:hidden"
            >
              <span className="flex flex-col gap-[3px]" aria-hidden>
                <span className="block h-px w-4 bg-ink transition-transform duration-300 group-hover:translate-x-0.5" />
                <span className="block h-px w-4 bg-ink transition-transform duration-300 group-hover:-translate-x-0.5" />
              </span>
              Menu
            </button>
          </div>
        </nav>
      </header>

      {open && (
        <div className="fixed inset-0 z-50 flex flex-col bg-ink text-paper">
          <div className="grain pointer-events-none absolute inset-0" aria-hidden />
          <div className="relative mx-auto flex h-[76px] w-full max-w-[1320px] items-center justify-between px-5 sm:px-8 lg:px-10">
            <div className="flex items-center gap-2">
              <LogoMark className="h-[18px] w-[18px]" />
              <span className="text-[15px] font-semibold tracking-[0.18em] uppercase">Lerex</span>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="cursor-pointer rounded-full border border-white/20 px-5 py-2 text-[13px] font-medium text-white/90 transition-colors duration-300 hover:border-white/40 hover:bg-white/10"
              aria-label="Close menu"
            >
              Close
            </button>
          </div>

          <nav
            aria-label="Mobile"
            className="relative mx-auto flex w-full max-w-[1320px] flex-1 flex-col justify-center gap-1 px-5 sm:px-8 lg:px-10"
          >
            {LINKS.map((l, i) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="group flex items-baseline gap-4 border-b border-white/10 py-5 transition-colors hover:text-white"
                style={{ animation: `rise 0.6s var(--ease-out-expo) ${i * 60}ms both` }}
              >
                <span className="tnum text-[12px] text-white/35 transition-colors group-hover:text-accent-soft">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="font-display text-[clamp(2.25rem,8vw,3.5rem)] leading-none tracking-tight">
                  {l.label}
                </span>
                <span
                  aria-hidden
                  className="ml-auto text-white/25 transition-all duration-500 group-hover:translate-x-1 group-hover:text-white/70"
                >
                  →
                </span>
              </a>
            ))}
          </nav>

          <p className="relative mx-auto w-full max-w-[1320px] px-5 pb-8 text-[12px] text-white/35 sm:px-8 lg:px-10">
            © 2026 Lerex — real estate, in real time.
          </p>
        </div>
      )}
    </>
  )
}
