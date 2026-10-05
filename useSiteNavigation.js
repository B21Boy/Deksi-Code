import { useMemo } from 'react'

function scrollToSection(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

// One navigation API for every menu (desktop nav, mobile menu, logos, page links).
export function useSiteNavigation(route, navigate) {
  return useMemo(() => {
    const goTo = (path) => (event) => {
      event.preventDefault()
      navigate(path)
    }

    return {
      goHome: goTo('/'),
      goProjects: goTo('/projects'),
      goProject: (slug) => goTo(`/projects?project=${encodeURIComponent(slug)}`),
      goProcess: goTo('/process'),

      select(item, event) {
        event.preventDefault()

        if (item.path) {
          navigate(item.path)
          return
        }

        if (route === 'home') {
          scrollToSection(item.section)
          return
        }

        // Coming from another page: open the home page first, then scroll.
        navigate('/')
        window.setTimeout(() => scrollToSection(item.section), 100)
      },
    }
  }, [route, navigate])
}
