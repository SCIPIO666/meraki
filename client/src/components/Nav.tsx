import gsap from 'gsap'
import { useEffect, useRef, useState } from 'react'
import { navItems, site } from '../data/site'
import { useScroll } from '../lib/lenis-context'
import { Logo } from './Logo'

type Props = { active: string }

function useNavClick() {
  const { scrollTo } = useScroll()
  return (id: string, after?: () => void) => (e: React.MouseEvent) => {
    e.preventDefault()
    after?.()
    scrollTo(id)
  }
}

/** Desktop: logo, plain menu list and Book button in the left column; the strip scrolls on the right. */
function DesktopNav({ active }: Props) {
  const go = useNavClick()
  return (
    <aside
      className="pointer-events-none fixed inset-y-0 left-0 z-30 hidden flex-col justify-between py-10 pl-[clamp(2rem,6vw,6rem)] lg:flex xl:py-14"
      style={{ width: 'calc(100vw - var(--strip-w) - var(--strip-gap))' }}
    >
      <div className="pointer-events-auto self-start">
        <Logo align="left" />
      </div>

      <nav aria-label="Primary" className="pointer-events-auto">
        <ul className="m-0 flex list-none flex-col gap-5 p-0">
          {navItems.map((item) => {
            const on = active === item.id
            return (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={go(item.id)}
                  aria-current={on ? 'true' : undefined}
                  data-active={on}
                  className="font-display text-2xl text-cream-100/70 transition-colors duration-500 hover:text-cream-50 data-[active=true]:text-gold-300"
                >
                  {item.label}
                </a>
              </li>
            )
          })}
        </ul>
      </nav>

      <div className="pointer-events-auto flex flex-col items-start gap-3 text-[0.7rem] tracking-[0.25em] text-cream-100/70 uppercase">
        <a
          href={site.whatsapp}
          target="_blank"
          rel="noreferrer"
          className="border border-gold-500/70 px-10 py-4 text-cream-50 transition-colors duration-500 hover:bg-gold-500 hover:text-wine-950"
        >
          Book now
        </a>
        <span>{site.area}</span>
      </div>
    </aside>
  )
}

/** Mobile: slim top bar + full-screen overlay menu. */
function MobileNav({ active }: Props) {
  const go = useNavClick()
  const { stop, start } = useScroll()
  const [open, setOpen] = useState(false)
  const overlay = useRef<HTMLDivElement>(null)
  const first = useRef(true)

  useEffect(() => {
    if (first.current) {
      first.current = false
      return
    }
    const el = overlay.current
    if (!el) return
    const ctx = gsap.context(() => {
      if (open) {
        stop()
        gsap.set(el, { visibility: 'visible' })
        gsap
          .timeline()
          .fromTo(el, { clipPath: 'inset(0 0 100% 0)' }, { clipPath: 'inset(0 0 0% 0)', duration: 0.8, ease: 'expo.inOut' })
          .from('[data-m-link]', { yPercent: 100, opacity: 0, duration: 0.7, ease: 'expo.out', stagger: 0.06 }, '-=0.35')
      } else {
        start()
        gsap.to(el, {
          clipPath: 'inset(0 0 100% 0)',
          duration: 0.6,
          ease: 'expo.inOut',
          onComplete: () => { gsap.set(el, { visibility: 'hidden' }) },
        })
      }
    })
    return () => ctx.revert()
  }, [open, stop, start])

  return (
    <div className="lg:hidden">
      <header className="fixed inset-x-0 top-0 z-[50] flex h-(--header-h) items-center justify-between bg-linear-to-b from-wine-950/70 to-transparent px-6">
        <Logo align="left" className="scale-[0.8] origin-left" />
        <button
          type="button"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((o) => !o)}
          className="relative z-50 flex items-center gap-3 text-[0.7rem] tracking-[0.3em] text-cream-50 uppercase"
        >
          {open ? 'Close' : 'Menu'}
          <span aria-hidden className="relative block h-3 w-6">
            <span className={`absolute left-0 h-px w-full bg-current transition-all duration-500 ${open ? 'top-1.5 rotate-45' : 'top-0'}`} />
            <span className={`absolute left-0 h-px w-full bg-current transition-all duration-500 ${open ? 'top-1.5 -rotate-45' : 'top-3'}`} />
          </span>
        </button>
      </header>

      <div
        id="mobile-menu"
        ref={overlay}
        className="invisible fixed inset-0 z-[45] flex flex-col justify-center bg-wine-900 px-8"
        style={{ clipPath: 'inset(0 0 100% 0)' }}
      >
        <nav aria-label="Primary mobile">
          <ul className="flex flex-col gap-2">
            {navItems.map((item, i) => (
              <li key={item.id} className="overflow-hidden">
                <a
                  data-m-link
                  href={`#${item.id}`}
                  onClick={go(item.id, () => {
                    setOpen(false)
                    start() // Lenis ignores scrollTo while stopped for the open menu
                  })}
                  aria-current={active === item.id ? 'true' : undefined}
                  className={`flex items-baseline gap-4 py-1 font-display text-5xl ${active === item.id ? 'text-gold-300' : 'text-cream-50'}`}
                >
                  <span className="text-sm tracking-widest text-gold-500">0{i + 1}</span>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <a
          href={site.whatsapp}
          target="_blank"
          rel="noreferrer"
          className="mt-12 self-start border border-gold-500/70 px-6 py-3 text-[0.7rem] tracking-[0.25em] text-cream-50 uppercase"
        >
          Book on WhatsApp
        </a>
      </div>
    </div>
  )
}

export function Nav({ active }: Props) {
  return (
    <>
      <DesktopNav active={active} />
      <MobileNav active={active} />
    </>
  )
}
