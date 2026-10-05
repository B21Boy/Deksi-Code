import { useEffect } from 'react'

const FOCUSABLE = 'a[href], button'

// Shared dialog behaviour: scroll lock, Escape to close, focus trap, focus restore.
export function useModal(dialogRef, onClose, { focusDialog = false, onKeyDown } = {}) {
  useEffect(() => {
    const dialog = dialogRef.current
    const previouslyFocused = document.activeElement
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    if (focusDialog) {
      dialog.focus()
    } else {
      dialog.querySelector(FOCUSABLE)?.focus()
    }

    function handleKeyDown(event) {
      if (event.key === 'Escape') {
        onClose()
        return
      }

      onKeyDown?.(event)

      if (event.key !== 'Tab') return

      const focusable = dialog.querySelectorAll(FOCUSABLE)
      const first = focusable[0]
      const last = focusable[focusable.length - 1]

      if (event.shiftKey && (document.activeElement === first || document.activeElement === dialog)) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = previousOverflow
      if (previouslyFocused instanceof HTMLElement) previouslyFocused.focus()
    }
  }, [dialogRef, onClose, focusDialog, onKeyDown])
}
