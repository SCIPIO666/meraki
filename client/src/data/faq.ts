import { site } from './site'

export type Faq = { q: string; a: string }

/**
 * Laser hair removal answers come from the clinic's Instagram FAQ reel, the
 * Myth vs Fact post and the aftercare post. The last two are general
 * practical answers; confirm them with the client.
 */
export const faqs: readonly Faq[] = [
  {
    q: 'How many sessions will I need?',
    a: 'A minimum of 6 to 8 sessions, depending on how quickly your hair grows. We confirm your plan with you at the consultation.',
  },
  {
    q: 'How far apart are sessions?',
    a: 'Four to six weeks apart, so each session lines up with the hair growth cycle.',
  },
  {
    q: 'How long does each appointment take?',
    a: 'It depends on the area. A small area takes under 30 minutes, and bigger areas take about 40 minutes to an hour.',
  },
  {
    q: 'Should I shave before an appointment?',
    a: 'Yes. Shave the area first, and the closer to your appointment, the better.',
  },
  {
    q: 'Is laser hair removal painful?',
    a: 'Modern technology makes it comfortable, with minimal discomfort for most people.',
  },
  {
    q: 'Can I have laser treatment in summer?',
    a: 'Yes. With the right sun protection and aftercare, laser is safe all year round.',
  },
  {
    q: 'Does laser remove hair permanently in one session?',
    a: 'No. Hair grows in cycles, so multiple sessions are needed for the best results. Over time, growth reduces and thins out.',
  },
  {
    q: 'Is it safe?',
    a: 'Our technology is FDA-approved and clinically safe, and it is suitable for all skin types.',
  },
  {
    q: 'Is laser only for hair removal?',
    a: 'No. Laser treatments also help with skin rejuvenation, pigmentation and overall skin health. See Skin Rejuvenation above.',
  },
  {
    q: 'What should I avoid after a session?',
    a: 'Do not tweeze, wax or pluck between sessions. Shaving is the only safe method during your treatment cycle. Skip tight clothing for the first 24 to 48 hours and use SPF 30 to 50 daily.',
  },
  {
    q: 'How do I book, and what does it cost?',
    a: `Message us on WhatsApp or call ${site.phones[0]}. Every plan starts with a consultation, where we confirm the number of sessions and the price before you decide anything.`,
  },
  {
    q: 'Where are you, and when are you open?',
    a: `${site.address}. We are open ${site.hours.toLowerCase()}.`,
  },
]
