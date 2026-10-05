import ProjectPreview from './ProjectPreview.jsx'

export default function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <ProjectPreview
        type={project.preview}
        image={project.image}
        imageWidth={project.imageWidth}
        imageHeight={project.imageHeight}
      />

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
          href={project.url || '#contact'}
          aria-label={`View ${project.title}`}
          target={project.url ? '_blank' : undefined}
          rel={project.url ? 'noopener noreferrer' : undefined}
        >
          View Project <span aria-hidden="true">↗</span>
        </a>
      </div>
    </article>
  )
}
