import SiteNav from '../components/layout/SiteNav.jsx'
import About from '../components/sections/About.jsx'
import Contact from '../components/sections/Contact.jsx'
import ExperienceHighlights from '../components/sections/ExperienceHighlights.jsx'
import FeaturedProjects from '../components/sections/FeaturedProjects.jsx'
import Hero from '../components/sections/Hero.jsx'
import Languages from '../components/sections/Languages.jsx'
import Resume from '../components/sections/Resume.jsx'
import Skills from '../components/sections/Skills.jsx'
import Testimonials from '../components/sections/Testimonials.jsx'

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
