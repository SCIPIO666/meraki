import gsap from 'gsap'
import { useEffect, useRef, useState } from 'react'
import { Arrow } from '../components/Arrow'
import { site } from '../data/site'

const dir = (n: number, f: string) => `/gallery%20grids/grid${n}/${f}`

/**
 * Three photo grids the visitor pages through. Each grid mixes tall and short
 * frames and carries the brand name in a different spot (top right, down the
 * side, top left). Photos are real files from /public/gallery grids; swap them
 * in place, the frames crop with object-cover.
 */
const grids = [
  {
    label: 'Treatment rooms',
    brand: 'col-[7/13] row-[1/4] items-center justify-center text-center',
    brandClass: '',
    frames: [
      { src: dir(1, 'beauty-spa-treatment-room.jpg'), alt: 'Treatment room with a bed and soft lighting', area: 'col-[1/7] row-[1/9]' },
      { src: dir(1, 'laser-treatment-room.jpg'), alt: 'Laser treatment room', area: 'col-[1/7] row-[9/13]' },
      { src: dir(1, 'treatment-room-aesthetic-clinic.jpg'), alt: 'Clinic treatment room', area: 'col-[7/13] row-[4/13]' },
    ],
  },
  {
    label: 'Suites',
    brand: 'col-[11/13] row-[1/13] items-center justify-center',
    brandClass: '[writing-mode:vertical-rl] rotate-180 text-gold-500/70',
    frames: [
      { src: dir(2, 'beauty-treatment-suite.jpg'), alt: 'Beauty treatment suite', area: 'col-[1/6] row-[1/7]' },
      { src: dir(2, 'spa-treatment-suite.jpg'), alt: 'Spa treatment suite', area: 'col-[1/6] row-[7/13]' },
      { src: dir(2, 'clinic-consultation-room.jpg'), alt: 'Consultation room', area: 'col-[6/11] row-[1/13]' },
    ],
  },
  {
    label: 'Reception',
    brand: 'col-[1/7] row-[1/3] items-center justify-start',
    brandClass: '',
    frames: [
      { src: dir(3, 'clinic-reception-interior.jpg'), alt: 'Clinic reception', area: 'col-[1/7] row-[3/13]' },
      { src: dir(3, 'clinic-waiting-area.jpg'), alt: 'Waiting area', area: 'col-[7/13] row-[1/8]' },
      { src: dir(3, 'wellness-treatment-room.jpg'), alt: 'Wellness treatment room', area: 'col-[7/13] row-[8/13]' },
    ],
  },
] as const

const reduced = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches

export function Gallery() {
  const [index, setIndex] = useState(0)
  const current = useRef(0)
  const busy = useRef(false)
  const slides = useRef<(HTMLDivElement | null)[]>([])
  const startX = useRef<number | null>(null)

  useEffect(() => {
    const els = slides.current
    return () => { els.forEach((el) => el && gsap.killTweensOf(el)) }
  }, [])

  const go = (step: 1 | -1) => {
    if (busy.current) return
    const from = current.current
    const to = (from + step + grids.length) % grids.length
    const a = slides.current[from]
    const b = slides.current[to]
    if (!a || !b) return
    current.current = to
    setIndex(to)

    if (reduced()) {
      gsap.set(a, { autoAlpha: 0 })
      gsap.set(b, { autoAlpha: 1, xPercent: 0 })
      return
    }
    busy.current = true
    gsap
      .timeline({ onComplete: () => { busy.current = false } })
      .to(a, { xPercent: -14 * step, autoAlpha: 0, duration: 0.55, ease: 'power3.in' })
      .fromTo(
        b,
        { xPercent: 14 * step, autoAlpha: 0 },
        { xPercent: 0, autoAlpha: 1, duration: 0.95, ease: 'expo.out' },
        '-=0.15',
      )
  }

  return (
    <section id="gallery" aria-label="Inside Meraki" className="strip-x relative bg-wine-900 pb-24 lg:pb-32">
      <h2 className="sr-only">Inside Meraki</h2>

      <div
        className="relative mx-auto max-w-[34rem] px-6 sm:px-8"
        onPointerDown={(e) => { startX.current = e.clientX }}
        onPointerUp={(e) => {
          if (startX.current === null) return
          const dx = e.clientX - startX.current
          startX.current = null
          if (Math.abs(dx) > 50) go(dx < 0 ? 1 : -1)
        }}
      >
        <div className="relative aspect-[5/6] w-full" aria-live="polite">
          {grids.map((g, i) => (
            <div
              key={g.label}
              ref={(el) => { slides.current[i] = el }}
              role="group"
              aria-label={`${g.label}, ${i + 1} of ${grids.length}`}
              aria-hidden={i !== index}
              className={`absolute inset-0 grid grid-cols-12 grid-rows-12 gap-2 ${i === 0 ? '' : 'invisible'}`}
            >
              {g.frames.map((f) => (
                <div key={f.src} className={`overflow-hidden bg-wine-800 ${f.area}`}>
                  <img src={f.src} alt={f.alt} loading="lazy" decoding="async" draggable={false} className="size-full object-cover" />
                </div>
              ))}
              <div className={`flex ${g.brand}`}>
                <span className={`font-display text-[clamp(1.75rem,3.6vw,3rem)] font-medium tracking-[0.18em] text-gold-400 ${g.brandClass}`}>
                  {site.name.toUpperCase()}
                </span>
              </div>
            </div>
          ))}
        </div>

        <Arrow dir="prev" onClick={() => go(-1)} />
        <Arrow dir="next" onClick={() => go(1)} />
      </div>

      <div className="mt-8 flex justify-center gap-2" aria-hidden>
        {grids.map((g, i) => (
          <span key={g.label} className={`h-px w-8 transition-colors duration-500 ${i === index ? 'bg-gold-400' : 'bg-cream-100/25'}`} />
        ))}
      </div>
    </section>
  )
}
