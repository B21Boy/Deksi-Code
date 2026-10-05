// `section` items scroll to an element id on the home page, `path` items open a page.
export const navItems = [
  { label: 'Home', section: 'home' },
  { label: 'Passion', section: 'projects-title' },
  { label: 'Skill', section: 'skill' },
  { label: 'Process', path: '/process' },
  { label: 'Contact', section: 'contact' },
]

export function getNavHref(item) {
  return item.path ?? `#${item.section}`
}
