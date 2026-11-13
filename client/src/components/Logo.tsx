import { site } from '../data/site'
import { useScroll } from '../lib/lenis-context'

type Props = {
  align?: 'left' | 'right' | 'center'
  className?: string
}

/**
 * Text wordmark. To use the real logo, drop a transparent PNG/SVG at
 * public/logo.svg and swap the contents for <img src="/logo.svg" alt="Meraki Laser Center" />.
 */
export function Logo({ align = 'right', className = '' }: Props) {
  const { scrollTo } = useScroll()
  const items =
    align === 'right' ? 'items-end' : align === 'center' ? 'items-center' : 'items-start'
  return (
    <a
      href="#home"
      onClick={(e) => {
        e.preventDefault()
        scrollTo('home')
      }}
      aria-label={`${site.name} ${site.tagline} — back to top`}
      className={`inline-flex flex-col ${items} leading-none text-cream-50 ${className}`}
    >
      <span className="font-display text-[1.9rem] font-medium tracking-[0.18em] lg:text-[2.4rem]">
        {site.name.toUpperCase()}
      </span>
      <span className="mt-1.5 flex items-center gap-2 text-[0.6rem] tracking-[0.42em] text-gold-400 uppercase">
        <span className="h-px w-5 bg-gold-500" />
        {site.tagline}
        <span className="h-px w-5 bg-gold-500" />
      </span>
    </a>
  )
}
