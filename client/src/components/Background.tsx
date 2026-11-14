import { site } from '../data/site'

/** Fixed full-viewport photo that stays put while the strip scrolls over it. */
export function Background() {
  return (
    <div aria-hidden className="fixed inset-0 z-0 overflow-hidden bg-wine-950">
      <img
        src={site.background}
        alt=""
        decoding="async"
        fetchPriority="high"
        className="size-full object-cover object-[50%_35%]"
      />
      {/* tint + legibility gradients for the logo and menu on the right */}
      <div className="absolute inset-0 bg-wine-950/25" />
      <div className="absolute inset-0 bg-linear-to-r from-wine-950/70 via-wine-950/10 to-transparent" />
      <div className="absolute inset-x-0 top-0 h-40 bg-linear-to-b from-wine-950/60 to-transparent" />
    </div>
  )
}
