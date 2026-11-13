import type { LucideIcon } from 'lucide-react'
import {
  CalendarDays,
  Clock,
  Droplet,
  Hourglass,
  ShieldCheck,
  Sparkles,
  Wallet,
} from 'lucide-react'
import { site } from './site'

/** WhatsApp link with a ready-typed message about one treatment. */
export const whatsappFor = (topic: string) =>
  `${site.whatsapp}?text=${encodeURIComponent(`Hi Meraki, I'd like to know more about ${topic}.`)}`

export type ServiceContent = {
  /** Matches a service id in site.ts */
  id: string
  /** Hero paragraph inside the card */
  body: string
  cta: string
  /** Used in the WhatsApp message */
  topic: string
  /** CSS object-position for the hero photo */
  imagePos?: string
  benefits?: {
    title: string
    intro: string
    items: { icon: LucideIcon; title: string; text: string }[]
  }
  points?: {
    title: string
    items: { icon: LucideIcon; text: string }[]
    closing?: string
  }
  timeline?: {
    title: string
    before?: { title: string; text: string }
    steps: { when: string; text: string }[]
    avoid?: string
  }
}

export const serviceContent: Record<string, ServiceContent> = {
  'laser-hair-removal': {
    id: 'laser-hair-removal',
    body:
      'Tired of constant shaving? Laser hair removal reduces hair growth for the long term, on any area from a small patch to the whole body. Our technology is FDA-approved and suitable for all skin types, and every plan is set up with you after a consultation.',
    cta: 'Ask about pricing',
    topic: 'laser hair removal pricing',
    imagePos: '50% 30%',
    benefits: {
      title: 'Ditch the razor',
      intro:
        'Treating a whole area at once is quicker, and over the years cheaper, than shaving or waxing again and again.',
      items: [
        {
          icon: Hourglass,
          title: 'Long-term reduction',
          text: 'Each session weakens the hair follicle, so growth slows and thins out over time.',
        },
        {
          icon: Sparkles,
          title: 'Smooth skin',
          text: 'No stubble by mid-afternoon and no rough patches. Skin that feels good to the touch.',
        },
        {
          icon: Droplet,
          title: 'No more razor bumps',
          text: 'Cuts, burns and ingrown hairs mostly stop once you stop shaving and waxing.',
        },
        {
          icon: Wallet,
          title: 'Saves money',
          text: 'Razors, waxing appointments and the time they take add up. A treatment plan replaces all of it.',
        },
      ],
    },
    points: {
      title: 'What to expect',
      items: [
        { icon: Hourglass, text: 'Most people need a minimum of 6 to 8 sessions, depending on how quickly their hair grows.' },
        { icon: CalendarDays, text: 'Sessions are spaced 4 to 6 weeks apart, so the treatment follows the hair growth cycle.' },
        { icon: Clock, text: 'A small area takes under 30 minutes. Larger areas take about 40 minutes to an hour.' },
        { icon: ShieldCheck, text: 'With the right protection and aftercare, laser is safe all year round, summer included.' },
      ],
      closing:
        'We go through your plan with you at a consultation, before you commit to anything.',
    },
    timeline: {
      title: 'Before and after your session',
      before: {
        title: 'Before you come in',
        text: 'Shave the area first. The closer to your appointment, the better.',
      },
      steps: [
        {
          when: 'First 24 to 48 hours',
          text: 'Skip tight clothing. Avoid makeup, deodorant and heavily scented lotions on the treated area.',
        },
        {
          when: 'Days 3 to 7',
          text: 'Treated hairs begin to shed. A mild scrub after a few days helps them along and prevents ingrown hairs.',
        },
        {
          when: 'Every day',
          text: 'Keep treated skin out of direct sun for at least 2 weeks and wear a broad-spectrum SPF 30 to 50.',
        },
      ],
      avoid:
        'Do not tweeze, wax or pluck between sessions. Shaving is the only safe way to remove hair during your treatment cycle.',
    },
  },

  'skin-rejuvenation': {
    id: 'skin-rejuvenation',
    body:
      'Skin that looks rested, firmer and clearer. We use HIFU to lift and tighten, and CO2 laser to work on texture, scars and fine lines. Which one suits you depends on your skin, and we will tell you honestly after a consultation.',
    cta: 'Book a skin consultation',
    topic: 'skin rejuvenation',
    imagePos: '50% 25%',
    benefits: {
      title: 'What it can do for your skin',
      intro: 'Two different treatments, each for a different job.',
      items: [
        { icon: Sparkles, title: 'Fine lines and wrinkles', text: 'HIFU helps soften fine lines and wrinkles without needles or surgery.' },
        { icon: ShieldCheck, title: 'Lifted, tighter skin', text: 'Non-invasive HIFU stimulates collagen to lift and tighten.' },
        { icon: Droplet, title: 'Jawline definition', text: 'A cleaner, more defined jawline, with natural-looking results.' },
        { icon: Hourglass, title: 'Texture and scars', text: 'CO2 laser works on texture, scarring and fine lines for overall skin renewal.' },
      ],
    },
    timeline: {
      title: 'How it works',
      steps: [
        { when: 'Skin check', text: 'We look at your skin, ask about your goals, and tell you whether HIFU, CO2 laser or both make sense.' },
        { when: 'Your treatment', text: 'We explain each step and what you will feel before we start.' },
        { when: 'Afterwards', text: 'You leave with clear aftercare instructions, including sun protection, so the results last.' },
      ],
    },
  },

  'cryo-fat-freezing': {
    id: 'cryo-fat-freezing',
    body:
      'A non-surgical way to reduce stubborn fat in the areas that diet and exercise do not shift. It is about contouring, not weight loss, and we will say so plainly if it is not the right fit for you.',
    cta: 'Ask about cryo',
    topic: 'cryo fat freezing',
    imagePos: '50% 40%',
    benefits: {
      title: 'Sculpt, slim, refresh',
      intro: 'Cryo works on specific areas, so it suits people who are already close to where they want to be.',
      items: [
        { icon: Sparkles, title: 'Targets stubborn areas', text: 'Freezing is aimed at one area at a time, like the stomach, flanks or thighs.' },
        { icon: ShieldCheck, title: 'No surgery', text: 'No incisions and no general anaesthetic.' },
        { icon: Droplet, title: 'Contouring', text: 'Helps refine your shape and supports the body goals you already have.' },
        { icon: Hourglass, title: 'Planned for you', text: 'Areas, number of sessions and timing are agreed after a consultation.' },
      ],
    },
  },

  'weight-management': {
    id: 'weight-management',
    body:
      'A steady, judgement-free plan built around your body, your routine and how you want to feel. We start with a conversation, not a number on a scale.',
    cta: 'Talk to us',
    topic: 'weight management',
    imagePos: '50% 30%',
    points: {
      title: 'How we work with you',
      items: [
        { icon: ShieldCheck, text: 'A personal plan, not a one-size-fits-all programme.' },
        { icon: CalendarDays, text: 'Regular check-ins so the plan changes as you do.' },
        { icon: Sparkles, text: 'Realistic goals, agreed with you from the first visit.' },
        { icon: Clock, text: 'Can sit alongside cryo fat freezing and skin treatments if you want them together.' },
      ],
      closing: 'Start with a chat on WhatsApp and we will take it from there.',
    },
  },
}
