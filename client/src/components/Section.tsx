import type { ReactNode } from 'react'

type Props = {
  id: string
  title: ReactNode
  children?: ReactNode
  className?: string
  /** Extra classes for the inner content wrapper */
  bodyClassName?: string
}

/**
 * Frame for every section in the strip: a centred heading, then the content.
 * Sections are told apart by size and spacing, not by numbers or labels.
 */
export function Section({ id, title, children, className = '', bodyClassName = '' }: Props) {
  return (
    <section id={id} className={`strip-x relative bg-wine-900 py-24 lg:py-32 ${className}`}>
      <h2
        data-reveal
        className="mx-auto text-center font-display text-5xl leading-[1.05] font-light text-cream-50 sm:text-6xl"
      >
        {title}
      </h2>
      {children ? (
        <div className={`mt-14 lg:mt-20 ${bodyClassName}`} data-reveal>
          {children}
        </div>
      ) : null}
    </section>
  )
}
