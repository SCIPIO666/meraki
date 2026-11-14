import { ScrollCue } from '../components/ScrollCue'

/* ------------------------------------------------------------------
   TITLE CONTROLS: change these and save. Nothing else needs touching.
------------------------------------------------------------------- */
const TITLE_LINE_1 = 'Feel'
const TITLE_LINE_2 = 'effortless.'

/** 'left' | 'center' | 'right': where the title sits across the strip */
const TITLE_ALIGN: 'left' | 'center' | 'right' = 'center'

/** Nudge the title. Positive X moves right, positive Y moves down. Any CSS length. */
const TITLE_SHIFT_X = '0rem'
const TITLE_SHIFT_Y = '0rem'

/** Title size, any CSS length */
const TITLE_SIZE = 'clamp(3rem, 5.4vw, 6rem)'

const alignClass = {
  left: 'text-left',
  center: 'text-center',
  right: 'text-right',
} as const

/**
 * First block of the strip (id="home"): hook title with a short description
 * set lower and inset, the way krasalab.cz does it.
 * The title's position lives on a wrapper (left/top), not on the h1, because the
 * h1 is animated by GSAP and the animation would fight any transform put on it.
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

      <div className="relative" style={{ left: TITLE_SHIFT_X, top: TITLE_SHIFT_Y }}>
        <h1
          data-hero
          className={`font-display leading-[1.02] font-light text-cream-50 ${alignClass[TITLE_ALIGN]}`}
          style={{ fontSize: TITLE_SIZE }}
        >
          {TITLE_LINE_1}
          <br />
          <em className="font-normal text-gold-300">{TITLE_LINE_2}</em>
        </h1>
      </div>

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
