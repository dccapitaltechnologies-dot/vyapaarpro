import { useState } from 'react'
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react'

import { Reveal } from './Reveal'
import { SectionTag } from './SectionTag'
import { Button } from './ui/button'
import { PRESS, STATS, TESTIMONIALS } from '../content/site'
import { cn } from '../lib/utils'

/* ------------------------------------------------------------------ Stats */

export function Stats() {
  return (
    <section className="border-y border-line bg-bone-2">
      <div className="mx-auto w-full max-w-[86rem] px-[var(--spacing-gutter)] py-14 lg:py-16">
        <dl className="grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4 lg:gap-x-10">
          {STATS.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 80}>
              <div className="border-t border-line-2 pt-5">
                <dd className="num text-[2.1rem] leading-none tracking-[-0.03em] text-forest lg:text-[2.6rem]">
                  {stat.value}
                  {'suffix' in stat && stat.suffix ? stat.suffix : ''}
                </dd>
                <dt className="mt-3 text-[12.5px] text-forest">{stat.label}</dt>
                <p className="mt-1 text-[11px] text-ink-4">{stat.detail}</p>
              </div>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  )
}

/* -------------------------------------------------------------- Press rail */

export function Press() {
  return (
    <div className="marquee overflow-hidden border-b border-line py-5">
      <div className="marquee-track flex w-max items-center gap-14">
        {/* Two identical halves; the keyframe translates -50% for a seamless loop. */}
        {[0, 1].map((half) => (
          <div key={half} className="flex items-center gap-14" aria-hidden={half === 1}>
            {PRESS.map((name) => (
              <span
                key={`${half}-${name}`}
                className="font-display text-[1.05rem] whitespace-nowrap text-ink-3/80"
              >
                {name}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

/* ------------------------------------------------------------ Testimonials */

export function Testimonials() {
  const [index, setIndex] = useState(0)
  const total = TESTIMONIALS.length
  const active = TESTIMONIALS[index]

  const move = (delta: number) => setIndex((prev) => (prev + delta + total) % total)

  return (
    <section className="relative overflow-hidden bg-bone-3">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(90%_60%_at_15%_0%,var(--color-brass-wash)_0%,transparent_70%)]"
      />
      <div className="relative mx-auto w-full max-w-[86rem] px-[var(--spacing-gutter)] py-[var(--spacing-section)]">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-3">
            <Reveal>
              <SectionTag index="04">In their words</SectionTag>
            </Reveal>
          </div>

          <div className="lg:col-span-9">
            <Reveal delay={80}>
              <Quote className="size-7 text-brass/50" strokeWidth={1.2} aria-hidden />
              <blockquote className="mt-6 min-h-[9.5rem] sm:min-h-[8rem]">
                <p
                  key={active.name}
                  className="animate-[fade-in_0.5s_cubic-bezier(0.16,1,0.3,1)] font-display text-[clamp(1.5rem,1.05rem+1.7vw,2.5rem)] leading-[1.26] tracking-[-0.018em] text-forest"
                >
                  {active.quote}
                </p>
              </blockquote>

              <figcaption className="mt-8 flex flex-wrap items-center justify-between gap-6 border-t border-line-2 pt-5">
                <div>
                  <p className="text-[13px] text-forest">{active.name}</p>
                  <p className="mt-0.5 text-[11.5px] text-ink-4">{active.detail}</p>
                </div>

                <div className="flex items-center gap-4">
                  <span className="num text-[10.5px] text-ink-4">
                    {String(index + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
                  </span>
                  <div className="flex gap-1.5">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => move(-1)}
                      aria-label="Previous testimonial"
                      className="size-9"
                    >
                      <ArrowLeft />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => move(1)}
                      aria-label="Next testimonial"
                      className="size-9"
                    >
                      <ArrowRight />
                    </Button>
                  </div>
                </div>
              </figcaption>

              {/* Progress ticks double as direct navigation. */}
              <div className="mt-6 flex gap-1.5">
                {TESTIMONIALS.map((item, i) => (
                  <button
                    key={item.name}
                    type="button"
                    onClick={() => setIndex(i)}
                    aria-label={`Testimonial ${i + 1}`}
                    aria-current={i === index}
                    className="group h-6 flex-1 cursor-pointer outline-none"
                  >
                    <span
                      className={cn(
                        'block h-px w-full transition-colors duration-400',
                        i === index ? 'bg-brass' : 'bg-line-2 group-hover:bg-ink-4',
                      )}
                    />
                  </button>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
