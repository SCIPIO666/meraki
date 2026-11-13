import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from 'lenis'
import 'lenis/dist/lenis.css'
import { useEffect, useMemo, useRef, type ReactNode } from 'react'
import { LenisContext, type ScrollApi } from './lenis-context'

gsap.registerPlugin(ScrollTrigger)

const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

/**
 * Lenis smooth scroll, driven by GSAP's ticker so ScrollTrigger and Lenis
 * share one clock. Falls back to native scrolling for reduced-motion users.
 */
export function LenisProvider({ children }: { children: ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null)

  useEffect(() => {
    if ('scrollRestoration' in history) history.scrollRestoration = 'manual'
    window.scrollTo(0, 0)

    if (prefersReducedMotion()) return

    const lenis = new Lenis({ lerp: 0.09, wheelMultiplier: 0.9 })
    lenisRef.current = lenis

    lenis.on('scroll', ScrollTrigger.update)
    const tick = (time: number) => lenis.raf(time * 1000)
    gsap.ticker.add(tick)
    gsap.ticker.lagSmoothing(0)

    return () => {
      gsap.ticker.remove(tick)
      lenis.destroy()
      lenisRef.current = null
    }
  }, [])

  const api = useMemo<ScrollApi>(
    () => ({
      scrollTo: (target, opts) => {
        const lenis = lenisRef.current
        const el =
          typeof target === 'string'
            ? document.getElementById(target.replace(/^#/, '')) ??
              document.querySelector<HTMLElement>(target)
            : target
        if (!el) return
        if (lenis) {
          lenis.scrollTo(el, { offset: opts?.offset ?? 0, duration: 1.4 })
        } else {
          el.scrollIntoView({ behavior: 'auto' })
        }
      },
      stop: () => lenisRef.current?.stop(),
      start: () => lenisRef.current?.start(),
    }),
    [],
  )

  return <LenisContext.Provider value={api}>{children}</LenisContext.Provider>
}
