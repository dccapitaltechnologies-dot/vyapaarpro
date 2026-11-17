import { Reveal } from './Reveal'
import { SectionTag } from './SectionTag'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion'
import { Button } from './ui/button'
import { ArrowUpRight } from 'lucide-react'
import { SERVICES } from '../content/site'

export function Services() {
  return (
    <section
      id="services"
      className="relative mx-auto w-full max-w-[86rem] scroll-mt-24 px-[var(--spacing-gutter)] py-[var(--spacing-section)]"
    >
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <Reveal>
            <SectionTag index="03">What we do</SectionTag>
            <h2 className="mt-6 text-d2 font-display text-forest">
              Four ways
              <br />
              <span className="italic text-brass">to work with us.</span>
            </h2>
            <p className="mt-6 max-w-[26rem] text-[13.5px] leading-[1.75] text-ink-2">
              We are deliberately small. That means we say no to work we cannot do properly, and
              it means the person you meet is the person who does it.
            </p>
            <Button asChild variant="outline" uppercaseTracking className="mt-8">
              <a href="#contact">
                Start a conversation
                <ArrowUpRight />
              </a>
            </Button>
          </Reveal>
        </div>

        <div className="lg:col-span-7">
          <Reveal delay={90}>
            <Accordion type="single" collapsible defaultValue="buying" className="border-b border-line">
              {SERVICES.map((service) => (
                <AccordionItem key={service.value} value={service.value}>
                  <AccordionTrigger>
                    <span className="flex flex-col gap-1.5">
                      <span className="font-display text-[1.4rem] leading-none text-forest transition-colors group-data-[state=open]/acc:text-brass">
                        {service.title}
                      </span>
                      <span className="label text-ink-4">{service.meta}</span>
                    </span>
                  </AccordionTrigger>
                  <AccordionContent>{service.body}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
