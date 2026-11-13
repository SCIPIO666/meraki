import gsap from 'gsap'
import { useEffect, useRef, useState } from 'react'
import { site } from '../data/site'
import { useScroll } from '../lib/lenis-context'

/** Intro screen: wordmark rises in, then the burgundy curtain lifts away. */
export function Splash() {
  const root = useRef<HTMLDivElement>(null)
  const [done, setDone] = useState(false)
  const { stop, start } = useScroll()

  useEffect(() => {
    const html = document.documentElement
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    html.classList.add('is-loading')

    const finish = () => {
      html.classList.remove('is-loading')
      start()
      setDone(true)
    }

    if (reduced) {
      finish()
      return () => html.classList.remove('is-loading')
    }

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ onComplete: finish })
      tl.call(stop, undefined, 0)
        .from('[data-splash-char]', {
          yPercent: 110,
          opacity: 0,
          duration: 0.9,
          ease: 'expo.out',
          stagger: 0.06,
        })
        .from('[data-splash-sub]', { opacity: 0, y: 8, duration: 0.7, ease: 'power2.out' }, '-=0.35')
        .from('[data-splash-rule]', { scaleX: 0, duration: 0.8, ease: 'expo.inOut' }, '<')
        .to('[data-splash-content]', { opacity: 0, y: -12, duration: 0.45, ease: 'power2.in' }, '+=0.45')
        .to(root.current, { yPercent: -100, duration: 1.05, ease: 'expo.inOut' }, '-=0.1')
    }, root)

    return () => {
      ctx.revert()
      html.classList.remove('is-loading')
    }
    // stop/start are stable (memoised in the provider)
  }, [stop, start])

  if (done) return null

  return (
    <div
      ref={root}
      aria-hidden
      className="fixed inset-0 z-[100] flex items-center justify-center bg-wine-900"
    >
      <div data-splash-content className="flex flex-col items-center text-cream-50">
        <h1 className="flex overflow-hidden font-display text-5xl font-medium tracking-[0.2em] sm:text-7xl">
          {site.name.toUpperCase().split('').map((c, i) => (
            <span key={i} data-splash-char className="inline-block">
              {c}
            </span>
          ))}
        </h1>
        <div data-splash-rule className="mt-5 h-px w-40 origin-center bg-gold-500" />
        <p
          data-splash-sub
          className="mt-4 text-[0.7rem] tracking-[0.5em] text-gold-400 uppercase"
        >
          {site.tagline}
        </p>
      </div>
    </div>
  )
}
