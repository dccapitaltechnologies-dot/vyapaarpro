import { ArrowUpRight } from 'lucide-react'

import { Reveal } from './Reveal'
import { SectionTag } from './SectionTag'
import { Button } from './ui/button'
import { JOURNAL } from '../content/site'

export function Journal() {
  return (
    <section
      id="journal"
      className="relative mx-auto w-full max-w-[86rem] scroll-mt-24 px-[var(--spacing-gutter)] py-[var(--spacing-section)]"
    >
      <div className="flex flex-col gap-6 border-t border-line pt-10 sm:flex-row sm:items-end sm:justify-between">
        <Reveal>
          <SectionTag index="05">Journal</SectionTag>
          <h2 className="mt-6 text-d2 font-display text-forest">
            Notes from
            <span className="italic text-brass"> the field.</span>
          </h2>
        </Reveal>
        <Reveal delay={80}>
          <Button asChild variant="ghost" size="sm" uppercaseTracking className="px-0 sm:pb-2">
            <a href="#journal">
              All writing
              <ArrowUpRight />
            </a>
          </Button>
        </Reveal>
      </div>

      <div className="mt-10 grid gap-x-8 gap-y-12 md:grid-cols-3">
        {JOURNAL.map((entry, i) => (
          <Reveal key={entry.id} delay={i * 90}>
            <article className="group flex h-full flex-col">
              <a href="#journal" className="block overflow-hidden bg-bone-3">
                <img
                  src={entry.image}
                  alt={entry.title}
                  loading="lazy"
                  decoding="async"
                  width={1024}
                  height={1024}
                  className="aspect-5/4 w-full object-cover transition-transform duration-[1.1s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.05]"
                />
              </a>

              <div className="flex items-center gap-3 pt-5">
                <span className="label text-brass">{entry.category}</span>
                <span aria-hidden className="h-px w-4 bg-line-2" />
                <span className="num text-[10px] text-ink-4">{entry.readTime}</span>
              </div>

              <h3 className="mt-3 font-display text-[1.32rem] leading-[1.24] text-forest">
                <a
                  href="#journal"
                  className="transition-colors group-hover:text-brass focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brass"
                >
                  {entry.title}
                </a>
              </h3>

              <p className="mt-2.5 flex-1 text-[13px] leading-[1.7] text-ink-2">{entry.excerpt}</p>

              <p className="mt-4 border-t border-line pt-3 text-[11px] text-ink-4">{entry.date}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
