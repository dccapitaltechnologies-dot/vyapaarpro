import { useState, type FormEvent } from 'react'
import { ArrowRight, Check } from 'lucide-react'

import { Reveal } from './Reveal'
import { SectionTag } from './SectionTag'
import { Button } from './ui/button'
import { Input, Textarea } from './ui/input'
import { Label } from './ui/label'
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/dropdown-menu'
import { REGIONS, SITE } from '../content/site'

const INTERESTS = ['Acquiring', 'Selling', 'Building advisory', 'Estate stewardship'] as const

export function Contact() {
  const [sent, setSent] = useState(false)
  const [interests, setInterests] = useState<string[]>(['Acquiring'])

  const toggle = (value: string) =>
    setInterests((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value],
    )

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    // Front-end only: this site ships without a backend.
    event.preventDefault()
    setSent(true)
  }

  return (
    <section id="contact" className="scroll-mt-20 bg-forest text-bone">
      <div className="mx-auto w-full max-w-[86rem] px-[var(--spacing-gutter)] py-[var(--spacing-section)]">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          {/* ---- Left: the pitch and the coordinates ---- */}
          <div className="lg:col-span-5">
            <Reveal>
              <SectionTag index="06" tone="bone">
                Enquiries
              </SectionTag>
              <h2 className="mt-6 text-d2 font-display text-bone">
                Tell us what
                <br />
                <span className="italic text-brass-2">you are looking for.</span>
              </h2>
              <p className="mt-6 max-w-[25rem] text-[13.5px] leading-[1.78] text-bone/60">
                One of the four advisors answers every enquiry personally, usually within a
                working day. If what you want does not exist on the market, we will tell you that
                too.
              </p>
            </Reveal>

            <Reveal delay={90}>
              <dl className="mt-12 space-y-6 border-t border-line-ink pt-8">
                {[
                  { k: 'Office', v: SITE.address },
                  { k: 'Email', v: SITE.email, href: `mailto:${SITE.email}` },
                  { k: 'Telephone', v: SITE.phone, href: `tel:${SITE.phone.replace(/[^\d+]/g, '')}` },
                  { k: 'Hours', v: SITE.hours },
                ].map((row) => (
                  <div key={row.k} className="grid grid-cols-[5.5rem_1fr] gap-4">
                    <dt className="label pt-0.5 text-bone/40">{row.k}</dt>
                    <dd className="text-[13.5px] leading-[1.6] text-bone/85">
                      {Array.isArray(row.v) ? (
                        row.v.map((line) => <span key={line} className="block">{line}</span>)
                      ) : row.href ? (
                        <a href={row.href} className="link-underline">
                          {row.v}
                        </a>
                      ) : (
                        row.v
                      )}
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>

            <Reveal delay={140}>
              <div className="mt-10 border-t border-line-ink pt-7">
                <p className="label text-bone/40">Territory</p>
                <ul className="mt-4 grid grid-cols-2 gap-x-5 gap-y-3">
                  {REGIONS.map((region) => (
                    <li key={region.name}>
                      <p className="text-[12.5px] text-bone/85">{region.name}</p>
                      <p className="mt-0.5 text-[11px] text-bone/40">{region.detail}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>

          {/* ---- Right: the form ---- */}
          <div className="lg:col-span-7 lg:pl-6">
            <Reveal delay={60}>
              {sent ? (
                <div className="flex min-h-[26rem] flex-col items-start justify-center border border-line-ink bg-forest-2/40 p-8 sm:p-12">
                  <span className="grid size-11 place-items-center rounded-full border border-brass-2/50 bg-brass/15">
                    <Check className="size-4.5 text-brass-2" strokeWidth={2} />
                  </span>
                  <h3 className="mt-6 font-display text-d3 text-bone">Thank you.</h3>
                  <p className="mt-3 max-w-[28rem] text-[13.5px] leading-[1.75] text-bone/60">
                    Your enquiry is with the advisory desk. You will hear from a named advisor
                    within one working day, at the email you gave us.
                  </p>
                  <Button
                    variant="outline-light"
                    size="sm"
                    uppercaseTracking
                    className="mt-8"
                    onClick={() => setSent(false)}
                  >
                    Send another enquiry
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-8">
                  <div className="grid gap-8 sm:grid-cols-2">
                    <div>
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        name="name"
                        required
                        autoComplete="name"
                        placeholder="Marguerite Osei"
                        className="mt-2 border-line-ink text-bone placeholder:text-bone/25 hover:border-bone/40 focus:border-brass-2"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-bone/40">
                        Email
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        autoComplete="email"
                        placeholder="you@example.com"
                        className="mt-2 border-line-ink text-bone placeholder:text-bone/25 hover:border-bone/40 focus:border-brass-2"
                      />
                    </div>
                  </div>

                  <div className="grid gap-8 sm:grid-cols-2">
                    <div>
                      <Label htmlFor="phone" className="text-bone/40">
                        Telephone <span className="normal-case tracking-normal text-bone/25">(optional)</span>
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        autoComplete="tel"
                        placeholder="+1 503 555 0142"
                        className="mt-2 border-line-ink text-bone placeholder:text-bone/25 hover:border-bone/40 focus:border-brass-2"
                      />
                    </div>

                    <div>
                      <span className="label block text-bone/40">I am interested in</span>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <button
                            type="button"
                            className="mt-2 flex w-full cursor-pointer items-center justify-between gap-3 border-b border-line-ink py-3 text-left text-[15px] text-bone outline-none transition-colors hover:border-bone/40 focus-visible:border-brass-2"
                          >
                            <span className="truncate">
                              {interests.length === 0
                                ? 'Select one or more'
                                : interests.join(', ')}
                            </span>
                            <ArrowRight className="size-4 shrink-0 rotate-90 text-bone/40" />
                          </button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="start" className="w-[--radix-dropdown-menu-trigger-width] min-w-56">
                          <DropdownMenuLabel>Services</DropdownMenuLabel>
                          <DropdownMenuSeparator />
                          {INTERESTS.map((interest) => (
                            <DropdownMenuCheckboxItem
                              key={interest}
                              checked={interests.includes(interest)}
                              onCheckedChange={() => toggle(interest)}
                              onSelect={(event) => event.preventDefault()}
                            >
                              {interest}
                            </DropdownMenuCheckboxItem>
                          ))}
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-bone/40">
                      What are you looking for?
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      placeholder="A mid-century house on the coast, ideally with a protected view, budget around 3 million."
                      className="mt-2 border-line-ink text-bone placeholder:text-bone/25 hover:border-bone/40 focus:border-brass-2"
                    />
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-5 pt-1">
                    <p className="max-w-[21rem] text-[11px] leading-[1.6] text-bone/35">
                      We use your details only to answer this enquiry. No list, no forwarding.
                    </p>
                    <Button type="submit" variant="light" size="lg" uppercaseTracking>
                      Send enquiry
                      <ArrowRight />
                    </Button>
                  </div>
                </form>
              )}
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
