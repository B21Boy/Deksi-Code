import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react'
import { sectionOrder, states } from '../companion/deksiyosStates.js'

const CompanionContext = createContext(null)

const DISMISS_KEY = 'companion-dismissed'
const REACTION_MS = 1400

function readDismissed() {
  try {
    return window.localStorage.getItem(DISMISS_KEY) === '1'
  } catch {
    return false
  }
}

// One companion, one source of truth. Sections register the state that applies
// while they're in view; a short-lived "reaction" can interrupt that state for
// a moment (a click, a notice, a theme flip) and then hands control back.
export function CompanionProvider({ children }) {
  const [sectionState, setSectionState] = useState('neutral')
  const [reaction, setReaction] = useState(null)
  const [blink, setBlink] = useState(false)
  const [pulse, setPulse] = useState(0)
  const [dismissed, setDismissed] = useState(readDismissed)
  const reactionTimer = useRef(null)
  const lastSection = useRef('neutral')
  // Which registered sections currently cover the viewport's center band. More
  // than one can briefly be true right at the seam between two adjacent
  // sections — applyWinner resolves that deterministically by page order,
  // rather than letting whichever observer callback happens to fire last win.
  const intersecting = useRef(new Set())
  // A pinned section wins outright. The last section uses this at the very
  // bottom of the page, where a short footer can sit entirely below the
  // viewport's center band and would otherwise never be "reached".
  const pinned = useRef(null)

  const applyWinner = useCallback(() => {
    // On an exact tie (the pixel where one section ends is also where the
    // next begins, which can happen right at load), prefer the earlier one:
    // nothing has been scrolled past yet, so the page still reads as "still
    // in" the first section rather than having already arrived at the next.
    let winner = pinned.current
    if (!winner) {
      for (const id of sectionOrder) {
        if (intersecting.current.has(id)) {
          winner = id
          break
        }
      }
    }
    if (!winner || winner === lastSection.current) return
    lastSection.current = winner
    setSectionState(winner)
    setPulse((count) => count + 1)
  }, [])

  const updateSection = useCallback(
    (id, isIntersecting) => {
      if (isIntersecting) intersecting.current.add(id)
      else intersecting.current.delete(id)
      applyWinner()
    },
    [applyWinner],
  )

  const pinSection = useCallback(
    (id, on) => {
      if (on) pinned.current = id
      else if (pinned.current === id) pinned.current = null
      applyWinner()
    },
    [applyWinner],
  )

  const reactTo = useCallback((id, ms = REACTION_MS) => {
    window.clearTimeout(reactionTimer.current)
    setReaction(id)
    setPulse((count) => count + 1)
    reactionTimer.current = window.setTimeout(() => setReaction(null), ms)
  }, [])

  const wink = useCallback(() => {
    setBlink(true)
    window.setTimeout(() => setBlink(false), 180)
  }, [])

  const toggleDismissed = useCallback(() => {
    setDismissed((current) => {
      const next = !current
      try {
        window.localStorage.setItem(DISMISS_KEY, next ? '1' : '0')
      } catch {
        // Storage can be unavailable; the choice just won't persist this visit.
      }
      return next
    })
  }, [])

  useEffect(() => () => window.clearTimeout(reactionTimer.current), [])

  const stateId = reaction ?? sectionState
  const pose = states[stateId] ?? states.neutral

  const value = useMemo(
    () => ({
      pose,
      stateId,
      pulse,
      blink,
      dismissed,
      updateSection,
      pinSection,
      reactTo,
      wink,
      toggleDismissed,
    }),
    [pose, stateId, pulse, blink, dismissed, updateSection, pinSection, reactTo, wink, toggleDismissed],
  )

  return <CompanionContext.Provider value={value}>{children}</CompanionContext.Provider>
}

export function useCompanion() {
  const ctx = useContext(CompanionContext)
  // Sections can render outside the provider in isolation (tests, Storybook-style
  // previews); fall back to inert no-ops rather than crashing.
  if (!ctx) {
    return {
      pose: states.neutral,
      stateId: 'neutral',
      pulse: 0,
      blink: false,
      dismissed: true,
      updateSection: () => {},
      pinSection: () => {},
      reactTo: () => {},
      wink: () => {},
      toggleDismissed: () => {},
    }
  }
  return ctx
}
