const BROWS = {
  level: { left: 'M56,64 Q64,61 72,64', right: 'M88,64 Q96,61 104,64' },
  raised: { left: 'M55,57 Q64,52 73,57', right: 'M87,57 Q96,52 105,57' },
  'up-one': { left: 'M55,57 Q64,52 73,57', right: 'M88,64 Q96,61 104,64' },
  worried: { left: 'M56,61 L73,67', right: 'M87,67 L104,61' },
  focused: { left: 'M56,68 L73,60', right: 'M87,60 L104,68' },
}

const EYE_RY = { normal: 7, narrow: 4, wide: 9 }

const MOUTHS = {
  neutral: <path className="dk-mouth-line" d="M70,98 Q80,101 90,98" />,
  flat: <path className="dk-mouth-line" d="M72,99 L88,99" />,
  small: <path className="dk-mouth-line" d="M73,100 Q80,102 87,100" />,
  open: <ellipse className="dk-mouth-open" cx="80" cy="99" rx="5" ry="6" />,
  smile: <path className="dk-mouth-line" d="M67,96 Q80,107 93,96" />,
  grin: <path className="dk-mouth-grin" d="M64,95 Q80,112 96,95 Q80,102 64,95 Z" />,
}

// Each hand gesture is a sleeve (reaching from the shoulder) plus a rounded
// "mitt" at the target — a deliberately simplified, flat-illustration hand
// rather than an attempt at anatomical realism.
const HANDS = {
  chin: (
    <g className="dk-hand">
      <path d="M97,152 Q113,130 101,104 Q99,99 93,99 Q87,101 89,111 Q91,124 97,152 Z" />
      <circle cx="92" cy="101" r="10" />
    </g>
  ),
  wave: (
    <g className="dk-hand">
      <path d="M112,158 Q134,146 140,118 Q141,111 135,109 Q129,109 127,117 Q121,136 112,158 Z" />
      <circle cx="132" cy="108" r="11" />
      <path className="dk-hand-crease" d="M126,101 L128,110 M133,99 L134,109 M139,102 L138,111" />
    </g>
  ),
  ear: (
    <g className="dk-hand">
      <path d="M108,158 Q128,142 118,108 Q116,101 110,102 Q104,104 106,113 Q109,134 108,158 Z" />
      <circle cx="113" cy="79" r="9" />
    </g>
  ),
  neck: (
    <g className="dk-hand">
      <path d="M100,156 Q118,138 106,112 Q103,106 97,108 Q92,111 95,119 Q100,136 100,156 Z" />
      <circle cx="98" cy="110" r="9" />
    </g>
  ),
}

/**
 * Deksiyos, the portfolio's companion character.
 *
 * pose        one of src/companion/deksiyosStates.js's entries (brows/eyes/mouth/tilt/hand)
 * lookX/lookY -1..1, nudges where the pupils sit (a cheap "looking at the cursor" effect)
 * blink       true for one animation cycle to close and reopen the eyes
 */
export default function Deksiyos({ pose, lookX = 0, lookY = 0, blink = false }) {
  const brow = BROWS[pose.brows] ?? BROWS.level
  const eyeRy = EYE_RY[pose.eyes] ?? EYE_RY.normal
  const mouth = MOUTHS[pose.mouth] ?? MOUTHS.neutral
  const hand = HANDS[pose.hand]
  const pupilX = Math.max(-1, Math.min(1, lookX)) * 3.6
  const pupilY = Math.max(-1, Math.min(1, lookY)) * 2.4

  return (
    <svg className="deksiyos-figure" viewBox="0 0 160 180" aria-hidden="true">
      {/* ----- torso / hoodie ----- */}
      <path
        className="dk-hood-collar"
        d="M48,144 Q80,116 112,144 L112,160 Q80,134 48,160 Z"
      />
      <path className="dk-torso" d="M12,180 Q8,128 40,120 Q80,108 120,120 Q152,128 148,180 Z" />
      <path className="dk-torso-seam" d="M18,166 Q80,178 142,166" />
      <g className="dk-strings">
        <line x1="72" y1="126" x2="69" y2="150" />
        <circle cx="69" cy="151" r="2.6" />
        <line x1="88" y1="126" x2="91" y2="150" />
        <circle cx="91" cy="151" r="2.6" />
      </g>

      {/* ----- smartwatch (always visible, signature detail) ----- */}
      <g className="dk-watch">
        <rect x="118" y="157" width="24" height="21" rx="8" className="dk-skin" />
        <rect x="120" y="162" width="19" height="10" rx="3" className="dk-watch-band" />
        <rect x="124.5" y="164.5" width="10" height="5" rx="1.4" className="dk-watch-face" />
      </g>

      {/* ----- head group (tilts as a whole) ----- */}
      <g style={{ transform: `rotate(${pose.tilt}deg)`, transformOrigin: '80px 112px' }}>
        <path d="M66,98 L94,98 L90,128 L70,128 Z" className="dk-skin" />
        <ellipse cx="48" cy="80" rx="6" ry="9" className="dk-skin" />
        <ellipse cx="112" cy="80" rx="6" ry="9" className="dk-skin" />
        <ellipse cx="80" cy="76" rx="34" ry="39" className="dk-skin" />

        {/* stubble */}
        <path
          className="dk-stubble"
          d="M50,86 Q80,122 110,86 Q80,106 50,86 Z"
        />

        {/* hair */}
        <path
          className="dk-hair"
          d="M45,74 Q38,36 62,26 Q80,16 98,26 Q122,36 115,74
             Q112,52 104,56 Q98,44 90,54 Q84,40 76,52
             Q70,42 62,54 Q54,46 48,58 Q44,64 45,74 Z"
        />
        <path className="dk-hair" d="M42,66 Q40,84 47,96 Q40,84 42,66 Z" />
        <path className="dk-hair" d="M118,66 Q120,84 113,96 Q120,84 118,66 Z" />

        {/* earbuds */}
        <circle cx="45" cy="77" r="4" className="dk-earbud" />
        <circle cx="115" cy="77" r="4" className="dk-earbud" />

        {/* eyes */}
        <g className="dk-eye">
          <ellipse cx="64" cy="78" rx="9" ry={eyeRy} />
          <circle
            className="dk-pupil"
            cx={64 + pupilX}
            cy={78 + pupilY}
            r="3.4"
          />
        </g>
        <g className="dk-eye">
          <ellipse cx="96" cy="78" rx="9" ry={eyeRy} />
          <circle
            className="dk-pupil"
            cx={96 + pupilX}
            cy={78 + pupilY}
            r="3.4"
          />
        </g>
        <rect x="53" y="70" width="22" height="16" rx="8" className="dk-eyelid" data-blink={blink} />
        <rect x="85" y="70" width="22" height="16" rx="8" className="dk-eyelid" data-blink={blink} />

        {/* eyebrows */}
        <path className="dk-brow" d={brow.left} />
        <path className="dk-brow" d={brow.right} />

        {/* mouth */}
        {mouth}
      </g>

      {hand}
    </svg>
  )
}
