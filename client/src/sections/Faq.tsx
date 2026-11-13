import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Plus } from 'lucide-react'
import { useId, useState } from 'react'
import { Button } from '../components/Button'
import { Section } from '../components/Section'
import { faqs } from '../data/faq'
import { site } from '../data/site'

/** Accordion, one answer open at a time. The first is open so the section never looks empty. */
export function Faq() {
  const [open, setOpen] = useState<number | null>(0)
  const uid = useId()

  return (
    <Section id="faq" title="FAQ" className="border-t border-gold-500/15">
      <ul className="m-0 list-none p-0">
        {faqs.map((f, k) => {
          const on = open === k
          const btn = `${uid}-b${k}`
          const panel = `${uid}-p${k}`
          return (
            <li key={f.q} className="border-b border-cream-100/20 first:border-t">
              <h3 className="m-0">
                <button
                  type="button"
                  id={btn}
                  aria-expanded={on}
                  aria-controls={panel}
                  onClick={() => setOpen(on ? null : k)}
                  className="group flex w-full items-center justify-between gap-6 py-6 text-left"
                >
                  <span
                    className={`font-display text-[1.45rem] leading-snug font-light transition-colors duration-500 sm:text-2xl ${on ? 'text-gold-300' : 'text-cream-50 group-hover:text-gold-200'}`}
                  >
                    {f.q}
                  </span>
                  <Plus
                    strokeWidth={1}
                    aria-hidden
                    className={`size-7 shrink-0 text-gold-400 transition-transform duration-500 ease-out-expo ${on ? 'rotate-45' : ''}`}
                  />
                </button>
              </h3>
              <div
                id={panel}
                role="region"
                aria-labelledby={btn}
                className="grid transition-[grid-template-rows] duration-700 ease-out-expo"
                style={{ gridTemplateRows: on ? '1fr' : '0fr' }}
                onTransitionEnd={(e) => {
                  // Page height changed, so re-measure the scroll triggers below.
                  if (e.target === e.currentTarget) ScrollTrigger.refresh()
                }}
              >
                <div className="min-h-0 overflow-hidden">
                  <p className="max-w-md pb-7 leading-relaxed text-cream-100/80">{f.a}</p>
                </div>
              </div>
            </li>
          )
        })}
      </ul>

      <div className="mt-16 flex flex-col items-center gap-6 text-center">
        <p className="font-display text-3xl text-cream-50">Still wondering about something?</p>
        <Button
          href={`${site.whatsapp}?text=${encodeURIComponent('Hi Meraki, I have a question about a treatment.')}`}
          target="_blank"
          rel="noreferrer"
        >
          Ask on WhatsApp
        </Button>
      </div>
    </Section>
  )
}
