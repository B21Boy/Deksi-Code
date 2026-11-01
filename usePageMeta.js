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
    const personId = `${site.url}/#person`
    const websiteId = `${site.url}/#website`
    const pageType = route === 'home' ? 'ProfilePage' : page.type
    const structuredData = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'WebSite',
          '@id': websiteId,
          url: `${site.url}/`,
          name: site.name,
          description: site.description,
          inLanguage: 'en',
          publisher: { '@id': personId },
        },
        {
          '@type': 'Person',
          '@id': personId,
          name: site.name,
          jobTitle: 'Flutter and Full-Stack Developer',
          description: 'Flutter and full-stack developer based in Addis Ababa, Ethiopia.',
          url: `${site.url}/`,
          sameAs: [
            'https://www.linkedin.com/in/deksiyos-yismaw-371207425/',
            'https://github.com/B21Boy',
          ],
          alumniOf: { '@type': 'CollegeOrUniversity', name: 'Bahir Dar University' },
          knowsAbout: ['Flutter', 'React', 'Node.js', 'Firebase', 'PHP', 'MySQL'],
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Addis Ababa',
          },
        },
        {
          '@type': pageType,
          '@id': `${url}#page`,
          url,
          name: page.title,
          description: page.description,
          inLanguage: 'en',
          isPartOf: { '@id': websiteId },
          mainEntity: { '@id': personId },
        },
      ],
    }

    document.title = page.title
    setAttribute('meta[name="description"]', 'content', page.description)
    setAttribute('link[rel="canonical"]', 'href', url)
    setAttribute('meta[property="og:title"]', 'content', page.title)
    setAttribute('meta[property="og:description"]', 'content', page.description)
    setAttribute('meta[property="og:url"]', 'content', url)
    setAttribute('meta[property="og:type"]', 'content', 'website')
    setAttribute('meta[name="twitter:title"]', 'content', page.title)
    setAttribute('meta[name="twitter:description"]', 'content', page.description)
    const schema = document.head.querySelector('script[type="application/ld+json"]')
    if (schema) schema.textContent = JSON.stringify(structuredData)
  }, [route])
}
