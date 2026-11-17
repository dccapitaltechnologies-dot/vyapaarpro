import { useState } from 'react'
import { ArrowUpRight, Bed, Bath, Maximize } from 'lucide-react'

import { Badge } from './ui/badge'
import { Button } from './ui/button'
import { Reveal } from './Reveal'
import { SectionTag } from './SectionTag'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './ui/dialog'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs'
import { RESIDENCES, REGION_TABS, type Residence } from '../content/site'
import { cn } from '../lib/utils'

function Spec({ icon: Icon, children }: { icon: typeof Bed; children: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 text-[11.5px] text-ink-3">
      <Icon className="size-3.5 text-ink-4" strokeWidth={1.5} />
      {children}
    </span>
  )
}

function ResidenceCard({
  residence,
  featured = false,
}: {
  residence: Residence
  featured?: boolean
}) {
  return (
    <Dialog>
      <article
        className={cn(
          'group flex flex-col',
          featured && 'lg:col-span-2 lg:flex-row lg:items-stretch lg:gap-0',
        )}
      >
        <div
          className={cn(
            'relative overflow-hidden bg-bone-3',
            featured ? 'lg:w-[58%]' : '',
          )}
        >
          <img
            src={residence.image}
            alt={`${residence.name}, ${residence.location}`}
            width={1536}
            height={1024}
            loading="lazy"
            decoding="async"
            className={cn(
              'w-full object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]',
              featured ? 'aspect-4/3 h-full lg:aspect-auto' : 'aspect-4/3',
            )}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-forest/30 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          />
          <div className="absolute top-4 left-4 flex gap-2">
            <Badge variant={residence.status === 'Under offer' ? 'muted' : 'solid'} size="md">
              {residence.status}
            </Badge>
          </div>

          {/* Price plate slides up on hover. */}
          <div className="absolute inset-x-0 bottom-0 translate-y-2 p-4 opacity-0 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-0 group-hover:opacity-100">
            <DialogTrigger asChild>
              <Button
                variant="light"
                size="sm"
                uppercaseTracking
                className="w-full backdrop-blur-sm"
              >
                View the house
                <ArrowUpRight />
              </Button>
            </DialogTrigger>
          </div>
        </div>

        <div className={cn('flex flex-1 flex-col pt-5', featured && 'lg:justify-center lg:py-10 lg:pl-10')}>
          <div className="flex items-baseline justify-between gap-4">
            <h3 className="font-display text-d4 text-forest">
              <DialogTrigger asChild>
                <button
                  type="button"
                  className="cursor-pointer text-left outline-none transition-colors hover:text-brass focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brass"
                >
                  {residence.name}
                </button>
              </DialogTrigger>
            </h3>
            <p className="num shrink-0 text-[12.5px] text-forest">{residence.price}</p>
          </div>

          <p className="mt-1 text-[11.5px] tracking-[0.02em] text-ink-4">{residence.location}</p>

          <p
            className={cn(
              'mt-4 text-[13.5px] leading-[1.68] text-ink-2',
              featured ? 'max-w-[34rem]' : 'line-clamp-3',
            )}
          >
            {residence.summary}
          </p>

          <div className="mt-auto flex flex-wrap items-center gap-x-5 gap-y-2 pt-5">
            <Spec icon={Bed}>{`${residence.beds} bed`}</Spec>
            <Spec icon={Bath}>{`${residence.baths} bath`}</Spec>
            <Spec icon={Maximize}>{`${residence.sqft} sqft`}</Spec>
            <span className="num ml-auto text-[10.5px] text-ink-4">{residence.year}</span>
          </div>
        </div>
      </article>

      {/* ---- Detail dialog ---- */}
      <DialogContent className="max-h-[90dvh] max-w-4xl overflow-y-auto p-0">
        <div className="relative">
          <img
            src={residence.image}
            alt={`${residence.name}, ${residence.location}`}
            className="aspect-16/10 w-full object-cover"
          />
          <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-forest/55 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
            <Badge variant="onImage" size="md">
              {residence.status}
            </Badge>
            <DialogHeader className="mt-3 gap-0">
              <DialogTitle className="font-display text-d2 text-bone">{residence.name}</DialogTitle>
              <DialogDescription className="mt-2 text-[12.5px] tracking-[0.02em] text-bone/75">
                {residence.location} · {residence.architect}, {residence.year}
              </DialogDescription>
            </DialogHeader>
          </div>
        </div>

        <div className="grid gap-8 p-6 sm:p-8 md:grid-cols-[1.6fr_1fr] md:gap-12">
          <div>
            <p className="text-[15px] leading-[1.78] text-ink-2">{residence.narrative}</p>

            <h4 className="label mt-8 text-ink-4">Details of note</h4>
            <ul className="mt-4 space-y-2.5">
              {residence.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3 text-[13.5px] text-ink-2">
                  <span aria-hidden className="mt-2 h-px w-3 shrink-0 bg-brass" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <aside className="border-t border-line pt-6 md:border-t-0 md:border-l md:pt-0 md:pl-8">
            <p className="label text-ink-4">Guide price</p>
            <p className="num mt-2 text-[1.5rem] text-forest">{residence.price}</p>

            <dl className="mt-6 space-y-3">
              {[
                { k: 'Bedrooms', v: String(residence.beds) },
                { k: 'Bathrooms', v: String(residence.baths) },
                { k: 'Interior', v: `${residence.sqft} sqft` },
                { k: 'Architect', v: residence.architect },
                { k: 'Completed', v: String(residence.year) },
              ].map((row) => (
                <div key={row.k} className="flex items-baseline justify-between gap-4 border-b border-line/70 pb-2.5">
                  <dt className="text-[11.5px] text-ink-4">{row.k}</dt>
                  <dd className="text-[12.5px] text-forest">{row.v}</dd>
                </div>
              ))}
            </dl>

            <Button asChild uppercaseTracking className="mt-7 w-full">
              <a href="#contact">Arrange a viewing</a>
            </Button>
            <p className="mt-3 text-center text-[11px] text-ink-4">
              Viewings by appointment only
            </p>
          </aside>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export function Collection() {
  const [region, setRegion] = useState<string>('all')

  return (
    <section
      id="residences"
      className="relative mx-auto w-full max-w-[86rem] scroll-mt-24 px-[var(--spacing-gutter)] py-[var(--spacing-section)]"
    >
      <div className="flex flex-col gap-8 border-t border-line pt-10 lg:flex-row lg:items-end lg:justify-between">
        <Reveal>
          <SectionTag index="01">The collection</SectionTag>
          <h2 className="mt-6 max-w-[22ch] text-d2 font-display text-forest">
            Seven houses, each
            <span className="italic text-brass"> worth the trip.</span>
          </h2>
        </Reveal>

        <Reveal delay={100} className="lg:pb-2">
          <p className="max-w-[26rem] text-[13.5px] leading-[1.72] text-ink-2 lg:text-right">
            We take on a small number of listings at a time. Everything below is represented
            directly by Leverius, with a written architectural assessment on file.
          </p>
        </Reveal>
      </div>

      <Reveal delay={80}>
        <Tabs value={region} onValueChange={setRegion} className="mt-10">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-line pb-1">
            <TabsList aria-label="Filter residences by region">
              {REGION_TABS.map((tab) => (
                <TabsTrigger key={tab.value} value={tab.value}>
                  {tab.label}
                </TabsTrigger>
              ))}
            </TabsList>
            <p className="num hidden pb-2.5 text-[10.5px] text-ink-4 sm:block">
              {region === 'all'
                ? `${RESIDENCES.length} residences`
                : `${RESIDENCES.filter((r) => r.region === region).length} residences`}
            </p>
          </div>

          {/* One content panel per tab keeps ARIA relationships correct;
              region filtering itself happens on the shared value. */}
          {REGION_TABS.map((tab) => {
            const items =
              tab.value === 'all'
                ? RESIDENCES
                : RESIDENCES.filter((r) => r.region === tab.value)
            return (
              <TabsContent key={tab.value} value={tab.value} className="mt-9">
                <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
                  {items.map((residence, i) => (
                    <Reveal key={residence.id} delay={Math.min(i, 4) * 70}>
                      <ResidenceCard residence={residence} />
                    </Reveal>
                  ))}
                </div>
              </TabsContent>
            )
          })}
        </Tabs>
      </Reveal>

      <Reveal delay={60}>
        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-line pt-7 sm:flex-row sm:items-center">
          <p className="text-[13px] text-ink-3">
            A further eleven houses are represented privately and not published here.
          </p>
          <Button asChild variant="ghost" size="sm" uppercaseTracking className="px-0">
            <a href="#contact">
              Request the private list
              <ArrowUpRight />
            </a>
          </Button>
        </div>
      </Reveal>
    </section>
  )
}
