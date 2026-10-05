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
    if (window.location.pathname !== path) {
      window.history.pushState(null, '', path)
    }

    setRoute(getRoute(path))
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  return { route, navigate }
}
