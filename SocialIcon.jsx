export default function SocialIcon({ link }) {
  return (
    <a className="social-link" href={link.href} aria-label={link.label}>
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        fill="currentColor"
        stroke="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.7"
      >
        <path d={link.path} />
      </svg>
    </a>
  )
}
