import { processSteps } from '../../data/process.js'
import { useSectionCompanion } from '../../hooks/useSectionCompanion.js'
import { skillCards } from '../../data/skills.js'

function SkillCard({ skill }) {
  return (
    <article className={`skill-card ${skill.featured ? 'skill-card-featured' : ''}`}>
      <span className="skill-icon" aria-hidden="true">
        {skill.icon}
      </span>
      <h3>{skill.title}</h3>
      <p>{skill.description}</p>

      {skill.tags && (
        <ul className="skill-tags" aria-label={`${skill.title} skills`}>
          {skill.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      )}
    </article>
  )
}

function ProcessStep({ step, index }) {
  return (
    <article className="process-step" style={{ '--step-index': index }}>
      <span className="process-icon" aria-hidden="true">
        {step.icon}
      </span>
      <h3>{step.title}</h3>
      <p>{step.description}</p>
    </article>
  )
}

export default function Skills() {
  const sectionRef = useSectionCompanion('surprised')

  return (
    <section className="skills-section" id="skill" aria-labelledby="skills-title" ref={sectionRef}>
      <div className="skills-header">
        <p className="section-kicker">What Do I Do And How?</p>
        <h2 id="skills-title">
          I love to craft functional solutions for unique problems. These
          are some skills I've picked up over my career.
        </h2>
      </div>

      <div className="skills-grid">
        {skillCards.map((skill) => (
          <SkillCard skill={skill} key={skill.title} />
        ))}
      </div>

      <div className="process-flow" aria-label="Development process">
        <svg
          className="process-lines"
          aria-hidden="true"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <polyline points="9.5,35 37.5,58 61.5,35 85.5,58" />
        </svg>

        {processSteps.map((step, index) => (
          <ProcessStep step={step} index={index} key={step.title} />
        ))}
      </div>
    </section>
  )
}
