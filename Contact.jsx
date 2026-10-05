import { currentYear } from '../../data/site.js'
import { useSectionCompanion } from '../../hooks/useSectionCompanion.js'
import ContactActions from '../layout/ContactActions.jsx'
import SocialLinks from '../ui/SocialLinks.jsx'

export default function Contact() {
  const sectionRef = useSectionCompanion('determined', { pinAtPageEnd: true })

  return (
    <footer className="contact-footer" id="contact" ref={sectionRef}>
      <div className="contact-panel">
        <h2>
          Let’s
          <span>Work Together -</span>
        </h2>

        <ContactActions />
      </div>

      <div className="footer-bottom">
        <p>{`© ${currentYear} all rights reserved.`}</p>

        <SocialLinks className="footer-socials" label="Footer social profiles" />
      </div>
    </footer>
  )
}
