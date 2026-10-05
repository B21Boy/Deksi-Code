import { useCallback, useState } from 'react'
import { getNavHref, navItems } from './navigation.js'
import { site } from './site.js'
import HamburgerButton from './HamburgerButton.jsx'
import MobileMenu from './MobileMenu.jsx'
import ThemeToggle from './ThemeToggle.jsx'

export default function SiteNav({ theme, onToggleTheme, nav }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = useCallback(() => setMenuOpen(false), [])

  return (
    <>
      <nav className="site-nav" aria-label="Primary navigation">
        <a className="logo" href="/" onClick={nav.goHome} aria-label="Deksi home">
          Deksi.
        </a>

        <div className={`nav-links ${menuOpen ? 'mobile-open' : ''}`}>
          {navItems.map((item) => (
            <a
              href={getNavHref(item)}
              key={item.label}
              onClick={(event) => {
                nav.select(item, event)
                closeMenu()
              }}
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="nav-actions">
          <a
            className="cv-download"
            href={site.cvPath}
            download={site.cvFileName}
            aria-label="Download CV"
          >
            CV
          </a>

          <ThemeToggle theme={theme} onToggle={onToggleTheme} />

          <HamburgerButton
            variant="home"
            open={menuOpen}
            onToggle={() => setMenuOpen((open) => !open)}
          />
        </div>
      </nav>

      {menuOpen && <MobileMenu nav={nav} onClose={closeMenu} />}
    </>
  )
}
