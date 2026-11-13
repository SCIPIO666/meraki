import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useEffect, useState } from 'react'

gsap.registerPlugin(ScrollTrigger)

/** Returns the id of the section currently crossing the middle of the viewport. */
export function useActiveSection(ids: readonly string[], fallback: string) {
  const [active, setActive] = useState(fallback)

  useEffect(() => {
    const ctx = gsap.context(() => {
      ids.forEach((id) => {
        const el = document.getElementById(id)
        if (!el) return
        ScrollTrigger.create({
          trigger: el,
          start: 'top 50%',
          end: 'bottom 50%',
          onToggle: (self) => self.isActive && setActive(id),
        })
      })
    })
    return () => ctx.revert()
    // ids is a static module-level list
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return active
}
