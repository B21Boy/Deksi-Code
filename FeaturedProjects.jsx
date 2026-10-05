import { projectCards } from './projects.js'
import { useSectionCompanion } from './useSectionCompanion.js'
import { loadProjectsPage } from './routes.js'
import ProjectCard from './ProjectCard.jsx'

export default function FeaturedProjects({ nav }) {
  const sectionRef = useSectionCompanion('proud')

  return (
    <section className="projects-section" aria-labelledby="projects-title" ref={sectionRef}>
      <div className="projects-header">
        <p className="section-kicker">Featured Projects</p>
        <h2 id="projects-title">
          I craft digital solutions that showcase my passion and expertise
          in development.
        </h2>
      </div>

      <div className="projects-grid">
        {projectCards.map((project) => (
          <ProjectCard project={project} nav={nav} key={project.title} />
        ))}
      </div>

      <div className="projects-action">
        <a
          className="all-projects-link"
          href="/projects"
          onClick={nav.goProjects}
          onMouseEnter={loadProjectsPage}
          onFocus={loadProjectsPage}
        >
          Explore all the project
        </a>
      </div>
    </section>
  )
}
