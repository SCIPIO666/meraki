import { site } from '../data/site'
import { ScrollCue } from '../components/ScrollCue'

export function Hero() {
  return (
    <section
      id="home"
      className="strip-x relative flex min-h-svh flex-col justify-end pt-32 pb-12 lg:justify-between lg:bg-wine-900 lg:pt-40 lg:pb-14"
    >
      <ScrollCue />

      {/* mobile: let the fixed photo show through, fade into the strip colour */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-2/3 bg-linear-to-t from-wine-900 via-wine-900/80 to-transparent lg:hidden" />

      <div className="relative">
        <div className="mb-8 flex items-center gap-5" data-hero>
          <span className="eyebrow">Laser Center · {site.area}</span>
          <span className="rule-gold w-20" />
        </div>

        <h1
          data-hero
          className="max-w-[12ch] font-display text-[clamp(3.25rem,5.4vw,6.25rem)] leading-[0.95] font-light text-cream-50"
        >
          Skin that feels <em className="font-normal text-gold-300">effortless.</em>
        </h1>

      </div>
    </section>
  )
}
