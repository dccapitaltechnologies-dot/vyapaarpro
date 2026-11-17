import { SectionTag } from './SectionTag'
import { Reveal } from './Reveal'

const OFFICES = [
  { img: '/images/partner-1.jpg', name: 'North Cascade Homes', region: 'Pacific Northwest' },
  { img: '/images/partner-2.jpg', name: 'Summit Ridge Realty', region: 'Rocky Mountains' },
  { img: '/images/partner-3.jpg', name: 'Alpen & Vale Estates', region: 'Alpine Region' },
] as const

export function Partners() {
  return (
    <section
      id="brokers"
      className="mx-auto w-full max-w-[1320px] scroll-mt-24 px-[var(--space-gutter)] py-[var(--section-y)] sm:px-8 lg:px-10"
    >
      <div className="grid items-end gap-10 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <SectionTag>Broker</SectionTag>
          <Reveal>
            <h2 className="mt-6 font-display text-display-md text-ink">
              Partner with elite{' '}
              <span className="text-ink-3 italic">regional offices.</span>
            </h2>
          </Reveal>
          <Reveal delay={90}>
            <p className="mt-6 max-w-lg text-[15px] leading-[1.7] text-ink-2">
              Our agency network covers the coast, the mountains and the valleys in between. Each
              office carries the same verified-data standard.
            </p>
          </Reveal>
        </div>

        <div className="lg:col-span-4 lg:flex lg:justify-end">
          <Reveal delay={140}>
            <a href="#contact" className="btn btn--solid">
              Explore agency broker
              <span aria-hidden className="btn__arrow">
                →
              </span>
            </a>
          </Reveal>
        </div>
      </div>

      <div className="mt-12 grid gap-4 sm:grid-cols-3 sm:gap-5">
        {OFFICES.map((o, i) => (
          <Reveal
            key={o.name}
            delay={i * 100}
            as="figure"
            className="group relative aspect-4/3 overflow-hidden rounded-[1.75rem] bg-ink shadow-lift sm:aspect-[4/3.4]"
          >
            <img
              src={o.img}
              alt={o.name}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] ease-[var(--ease-out-expo)] group-hover:scale-[1.06]"
              loading="lazy"
            />
            <div className="scrim" />
            <figcaption className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
              <p className="font-display text-[1.2rem] leading-tight text-white sm:text-[1.35rem]">
                {o.name}
              </p>
              <div className="mt-3.5 flex items-center justify-between gap-3 border-t border-white/20 pt-3">
                <p className="label text-white/60">{o.region}</p>
                <span
                  aria-hidden
                  className="flex h-6 w-6 items-center justify-center rounded-full bg-white/12 text-[11px] text-white opacity-0 transition-all duration-500 group-hover:translate-x-0.5 group-hover:opacity-100"
                >
                  →
                </span>
              </div>
            </figcaption>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
