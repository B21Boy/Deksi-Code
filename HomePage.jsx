import SiteNav from './SiteNav.jsx'
import About from './About.jsx'
import Contact from './Contact.jsx'
import ExperienceHighlights from './ExperienceHighlights.jsx'
import FeaturedProjects from './FeaturedProjects.jsx'
import Hero from './Hero.jsx'
import Languages from './Languages.jsx'
import Resume from './Resume.jsx'
import Skills from './Skills.jsx'
import Testimonials from './Testimonials.jsx'

export default function HomePage({ theme, onToggleTheme, nav }) {
  return (
    <section className="hero-section" aria-label="Deksi portfolio hero">
      <SiteNav theme={theme} onToggleTheme={onToggleTheme} nav={nav} />
      <Hero />
      <About />
      <ExperienceHighlights />
      <Resume />
      <FeaturedProjects nav={nav} />
      <Skills />
      <Testimonials />
      <Languages />
      <Contact />
    </section>
  )
}
