import { navItems, site, telHref } from '../data/site'
import { useScroll } from '../lib/lenis-context'
import { Logo } from './Logo'

/** Closes the strip: wordmark, quick links, contact line and the credit. */
export function Footer() {
  const { scrollTo } = useScroll()
  return (
    <footer className="strip-x relative bg-wine-950 pt-20 pb-10 text-center lg:pt-24">
      <Logo align="center" className="mx-auto" />

      <nav aria-label="Footer" className="mt-12">
        <ul className="m-0 flex list-none flex-wrap justify-center gap-x-8 gap-y-3 p-0 text-[0.7rem] tracking-[0.25em] uppercase">
          {navItems.map((n) => (
            <li key={n.id}>
              <a
                href={`#${n.id}`}
                onClick={(e) => {
                  e.preventDefault()
                  scrollTo(n.id)
                }}
                className="text-cream-100/70 transition-colors duration-500 hover:text-gold-300"
              >
                {n.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <p className="mt-12 text-sm leading-relaxed text-cream-100/65">
        {site.address}
        <br />
        <a href={telHref(site.phones[0])} className="transition-colors hover:text-gold-200">
          {site.phones[0]}
        </a>
        {' · '}
        <a href={telHref(site.phones[1])} className="transition-colors hover:text-gold-200">
          {site.phones[1]}
        </a>
      </p>

      <div className="rule-gold mx-auto mt-12 max-w-40" />

      <p className="mt-8 text-xs tracking-wide text-cream-100/45">
        © {new Date().getFullYear()} {site.name} {site.tagline}. Website concept by NuevaZen.
      </p>
    </footer>
  )
}
