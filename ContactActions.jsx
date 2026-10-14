import { site } from './site.js'

export default function ContactActions() {
  return (
    <div className="contact-actions" aria-label="Contact actions">
      <div className="contact-method">
        <span className="contact-method-label">Email</span>
        <a className="contact-button contact-email" href={`mailto:${site.email}?subject=${encodeURIComponent('Portfolio inquiry')}`}>
          <svg aria-hidden="true" viewBox="0 0 24 24">
            <path d="M4 6h16v12H4z M4 7l8 6 8-6" />
          </svg>
          {site.email}
        </a>
      </div>

      <div className="contact-method">
        <span className="contact-method-label">Phone</span>
        {site.phoneNumbers.map((phone) => (
          <a className="contact-button" href={`tel:${phone.replace(/\s/g, '')}`} key={phone}>
            <svg aria-hidden="true" viewBox="0 0 24 24">
              <path d="M6.6 3.8 9 3.3l2 4.8-1.8 1.5a14 14 0 0 0 5.2 5.2l1.5-1.8 4.8 2-.5 2.4a2 2 0 0 1-2 1.6A15.5 15.5 0 0 1 4.9 7.8a2 2 0 0 1 1.7-2z" />
            </svg>
            {phone}
          </a>
        ))}
      </div>

      <div className="contact-method">
        <span className="contact-method-label">Telegram</span>
        {site.telegramUrl ? (
          <a className="contact-button" href={site.telegramUrl} target="_blank" rel="noreferrer">
            <svg aria-hidden="true" viewBox="0 0 24 24">
              <path d="m21 3-7.4 18-3.8-7.2L3 10.2 21 3Zm-11.2 10.8L21 3" />
            </svg>
            Message me on Telegram
          </a>
        ) : (
          <span className="contact-button contact-button-unavailable" aria-label="Telegram link pending username">
            <svg aria-hidden="true" viewBox="0 0 24 24">
              <path d="m21 3-7.4 18-3.8-7.2L3 10.2 21 3Zm-11.2 10.8L21 3" />
            </svg>
            Telegram profile link
          </span>
        )}
      </div>

      <a className="contact-button contact-upwork" href={site.upworkUrl}>
        <span aria-hidden="true">Up</span>
        Hire me on Upwork
      </a>
    </div>
  )
}
