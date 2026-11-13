import gsap from 'gsap'
import { useEffect, useRef, useState } from 'react'
import { Arrow } from '../components/Arrow'
import { Section } from '../components/Section'
import { reviews, reviewsAreSamples } from '../data/reviews'

/**
 * One large quote at a time, with arrows, dots and swipe. Text fades and lifts
 * on every change. Copy lives in data/reviews.ts (currently sample placeholders).
 */
export function Reviews() {
  const [i, setI] = useState(0)
  const body = useRef<HTMLDivElement>(null)
  const first = useRef(true)
  const startX = useRef<number | null>(null)
  const n = reviews.length

  const go = (to: number) => setI(((to % n) + n) % n)

  useEffect(() => {
    if (first.current) {
      first.current = false
      return
    }
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const ctx = gsap.context(() => {
      gsap.fromTo(
        body.current,
        { opacity: 0, y: 18 },
        { opacity: 1, y: 0, duration: 0.9, ease: 'expo.out' },
      )
    })
    return () => ctx.revert()
  }, [i])

  const r = reviews[i]

  return (
    <Section id="reviews" title="Reviews" className="border-t border-gold-500/15">
      <div
        className="relative mx-auto max-w-xl touch-pan-y px-14 sm:px-16"
        onPointerDown={(e) => {
          startX.current = e.clientX
        }}
        onPointerUp={(e) => {
          if (startX.current === null) return
          const dx = e.clientX - startX.current
          startX.current = null
          if (Math.abs(dx) > 50) go(i + (dx < 0 ? 1 : -1))
        }}
      >
        <Arrow dir="prev" label="review" onClick={() => go(i - 1)} />
        <Arrow dir="next" label="review" onClick={() => go(i + 1)} />

        <div ref={body} aria-live="polite" className="min-h-[19rem] text-center sm:min-h-[17rem]">
          <span aria-hidden className="block font-display text-7xl leading-none text-gold-400">
            “
          </span>
          <blockquote className="m-0">
            <p className="font-display text-[1.65rem] leading-[1.3] font-light text-cream-50 italic sm:text-3xl">
              {r.quote}
            </p>
            <footer className="mt-8">
              <p className="font-display text-xl text-gold-300">{r.name}</p>
              <p className="eyebrow mt-3">{r.treatment}</p>
            </footer>
          </blockquote>
        </div>
      </div>

      <div className="mt-12 flex items-center justify-center gap-3" role="tablist" aria-label="Choose a review">
        {reviews.map((_, k) => (
          <button
            key={k}
            type="button"
            role="tab"
            aria-selected={k === i}
            aria-label={`Review ${k + 1} of ${n}`}
            onClick={() => go(k)}
            className="group grid size-6 place-items-center"
          >
            <span
              className={`block rounded-full border border-gold-400 transition-all duration-500 ${k === i ? 'size-2.5 bg-gold-400' : 'size-2 bg-transparent group-hover:bg-gold-400/50'}`}
            />
          </button>
        ))}
      </div>

      {reviewsAreSamples && (
        <p className="mx-auto mt-10 max-w-sm text-center text-xs tracking-wide text-cream-100/50">
          Sample reviews for this concept. They will be replaced with words from real Meraki clients.
        </p>
      )}
    </Section>
  )
}
