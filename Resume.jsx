import { resumeGroups } from './resume.js'
import { useSectionCompanion } from './useSectionCompanion.js'

function ResumeGroup({ group }) {
  return (
    <article className="resume-group" aria-labelledby={`resume-${group.id}`}>
      <div className="resume-label">
        <span className="experience-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24">
            <path d={group.path} />
          </svg>
        </span>
        <h3 id={`resume-${group.id}`}>{group.title}</h3>
      </div>

      <div className="resume-entries">
        {group.entries.map((entry) => (
          <div className="resume-entry" key={entry.title}>
            <div className="resume-entry-head">
              <h4>{entry.title}</h4>
              <span className="resume-date">{entry.meta}</span>
            </div>

            {entry.org && (
              <p className="resume-org">
                {entry.org}
                {entry.detail && <span>{entry.detail}</span>}
              </p>
            )}

            {entry.credentialId && (
              <p className="resume-credential">
                Credential ID <span>{entry.credentialId}</span>
              </p>
            )}

            {entry.points && (
              <ul className="resume-points">
                {entry.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            )}

            {entry.tags && (
              <ul className="resume-tags" aria-label="Highlights">
                {entry.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
            )}

            {entry.url && (
              <a className="resume-link" href={entry.url} target="_blank" rel="noreferrer">
                Show credential <span aria-hidden="true">↗</span>
              </a>
            )}
          </div>
        ))}
      </div>
    </article>
  )
}

export default function Resume() {
  const sectionRef = useSectionCompanion('thinking')

  return (
    <section className="resume-section" id="resume" aria-labelledby="resume-title" ref={sectionRef}>
      <div className="resume-header">
        <p className="section-kicker">Resume</p>
        <h2 id="resume-title">
          The experience, education and achievements behind the work I do.
        </h2>
      </div>

      <div className="resume-list">
        {resumeGroups.map((group) => (
          <ResumeGroup group={group} key={group.id} />
        ))}
      </div>
    </section>
  )
}
