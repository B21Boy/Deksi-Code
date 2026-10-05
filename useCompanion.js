import { useContext } from 'react'
import { states } from './deksiyosStates.js'
import { CompanionContext } from './companion-context.js'

export function useCompanion() {
  const ctx = useContext(CompanionContext)
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