import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useEffect, useRef } from 'react'
import { Button } from '../components/Button'
import { site } from '../data/site'

gsap.registerPlugin(ScrollTrigger)

/** Headline + Book now on the strip colour, then a wide photo band that drifts slowly as you scroll. */
export function FirstCta() {
  const band = useRef<HTMLDivElement>(null)
  const img = useRef<HTMLImageElement>(null)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const ctx = gsap.context(() => {
      gsap.fromTo(
        img.current,
        { yPercent: -8 },
        {
          yPercent: 8,
          ease: 'none',
          scrollTrigger: { trigger: band.current, start: 'top bottom', end: 'bottom top', scrub: true },
        },
      )
    })
    return () => ctx.revert()
  }, [])

  return (
    <section id="cta" className="relative bg-wine-900">
      <div className="strip-x flex flex-col items-center justify-between gap-10 py-16 sm:flex-row lg:py-20">
        <h2
          data-reveal
          className="max-w-[9ch] text-center font-display text-4xl leading-[1.08] font-light tracking-wide text-cream-50 uppercase sm:text-left sm:text-5xl"
        >
          It’s time for a change
        </h2>
        <div data-reveal>
          <Button href={site.whatsapp} target="_blank" rel="noreferrer">
            Book now
          </Button>
        </div>
      </div>

      <div ref={band} className="relative h-[55svh] overflow-hidden bg-wine-800">
        <img
          ref={img}
          src="/firstcta.jpg"
          alt=""
          loading="lazy"
          decoding="async"
          className="absolute inset-x-0 -top-[10%] h-[120%] w-full object-cover object-[50%_35%]"
        />
      </div>

      <div className="h-16 lg:h-24" />
    </section>
  )
}
