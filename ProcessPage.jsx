import ContactActions from '../components/layout/ContactActions.jsx'
import PageNav from '../components/layout/PageNav.jsx'
import SocialLinks from '../components/ui/SocialLinks.jsx'
import { workingProcessSteps } from '../data/process.js'
import { currentYear } from '../data/site.js'
import { useSectionCompanion } from '../hooks/useSectionCompanion.js'

export default function ProcessPage({ theme, onToggleTheme, nav }) {
  const sectionRef = useSectionCompanion('focused')

  return (
    <section className="working-process-page" aria-label="Working Process" ref={sectionRef}>
      <PageNav
        variant="process"
        label="Working process navigation"
        theme={theme}
        onToggleTheme={onToggleTheme}
        nav={nav}
      />

      <header className="process-hero">
        <p className="process-kicker">Process</p>
        <h1>Working Process</h1>
        <p>How I combine design and technology to create exceptional user experiences</p>
        <span className="idea-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24">
            <path d="M9 18h6M10 22h4M8.6 14.8A6.2 6.2 0 1 1 15.4 14c-.9.6-1.4 1.5-1.4 2.5h-4c0-.8-.5-1.3-1.4-1.7z" />
          </svg>
        </span>
      </header>

      <section className="timeline-section" aria-label="Project process timeline">
        <div className="timeline">
          {workingProcessSteps.map((step) => (
            <article className="timeline-step" key={step.label}>
              <div className="timeline-card">
                <span>{step.label}</span>
                <h2>{step.title}</h2>
                <p>{step.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="process-cta" aria-label="Hire me">
        <h2>
          Let’s
          <span>Work Together -</span>
        </h2>

        <ContactActions />
      </section>

      <footer className="process-footer">
        <p>{`© ${currentYear} all rights reserved.`}</p>

        <SocialLinks className="process-footer-socials" label="Social profiles" />
      </footer>
    </section>
  )
}
