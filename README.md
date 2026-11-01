# Deksiyos Yismaw | Portfolio

Personal portfolio built with **React 19 + Vite 8**. Fast to load, hardened with security headers, and set up for search engines (metadata, structured data, sitemap).

## Quick start

```bash
npm install
npm run dev        # starts Vite and opens http://localhost:5173 in your browser
npm run build      # production build in dist/
npm run preview    # serve the production build locally
npm run lint       # ESLint
```

Requires Node.js `^20.19.0` or `>=22.12.0` (see `.nvmrc`).

## Folder structure

```
dportfolio/
├─ index.html                 SEO metadata, Open Graph, JSON-LD
├─ generate-seo-pages.js      Server-renders route-specific production HTML
├─ vercel.json                Security headers, CSP, caching, route rewrites
├─ vite.config.js
├─ eslint.config.js
├─ public/                    Served as-is from the site root
│  ├─ robots.txt, sitemap.xml, site.webmanifest
│  ├─ favicon.svg / .ico, apple-touch-icon.png, icon-192.png, icon-512.png
│  ├─ og-image.jpg            1200x630 social preview card
│  ├─ Deksiyos_Yismaw_CV.pdf  Stable, shareable CV link
│  ├─ theme-init.js           Applies the saved theme before first paint
│  ├─ 404.html, 404.css       Real 404 page
│  └─ .well-known/security.txt
└─ src/
   ├─ main.jsx                Entry point
   ├─ App.jsx                 App shell: theme, routing, page metadata
   ├─ routes.js               Lazy-loaded inner pages
   ├─ pages/                  HomePage, ProjectsPage, ProcessPage
   ├─ components/
   │  ├─ layout/              SiteNav, PageNav, MobileMenu, ThemeToggle, ContactActions...
   │  ├─ sections/            Hero, About, ExperienceHighlights, Resume, FeaturedProjects,
   │  │                       Skills, Testimonials, Languages, Contact
   │  ├─ projects/            Project cards, screenshot gallery, local-server notice
   │  └─ ui/                  SocialIcon, SocialLinks, OrbitCardStack
   ├─ data/                   All site content (edit these, not the components)
   ├─ hooks/                  useTheme, useRoute, usePageMeta, useSiteNavigation, useModal
   ├─ assets/images/          Optimised WebP images
   └─ styles/                 One stylesheet per area, imported in order by index.css
```

## Updating content

| To change...                          | Edit                              |
| ------------------------------------- | --------------------------------- |
| Name, email, location, age, CV path   | `src/data/site.js`                |
| Page titles and descriptions          | `src/data/site.js` (`pages`)      |
| Menu items                            | `src/data/navigation.js`          |
| LinkedIn / GitHub links               | `src/data/socials.js`             |
| Experience, education, certifications | `src/data/resume.js`              |
| Projects, screenshots, notices        | `src/data/projects.js`            |
| Skills and process steps              | `src/data/skills.js`, `process.js`|

The Artificial Intelligence skill card is a full-width "featured" card. To add another one, add `tags: [...]` and `featured: true` to any entry in `src/data/skills.js`.
| Languages                             | `src/data/languages.js`           |
| Testimonials                          | `src/data/testimonials.js`        |

To add a "Show credential" button to a certification, uncomment its `url:` line in `src/data/resume.js` and paste the link.

To add a link to a project, add a `url` to it in `src/data/projects.js` (projects with `notice` open the local-server dialog instead).

### Adding testimonials

The Testimonials section (above Languages) shows the approved cards from `testimonials.js`. To add another testimonial, copy an entry and fill in `name`, `role`, `description` (the approved quote), `initials`, `stat` (a short tag such as the project) and a light `accent` colour. For a photo, put the image in `public/testimonials/` and set `image: '/testimonials/name.jpg'`; the initials show if the image is missing. Publish quotes only with the person's approval.

### If the domain changes

The production URL `https://deksidev-code.vercel.app` is configured in `index.html`, `site.js`, `robots.txt` and `sitemap.xml` (including their `public/` copies).

## Performance

- Inner pages (`/projects`, `/process`) are code-split and prefetched when the browser is idle.
- Images are WebP, sized for their slot, and lazy-loaded below the fold. The lottery preview reserves its size so nothing shifts.
- No web fonts, no third-party scripts, no external requests: everything is served from your own domain.
- Hashed assets in `/assets` are cached for one year (`immutable`); HTML is always revalidated.
- The saved theme is applied by a tiny blocking script, so there is no flash of the wrong theme.
- Per-page titles, descriptions and canonical URLs update on navigation.

## Security

`vercel.json` sends these headers on every response:

- **Content-Security-Policy** limited to your own origin (no third-party scripts, styles, frames or forms), `frame-ancestors 'none'`, `object-src 'none'`, `upgrade-insecure-requests`
- **Strict-Transport-Security**, **X-Content-Type-Options**, **X-Frame-Options**, **Referrer-Policy**, **Permissions-Policy**, **Cross-Origin-Opener-Policy**

Code-level hardening: no `dangerouslySetInnerHTML`, no inline scripts or styles, external links use `rel="noopener noreferrer"`, stored theme values are validated, source maps are disabled in production, and `public/.well-known/security.txt` tells researchers how to reach you.

Keep dependencies healthy with `npm audit` and `npm update` from time to time. Unused packages (`vite-plugin-eslint`, `eslint-plugin-react`, `eslint-plugin-jsx-a11y`) were removed to shrink the attack surface.

After deploying, check the headers at <https://securityheaders.com> and <https://observatory.mozilla.org>.

## SEO

The home page, projects page and process page each have a descriptive title, summary, canonical URL, social metadata and structured data. The production build server-renders the full page content into route-specific HTML, then the browser hydrates it for interactive controls. This keeps the portfolio readable to visitors and crawlers that do not run JavaScript. `robots.txt`, `sitemap.xml` and the no-index 404 page are copied from `public/` into the production output.

Do these after the first deploy:

1. Deploy the site and confirm `https://deksidev-code.vercel.app/robots.txt`, `/sitemap.xml`, `/projects` and `/process` load successfully.
2. Add the site to **Google Search Console**, verify ownership, then submit `https://deksidev-code.vercel.app/sitemap.xml`.
3. Use URL Inspection for `/`, `/projects` and `/process`; review Google's rendered page and request indexing where available.
4. Link to the site from your GitHub profile, LinkedIn, CV and relevant professional profiles.
5. Preview the social card with the LinkedIn Post Inspector and Facebook Sharing Debugger.
6. Check mobile usability and Core Web Vitals in Search Console after Google has collected enough data.

No code can promise the first position on Google: ranking also depends on competition, backlinks and how often people search your name. This setup removes the technical obstacles.

## Deploy on Vercel

Import the repository in Vercel. The defaults work: framework **Vite**, build command `npm run build`, output directory `dist`. Routes `/projects` and `/process` are rewritten to the app; any other unknown URL returns the 404 page.
