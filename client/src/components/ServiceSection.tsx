import type { ServiceContent } from '../data/serviceContent'
import { whatsappFor } from '../data/serviceContent'
import type { Service } from '../data/site'
import { Button } from './Button'
import { Section } from './Section'

type Props = { service: Service; content: ServiceContent }

const h3 =
  'mx-auto max-w-[20ch] text-center font-display text-3xl leading-[1.1] font-light text-cream-50 sm:text-4xl'

/**
 * One treatment: photo with an overlapping card, then whichever of the
 * benefits / what-to-expect / aftercare blocks the content defines.
 */
export function ServiceSection({ service, content }: Props) {
  const { benefits, points, timeline } = content
  return (
    <Section id={service.id} title={service.name} className="border-t border-gold-500/15" bodyClassName="space-y-24 lg:space-y-32">
      {/* photo + card */}
      <div>
        <div className="aspect-[4/3] w-full overflow-hidden bg-wine-800">
          <img
            src={service.image}
            alt={service.name}
            loading="lazy"
            decoding="async"
            className="size-full object-cover"
            style={{ objectPosition: content.imagePos }}
          />
        </div>
        <div className="relative z-10 mx-auto -mt-14 w-[calc(100%-2.5rem)] max-w-xl bg-cream-50 p-8 text-wine-900 lg:-mt-20 lg:p-12">
          <p className="text-base leading-relaxed text-wine-900/85 sm:text-[1.05rem]">{content.body}</p>
          <Button
            variant="ink"
            href={whatsappFor(content.topic)}
            target="_blank"
            rel="noreferrer"
            className="mt-8"
          >
            {content.cta}
          </Button>
        </div>
      </div>

      {benefits && (
        <div data-reveal>
          <h3 className={h3}>{benefits.title}</h3>
          <p className="mx-auto mt-6 max-w-md text-center leading-relaxed text-cream-100/80">{benefits.intro}</p>
          <ul className="mt-14 grid list-none grid-cols-1 gap-x-8 gap-y-12 p-0 sm:grid-cols-2">
            {benefits.items.map(({ icon: Icon, title, text }) => (
              <li key={title} className="flex flex-col items-center text-center">
                <span className="grid size-16 place-items-center rounded-full border border-gold-400/60 text-gold-300">
                  <Icon strokeWidth={1} className="size-7" />
                </span>
                <h4 className="mt-5 font-display text-2xl text-cream-50">{title}</h4>
                <p className="mt-2 max-w-[17rem] text-sm leading-relaxed text-cream-100/75">{text}</p>
              </li>
            ))}
          </ul>
        </div>
      )}

      {points && (
        <div
          data-reveal
          className="-mx-[var(--strip-pad)] bg-wine-800/70 px-(--strip-pad) py-16 lg:py-20"
        >
          <h3 className={h3}>{points.title}</h3>
          <ul className="mx-auto mt-12 flex max-w-lg list-none flex-col gap-6 p-0">
            {points.items.map(({ icon: Icon, text }) => (
              <li key={text} className="flex items-start gap-5">
                <Icon strokeWidth={1} className="mt-0.5 size-7 shrink-0 text-gold-400" />
                <span className="leading-relaxed text-cream-100/90">{text}</span>
              </li>
            ))}
          </ul>
          {points.closing && (
            <p className="mx-auto mt-10 max-w-lg leading-relaxed text-cream-100/75">{points.closing}</p>
          )}
        </div>
      )}

      {timeline && (
        <div data-reveal>
          <h3 className={h3}>{timeline.title}</h3>

          {timeline.before && (
            <div className="mx-auto mt-12 max-w-lg border border-gold-400/40 p-6">
              <p className="font-display text-2xl text-gold-300">{timeline.before.title}</p>
              <p className="mt-2 leading-relaxed text-cream-100/85">{timeline.before.text}</p>
            </div>
          )}

          <ol className="mx-auto mt-12 flex max-w-lg list-none flex-col gap-10 border-l border-gold-500/40 p-0 pl-8">
            {timeline.steps.map((s) => (
              <li key={s.when} className="relative">
                <span aria-hidden className="absolute top-2.5 -left-[2.3rem] size-2 rounded-full bg-gold-400" />
                <p className="font-display text-2xl text-gold-300">{s.when}</p>
                <p className="mt-2 leading-relaxed text-cream-100/85">{s.text}</p>
              </li>
            ))}
          </ol>

          {timeline.avoid && (
            <p className="mx-auto mt-12 max-w-lg bg-cream-100/10 p-6 leading-relaxed text-cream-50">
              <span className="font-display text-xl text-gold-300">What to avoid. </span>
              {timeline.avoid}
            </p>
          )}
        </div>
      )}
    </Section>
  )
}
