import { Suspense, useEffect } from 'react'
import CompanionWidget from './CompanionWidget.jsx'
import { CompanionProvider } from './CompanionContext.jsx'
import { useRoute } from './useRoute.js'
import { usePageMeta } from './usePageMeta.js'
import { useSiteNavigation } from './useSiteNavigation.js'
import { useTheme } from './useTheme.js'
import HomePage from './HomePage.jsx'
import { loadProcessPage, loadProjectsPage, ProcessPage, ProjectsPage } from './routes.js'

export default function App() {
  const { theme, toggleTheme } = useTheme()
  const { route, navigate } = useRoute()
  const nav = useSiteNavigation(route, navigate)

  usePageMeta(route)

  // Warm the inner-page chunks once the browser is idle so navigation feels instant.
  useEffect(() => {
    const prefetch = () => {
      loadProjectsPage()
      loadProcessPage()
    }

    if ('requestIdleCallback' in window) {
      const id = window.requestIdleCallback(prefetch)
      return () => window.cancelIdleCallback(id)
    }

    const id = window.setTimeout(prefetch, 2000)
    return () => window.clearTimeout(id)
  }, [])

  const page = { theme, onToggleTheme: toggleTheme, nav }

  return (
    <CompanionProvider>
      <main
        className={`portfolio-shell ${route === 'process' ? 'process-route-shell' : ''} ${route === 'projects' ? 'projects-route-shell' : ''}`}
        data-theme={theme}
      >
        <Suspense fallback={null}>
          {route === 'process' ? (
            <ProcessPage {...page} />
          ) : route === 'projects' ? (
            <ProjectsPage {...page} />
          ) : (
            <HomePage {...page} />
          )}
        </Suspense>
      </main>

      <CompanionWidget />
    </CompanionProvider>
  )
}
