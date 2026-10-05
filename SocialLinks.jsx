import { socialLinks } from './socials.js'
import SocialIcon from './SocialIcon.jsx'

export default function SocialLinks({ className, label }) {
  return (
    <div className={className} aria-label={label}>
      {socialLinks.map((link) => (
        <SocialIcon link={link} key={link.label} />
      ))}
    </div>
  )
}
