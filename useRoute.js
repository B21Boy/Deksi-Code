import { useCallback, useEffect, useState } from 'react'

const ROUTES = {
  '/': 'home',
  '/projects': 'projects',
  '/process': 'process',
}

export function getRoute(pathname = window.location.pathname) {
  const path = pathname.length > 1 ? pathname.replace(/\/+$/, '') : pathname
  return ROUTES[path] ?? 'home'
}

// Tiny History API router: three routes do not need a routing library.
export function useRoute() {
  const [route, setRoute] = useState(() => getRoute())

  useEffect(() => {
    const handlePopState = () => setRoute(getRoute())

    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  const navigate = useCallback((path) => {
    const destination = new URL(path, window.location.href)
    const nextPath = `${destination.pathname}${destination.search}${destination.hash}`
    const currentPath = `${window.location.pathname}${window.location.search}${window.location.hash}`

    if (currentPath !== nextPath) {
      window.history.pushState(null, '', nextPath)
    }

    setRoute(getRoute(destination.pathname))
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  return { route, navigate }
}
