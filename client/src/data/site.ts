export const site = {
  name: 'Meraki',
  tagline: 'Laser Center',
  area: 'Nyali, Mombasa',
  address: '1st Floor, Greenwood Village, Nyali, Mombasa',
  hours: 'Every day, 8:30am – 6pm',
  phones: ['0722 891 100', '0742 337 656'],
  // TODO: confirm the WhatsApp-enabled number with the client
  whatsapp: 'https://wa.me/254722891100',
  instagram: 'https://www.instagram.com/merakilasercenter/',
  mapsLink: 'https://www.google.com/maps/search/?api=1&query=Greenwood+Village+Nyali+Mombasa',
  mapsEmbed: 'https://www.google.com/maps?q=Greenwood+Village+Nyali+Mombasa&output=embed',
  /** Public path of the fixed background photo */
  background: '/background/background2.jpg',
} as const

export type Service = {
  /** Section id and nav anchor */
  id: string
  name: string
  /** One-line description used on listing cards */
  blurb: string
  /** Hover image on the services list, and the lead image in its own section */
  image: string
  main: boolean
}

/** The four services offered. Laser hair removal is the main one. */
export const services: readonly Service[] = [
  {
    id: 'laser-hair-removal',
    name: 'Laser Hair Removal',
    blurb: 'Long-term hair reduction on every area, safe and effective on deeper skin tones.',
    image: '/services/laser-hair-removal.jpg',
    main: true,
  },
  {
    id: 'skin-rejuvenation',
    name: 'Skin Rejuvenation',
    blurb: 'HIFU and CO2 laser treatments for texture, tone, firmness and clarity.',
    image: '/services/skin-rejuvenation-facial.jpg',
    main: false,
  },
  {
    id: 'cryo-fat-freezing',
    name: 'Cryo Fat Freezing',
    blurb: 'A non-surgical way to reduce stubborn fat in the areas diet and exercise miss.',
    image: '/services/cryo-fat-freezing-treatment.jpg',
    main: false,
  },
  {
    id: 'weight-management',
    name: 'Weight Management',
    blurb: 'Supportive, judgement-free plans built around how you want to feel.',
    image: '/services/weight-management-wellness.jpg',
    main: false,
  },
]

export type NavItem = {
  id: string
  label: string
  /** Shown nested under the parent (desktop expands while the parent is in view) */
  children?: readonly { id: string; label: string }[]
}

/** Order here matches the order of the sections on the page. */
export const navItems: readonly NavItem[] = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  {
    id: 'services',
    label: 'Services',
    children: services.map((s) => ({ id: s.id, label: s.name })),
  },
  { id: 'reviews', label: 'Reviews' },
  { id: 'faq', label: 'FAQ' },
  { id: 'contact', label: 'Contact' },
]

/** Every anchor the scroll-spy should watch, in page order. */
export const sectionIds: readonly string[] = navItems.flatMap((n) => [
  n.id,
  ...(n.children?.map((c) => c.id) ?? []),
])

export const serviceIds: readonly string[] = services.map((s) => s.id)

/** '0722 891 100' -> 'tel:+254722891100' */
export const telHref = (phone: string) => `tel:+254${phone.replace(/\s/g, '').replace(/^0/, '')}`
