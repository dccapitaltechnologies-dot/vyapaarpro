import { useCallback, useEffect, useRef, useState } from 'react'
import { SectionTag } from './SectionTag'
import { Reveal } from './Reveal'

const LISTINGS = [
  {
    img: '/images/listing-1.jpg',
    name: '215 Oakridge Lane',
    blurb: 'Cantilevered glass villa over a private pool terrace.',
    specs: '4 Bedrooms · 3 Baths · 3,200 sqft',
    price: '$4,850,000',
    tag: 'New',
  },
  {
    img: '/images/listing-2.jpg',
    name: '123 Maplewood Drive',
    blurb: 'Cliffside pod residence with panoramic ocean glass.',
    specs: '3 Bedrooms · 2 Baths · 2,100 sqft',
    price: '$3,275,000',
    tag: 'Live',
  },
  {
    img: '/images/listing-3.jpg',
    name: '456 Skyline Avenue',
    blurb: 'Full-floor tower residence above the city canopy.',
    specs: '3 Bedrooms · 3 Baths · 2,750 sqft',
    price: '$5,400,000',
    tag: 'Live',
  },
  {
    img: '/images/listing-4.jpg',
    name: '78 Juniper Canyon',
    blurb: 'Desert-modern retreat with dusk-lit timber lines.',
    specs: '4 Bedrooms · 4 Baths · 3,900 sqft',
    price: '$6,120,000',
    tag: 'Live',
  },
] as const

export function ListingRail() {
  const railRef = useRef<HTMLDivElement | null>(null)
  const [edges, setEdges] = useState({ start: true, end: false })

  // Track which ends of the rail are scrolled to, so the arrows can disable.
  const sync = useCallback(() => {
    const el = railRef.current
    if (!el) return
    const max = el.scrollWidth - el.clientWidth
    setEdges({ start: el.scrollLeft <= 8, end: el.scrollLeft >= max - 8 })
  }, [])

  useEffect(() => {
    const el = railRef.current
    if (!el) return
    sync()
    el.addEventListener('scroll', sync, { passive: true })
    window.addEventListener('resize', sync, { passive: true })
    return () => {
      el.removeEventListener('scroll', sync)
      window.removeEventListener('resize', sync)
    }
  }, [sync])

  const nudge = (dir: -1 | 1) => {
    const el = railRef.current
    if (!el) return
    const card = el.querySelector<HTMLElement>('article')
    const step = card ? card.offsetWidth + 20 : el.clientWidth * 0.8
    el.scrollBy({ left: dir * step, behavior: 'smooth' })
  }

  return (
    <section id="listings" className="w-full scroll-mt-24 py-[var(--section-y)]">
      {/* Section header */}
      <div className="mx-auto w-full max-w-[1320px] px-[var(--space-gutter)] sm:px-8 lg:px-10">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <SectionTag>Featured listings</SectionTag>
            <Reveal>
              <h2 className="mt-6 max-w-2xl font-display text-display-md text-ink">
                Homes on the market{' '}
                <span className="text-ink-3 italic">right now.</span>
              </h2>
            </Reveal>
          </div>

          <Reveal delay={90} className="flex items-center gap-3">
            <a
              href="#brokers"
              className="group inline-flex items-center gap-2 text-[13px] font-medium text-ink-2 transition-colors duration-300 hover:text-ink"
            >
              View all 1,284
              <span aria-hidden className="btn__arrow">
                →
              </span>
            </a>

            {/* Rail controls: pointer affordance the rail previously lacked */}
            <div className="ml-2 hidden items-center gap-2 sm:flex">
              {(
                [
                  { dir: -1, label: 'Previous listings', glyph: '←', disabled: edges.start },
                  { dir: 1, label: 'Next listings', glyph: '→', disabled: edges.end },
                ] as const
              ).map((c) => (
                <button
                  key={c.label}
                  type="button"
                  onClick={() => nudge(c.dir as -1 | 1)}
                  disabled={c.disabled}
                  aria-label={c.label}
                  className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-ink/15 text-[13px] text-ink transition-all duration-300 hover:border-ink/40 hover:bg-ink hover:text-paper disabled:cursor-default disabled:opacity-30 disabled:hover:border-ink/15 disabled:hover:bg-transparent disabled:hover:text-ink"
                >
                  <span aria-hidden>{c.glyph}</span>
                </button>
              ))}
            </div>
          </Reveal>
        </div>
      </div>

      <div
        ref={railRef}
        className="rail-scroll mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto px-[var(--space-gutter)] pb-2 sm:gap-5 sm:px-8 lg:pl-[max(2.5rem,calc((100vw-1320px)/2+2.5rem))] lg:pr-0"
      >
        {LISTINGS.map((l, i) => (
          <Reveal
            key={l.name}
            delay={i * 90}
            as="article"
            className="group relative aspect-4/5 w-[80%] flex-none snap-start overflow-hidden rounded-4xl bg-ink shadow-float sm:aspect-3/4 sm:w-[54%] lg:w-[42%] xl:w-[36%]"
          >
            <img
              src={l.img}
              alt={l.name}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] ease-[var(--ease-out-expo)] group-hover:scale-[1.05]"
              loading="lazy"
            />
            <div className="scrim" />

            <div className="absolute inset-x-6 top-6 flex items-start justify-between gap-3">
              <p className="label text-white/80">Featured Listing</p>
              <span
                className={`label rounded-full px-2.5 py-1.5 backdrop-blur-md ${
                  l.tag === 'New'
                    ? 'bg-accent/90 text-white'
                    : 'bg-white/12 text-white/90 ring-1 ring-white/25 ring-inset'
                }`}
              >
                {l.tag}
              </span>
            </div>

            <div className="absolute bottom-0 left-0 w-full p-6 sm:p-7">
              <div className="flex items-end justify-between gap-4">
                <h3 className="font-display text-[1.55rem] leading-[1.1] tracking-tight text-white sm:text-[1.85rem]">
                  {l.name}
                </h3>
                <span className="tnum shrink-0 font-display text-[1.3rem] text-white sm:text-[1.5rem]">
                  {l.price}
                </span>
              </div>
              <p className="mt-2 max-w-xs text-[13px] leading-snug text-white/70">{l.blurb}</p>
              <div className="mt-5 flex items-center justify-between border-t border-white/20 pt-3.5">
                <p className="label text-white/60">{l.specs}</p>
                <span
                  aria-hidden
                  className="flex h-8 w-8 translate-y-1 items-center justify-center rounded-full bg-white/12 text-[12px] text-white opacity-0 transition-all duration-500 ring-1 ring-white/25 ring-inset group-hover:translate-y-0 group-hover:opacity-100"
                >
                  →
                </span>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
