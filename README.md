# Deksiyos Yismaw | Portfolio

Personal portfolio built with **React 19 + Vite 8**. Fast to load, hardened with security headers, and set up for search engines (metadata, structured data, sitemap).

## Quick start

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build in dist/
npm run preview    # serve the production build locally
npm run lint       # ESLint
```

Requires Node.js `^20.19.0` or `>=22.12.0` (see `.nvmrc`).

## Folder structure

```
dportfolio/
├─ index.html                 SEO metadata, Open Graph, JSON-LD, no-JS fallback
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

The Testimonials section (above Languages) shows the cards from `src/data/testimonials.js`. It ships with three **draft** cards (Selam Habtamu, Temesgen Teshome, Yafet Tilahun) marked `placeholder: true`. The wording was written as a starting point, not by these people:

- The drafts appear while you run `npm run dev`, so you can see the design.
- They are **hidden in the production build**, and the whole section disappears until a real testimonial exists, so draft text can never go live by accident.
- Before publishing, send each person their draft (or ask for their own words). Once they agree, edit the text and delete `placeholder: true`.

To add another testimonial, copy an entry, fill in `name`, `role`, `description` (the quote), `initials`, `stat` (a short tag such as the project) and a light `accent` colour, and leave out `placeholder`. For a photo, put the image in `public/testimonials/` and set `image: '/testimonials/name.jpg'`; the initials show if the image is missing. Only ask people for a testimonial they are happy to have published under their name.

### If the domain changes

The production URL `https://deksipapa.vercel.app` appears in four places. Search and replace it in:
`index.html`, `public/robots.txt`, `public/sitemap.xml`, `src/data/site.js`.

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

In place: unique title and description per page, canonical URLs, Open Graph and Twitter cards with a 1200x630 image, JSON-LD (`WebSite`, `ProfilePage`, `Person`), `robots.txt`, `sitemap.xml`, semantic headings, descriptive image alt text, a real 404 status for unknown URLs, a no-JavaScript fallback, and a web manifest.

Do these after the first deploy:

1. Add the site to **Google Search Console** and **Bing Webmaster Tools**, then submit `https://deksipapa.vercel.app/sitemap.xml`.
2. Use "URL Inspection" to request indexing of `/`.
3. Link to the site from your GitHub profile, LinkedIn, CV and Upwork profile. Backlinks are the strongest ranking signal you control.
4. Preview the social card with the LinkedIn Post Inspector and the Facebook Sharing Debugger.
5. Run Lighthouse (Chrome DevTools) and keep the scores green after each change.

No code can promise the first position on Google: ranking also depends on competition, backlinks and how often people search your name. This setup removes the technical obstacles.

## Deploy on Vercel

Import the repository in Vercel. The defaults work: framework **Vite**, build command `npm run build`, output directory `dist`. Routes `/projects` and `/process` are rewritten to the app; any other unknown URL returns the 404 page.
