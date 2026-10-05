import { useCallback, useState } from 'react'
import ContactActions from '../components/layout/ContactActions.jsx'
import PageNav from '../components/layout/PageNav.jsx'
import ProjectGallery from '../components/projects/ProjectGallery.jsx'
import ProjectNotice from '../components/projects/ProjectNotice.jsx'
import ProjectShowcaseCard from '../components/projects/ProjectShowcaseCard.jsx'
import SocialLinks from '../components/ui/SocialLinks.jsx'
import { showcaseProjects } from '../data/projects.js'
import { currentYear } from '../data/site.js'
import { useSectionCompanion } from '../hooks/useSectionCompanion.js'

export default function ProjectsPage({ theme, onToggleTheme, nav }) {
  const [activeProject, setActiveProject] = useState(null)
  const closeProject = useCallback(() => setActiveProject(null), [])
  const sectionRef = useSectionCompanion('proud')

  return (
    <section className="all-projects-page" aria-label="All Projects" ref={sectionRef}>
      <PageNav
        variant="projects"
        label="Projects navigation"
        theme={theme}
        onToggleTheme={onToggleTheme}
        nav={nav}
      />

      <header className="projects-hero">
        <h1>Showcasing my talent and passion</h1>
        <span className="projects-idea-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24">
            <path d="M9 18h6M10 22h4M8.6 14.8A6.2 6.2 0 1 1 15.4 14c-.9.6-1.4 1.5-1.4 2.5h-4c0-.8-.5-1.3-1.4-1.7z" />
          </svg>
        </span>
        <p>Discover my skills and creativity in action, with just one click.</p>
      </header>

      <section className="all-projects-grid all-projects-showcase" aria-label="Project gallery">
        {showcaseProjects.map((project) => (
          <ProjectShowcaseCard
            project={project}
            onOpen={setActiveProject}
            key={project.title}
          />
        ))}
      </section>

      {activeProject &&
        (activeProject.screens ? (
          <ProjectGallery project={activeProject} onClose={closeProject} />
        ) : (
          <ProjectNotice project={activeProject} onClose={closeProject} />
        ))}

      <footer className="projects-footer">
        <h2>Let's Work Together -</h2>

        <ContactActions />

        <div className="projects-footer-bottom">
          <p>{`© ${currentYear} all rights reserved.`}</p>

          <SocialLinks className="projects-footer-socials" label="Social profiles" />
        </div>
      </footer>
    </section>
  )
}
