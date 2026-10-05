import { experienceCards } from './experience.js'
import { useSectionCompanion } from './useSectionCompanion.js'

function ExperienceCard({ card }) {
  return (
    <article className="experience-card">
      <div className="experience-title-row">
        <span className="experience-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24">
            <path d={card.path} />
          </svg>
        </span>
        <h2>{card.title}</h2>
      </div>
      <p className="experience-subtitle">{card.subtitle}</p>
      <p className="experience-description">{card.description}</p>

      {card.stack && (
        <ul className="experience-stack" aria-label={`${card.title} tech stack`}>
          {card.stack.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
      )}
    </article>
  )
}

export default function ExperienceHighlights() {
  const sectionRef = useSectionCompanion('focused')

  return (
    <section className="experience-section" id="process" aria-label="Experience" ref={sectionRef}>
      <div className="experience-topline" />

      <div className="experience-grid">
        {experienceCards.map((card) => (
          <ExperienceCard card={card} key={card.title} />
        ))}
      </div>
    </section>
  )
}
