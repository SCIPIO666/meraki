import type { ReactNode } from 'react'

type Props = {
  id: string
  eyebrow: string
  title: ReactNode
  children?: ReactNode
  className?: string
}

/** Consistent frame for every section in the strip. */
export function Section({ id, eyebrow, title, children, className = '' }: Props) {
  return (
    <section
      id={id}
      className={`strip-x relative min-h-svh bg-wine-900 py-28 lg:py-36 ${className}`}
    >
      <div className="mb-10 flex items-center gap-5" data-reveal>
        <span className="eyebrow">{eyebrow}</span>
        <span className="rule-gold w-24" />
      </div>
      <h2
        data-reveal
        className="max-w-[16ch] font-display text-5xl leading-[1.02] font-light text-cream-50 sm:text-6xl xl:text-6xl"
      >
        {title}
      </h2>
      <div className="mt-12 max-w-xl" data-reveal>
        {children}
      </div>
    </section>
  )
}
