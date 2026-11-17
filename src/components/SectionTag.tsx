export function SectionTag({ children }: { children: React.ReactNode }) {
  return (
    <span className="label inline-flex items-center gap-2.5 rounded-full border border-ink/12 bg-paper-card/60 py-1.5 pr-3.5 pl-2.5 text-ink-2 backdrop-blur-[2px]">
      <span className="relative flex h-1.5 w-1.5" aria-hidden>
        <span className="absolute inline-flex h-full w-full rounded-full bg-accent/60 [animation:ping-soft_2.6s_cubic-bezier(0,0,0.2,1)_infinite]" />
        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
      </span>
      {children}
    </span>
  )
}
