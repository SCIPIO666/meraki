import { ServiceSection } from '../components/ServiceSection'
import { serviceContent } from '../data/serviceContent'
import { services } from '../data/site'

/** Laser hair removal first (it carries the most detail), then the other three. */
export function ServiceSections() {
  return (
    <>
      {services.map((s) => (
        <ServiceSection key={s.id} service={s} content={serviceContent[s.id]} />
      ))}
    </>
  )
}
