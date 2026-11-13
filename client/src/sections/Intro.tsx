import { ScrollCue } from '../components/ScrollCue'

/**
 * First block of the strip (id="home"): centred hook title with a short
 * description set lower and inset, the way krasalab.cz does it.
 * The four services are named in the copy and listed properly further down.
 */
export function Intro() {
  return (
    <section
      id="home"
      className="strip-x relative flex min-h-svh flex-col justify-end pt-32 pb-14 lg:justify-start lg:bg-wine-900 lg:pt-28 lg:pb-24"
    >
      <ScrollCue target="gallery" />

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

      <div className="relative mx-auto mt-14 w-full max-w-[26rem] lg:mt-[clamp(4rem,16svh,10rem)]">
        <p data-hero className="text-base leading-relaxed text-cream-100/85 sm:text-[1.05rem]">
          Meraki is a quiet clinic on the first floor of Greenwood Village in Nyali. Most
          people come in for laser hair removal and plenty stay on for the rest: skin
          rejuvenation, cryo fat freezing and weight management. Four treatment rooms, one
          team, and a plan that starts with your skin.
        </p>
      </div>
    </section>
  )
}
