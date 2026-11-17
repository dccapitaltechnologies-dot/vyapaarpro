import { useEffect, useRef, useState } from 'react'

const STATS = [
  { value: '10M+', label: 'Verified Property Listings' },
  { value: '250K+', label: 'Successful Client Matches' },
  { value: '150+', label: 'Strategic Markets Covered' },
  { value: '98.7%', label: 'Client Satisfaction Rate' },
] as const

/** Splits "10M+" into a numeric target plus its prefix/suffix so it can animate. */
function parseValue(raw: string) {
  const match = raw.match(/^([\d.]+)(.*)$/)
  if (!match) return { target: 0, decimals: 0, suffix: raw }
  const [, num, suffix] = match
  const decimals = num.includes('.') ? num.split('.')[1].length : 0
  return { target: Number(num), decimals, suffix }
}

function Counter({ value, active }: { value: string; active: boolean }) {
  const { target, decimals, suffix } = parseValue(value)
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!active) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      // Snap to the final number without animating.
      const id = requestAnimationFrame(() => setDisplay(target))
      return () => cancelAnimationFrame(id)
    }

    let frame = 0
    const duration = 1400
    const start = performance.now()

    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1)
      // easeOutExpo
      const eased = p === 1 ? 1 : 1 - Math.pow(2, -10 * p)
      setDisplay(target * eased)
      if (p < 1) frame = requestAnimationFrame(tick)
    }

    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [active, target])

  return (
    <>
      {display.toFixed(decimals)}
      {suffix}
    </>
  )
}

export function Stats() {
  const ref = useRef<HTMLDivElement | null>(null)
  const [active, setActive] = useState(() => typeof IntersectionObserver === 'undefined')

  useEffect(() => {
    const el = ref.current
    if (!el || typeof IntersectionObserver === 'undefined') return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true)
          io.disconnect()
        }
      },
      { threshold: 0.3 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <section className="relative overflow-hidden bg-ink text-paper">
      <div className="grain absolute inset-0" aria-hidden />
      {/* Warm bloom so the dark band is not a flat rectangle */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-[28rem] w-[52rem] -translate-x-1/2 rounded-full bg-accent/12 blur-[120px]"
      />
      <div
        ref={ref}
        className="relative mx-auto w-full max-w-[1320px] px-[var(--space-gutter)] py-[clamp(3.5rem,7vw,5.5rem)] sm:px-8 lg:px-10"
      >
        <dl className="grid grid-cols-2 gap-y-11 lg:grid-cols-4">
          {STATS.map((s, i) => (
            <div
              key={s.label}
              className={[
                'flex flex-col',
                // Mobile: 2 columns, so only the right-hand cell of each row gets a divider.
                i % 2 === 1 ? 'border-l border-white/12 pl-6' : '',
                // Desktop: 4 across, dividers on every cell but the first.
                i > 0 ? 'lg:border-l lg:border-white/12 lg:pl-10' : 'lg:border-l-0 lg:pl-0',
              ]
                .filter(Boolean)
                .join(' ')}
            >
              <dt className="label order-2 mt-3.5 block max-w-[10rem] leading-[1.7] text-paper/55">
                {s.label}
              </dt>
              <dd className="tnum order-1 font-display text-[clamp(2.4rem,4.4vw,3.5rem)] leading-none tracking-[-0.02em] text-paper">
                <Counter value={s.value} active={active} />
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
