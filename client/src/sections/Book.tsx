import { Button } from '../components/Button'
import { Section } from '../components/Section'
import { site } from '../data/site'

export function Book() {
  return (
    <Section id="book" eyebrow="04 — Book" title={<>Book a <em className="font-normal text-gold-300">consultation</em></>}>
      {/* TODO: booking form / enquiry flow */}
      <Button variant="solid" href={site.whatsapp} target="_blank" rel="noreferrer">
        Message us on WhatsApp
      </Button>

      <dl className="mt-14 grid gap-8 text-sm sm:grid-cols-2">
        <div>
          <dt className="eyebrow mb-3">Visit</dt>
          <dd className="text-cream-100/80">{site.address}<br />Mombasa</dd>
        </div>
        <div>
          <dt className="eyebrow mb-3">Hours</dt>
          <dd className="text-cream-100/80">{site.hours}</dd>
        </div>
        <div>
          <dt className="eyebrow mb-3">Call</dt>
          <dd className="text-cream-100/80">
            {site.phones.map((p) => (
              <a key={p} href={`tel:${p.replace(/\s/g, '')}`} className="block hover:text-gold-300">{p}</a>
            ))}
          </dd>
        </div>
        <div>
          <dt className="eyebrow mb-3">Follow</dt>
          <dd><a href={site.instagram} target="_blank" rel="noreferrer" className="text-cream-100/80 hover:text-gold-300">@merakilasercenter</a></dd>
        </div>
      </dl>

      <p className="mt-20 text-[0.65rem] tracking-[0.25em] text-cream-100/40 uppercase">
        Concept by NuevaZen · Sample content
      </p>
    </Section>
  )
}
