import { languageCards } from '../../data/languages.js'
import { useSectionCompanion } from '../../hooks/useSectionCompanion.js'

export default function Languages() {
  const sectionRef = useSectionCompanion('attentive')

  return (
    <section className="languages-section" id="languages" aria-labelledby="languages-title" ref={sectionRef}>
      <div className="languages-header">
        <p className="section-kicker">Languages</p>
        <h2 id="languages-title">The languages I communicate and work in.</h2>
      </div>

      <ul className="languages-grid">
        {languageCards.map((language) => (
          <li className="language-card" key={language.name}>
            <span className="experience-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24">
                <path d="M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18z M3 12h18 M12 3c2.4 2.5 3.6 5.5 3.6 9s-1.2 6.5-3.6 9c-2.4-2.5-3.6-5.5-3.6-9S9.6 5.5 12 3z" />
              </svg>
            </span>
            <h3>{language.name}</h3>
            <span className="language-level">{language.level}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}
