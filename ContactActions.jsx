import { site } from './site.js'

export default function ContactActions() {
  return (
    <div className="contact-actions" aria-label="Contact actions">
      <a className="contact-button contact-email" href={`mailto:${site.email}`}>
        <svg aria-hidden="true" viewBox="0 0 24 24">
          <path d="M4 6h16v12H4z M4 7l8 6 8-6" />
        </svg>
        {site.email}
      </a>

      <a className="contact-button contact-upwork" href={site.upworkUrl}>
        <span aria-hidden="true">Up</span>
        Hire me on Upwork
      </a>
    </div>
  )
}
