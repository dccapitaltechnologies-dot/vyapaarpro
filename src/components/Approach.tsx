import { Reveal } from './Reveal'
import { SectionTag } from './SectionTag'
import { APPROACH } from '../content/site'

/**
 * Approach — a dark plate in the middle of the page.
 * The tonal shift is the section break; no ornament needed.
 */
export function Approach() {
  return (
    <section id="approach" className="scroll-mt-20 bg-forest text-bone">
      <div className="mx-auto w-full max-w-[86rem] px-[var(--spacing-gutter)] py-[var(--spacing-section)]">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-4">
            <Reveal>
              <SectionTag index="02" tone="bone">
                Approach
              </SectionTag>
              <h2 className="mt-6 text-d2 font-display text-bone">
                The honest
                <br />
                <span className="italic text-brass-2">version.</span>
              </h2>
              <p className="mt-6 max-w-[24rem] text-[13.5px] leading-[1.75] text-bone/60">
                Most of what a brokerage does is invisible until it goes wrong. Here is what we
                actually do, in order, so you can hold us to it.
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-8">
            <ol className="flex flex-col">
              {APPROACH.map((step, i) => (
                <Reveal key={step.number} delay={i * 90}>
                  <li className="group grid grid-cols-[auto_1fr] gap-x-6 gap-y-2 border-t border-line-ink py-8 first:border-t-0 first:pt-0 sm:grid-cols-[auto_14rem_1fr] sm:gap-x-8">
                    <span className="num pt-1 text-[10.5px] text-brass-2">{step.number}</span>
                    <h3 className="font-display text-[1.45rem] leading-snug text-bone">
                      {step.title}
                    </h3>
                    <p className="col-span-2 max-w-[36rem] text-[13.5px] leading-[1.75] text-bone/60 sm:col-span-1">
                      {step.body}
                    </p>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  )
}
