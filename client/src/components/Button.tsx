import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'

type Common = {
  children: ReactNode
  variant?: 'outline' | 'solid'
  className?: string
}
type AsLink = Common &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof Common> & { href: string }
type AsButton = Common &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof Common> & { href?: undefined }

/**
 * Reusable CTA with the double "sketch" outline: a crisp gold box plus a
 * second hairline box nudged off-register that snaps into place on hover.
 * Pass `href` for a link, otherwise it renders a <button>.
 */
export function Button(props: AsLink | AsButton) {
  const { children, variant = 'outline', className = '', ...rest } = props
  const base =
    'group relative inline-flex items-center justify-center px-10 py-4 text-[0.75rem] tracking-[0.25em] uppercase transition-colors duration-500'
  const tone =
    variant === 'solid'
      ? 'bg-gold-400 text-wine-950 hover:bg-gold-200'
      : 'text-cream-50 hover:text-gold-200'

  const inner = (
    <>
      <span aria-hidden className="pointer-events-none absolute inset-0 border border-gold-400" />
      <span
        aria-hidden
        className="pointer-events-none absolute -inset-1.5 translate-x-1 -translate-y-1 border border-gold-400/45 transition-transform duration-700 ease-out-expo group-hover:translate-x-0 group-hover:translate-y-0"
      />
      <span className="relative">{children}</span>
    </>
  )

  if ('href' in rest && rest.href !== undefined) {
    const { href, ...a } = rest as Omit<AsLink, keyof Common>
    return (
      <a href={href} className={`${base} ${tone} ${className}`} {...a}>
        {inner}
      </a>
    )
  }
  return (
    <button
      type="button"
      className={`${base} ${tone} ${className}`}
      {...(rest as Omit<AsButton, keyof Common>)}
    >
      {inner}
    </button>
  )
}
