import { ArrowDownRight, ArrowUpRight } from 'lucide-react'

import { Badge } from './ui/badge'
import { Button } from './ui/button'
import { Reveal } from './Reveal'
import { SectionTag } from './SectionTag'
import { SITE, STATS } from '../content/site'

/**
 * Hero: type-led, image as a plate rather than a background.
 * The oversized serif and the hanging numeral carry the page; the photo
 * sits beneath and slightly offset so the composition reads as print.
 */
export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-[4.5rem] lg:pt-20">
      {/* A single warm wash behind the type, no gradient soup. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[42rem] bg-[radial-gradient(120%_78%_at_72%_-8%,var(--color-brass-wash)_0%,transparent_62%)]"
      />

      <div className="mx-auto w-full max-w-[86rem] px-[var(--spacing-gutter)]">
        <div className="grid grid-cols-1 items-end gap-y-12 pt-12 pb-0 lg:grid-cols-12 lg:gap-x-10 lg:pt-20">
          {/* ---- Type column ---- */}
          <div className="lg:col-span-7 xl:col-span-7">
            <Reveal eager>
              <SectionTag index="Est. 2014">Private brokerage · Pacific Northwest</SectionTag>
            </Reveal>

            <Reveal eager delay={90}>
              <h1 className="mt-8 text-d1 font-display text-forest">
                Property,
                <br />
                <span className="italic text-brass">considered.</span>
              </h1>
            </Reveal>

            <Reveal eager delay={170}>
              <div className="mt-9 flex max-w-[34rem] items-start gap-6">
                <span aria-hidden className="mt-3 h-px w-10 shrink-0 bg-line-2 sm:w-14" />
                <p className="text-lead text-ink-2">
                  A small brokerage for architecturally significant houses. We represent a
                  handful of residences at a time, and we know every one of them street by
                  street.
                </p>
              </div>
            </Reveal>

            <Reveal eager delay={240}>
              <div className="mt-10 flex flex-wrap items-center gap-3">
                <Button asChild size="lg" uppercaseTracking>
                  <a href="#residences">
                    View the collection
                    <ArrowDownRight />
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" uppercaseTracking>
                  <a href="#contact">
                    Speak to an advisor
                    <ArrowUpRight />
                  </a>
                </Button>
              </div>
            </Reveal>

            {/* Trust line sits under the CTAs, not above them. */}
            <Reveal eager delay={310}>
              <div className="mt-12 flex flex-wrap items-center gap-x-7 gap-y-3 border-t border-line pt-6">
                <Badge variant="solid" size="md">
                  <span className="relative flex size-1.5">
                    <span
                      aria-hidden
                      className="absolute inline-flex size-full rounded-full bg-brass-2"
                      style={{ animation: 'pulse-soft 2.6s ease-out infinite' }}
                    />
                    <span className="relative inline-flex size-1.5 rounded-full bg-brass-2" />
                  </span>
                  {STATS[1].value} days to offer
                </Badge>
                <p className="text-[12.5px] text-ink-3">
                  Featured in <span className="text-ink">Architectural Digest</span> and{' '}
                  <span className="text-ink">Dwell</span>
                </p>
              </div>
            </Reveal>
          </div>

          {/* ---- Image plate ---- */}
          <Reveal delay={180} className="lg:col-span-5">
            <figure className="relative">
              <div className="relative overflow-hidden bg-bone-3">
                <img
                  src="/images/listing-2.jpg"
                  alt="Kestrel Point, a curved concrete house on a headland above the Pacific"
                  width={1536}
                  height={1024}
                  fetchPriority="high"
                  decoding="async"
                  className="aspect-4/5 w-full object-cover transition-transform duration-[1.4s] ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-[1.03]"
                />
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-forest/45 via-transparent to-transparent"
                />

                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5">
                  <div>
                    <Badge variant="onImage" size="md">
                      Now representing
                    </Badge>
                    <p className="mt-2.5 font-display text-[1.4rem] leading-tight text-bone">
                      Kestrel Point
                    </p>
                    <p className="mt-0.5 text-[12px] text-bone/70">
                      Mendocino Headlands, California
                    </p>
                  </div>
                  <p className="num shrink-0 pb-1 text-[13px] text-bone">$3,275,000</p>
                </div>
              </div>

              {/* Caption, set like a plate credit. */}
              <figcaption className="mt-3 flex items-baseline justify-between gap-4">
                <span className="text-[11.5px] text-ink-4">Ines Moreau, 2019</span>
                <span className="num text-[10.5px] text-ink-4">PL. 01</span>
              </figcaption>
            </figure>
          </Reveal>
        </div>

        {/* ---- Locality strip ---- */}
        <Reveal eager delay={120}>
          <dl className="mt-14 grid grid-cols-2 gap-y-6 border-y border-line py-7 sm:grid-cols-4 lg:mt-20">
            {[
              { k: 'Office', v: 'Portland, Oregon' },
              { k: 'Territory', v: 'Oregon · California · Montana' },
              { k: 'Enquiries', v: SITE.email },
              { k: 'Viewings', v: 'By appointment' },
            ].map((item) => (
              <div key={item.k} className="px-1">
                <dt className="label text-ink-4">{item.k}</dt>
                <dd className="mt-2 text-[13px] text-forest">{item.v}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  )
}
