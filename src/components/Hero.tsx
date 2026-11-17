import { Reveal } from './Reveal'

const HERO_IMG = '/images/listing-2.jpg'

const HERO_STATS = [
  { k: 'Verified today', v: '1,284' },
  { k: 'Markets live', v: '150+' },
  { k: 'Median time to match', v: '11 days' },
] as const

export function Hero() {
  return (
    <section id="top" className="relative">
      <div className="mx-auto w-full max-w-[1320px] px-[var(--space-gutter)] sm:px-8 lg:px-10">
        {/* Masthead strap — rule + two-line positioning statement, live indicator opposite */}
        <div className="flex items-start justify-between gap-6 pt-8 sm:pt-12">
          <div className="flex items-start gap-3.5">
            <span className="mt-[3px] block h-10 w-px bg-linear-to-b from-ink/45 to-transparent" aria-hidden />
            <div className="text-[13px] leading-snug">
              <p className="font-medium text-ink">Find Exceptional Homes</p>
              <p className="text-ink-3">Backed by Real-Time Data</p>
            </div>
          </div>
          <div className="hidden items-center gap-2.5 text-ink-3 sm:flex">
            <span className="label">Live inventory</span>
            <span className="relative flex h-1.5 w-1.5" aria-hidden>
              <span className="absolute inline-flex h-full w-full rounded-full bg-accent/60 [animation:ping-soft_2.6s_cubic-bezier(0,0,0.2,1)_infinite]" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
            </span>
          </div>
        </div>

        {/* Headline row — display serif left, supporting copy right */}
        <div className="mt-10 grid items-end gap-x-8 gap-y-10 pt-2 pb-12 sm:mt-14 sm:pb-16 lg:grid-cols-12">
          <Reveal className="lg:col-span-8">
            <h1 className="font-display text-display-xl text-ink">
              Map your
              <br className="hidden sm:block" /> next move.
              <span className="mt-2 block text-display-sm leading-[1.02] text-ink-3 italic">
                Explore real-time inventory.
              </span>
            </h1>
          </Reveal>

          <Reveal delay={120} className="lg:col-span-4 lg:col-start-9 lg:pb-1">
            <p className="max-w-sm text-[15px] leading-[1.65] text-ink-2">
              Lerex pairs live market signals with verified listings, so every shortlist you see is
              priced, photographed, and available right now, not last quarter.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <a href="#listings" className="btn btn--solid">
                Browse listings
                <span aria-hidden className="btn__arrow">
                  →
                </span>
              </a>
              <a href="#about" className="btn btn--ghost">
                How it works
              </a>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Full-bleed image band with a floating live-data chip */}
      <Reveal delay={80}>
        <div className="mx-auto w-full max-w-[1320px] px-[var(--space-gutter)] sm:px-8 lg:px-10">
          <figure className="frame group relative">
            <img
              src={HERO_IMG}
              alt="Cliffside glass residence at dusk with panoramic ocean views"
              className="aspect-[4/3] w-full object-cover sm:aspect-[16/9] lg:aspect-[21/9]"
              fetchPriority="high"
            />
            <div className="scrim" />

            {/* Bottom-left: location + price */}
            <figcaption className="absolute bottom-0 left-0 w-full p-6 sm:p-8 lg:p-11">
              <p className="label text-white/70">Featured · Pacific Northwest</p>
              <h2 className="mt-3 font-display text-[clamp(1.6rem,3.2vw,2.6rem)] leading-[1.05] text-white">
                123 Maplewood Drive
              </h2>
              <p className="tnum mt-2.5 text-[13px] tracking-[0.01em] text-white/70">
                3 Bedrooms · 2 Baths · 2,100 sqft
              </p>
            </figcaption>

            {/* Top-right: price tag */}
            <div className="tnum absolute top-5 right-5 rounded-full bg-paper/95 px-4 py-2 text-[13px] font-medium text-ink shadow-lift backdrop-blur-sm transition-transform duration-500 group-hover:-translate-y-0.5 sm:top-7 sm:right-7">
              $4,850,000
            </div>

            {/* Top-left: quiet status chip so the band has balance */}
            <div className="absolute top-5 left-5 hidden items-center gap-2 rounded-full border border-white/25 bg-black/25 px-3.5 py-2 backdrop-blur-md sm:top-7 sm:left-7 sm:flex">
              <span className="h-1.5 w-1.5 rounded-full bg-accent-soft" aria-hidden />
              <span className="label text-white/85">Available now</span>
            </div>
          </figure>
        </div>
      </Reveal>

      {/* Stat strip tucked under the band */}
      <div className="mx-auto w-full max-w-[1320px] px-[var(--space-gutter)] sm:px-8 lg:px-10">
        <dl className="grid grid-cols-1 divide-y divide-line border-b border-line sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {HERO_STATS.map((s) => (
            <div
              key={s.k}
              className="flex items-baseline justify-between gap-4 px-0 py-5 sm:flex-col sm:items-start sm:gap-0 sm:px-6 sm:py-7 sm:first:pl-0"
            >
              <dd className="tnum order-2 font-display text-[1.6rem] leading-none text-ink sm:order-1 sm:text-[2rem]">
                {s.v}
              </dd>
              <dt className="label order-1 text-ink-3 sm:order-2 sm:mt-2.5">{s.k}</dt>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
