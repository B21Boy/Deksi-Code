import { useCallback, useEffect, useSyncExternalStore } from 'react'

const STORAGE_KEY = 'theme'
let currentTheme = 'dark'

function getInitialTheme() {
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY)
    if (saved === 'light' || saved === 'dark') return saved
  } catch {
    // Keep the in-memory theme when browser storage is unavailable.
  }
  return currentTheme
}

function subscribeToTheme(callback) {
  window.addEventListener('storage', callback)
  window.addEventListener('portfolio-theme-change', callback)
  return () => {
    window.removeEventListener('storage', callback)
    window.removeEventListener('portfolio-theme-change', callback)
  }
}

function getServerTheme() {
  return 'dark'
}

export function useTheme() {
  const theme = useSyncExternalStore(subscribeToTheme, getInitialTheme, getServerTheme)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
  }, [theme])

  const toggleTheme = useCallback(() => {
    const nextTheme = getInitialTheme() === 'dark' ? 'light' : 'dark'
    currentTheme = nextTheme
    try {
      window.localStorage.setItem(STORAGE_KEY, nextTheme)
    } catch {
      // Storage can be unavailable; the theme still works for this visit.
    }
    window.dispatchEvent(new Event('portfolio-theme-change'))
  }, [])

  return { theme, toggleTheme }
}
