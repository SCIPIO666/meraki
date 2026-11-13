import { Section } from '../components/Section'

// TODO: replace one-liners with the client's approved treatment copy
const treatments = [
  ['Laser Hair Removal', 'Smooth skin with a treatment plan built around your skin and hair type.'],
  ['Skin Rejuvenation', 'Targeted care for tone, texture and everyday skin concerns.'],
  ['LED Light Therapy', 'One device, many treatment menus — from acne and redness to ageing skin.'],
  ['Cryo Fat Freezing', 'Non-invasive body contouring, explained clearly before you commit.'],
  ['Weight Management', 'Guided support alongside your treatments.'],
]

export function Treatments() {
  return (
    <Section id="treatments" eyebrow="01 — Treatments" title={<>What we <em className="font-normal text-gold-300">do</em></>}>
      <ul className="divide-y divide-gold-500/25 border-y border-gold-500/25">
        {treatments.map(([name, blurb]) => (
          <li key={name} className="group flex flex-col gap-1 py-6 sm:flex-row sm:items-baseline sm:gap-8">
            <h3 className="font-display text-2xl text-cream-50 transition-colors duration-500 group-hover:text-gold-300 sm:w-56 sm:shrink-0">
              {name}
            </h3>
            <p className="text-sm text-cream-100/70">{blurb}</p>
          </li>
        ))}
      </ul>
    </Section>
  )
}
