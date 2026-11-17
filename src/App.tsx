import { TooltipProvider } from './components/ui/tooltip'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Collection } from './components/Collection'
import { Press, Stats, Testimonials } from './components/Proof'
import { Approach } from './components/Approach'
import { Services } from './components/Services'
import { Journal } from './components/Journal'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

export default function App() {
  return (
    <TooltipProvider delayDuration={200}>
      <div className="min-h-dvh bg-bone text-ink antialiased">
        <a
          href="#residences"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-60 focus:rounded-sm focus:bg-forest focus:px-5 focus:py-2.5 focus:text-[12px] focus:tracking-[0.14em] focus:text-bone focus:uppercase"
        >
          Skip to residences
        </a>

        <Navbar />

        <main>
          <Hero />
          <Press />
          <Collection />
          <Approach />
          <Stats />
          <Services />
          <Testimonials />
          <Journal />
          <Contact />
        </main>

        <Footer />
      </div>
    </TooltipProvider>
  )
}
