import { access, mkdir, readFile, readdir, writeFile } from 'node:fs/promises'
import { createElement } from 'react'
import { renderToString } from 'react-dom/server'
import { createServer } from 'vite'
import path from 'node:path'
import { pages, site } from './site.js'

const outputDir = new URL('./dist/', import.meta.url)
const template = await readFile(new URL('index.html', outputDir), 'utf8')
const builtAssets = await readdir(new URL('assets/', outputDir))
const vite = await createServer({
  server: { middlewareMode: true, hmr: false, ws: false },
  appType: 'custom',
  logLevel: 'error',
})

function escapeHtml(value) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('"', '&quot;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
}

function replaceMeta(html, attribute, key, value) {
  const selector = new RegExp(`<meta\\s+${attribute}="${key}"[^>]*>`, 's')
  return html.replace(selector, `<meta ${attribute}="${key}" content="${escapeHtml(value)}" />`)
}

async function resolveBuiltImages(markup) {
  const imageSources = [...markup.matchAll(/<img\b[^>]*\bsrc="([^"]+)"/g)]
  let resolvedMarkup = markup

  for (const [, source] of imageSources) {
    if (!source.startsWith('/') || source.startsWith('/assets/')) continue

    const filename = path.basename(source)
    const extension = path.extname(filename)
    const stem = filename.slice(0, -extension.length)
    const builtFile = builtAssets.find(
      (asset) => asset.startsWith(`${stem}-`) && path.extname(asset) === extension,
    )

    if (builtFile) {
      resolvedMarkup = resolvedMarkup.replaceAll(`src="${source}"`, `src="/assets/${builtFile}"`)
      continue
    }

    try {
      await access(new URL(source.slice(1), outputDir))
    } catch {
      throw new Error(`Could not find production image for server-rendered path: ${source}`)
    }
  }

  return resolvedMarkup
}

try {
  const { default: App } = await vite.ssrLoadModule('/App.jsx')
  const pageModules = {
    home: '/HomePage.jsx',
    projects: '/ProjectsPage.jsx',
    process: '/ProcessPage.jsx',
  }

  for (const [route, page] of Object.entries(pages)) {
    globalThis.window = {
      location: { pathname: page.path, search: '', href: `${site.url}${page.path}` },
      localStorage: { getItem: () => null, setItem: () => {} },
    }

    const { default: Page } = await vite.ssrLoadModule(pageModules[route])
    const markup = await resolveBuiltImages(
      renderToString(createElement(App, { prerenderRoute: route, prerenderPage: Page })),
    )
    if (!markup.includes('<h1') || markup.includes('data-msg="Switched to client rendering')) {
      throw new Error(`Server rendering failed for the ${route} page`)
    }

    const canonical = `${site.url}${page.path}`
    const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': `${site.url}/#website`,
        url: `${site.url}/`,
        name: site.name,
        description: site.description,
        inLanguage: 'en',
      },
      {
        '@type': 'Person',
        '@id': `${site.url}/#person`,
        name: site.name,
        jobTitle: 'Flutter and Full-Stack Developer',
        url: `${site.url}/`,
        sameAs: [
          'https://www.linkedin.com/in/deksiyos-yismaw-371207425/',
          'https://github.com/B21Boy',
        ],
        alumniOf: { '@type': 'CollegeOrUniversity', name: 'Bahir Dar University' },
        address: { '@type': 'PostalAddress', addressLocality: 'Addis Ababa' },
      },
      {
        '@type': page.type ?? 'ProfilePage',
        '@id': `${canonical}#page`,
        url: canonical,
        name: page.title,
        description: page.description,
        inLanguage: 'en',
        isPartOf: { '@id': `${site.url}/#website` },
        ...(route === 'home'
          ? { mainEntity: { '@id': `${site.url}/#person` } }
          : { about: { '@id': `${site.url}/#person` } }),
      },
    ],
    }

    let html = template
      .replace(/<title>[^<]*<\/title>/, `<title>${escapeHtml(page.title)}</title>`)
      .replace(/<link rel="canonical" href="[^"]*"\s*\/>/, `<link rel="canonical" href="${canonical}" />`)
    html = replaceMeta(html, 'name', 'description', page.description)
    html = replaceMeta(html, 'property', 'og:title', page.title)
    html = replaceMeta(html, 'property', 'og:description', page.description)
    html = replaceMeta(html, 'property', 'og:url', canonical)
    html = replaceMeta(html, 'property', 'og:type', 'website')
    html = replaceMeta(html, 'name', 'twitter:title', page.title)
    html = replaceMeta(html, 'name', 'twitter:description', page.description)
    html = html.replace(
      /<script type="application\/ld\+json">[\s\S]*?<\/script>/,
      `<script type="application/ld+json">${JSON.stringify(structuredData).replaceAll('<', '\\u003c')}</script>`,
    )
    html = html.replace('<div id="root"></div>', `<div id="root">${markup}</div>`)
    html = html.replace(/\s*<noscript>[\s\S]*?<\/noscript>/, '')

    const routeDir = new URL(route === 'home' ? './' : `${route}/`, outputDir)
    await mkdir(routeDir, { recursive: true })
    await writeFile(new URL('index.html', routeDir), html)
  }
} finally {
  delete globalThis.window
  await vite.close()
}
