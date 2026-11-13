import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'

type Common = {
  children: ReactNode
  /** outline: on burgundy. solid: filled gold. ink: dark outline for cream surfaces. */
  variant?: 'outline' | 'solid' | 'ink'
  className?: string
}
type AsLink = Common &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof Common> & { href: string }
type AsButton = Common &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof Common> & { href?: undefined }

const tones = {
  outline: { text: 'text-cream-50 hover:text-gold-200', a: 'border-gold-400', b: 'border-gold-400/45' },
  solid: { text: 'bg-gold-400 text-wine-950 hover:bg-gold-200', a: 'border-gold-400', b: 'border-gold-400/45' },
  ink: { text: 'text-wine-900 hover:text-wine-700', a: 'border-wine-900', b: 'border-wine-900/40' },
} as const

/**
 * Reusable CTA with the double "sketch" outline: a crisp box plus a
 * second hairline box nudged off-register that snaps into place on hover.
 * Pass `href` for a link, otherwise it renders a <button>.
 */
export function Button(props: AsLink | AsButton) {
  const { children, variant = 'outline', className = '', ...rest } = props
  const base =
    'group relative inline-flex items-center justify-center px-10 py-4 text-[0.75rem] tracking-[0.25em] uppercase transition-colors duration-500'
  const t = tones[variant]

  const inner = (
    <>
      <span aria-hidden className={`pointer-events-none absolute inset-0 border ${t.a}`} />
      <span
        aria-hidden
        className={`pointer-events-none absolute -inset-1.5 translate-x-1 -translate-y-1 border ${t.b} transition-transform duration-700 ease-out-expo group-hover:translate-x-0 group-hover:translate-y-0`}
      />
      <span className="relative">{children}</span>
    </>
  )

  if ('href' in rest && rest.href !== undefined) {
    const { href, ...a } = rest as Omit<AsLink, keyof Common>
    return (
      <a href={href} className={`${base} ${t.text} ${className}`} {...a}>
        {inner}
      </a>
    )
  }
  return (
    <button
      type="button"
      className={`${base} ${t.text} ${className}`}
      {...(rest as Omit<AsButton, keyof Common>)}
    >
      {inner}
    </button>
  )
}
