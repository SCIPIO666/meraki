export type Review = {
  quote: string
  name: string
  treatment: string
}

/**
 * SAMPLE PLACEHOLDERS. These are not real client words.
 * Replace every entry with a real, permissioned review before the site goes live
 * (Instagram DMs, Google reviews, WhatsApp messages), then set `reviewsAreSamples`
 * to false to remove the "sample" note under the slider.
 */
export const reviewsAreSamples = true

export const reviews: readonly Review[] = [
  {
    quote:
      'Everything was explained before we started: how many sessions, how long, what it would cost. I never felt rushed or unsure.',
    name: 'Amina K.',
    treatment: 'Laser Hair Removal',
  },
  {
    quote:
      'I was tired of razor bumps. A few sessions in, my skin is smoother and I have stopped thinking about shaving.',
    name: 'Brian O.',
    treatment: 'Laser Hair Removal',
  },
  {
    quote:
      'The aftercare advice was clear and practical, so I knew exactly what to do and what to avoid in the days after.',
    name: 'Faith M.',
    treatment: 'Laser Hair Removal',
  },
  {
    quote:
      'Calm, clean and private. The team talked me through the HIFU plan and checked in with me afterwards.',
    name: 'Zawadi S.',
    treatment: 'Skin Rejuvenation',
  },
  {
    quote:
      'I wanted a gentle place to start and someone who would be honest with me. That is what I found.',
    name: 'Grace W.',
    treatment: 'Weight Management',
  },
]
