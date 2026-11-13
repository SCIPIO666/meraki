import { Section } from '../components/Section'

export function About() {
  return (
    <Section id="about" eyebrow="03 — About" title={<>The <em className="font-normal text-gold-300">Meraki</em> way</>}>
      {/* TODO: clinic story, team, equipment, safety standards */}
      <p className="text-cream-100/70">
        Meraki — doing something with soul, creativity and love. The story, the team and the
        clinic go here.
      </p>
    </Section>
  )
}
