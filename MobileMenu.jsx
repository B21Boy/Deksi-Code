import { useEffect } from 'react'
import aboutPortrait from '../../assets/images/about-portrait.webp'
import { getNavHref, navItems } from '../../data/navigation.js'
import { site } from '../../data/site.js'
import SocialLinks from '../ui/SocialLinks.jsx'

export default function MobileMenu({ nav, onClose }) {
  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === 'Escape') onClose()
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [onClose])

  return (
    <div className="mobile-menu-overlay" role="dialog" aria-modal="true" aria-label="Menu">
      <button className="mobile-menu-close" onClick={onClose} aria-label="Close menu">
        ×
      </button>
      <div className="mobile-menu-content">
        <div className="mobile-menu-profile">
          <div className="mobile-menu-avatar">
            <img
              className="menu-photo"
              src={aboutPortrait}
              alt={`Portrait of ${site.name}`}
              width="640"
              height="640"
            />
          </div>
          <h3>Hi, I am Deksi! I am a developer based on worldwide.</h3>
          <p className="mobile-menu-age">Age: {site.age}</p>
          <p className="mobile-menu-location">{site.location}</p>
          <p className="mobile-menu-email">{site.email}</p>
          <SocialLinks className="mobile-menu-socials" />
        </div>
        <nav className="mobile-menu-nav">
          {navItems.map((item) => (
            <a
              href={getNavHref(item)}
              key={item.label}
              onClick={(event) => {
                nav.select(item, event)
                onClose()
              }}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </div>
  )
}
