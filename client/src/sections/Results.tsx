import { Section } from '../components/Section'

export function Results() {
  return (
    <Section id="results" eyebrow="02 — Results" title={<>Real people, <em className="font-normal text-gold-300">real results</em></>}>
      {/* TODO: before/after gallery + testimonials. Pitch demo: label quotes as sample placeholders. */}
      <p className="text-cream-100/70">
        Results and safety information live here, so a client can decide before she ever
        sends a message.
      </p>
    </Section>
  )
}
