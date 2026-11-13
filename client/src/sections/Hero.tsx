import { site } from '../data/site'
import { useScroll } from '../lib/lenis-context'

const services = ['Laser Hair Removal', 'Skin Rejuvenation', 'Cryo Fat Freezing', 'Weight Management']

export function Hero() {
  const { scrollTo } = useScroll()
  return (
    <section
      id="home"
      className="strip-x relative flex min-h-svh flex-col justify-end pt-32 pb-12 lg:justify-between lg:bg-wine-900 lg:pt-44 lg:pb-14"
    >
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

        <p data-hero className="mt-8 max-w-md text-base text-cream-100/80 sm:text-lg">
          Laser hair removal and skin rejuvenation in a calm, clinical space at Greenwood
          Village — with the facts, the process and a booking button in one place.
        </p>

        <div data-hero className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href={site.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="bg-gold-400 px-8 py-4 text-[0.75rem] tracking-[0.25em] text-wine-950 uppercase transition-colors duration-500 hover:bg-gold-200"
          >
            Book a consultation
          </a>
          <button
            type="button"
            onClick={() => scrollTo('treatments')}
            className="px-2 py-4 text-[0.75rem] tracking-[0.25em] text-cream-50 uppercase underline decoration-gold-500 underline-offset-8"
          >
            See treatments
          </button>
        </div>
      </div>

      <ul
        data-hero
        className="relative mt-16 flex flex-wrap gap-x-8 gap-y-2 border-t border-gold-500/30 pt-6 text-[0.7rem] tracking-[0.25em] text-cream-100/70 uppercase"
      >
        {services.map((s) => (
          <li key={s} className="flex items-center gap-3">
            <span className="size-1 rotate-45 bg-gold-400" />
            {s}
          </li>
        ))}
      </ul>
    </section>
  )
}
