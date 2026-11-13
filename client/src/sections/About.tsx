import { Play, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Section } from '../components/Section'
import { useScroll } from '../lib/lenis-context'

/** Round play button with the clinic name running around it. */
function VideoButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label="Play video about Meraki"
      className="group relative grid size-32 shrink-0 place-items-center text-gold-400 sm:size-36"
    >
      <svg viewBox="0 0 200 200" aria-hidden className="absolute inset-0 size-full animate-[spin_22s_linear_infinite]">
        <defs>
          <path id="about-ring" d="M100,100 m-78,0 a78,78 0 1,1 156,0 a78,78 0 1,1 -156,0" />
        </defs>
        <text fill="currentColor" fontSize="17" className="font-display" textLength="488" lengthAdjust="spacing">
          <textPath href="#about-ring" textLength="488" lengthAdjust="spacing">
            MERAKI · LASER CENTER · MERAKI · LASER CENTER ·
          </textPath>
        </text>
      </svg>
      <Play
        fill="currentColor"
        strokeWidth={0}
        className="relative size-9 transition-transform duration-500 group-hover:scale-125"
      />
    </button>
  )
}

/** Video isn't ready yet, so the window just says so. */
function VideoModal({ onClose }: { onClose: () => void }) {
  const { stop, start } = useScroll()

  useEffect(() => {
    stop()
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    return () => {
      window.removeEventListener('keydown', onKey)
      start()
    }
  }, [onClose, stop, start])

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="About video"
      className="fixed inset-0 z-[90] grid place-items-center bg-wine-950/90 p-6"
      onClick={onClose}
    >
      <div
        className="relative grid aspect-video w-full max-w-3xl place-items-center border border-gold-400/50 bg-wine-900"
        onClick={(e) => e.stopPropagation()}
      >
        <p className="font-display text-3xl text-cream-100/80">Video coming soon</p>
        <button
          type="button"
          onClick={onClose}
          autoFocus
          aria-label="Close video"
          className="absolute top-3 right-3 grid size-10 place-items-center text-cream-50 transition-colors hover:text-gold-300"
        >
          <X strokeWidth={1.25} />
        </button>
      </div>
    </div>
  )
}

export function About() {
  const [playing, setPlaying] = useState(false)

  return (
    <Section id="about" title="About us">
      <div className="mx-auto max-w-[27rem] space-y-6 text-base leading-relaxed text-cream-100/85 sm:text-[1.05rem]">
        <p>
          Meraki Laser Center is on the first floor of Greenwood Village in Nyali. We opened
          with a simple idea: treatments should be explained properly, done carefully, and
          planned around the person in the chair.
        </p>
        <p>
          We have four treatment rooms, for laser hair removal, cryo fat freezing, HIFU and
          CO2 laser. Every plan starts with a consultation, so you know how many sessions to
          expect and what it will cost before you decide anything.
        </p>
      </div>

      <div className="mt-20 flex items-center justify-between gap-6 lg:mt-28">
        <p className="max-w-[10ch] font-display text-4xl leading-[1.08] font-light tracking-wide text-cream-50 uppercase sm:text-5xl">
          Watch a video about us
        </p>
        <VideoButton onClick={() => setPlaying(true)} />
      </div>

      {playing && <VideoModal onClose={() => setPlaying(false)} />}
    </Section>
  )
}
