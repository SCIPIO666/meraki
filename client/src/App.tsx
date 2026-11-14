import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useEffect } from 'react'
import { Background } from './components/Background'
import { Footer } from './components/Footer'
import { Nav } from './components/Nav'
import { Splash } from './components/Splash'
import { sectionIds } from './data/site'
import { useActiveSection } from './hooks/useActiveSection'
import { LenisProvider } from './lib/LenisProvider'
import { About } from './sections/About'
import { Contact } from './sections/Contact'
import { Faq } from './sections/Faq'
import { FirstCta } from './sections/FirstCta'
import { Gallery } from './sections/Gallery'
import { Intro } from './sections/Intro'
import { Reviews } from './sections/Reviews'
import { ServiceSections } from './sections/ServiceSections'
import { ServicesList } from './sections/ServicesList'

gsap.registerPlugin(ScrollTrigger)

function Shell() {
  const active = useActiveSection(sectionIds, 'home')

  // Reveal-on-scroll for anything tagged data-reveal; hero items animate on load.
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('[data-reveal]').forEach((el) => {
        gsap.from(el, {
          y: 40,
          opacity: 0,
          duration: 1.1,
          ease: 'expo.out',
          scrollTrigger: { trigger: el, start: 'top 88%', once: true },
        })
      })
      gsap.from('[data-hero]', {
        y: 36,
        opacity: 0,
        duration: 1.2,
        ease: 'expo.out',
        stagger: 0.1,
        delay: 2.6, // lands as the splash curtain lifts
      })
    })
    // Web fonts change text heights, so re-measure triggers once they have loaded.
    document.fonts?.ready.then(() => ScrollTrigger.refresh())
    return () => ctx.revert()
  }, [])

  return (
    <>
      <a
        href="#main"
        className="fixed top-3 left-3 z-[200] -translate-y-20 bg-gold-400 px-4 py-2 text-sm text-wine-950 focus:translate-y-0"
      >
        Skip to content
      </a>
      <Splash />
      <Background />
      <Nav active={active} />

      {/* The strip: scrolls with the page on the right, photo stays fixed behind */}
      <div className="relative z-10 w-full lg:mt-(--strip-top) lg:mr-(--strip-gap) lg:ml-auto lg:w-(--strip-w)">
        <main id="main">
          <Intro />
          <Gallery />
          <ServicesList />
          <FirstCta />
          <About />
          <ServiceSections />
          <Reviews />
          <Faq />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  )
}

export default function App() {
  return (
    <LenisProvider>
      <Shell />
    </LenisProvider>
  )
}
