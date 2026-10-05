import { useSectionCompanion } from './useSectionCompanion.js'

export default function Hero() {
  const sectionRef = useSectionCompanion('neutral')

  return (
    <div className="hero-grid" id="home" ref={sectionRef}>
      <div className="hero-copy">
        <h1>
          <span>
            Designing with <strong>Purpose,</strong>
          </span>
          <span>
            Building with <strong>Webflow.</strong>
          </span>
        </h1>

        <a className="cta-button" href="#contact">
          Say Hi <span aria-hidden="true">👋</span>
        </a>
      </div>

    </div>
  )
}
