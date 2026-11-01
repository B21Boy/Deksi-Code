import { useSectionCompanion } from './useSectionCompanion.js'

export default function Hero() {
  const sectionRef = useSectionCompanion('neutral')

  return (
    <div className="hero-grid" id="home" ref={sectionRef}>
      <div className="hero-copy">
        <h1>
          <span>Flutter &amp; Full-Stack</span>
          <span>Developer in Ethiopia</span>
        </h1>

        <a className="cta-button" href="#contact">
          Say Hi <span aria-hidden="true">👋</span>
        </a>
      </div>

    </div>
  )
}
