import { useCallback, useState } from 'react'
import HamburgerButton from './HamburgerButton.jsx'
import MobileMenu from './MobileMenu.jsx'
import ThemeToggle from './ThemeToggle.jsx'

// Navigation bar shared by the inner pages. `variant` picks the page styles ('projects' | 'process').
export default function PageNav({ variant, label, theme, onToggleTheme, nav }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = useCallback(() => setMenuOpen(false), [])

  return (
    <>
      <nav className={`${variant}-nav`} aria-label={label}>
        <a className={`${variant}-logo`} href="/" onClick={nav.goHome} aria-label="Deksi home">
          Deksi.
        </a>

        <div className={`${variant}-nav-actions`}>
          <ThemeToggle
            theme={theme}
            onToggle={onToggleTheme}
            className={`${variant}-theme-toggle`}
          />

          <HamburgerButton
            variant={variant}
            open={menuOpen}
            onToggle={() => setMenuOpen((open) => !open)}
          />
        </div>
      </nav>

      {menuOpen && <MobileMenu nav={nav} onClose={closeMenu} />}
    </>
  )
}
