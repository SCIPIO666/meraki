import { useScroll } from '../lib/lenis-context'

/**
 * Mouse icon ringed by two hand-drawn-looking gold circles, straddling the
 * top edge of the strip. Desktop only; clicking scrolls to the next section.
 */
export function ScrollCue({ target = 'treatments' }: { target?: string }) {
  const { scrollTo } = useScroll()
  return (
    <button
      type="button"
      aria-label="Scroll down"
      onClick={() => scrollTo(target)}
      className="absolute top-0 left-1/2 z-20 hidden size-20 -translate-x-1/2 -translate-y-1/2 place-items-center lg:grid"
    >
      <span
        aria-hidden
        className="absolute inset-0 animate-sketch-a rounded-[50%_48%_52%_50%/52%_50%_50%_48%] border border-gold-400"
      />
      <span
        aria-hidden
        className="absolute inset-0 translate-x-[3px] -translate-y-[3px] scale-[1.06] animate-sketch-b rounded-[48%_52%_50%_50%/50%_48%_52%_50%] border border-gold-400/80"
      />
      <span aria-hidden className="relative flex h-7 w-[1.1rem] justify-center rounded-full bg-cream-50 pt-1.5">
        <span className="h-1.5 w-[3px] animate-wheel rounded-full bg-wine-900" />
      </span>
    </button>
  )
}
