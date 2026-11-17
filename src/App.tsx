import { Navbar } from './components/Navbar'
import { ScrollProgress } from './components/ScrollProgress'
import { Hero } from './components/Hero'
import { ListingRail } from './components/ListingRail'
import { About } from './components/About'
import { Stats } from './components/Stats'
import { Partners } from './components/Partners'
import { Footer } from './components/Footer'

export default function App() {
  return (
    <div className="min-h-dvh bg-paper text-ink antialiased">
      <a
        href="#listings"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:rounded-full focus:bg-ink focus:px-5 focus:py-2.5 focus:text-[13px] focus:font-medium focus:text-paper"
      >
        Skip to listings
      </a>
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <ListingRail />
        <About />
        <Stats />
        <Partners />
      </main>
      <Footer />
    </div>
  )
}
