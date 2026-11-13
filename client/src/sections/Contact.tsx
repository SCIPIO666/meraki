import { Clock, MapPin, MessageCircle, Phone } from 'lucide-react'
import { useState, type FormEvent, type ReactNode } from 'react'
import { Button } from '../components/Button'
import { Section } from '../components/Section'
import { services, site, telHref } from '../data/site'

const field =
  'w-full border-0 border-b border-cream-100/35 bg-transparent py-3 text-base text-cream-50 placeholder:text-cream-100/45 transition-colors duration-500 focus:border-gold-400 focus:outline-none'

function Detail({ icon, label, children }: { icon: ReactNode; label: string; children: ReactNode }) {
  return (
    <li className="flex items-start gap-5">
      <span className="mt-0.5 shrink-0 text-gold-400">{icon}</span>
      <div>
        <p className="eyebrow">{label}</p>
        <div className="mt-3 leading-relaxed text-cream-100/90">{children}</div>
      </div>
    </li>
  )
}

/**
 * Contact details, a short enquiry form that opens WhatsApp with the message
 * already typed (no backend needed), and a map of Greenwood Village.
 */
export function Contact() {
  const [name, setName] = useState('')
  const [topic, setTopic] = useState('')
  const [note, setNote] = useState('')

  const submit = (e: FormEvent) => {
    e.preventDefault()
    const who = name.trim() ? `Hi Meraki, my name is ${name.trim()}.` : 'Hi Meraki,'
    const about = topic ? ` I'd like to book a consultation about ${topic}.` : " I'd like to book a consultation."
    const extra = note.trim() ? ` ${note.trim()}` : ''
    window.open(`${site.whatsapp}?text=${encodeURIComponent(who + about + extra)}`, '_blank', 'noopener,noreferrer')
  }

  return (
    <Section id="contact" title="Contact" className="border-t border-gold-500/15" bodyClassName="space-y-20 lg:space-y-28">
      <p className="mx-auto max-w-[27rem] text-center text-base leading-relaxed text-cream-100/85 sm:text-[1.05rem]">
        Book a consultation and we will talk you through your plan, how many sessions to expect and
        what it will cost, before you decide anything.
      </p>

      <ul className="m-0 mx-auto flex max-w-md list-none flex-col gap-10 p-0">
        <Detail icon={<MapPin strokeWidth={1} className="size-7" />} label="Visit us">
          <p>{site.address}</p>
          <a
            href={site.mapsLink}
            target="_blank"
            rel="noreferrer"
            className="mt-2 inline-block border-b border-gold-400/60 text-gold-300 transition-colors hover:text-gold-200"
          >
            Get directions
          </a>
        </Detail>
        <Detail icon={<Clock strokeWidth={1} className="size-7" />} label="Opening hours">
          <p>{site.hours}</p>
        </Detail>
        <Detail icon={<Phone strokeWidth={1} className="size-7" />} label="Call us">
          <p className="flex flex-col">
            {site.phones.map((p) => (
              <a key={p} href={telHref(p)} className="w-fit transition-colors hover:text-gold-200">
                {p}
              </a>
            ))}
          </p>
        </Detail>
        <Detail icon={<MessageCircle strokeWidth={1} className="size-7" />} label="Message us">
          <p className="flex flex-col">
            <a href={site.whatsapp} target="_blank" rel="noreferrer" className="w-fit transition-colors hover:text-gold-200">
              WhatsApp
            </a>
            <a href={site.instagram} target="_blank" rel="noreferrer" className="w-fit transition-colors hover:text-gold-200">
              Instagram, @merakilasercenter
            </a>
          </p>
        </Detail>
      </ul>

      <form onSubmit={submit} className="mx-auto max-w-md" aria-labelledby="enquiry-title">
        <h3 id="enquiry-title" className="text-center font-display text-3xl leading-[1.1] font-light text-cream-50 sm:text-4xl">
          Request a consultation
        </h3>
        <p className="mt-4 text-center text-sm text-cream-100/65">This opens WhatsApp with your message ready to send.</p>

        <div className="mt-10 flex flex-col gap-7">
          <label className="block">
            <span className="sr-only">Your name</span>
            <input
              type="text"
              name="name"
              autoComplete="name"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={field}
            />
          </label>
          <label className="block">
            <span className="sr-only">Treatment</span>
            <select
              name="topic"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              className={`${field} ${topic ? '' : 'text-cream-100/45'}`}
            >
              <option value="" className="bg-wine-900 text-cream-100">
                Treatment (optional)
              </option>
              {services.map((s) => (
                <option key={s.id} value={s.name.toLowerCase()} className="bg-wine-900 text-cream-50">
                  {s.name}
                </option>
              ))}
              <option value="a treatment I'm not sure about yet" className="bg-wine-900 text-cream-50">
                Not sure yet
              </option>
            </select>
          </label>
          <label className="block">
            <span className="sr-only">Anything we should know</span>
            <textarea
              name="note"
              rows={3}
              placeholder="Anything we should know, or a day that suits you"
              value={note}
              onChange={(e) => setNote(e.target.value)}
              className={`${field} resize-none`}
            />
          </label>
        </div>

        <div className="mt-10 flex justify-center">
          <Button type="submit" variant="solid">
            Send on WhatsApp
          </Button>
        </div>
      </form>

      <div className="-mx-[var(--strip-pad)]">
        <iframe
          title="Map: Meraki Laser Center, Greenwood Village, Nyali"
          src={site.mapsEmbed}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="block h-[22rem] w-full border-0 [filter:grayscale(1)_sepia(0.35)_contrast(0.95)] lg:h-[28rem]"
        />
      </div>
    </Section>
  )
}
