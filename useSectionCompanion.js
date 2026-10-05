import { useEffect, useRef } from 'react'
import { useCompanion } from './useCompanion.js'

const END_TOLERANCE_PX = 4

// Whether a band across the vertical center of the viewport currently
// touches this element. Measured fresh each time, rather than trusted from
// the IntersectionObserver entry that triggered the check: a ratio-based
// threshold would never fire for a section taller than the viewport (it
// could never fill 50%+ of its own, much larger, height on screen at once),
// and re-measuring directly also sidesteps any staleness in the entry data
// itself, which some embedding contexts (sandboxed iframes included) have
// been observed to deliver a frame late. The band has real height (not a
// single center line): a hairline point is one sub-pixel rounding error away
// from missing every section at once, right as one scrolls past another.
function coversCenterBand(el) {
  const rect = el.getBoundingClientRect()
  const half = window.innerHeight / 2
  const bandHalf = window.innerHeight * 0.06
  return rect.top <= half + bandHalf && rect.bottom >= half - bandHalf
}

// Attach the returned ref to a section's root element. Whichever registered
// section currently covers the vertical center of the viewport becomes the
// companion's active state (see CompanionContext's applyWinner).
//
// pinAtPageEnd: also claim the companion whenever the visitor has scrolled to
// the very bottom of the page. Meant for the last section, which can be short
// enough to sit entirely below the center band even at maximum scroll.
export function useSectionCompanion(stateId, { pinAtPageEnd = false } = {}) {
  const ref = useRef(null)
  const { updateSection, pinSection } = useCompanion()

  useEffect(() => {
    const el = ref.current
    if (!el || typeof IntersectionObserver === 'undefined') return

    // A generous band (not just a hairline) so the observer's own threshold
    // crossings are a reliable "something changed nearby" signal; the actual
    // decision is the fresh measurement in the callback, not this entry.
    const observer = new IntersectionObserver(() => updateSection(stateId, coversCenterBand(el)), {
      rootMargin: '-40% 0px -40% 0px',
      threshold: 0,
    })
    observer.observe(el)

    // Scroll/resize can move the band relative to the element without the
    // observer's own (coarser) band re-triggering; re-measure on both too.
    let frame = null
    function recheck() {
      if (frame) return
      frame = window.requestAnimationFrame(() => {
        frame = null
        updateSection(stateId, coversCenterBand(el))
      })
    }
    window.addEventListener('scroll', recheck, { passive: true })
    window.addEventListener('resize', recheck)

    return () => {
      window.removeEventListener('scroll', recheck)
      window.removeEventListener('resize', recheck)
      if (frame) window.cancelAnimationFrame(frame)
      observer.disconnect()
      updateSection(stateId, false)
    }
  }, [stateId, updateSection])

  useEffect(() => {
    if (!pinAtPageEnd) return

    let atEnd = false

    function check() {
      const doc = document.documentElement
      const scrollable = doc.scrollHeight > window.innerHeight + END_TOLERANCE_PX * 2
      const next = scrollable && window.innerHeight + window.scrollY >= doc.scrollHeight - END_TOLERANCE_PX

      if (next === atEnd) return
      atEnd = next
      pinSection(stateId, next)
    }

    check()
    window.addEventListener('scroll', check, { passive: true })
    window.addEventListener('resize', check)

    return () => {
      window.removeEventListener('scroll', check)
      window.removeEventListener('resize', check)
      pinSection(stateId, false)
    }
  }, [pinAtPageEnd, stateId, pinSection])

  return ref
}
