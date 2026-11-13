import { ChevronLeft, ChevronRight } from 'lucide-react'

type Props = {
  dir: 'prev' | 'next'
  onClick: () => void
  className?: string
  /** Accessible name noun, e.g. "review". Defaults to "photos". */
  label?: string
}

/** Round gold-outline arrow, used on the gallery and review sliders. */
export function Arrow({ dir, onClick, className = '', label = 'photos' }: Props) {
  const Icon = dir === 'prev' ? ChevronLeft : ChevronRight
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={`${dir === 'prev' ? 'Previous' : 'Next'} ${label}`}
      className={`absolute top-1/2 z-10 grid size-11 -translate-y-1/2 place-items-center rounded-full border border-gold-400 bg-wine-900 text-gold-300 transition-colors duration-500 hover:bg-gold-400 hover:text-wine-950 ${dir === 'prev' ? 'left-0' : 'right-0'} ${className}`}
    >
      <Icon strokeWidth={1.25} className="size-5" />
    </button>
  )
}
