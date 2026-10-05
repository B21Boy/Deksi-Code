// Evaluated once at load, so components stay pure.
export const currentYear = new Date().getFullYear()

export const site = {
  name: 'Deksiyos Yismaw',
  shortName: 'Deksi',
  // Canonical production URL. Keep in sync with index.html, public/robots.txt and public/sitemap.xml.
  url: 'https://deksipapa.vercel.app',
  title: 'Deksiyos Yismaw | Flutter and Full-Stack Developer',
  description:
    'Portfolio of Deksiyos Yismaw, an Information Technology graduate building Flutter apps and full-stack web products with React, Node.js and Firebase.',
  email: 'deksiyos.yismaw@gmail.com',
  upworkUrl: 'https://www.upwork.com',
  location: 'Bahir Dar - Ethiopia',
  age: 22,
  cvPath: '/Deksiyos_Yismaw_CV.pdf',
  cvFileName: 'Deksiyos_Yismaw_CV.pdf',
}

// Per-page metadata, applied on route changes (see hooks/usePageMeta.js).
export const pages = {
  home: {
    path: '/',
    title: site.title,
    description: site.description,
  },
  projects: {
    path: '/projects',
    title: `Projects | ${site.name}`,
    description:
      'Projects by Deksiyos Yismaw: a Flutter pharmacy management app, a distance education platform and a PHP and MySQL honey shop.',
  },
  process: {
    path: '/process',
    title: `Working Process | ${site.name}`,
    description:
      'How Deksiyos Yismaw works with clients: planning, design, development and launch, from the first conversation to a product ready for real users.',
  },
}
