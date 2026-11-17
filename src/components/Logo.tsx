export function LogoMark({ className = 'h-5 w-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path
        d="M4 13.5 12 6l8 7.5"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M8 18h8" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
    </svg>
  )
}

export function Logo({ dark = false }: { dark?: boolean }) {
  return (
    <a
      href="#top"
      aria-label="Lerex — back to top"
      className={`group flex items-center gap-2.5 select-none ${
        dark ? 'text-paper' : 'text-ink'
      }`}
    >
      <span
        className={`flex h-7 w-7 items-center justify-center rounded-full border transition-colors duration-500 ${
          dark
            ? 'border-white/25 group-hover:border-accent-soft'
            : 'border-ink/15 bg-paper-card/70 group-hover:border-accent/60'
        }`}
      >
        <LogoMark className="h-[15px] w-[15px] transition-transform duration-500 group-hover:-translate-y-px" />
      </span>
      <span className="text-[14px] font-semibold tracking-[0.2em] uppercase">Lerex</span>
    </a>
  )
}
