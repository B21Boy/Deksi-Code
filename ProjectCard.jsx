import ProjectPreview from './ProjectPreview.jsx'

export default function ProjectCard({ project, nav }) {
  return (
    <article className="project-card">
      <ProjectPreview
        type={project.preview}
        image={project.image}
        imageWidth={project.imageWidth}
        imageHeight={project.imageHeight}
        images={project.images}
        imagesLayout={project.imagesLayout}
      />

      {project.status && <p className="project-card-status">{project.status}</p>}

      <div className="project-card-footer">
        <div className="project-tags" aria-label={`${project.title} tags`}>
          {project.tags.map((tag) => (
            <span className="project-tag" key={tag}>
              {tag}
            </span>
          ))}
        </div>

        <a
          className="project-link"
          href={project.url || (project.slug ? `/projects?project=${project.slug}` : '#contact')}
          aria-label={`View ${project.title}`}
          target={project.url ? '_blank' : undefined}
          rel={project.url ? 'noopener noreferrer' : undefined}
          onClick={project.slug && !project.url ? nav?.goProject(project.slug) : undefined}
        >
          {project.status === 'Work in progress' ? 'Explore Current Build' : 'View Project'}{' '}
          <span aria-hidden="true">↗</span>
        </a>
      </div>
    </article>
  )
}
