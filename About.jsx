import aboutPortrait from '../../assets/images/about-portrait.webp'
import { site } from '../../data/site.js'
import { useSectionCompanion } from '../../hooks/useSectionCompanion.js'
import SocialLinks from '../ui/SocialLinks.jsx'

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
          <div className="profile-orbit">
            <img
              className="profile-photo"
              src={aboutPortrait}
              alt={`Portrait of ${site.name}`}
              width="640"
              height="640"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
