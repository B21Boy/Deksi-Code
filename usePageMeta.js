import { useEffect } from 'react'
import { pages, site } from './site.js'

function setAttribute(selector, attribute, value) {
  document.head.querySelector(selector)?.setAttribute(attribute, value)
}

// Keeps the title, description, canonical and social tags in sync with the current page.
export function usePageMeta(route) {
  useEffect(() => {
    const page = pages[route] ?? pages.home
    const url = `${site.url}${page.path}`

    document.title = page.title
    setAttribute('meta[name="description"]', 'content', page.description)
    setAttribute('link[rel="canonical"]', 'href', url)
    setAttribute('meta[property="og:title"]', 'content', page.title)
    setAttribute('meta[property="og:description"]', 'content', page.description)
    setAttribute('meta[property="og:url"]', 'content', url)
    setAttribute('meta[name="twitter:title"]', 'content', page.title)
    setAttribute('meta[name="twitter:description"]', 'content', page.description)
  }, [route])
}
