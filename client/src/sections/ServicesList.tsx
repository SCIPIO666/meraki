import gsap from 'gsap'
import { ArrowUpRight } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { Section } from '../components/Section'
import { services } from '../data/site'
import { useScroll } from '../lib/lenis-context'

/**
 * Each service on its own full-width line with a gold underline, set large.
 * On desktop the service photo follows the cursor while a line is hovered;
 * on touch screens a small thumbnail sits at the end of the line instead.
 */
export function ServicesList() {
  const { scrollTo } = useScroll()
  const list = useRef<HTMLUListElement>(null)
  const preview = useRef<HTMLDivElement>(null)
  const [hover, setHover] = useState<string | null>(null)

  // Photo trails the pointer
  useEffect(() => {
    const ul = list.current
    const box = preview.current
    if (!ul || !box || !window.matchMedia('(hover: hover)').matches) return
    gsap.set(box, { xPercent: -100, yPercent: -50 })
    const x = gsap.quickTo(box, 'x', { duration: 0.7, ease: 'power3' })
    const y = gsap.quickTo(box, 'y', { duration: 0.7, ease: 'power3' })
    const move = (e: MouseEvent) => {
      x(e.clientX - 36)
      y(e.clientY)
    }
    ul.addEventListener('mousemove', move)
    return () => ul.removeEventListener('mousemove', move)
  }, [])

  // Show / hide
  useEffect(() => {
    const box = preview.current
    if (!box) return
    gsap.to(box, { autoAlpha: hover ? 1 : 0, scale: hover ? 1 : 0.94, duration: 0.5, ease: 'power3.out', overwrite: 'auto' })
  }, [hover])

  return (
    <Section id="services" title="Services">
      <ul ref={list} className="m-0 flex list-none flex-col p-0" onMouseLeave={() => setHover(null)}>
        {services.map((s) => (
          <li key={s.id} onMouseEnter={() => setHover(s.id)}>
            <a
              href={`#${s.id}`}
              onClick={(e) => {
                e.preventDefault()
                scrollTo(s.id)
              }}
              onFocus={() => setHover(s.id)}
              onBlur={() => setHover(null)}
              className="group relative flex items-center justify-between gap-6 py-6 lg:py-8"
            >
              <span className="font-display text-[clamp(2rem,3.4vw,3.6rem)] leading-none font-light text-cream-50 transition-colors duration-500 group-hover:text-gold-200">
                {s.name}
              </span>
              <span className="flex items-center gap-4">
                <img
                  src={s.image}
                  alt=""
                  loading="lazy"
                  className="size-14 object-cover lg:hidden"
                />
                <ArrowUpRight
                  strokeWidth={1}
                  className="hidden size-8 -translate-x-2 text-gold-400 opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100 lg:block"
                />
              </span>
              <span aria-hidden className="absolute inset-x-0 bottom-0 h-px bg-cream-100/25" />
              <span
                aria-hidden
                className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-[0.18] bg-gold-400 transition-transform duration-700 ease-out-expo group-hover:scale-x-100"
              />
            </a>
          </li>
        ))}
      </ul>

      {/* cursor-following photo (desktop pointer devices only) */}
      <div
        ref={preview}
        aria-hidden
        className="pointer-events-none fixed top-0 left-0 z-40 hidden aspect-[3/4] w-56 overflow-hidden border border-gold-400/50 bg-wine-950 opacity-0 lg:block"
        style={{ visibility: 'hidden' }}
      >
        {services.map((s) => (
          <img
            key={s.id}
            src={s.image}
            alt=""
            className={`absolute inset-0 size-full object-cover transition-opacity duration-500 ${hover === s.id ? 'opacity-100' : 'opacity-0'}`}
          />
        ))}
      </div>
    </Section>
  )
}
