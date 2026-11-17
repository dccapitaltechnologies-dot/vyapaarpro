import { SectionTag } from './SectionTag'
import { Reveal } from './Reveal'

const PILLARS = [
  {
    t: 'Verified inventory',
    d: 'Every listing is re-checked against a live feed before it reaches your shortlist.',
  },
  {
    t: 'Regional specialists',
    d: 'Local brokers who know the street, the school district and the seller’s motivation.',
  },
] as const

export function About() {
  return (
    <section
      id="about"
      className="relative mx-auto w-full max-w-[1320px] scroll-mt-24 px-[var(--space-gutter)] py-[var(--section-y)] sm:px-8 lg:px-10"
    >
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-4">
          <SectionTag>About</SectionTag>
          <div className="mt-9 hidden lg:block">
            <div className="rule-fade mb-6" />
            <p className="label leading-[2] text-ink-3">
              Est. 2019
              <br /> Licensed brokerage
              <br /> Pacific Northwest
            </p>
          </div>
        </div>

        <div className="lg:col-span-7 lg:col-start-6">
          <Reveal>
            <h2 className="font-display text-display-sm text-ink">
              Guiding every property decision with precision, insight, and{' '}
              <span className="text-ink-3 italic">market expertise.</span>
            </h2>
          </Reveal>

          <Reveal delay={100}>
            <p className="mt-7 max-w-xl text-[15px] leading-[1.7] text-ink-2">
              Lerex is a brokerage built on live inventory. Our analysts verify every listing against
              real-time market data, so the price, the photos, and the availability you see are the
              truth on the ground, for first homes and forever homes alike.
            </p>
          </Reveal>

          {/* Two-up credibility block */}
          <div className="mt-11 grid gap-8 border-t border-line pt-9 sm:grid-cols-2 sm:gap-10">
            {PILLARS.map((b, i) => (
              <Reveal key={b.t} delay={140 + i * 80}>
                <div className="flex items-baseline gap-3">
                  <span className="tnum label text-accent">{String(i + 1).padStart(2, '0')}</span>
                  <h3 className="text-[15px] font-semibold tracking-[-0.01em] text-ink">{b.t}</h3>
                </div>
                <p className="mt-2.5 text-[13px] leading-[1.65] text-ink-3">{b.d}</p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={280}>
            <a href="#contact" className="btn btn--ghost mt-11">
              Learn more about us
              <span aria-hidden className="btn__arrow">
                →
              </span>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
