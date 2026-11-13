import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useEffect } from 'react'
import { Background } from './components/Background'
import { Nav } from './components/Nav'
import { Splash } from './components/Splash'
import { navItems } from './data/site'
import { useActiveSection } from './hooks/useActiveSection'
import { LenisProvider } from './lib/LenisProvider'
import { About } from './sections/About'
import { Book } from './sections/Book'
import { Hero } from './sections/Hero'
import { Results } from './sections/Results'
import { Treatments } from './sections/Treatments'

gsap.registerPlugin(ScrollTrigger)

const sectionIds = navItems.map((n) => n.id)

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
    return () => ctx.revert()
  }, [])

  return (
    <>
      <Splash />
      <Background />
      <Nav active={active} />

      {/* The strip: scrolls with the page on the right, photo stays fixed behind */}
      <main className="relative z-10 w-full lg:mt-(--strip-top) lg:mr-(--strip-gap) lg:ml-auto lg:w-(--strip-w)">
        <Hero />
        <Treatments />
        <Results />
        <About />
        <Book />
      </main>
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
