import { useCompanion } from './useCompanion.js'
import AppScreensPreview from './AppScreensPreview.jsx'
import ProjectPhotoPreview from './ProjectPhotoPreview.jsx'
import ProjectPreview from './ProjectPreview.jsx'

export default function ProjectShowcaseCard({ project, onOpen }) {
  const { reactTo } = useCompanion()

  return (
    <article className="project-card project-showcase-card">
      {project.photo ? (
        <ProjectPhotoPreview
          src={project.photo}
          alt={project.photoAlt}
          width={project.photoWidth}
          height={project.photoHeight}
        />
      ) : project.images ? (
        <ProjectPreview
          type={project.preview}
          images={project.images}
          imagesLayout={project.imagesLayout}
        />
      ) : project.screens ? (
        <AppScreensPreview
          screens={project.screens}
          featured={project.featured}
          layout={project.screensLayout}
        />
      ) : (
        <ProjectPreview type={project.preview} />
      )}

      <div className="project-info">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <span className={`project-status${project.status === 'Work in progress' ? ' project-status-progress' : ''}`}>
          {project.status}
        </span>
      </div>

      <div className="project-card-footer">
        <div className="project-tags" aria-label={`${project.title} tags`}>
          {project.tags.map((tag) => (
            <span className="project-tag" key={tag}>
              {tag}
            </span>
          ))}
        </div>

        {project.notice ? (
          <button
            className="project-link"
            type="button"
            aria-haspopup="dialog"
            aria-label={`View ${project.title}`}
            onClick={() => {
              onOpen(project)
              reactTo(project.notice ? 'concerned' : 'proud')
            }}
          >
            {project.status === 'Work in progress' ? 'Explore Current Build' : 'View Project'}{' '}
            <span aria-hidden="true">↗</span>
          </button>
        ) : project.url ? (
          <a
            className="project-link"
            href={project.url}
            aria-label={`View ${project.title}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => reactTo('proud')}
          >
            {project.status === 'Work in progress' ? 'Explore Current Build' : 'View Project'}{' '}
            <span aria-hidden="true">↗</span>
          </a>
        ) : project.screens ? (
          <button
            className="project-link"
            type="button"
            aria-haspopup="dialog"
            aria-label={`View ${project.title} screenshots`}
            onClick={() => {
              onOpen(project)
              reactTo('proud')
            }}
          >
            View Screenshots <span aria-hidden="true">↗</span>
          </button>
        ) : null}
      </div>
    </article>
  )
}
