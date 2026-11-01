import { useCallback, useState, useSyncExternalStore } from 'react'
import ContactActions from './ContactActions.jsx'
import PageNav from './PageNav.jsx'
import ProjectGallery from './ProjectGallery.jsx'
import ProjectNotice from './ProjectNotice.jsx'
import ProjectShowcaseCard from './ProjectShowcaseCard.jsx'
import SocialLinks from './SocialLinks.jsx'
import { showcaseProjects } from './projects.js'
import { currentYear } from './site.js'
import { useSectionCompanion } from './useSectionCompanion.js'

function getQueryProject() {
  const slug = new URLSearchParams(window.location.search).get('project')
  return showcaseProjects.find((project) => project.slug === slug) || null
}

function subscribeToQuery(callback) {
  window.addEventListener('popstate', callback)
  return () => window.removeEventListener('popstate', callback)
}

export default function ProjectsPage({ theme, onToggleTheme, nav }) {
  const queryProject = useSyncExternalStore(subscribeToQuery, getQueryProject, () => null)
  const [selectedProject, setSelectedProject] = useState(undefined)
  const activeProject = selectedProject === undefined ? queryProject : selectedProject
  const [showProjectScreens, setShowProjectScreens] = useState(false)

  const openProject = useCallback((project) => {
    setSelectedProject(project)
    setShowProjectScreens(false)
  }, [])
  const closeProject = useCallback(() => {
    setSelectedProject(null)
    setShowProjectScreens(false)
  }, [])
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
        <h1>Web and mobile app projects</h1>
        <span className="projects-idea-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24">
            <path d="M9 18h6M10 22h4M8.6 14.8A6.2 6.2 0 1 1 15.4 14c-.9.6-1.4 1.5-1.4 2.5h-4c0-.8-.5-1.3-1.4-1.7z" />
          </svg>
        </span>
        <p>Explore Flutter apps and full-stack web products built by Deksiyos Yismaw.</p>
      </header>

      <section className="all-projects-grid all-projects-showcase" aria-label="Project gallery">
        {showcaseProjects.map((project) => (
          <ProjectShowcaseCard
            project={project}
            onOpen={openProject}
            key={project.title}
          />
        ))}
      </section>

      {activeProject &&
        (activeProject.notice && !showProjectScreens ? (
          <ProjectNotice
            project={activeProject}
            onClose={closeProject}
            onBrowseScreens={activeProject.screens ? () => setShowProjectScreens(true) : undefined}
          />
        ) : activeProject.screens ? (
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
