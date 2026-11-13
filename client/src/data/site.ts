export const site = {
  name: 'Meraki',
  tagline: 'Laser Center',
  area: 'Nyali, Mombasa',
  address: '1st Floor, Greenwood Village, Nyali',
  hours: '8:30am – 6pm',
  phones: ['0722 891 100', '0742 337 656'],
  // TODO: confirm the WhatsApp-enabled number with the client
  whatsapp: 'https://wa.me/254722891100',
  instagram: 'https://www.instagram.com/merakilasercenter/',
  /** Public path of the fixed background photo */
  background: '/background/background2.jpg',
} as const

/** The four services offered — laser hair removal is the main one. */
export const services = [
  { name: 'Laser Hair Removal', main: true },
  { name: 'Skin Rejuvenation', main: false },
  { name: 'Cryo Fat Freezing', main: false },
  { name: 'Weight Management', main: false },
] as const

export const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'treatments', label: 'Treatments' },
  { id: 'results', label: 'Results' },
  { id: 'about', label: 'About' },
  { id: 'book', label: 'Book' },
] as const

export type SectionId = (typeof navItems)[number]['id']
