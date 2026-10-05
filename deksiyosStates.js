// The character's pose + expression for each moment of the site. Each entry is:
//   brows   'level' | 'raised' | 'up-one' | 'worried' | 'focused'
//   eyes    'normal' | 'wide' | 'narrow'
//   mouth   'neutral' | 'smile' | 'grin' | 'flat' | 'open' | 'small'
//   tilt    head tilt in degrees, small values read as alert/attentive
//   hand    'none' | 'chin' | 'wave' | 'ear' | 'neck'  (which gesture layer to draw)
//   line    a short caption shown in the companion's speech bubble
export const states = {
  neutral: {
    brows: 'level',
    eyes: 'normal',
    mouth: 'neutral',
    tilt: 0,
    hand: 'none',
    line: "Hi, I'm Deksi.",
  },
  curious: {
    brows: 'up-one',
    eyes: 'normal',
    mouth: 'smile',
    tilt: -6,
    hand: 'none',
    line: 'A bit about me.',
  },
  focused: {
    brows: 'focused',
    eyes: 'narrow',
    mouth: 'flat',
    tilt: 3,
    hand: 'none',
    line: 'On the job.',
  },
  thinking: {
    brows: 'up-one',
    eyes: 'normal',
    mouth: 'flat',
    tilt: -4,
    hand: 'chin',
    line: 'The journey so far.',
  },
  proud: {
    brows: 'level',
    eyes: 'normal',
    mouth: 'grin',
    tilt: 0,
    hand: 'wave',
    line: 'Some things I built.',
  },
  surprised: {
    brows: 'raised',
    eyes: 'wide',
    mouth: 'open',
    tilt: 0,
    hand: 'none',
    line: 'AI in the mix, too.',
  },
  concerned: {
    brows: 'worried',
    eyes: 'normal',
    mouth: 'small',
    tilt: 4,
    hand: 'neck',
    line: "Oh — that one's local only.",
  },
  attentive: {
    brows: 'level',
    eyes: 'normal',
    mouth: 'smile',
    tilt: -5,
    hand: 'ear',
    line: 'People I worked with.',
  },
  determined: {
    brows: 'level',
    eyes: 'normal',
    mouth: 'grin',
    tilt: 0,
    hand: 'wave',
    line: "Let's work together.",
  },
}

// Canonical top-to-bottom order of the states sections register with. Used only
// to break ties when two adjacent sections' observers fire in the same tick
// (e.g. the exact pixel where one section ends and the next begins) — the
// section further down the page wins, since that's the one the user is
// scrolling toward.
export const sectionOrder = [
  'neutral',
  'curious',
  'focused',
  'thinking',
  'proud',
  'surprised',
  'attentive',
  'determined',
]
