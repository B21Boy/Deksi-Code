// Add real testimonials to this list. Fields:
//   name, role      who said it
//   description     the testimonial text (two or three sentences work best)
//   initials        shown when there is no photo
//   stat            short tag on the card, for example the project or the result
//   accent          a light colour used for the avatar, glow and tag dot
//   image           optional photo, for example '/testimonials/name.jpg' (put files in public/)
//
// The three entries below are DRAFTS: the wording was written for you, not by these people.
// They are marked `placeholder: true`, so they appear while you run `npm run dev` (to work on
// the design) and are hidden from the production build. Before publishing, send each person
// their draft (or ask for their own words), and once they agree, edit the text and delete
// `placeholder: true`. A quote is only a testimonial when the person really said it.
// Set SHOW_PLACEHOLDERS to true to show drafts in production as well (not recommended).
const SHOW_PLACEHOLDERS = import.meta.env.DEV

export const testimonials = [
  {
    name: 'Selam Habtamu',
    role: 'Client, Pharmacy Medicine Management App',
    description:
      'Deksiyos built my pharmacy management app with stock tracking, sales reports and an AI assistant. It is easy to use every day, and he listened closely to what I needed.',
    initials: 'SH',
    stat: 'Pharmacy app',
    accent: '#78dcca',
    placeholder: true,
  },
  {
    name: 'Temesgen Teshome',
    role: 'Final-Year Project Advisor, Bahir Dar University',
    description:
      'As his final-year project advisor, I watched Deksiyos work independently, take feedback seriously and turn ideas into working software.',
    initials: 'TT',
    stat: 'Final-year project',
    accent: '#f3f1ea',
    placeholder: true,
  },
  {
    name: 'Yafet Tilahun',
    role: 'Client, Lottery System',
    description:
      'Deksiyos built my lottery system with ticket sales, payment proof upload and results. It runs smoothly, and he was responsive whenever I asked for changes.',
    initials: 'YT',
    stat: 'Lottery system',
    accent: '#f8d66d',
    placeholder: true,
  },
]

export const visibleTestimonials = testimonials.filter(
  (item) => !item.placeholder || SHOW_PLACEHOLDERS,
)

export const hasPlaceholders = visibleTestimonials.some((item) => item.placeholder)
