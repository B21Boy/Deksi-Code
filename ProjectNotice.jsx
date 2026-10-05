import { useRef } from 'react'
import { site } from '../../data/site.js'
import { useModal } from '../../hooks/useModal.js'

export default function ProjectNotice({ project, onClose }) {
  const dialogRef = useRef(null)

  useModal(dialogRef, onClose)

  const demoHref = `mailto:${site.email}?subject=${encodeURIComponent(
    `Demo request: ${project.title}`,
  )}`

  return (
    <div className="notice-overlay" onClick={onClose}>
      <div
        className="notice-dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="notice-title"
        aria-describedby="notice-text"
        ref={dialogRef}
        onClick={(event) => event.stopPropagation()}
      >
        <span className="experience-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24">
            <path d="M4 5h16v5H4z M4 14h16v5H4z M8 7.5h.01 M8 16.5h.01" />
          </svg>
        </span>

        <p className="section-kicker">{project.title}</p>
        <h2 id="notice-title">Runs on a local server</h2>
        <p className="notice-text" id="notice-text">
          {project.notice}
        </p>
        <p className="notice-hint">
          Want to see it in action? Get in touch and I'll walk you through it.
        </p>

        <div className="notice-actions">
          <a className="notice-action notice-action-primary" href={demoHref}>
            Request a demo <span aria-hidden="true">↗</span>
          </a>
          <button className="notice-action" type="button" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  )
}
