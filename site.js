// Evaluated once at load, so components stay pure.
export const currentYear = new Date().getFullYear()

export const site = {
  name: 'Deksiyos Yismaw',
  shortName: 'Deksi',
  // Canonical production URL. Keep in sync with index.html, public/robots.txt and public/sitemap.xml.
  url: 'https://deksidev-code.vercel.app',
  title: 'Deksiyos Yismaw | Flutter & Full-Stack Developer in Ethiopia',
  description:
    'Deksiyos Yismaw is a Flutter and full-stack developer based in Addis Ababa, Ethiopia, building mobile apps and web products with React, Node.js, Firebase, PHP and MySQL.',
  email: 'deksiyos.yismaw@gmail.com',
  phoneNumbers: ['+251 960625242', '+251 902762879'],
  telegramUrl: 'https://t.me/Dekxaaa',
  upworkUrl: 'https://www.upwork.com',
  location: 'Addis Ababa',
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
    title: `Web & Mobile App Projects | ${site.name}`,
    description:
      'Explore mobile and web projects by Deksiyos Yismaw, including a Flutter pharmacy management app, online marketplaces, a skills exchange platform and a PHP and MySQL honey shop.',
    type: 'CollectionPage',
  },
  process: {
    path: '/process',
    title: `Web & App Development Process | ${site.name}`,
    description:
      'See how Addis Ababa developer Deksiyos Yismaw takes web and mobile app projects from planning and interface design through development, testing and launch.',
    type: 'WebPage',
  },
}
