import { ScrollCue } from '../components/ScrollCue'
import { services } from '../data/site'

/**
 * First block of the strip (id="home"): centred hook title, a short
 * description, then the four services — laser hair removal leads.
 * Layout follows krasalab.cz: big title up top, paragraph set lower and inset.
 */
export function Intro() {
  return (
    <section
      id="home"
      className="strip-x relative flex min-h-svh flex-col justify-end pt-32 pb-14 lg:justify-start lg:bg-wine-900 lg:pt-28 lg:pb-24"
    >
      <ScrollCue />

      {/* mobile: let the fixed photo show through, fade into the strip colour */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-3/4 bg-linear-to-t from-wine-900 via-wine-900/85 to-transparent lg:hidden" />

      <h1
        data-hero
        className="relative text-center font-display text-[clamp(3rem,5.4vw,6rem)] leading-[1.02] font-light text-cream-50"
      >
        Feel
        <br />
        <em className="font-normal text-gold-300">effortless.</em>
      </h1>

      <div className="relative mx-auto mt-14 w-full max-w-[26rem] lg:mt-[clamp(4rem,14svh,9rem)]">
        <p data-hero className="text-base leading-relaxed text-cream-100/85 sm:text-[1.05rem]">
          Meraki Laser Center is a calm, welcoming clinic at Greenwood Village, Nyali.
          Laser hair removal is our signature treatment — and alongside it we offer skin
          rejuvenation, cryo fat freezing and weight management, so the care you need for
          how your skin and body feel is in one place.
        </p>

        <ul data-hero className="mt-10 grid grid-cols-2 gap-px bg-gold-500/25 text-sm">
          {services.map((s) => (
            <li key={s.name} className="relative bg-wine-900 px-4 py-5">
              {s.main && (
                <span className="eyebrow mb-2 block text-[0.6rem] text-gold-400">Our main service</span>
              )}
              <span className="font-display text-xl leading-tight text-cream-50">{s.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
