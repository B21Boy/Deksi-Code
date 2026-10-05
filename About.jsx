import aboutPortrait from './about-portrait.webp'
import { site } from './site.js'
import { useSectionCompanion } from './useSectionCompanion.js'
import SocialLinks from './SocialLinks.jsx'

export default function About() {
  const sectionRef = useSectionCompanion('curious')

  return (
    <div className="about-section" id="passion" ref={sectionRef}>
      <div className="about-topline">
        <p className="section-kicker">About Me</p>

        <SocialLinks className="social-links" label="Social profiles" />
      </div>

      <div className="about-content">
        <div className="intro-copy">
          <p className="intro-lead">
            Hi, I am Deksi! I'm a Flutter developer building apps for every
            platform, with strong experience in full-stack web development
            across both frontend and backend.
          </p>
          <p>
            I focus on clean interfaces, reliable architecture, and
            high-performance digital products that work smoothly on mobile,
            desktop, and the web.
          </p>
        </div>

        <div className="visual-wrap" aria-label="Deksi profile visual">
          <div className="about-profile-badge">
            <div className="about-badge-lanyard" aria-hidden="true" />
            <div className="about-badge-card">
              <div className="about-badge-heading">
                <span className="about-badge-mark" aria-hidden="true">DY</span>
                <span>DEVELOPER PROFILE</span>
                <span className="about-badge-status"><i /> Portfolio</span>
              </div>
              <div className="about-badge-photo">
                <img
                  src={aboutPortrait}
                  alt={`Portrait of ${site.name}`}
                  width="640"
                  height="640"
                  loading="lazy"
                />
              </div>
              <div className="about-badge-details">
                <p className="about-badge-name">{site.name}</p>
                <p className="about-badge-role">Flutter &amp; Full-Stack Developer</p>
                <p className="about-badge-location">{site.location}</p>
              </div>
              <div className="about-badge-footer">
                <span>PORTFOLIO ID</span>
                <span className="about-badge-code" aria-hidden="true" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
