import { useEffect, useState } from 'react'
import { ArrowUpRight, Menu } from 'lucide-react'

import { Button } from './ui/button'
import { Sheet, SheetClose, SheetContent, SheetTitle, SheetTrigger } from './ui/sheet'
import { Wordmark } from './Wordmark'
import { cn } from '../lib/utils'
import { NAV_LINKS, SITE } from '../content/site'
import { useScrollSpy } from '../hooks/useScrollSpy'

const SPY_IDS = NAV_LINKS.map((link) => link.id)

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const activeId = useScrollSpy(SPY_IDS)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-40 transition-[background-color,box-shadow,border-color] duration-500',
        scrolled
          ? 'border-b border-line/80 bg-bone/86 shadow-[0_1px_0_rgba(220,213,197,0.7)] backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent',
      )}
    >
      <div className="mx-auto flex h-[4.5rem] w-full max-w-[86rem] items-center justify-between gap-6 px-[var(--spacing-gutter)] lg:h-20">
        <a href="#top" aria-label={`${SITE.name} — back to top`} className="shrink-0">
          <Wordmark />
        </a>

        {/* Desktop nav */}
        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {NAV_LINKS.map((link) => {
              const isActive = activeId === link.id
              return (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    aria-current={isActive ? 'true' : undefined}
                    className={cn(
                      'relative block px-3.5 py-2 text-[12.5px] tracking-[0.01em] transition-colors duration-300',
                      isActive ? 'text-forest' : 'text-ink-3 hover:text-forest',
                    )}
                  >
                    {link.label}
                    <span
                      aria-hidden
                      className={cn(
                        'absolute inset-x-3.5 -bottom-0.5 h-px origin-left bg-brass transition-transform duration-400 ease-[cubic-bezier(0.16,1,0.3,1)]',
                        isActive ? 'scale-x-100' : 'scale-x-0',
                      )}
                    />
                  </a>
                </li>
              )
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-2.5">
          <a
            href={`tel:${SITE.phone.replace(/[^\d+]/g, '')}`}
            className="label hidden text-ink-3 transition-colors hover:text-forest xl:block"
          >
            {SITE.phone}
          </a>

          <Button
            asChild
            size="sm"
            uppercaseTracking
            className="hidden sm:inline-flex"
          >
            <a href="#contact">
              Book a consultation
              <ArrowUpRight className="transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
            </a>
          </Button>

          {/* Mobile menu */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="lg:hidden"
                aria-label="Open menu"
              >
                <Menu className="size-4.5" strokeWidth={1.5} />
              </Button>
            </SheetTrigger>

            <SheetContent className="justify-between p-0">
              <div className="flex flex-col gap-12 px-7 pt-7 pb-10">
                <SheetTitle className="sr-only">Menu</SheetTitle>

                <nav aria-label="Mobile" className="pt-10">
                  <ul className="flex flex-col">
                    {NAV_LINKS.map((link, i) => (
                      <li key={link.id} className="border-b border-line">
                        <SheetClose asChild>
                          <a
                            href={`#${link.id}`}
                            className="group flex items-center justify-between gap-4 py-5"
                          >
                            <span className="flex items-baseline gap-4">
                              <span className="num text-[10px] text-brass">
                                {String(i + 1).padStart(2, '0')}
                              </span>
                              <span className="font-display text-[1.65rem] leading-none text-forest transition-colors group-hover:text-brass">
                                {link.label}
                              </span>
                            </span>
                            <ArrowUpRight className="size-4 text-ink-4 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-brass" />
                          </a>
                        </SheetClose>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>

              <div className="border-t border-line bg-bone-2 px-7 py-6">
                <p className="label text-ink-4">Office</p>
                <a
                  href={`mailto:${SITE.email}`}
                  className="mt-2 block font-display text-[1.15rem] text-forest"
                >
                  {SITE.email}
                </a>
                <a
                  href={`tel:${SITE.phone.replace(/[^\d+]/g, '')}`}
                  className="num mt-1 block text-[12.5px] text-ink-2"
                >
                  {SITE.phone}
                </a>
                <SheetClose asChild>
                  <Button asChild uppercaseTracking className="mt-5 w-full">
                    <a href="#contact">Book a consultation</a>
                  </Button>
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
