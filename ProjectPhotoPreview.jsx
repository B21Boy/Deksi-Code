export default function ProjectPhotoPreview({ src, alt, width, height }) {
  return (
    <div className="project-preview project-preview-photo" aria-hidden="true">
      <img
        className="project-preview-photo-img"
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading="lazy"
        decoding="async"
      />
    </div>
  )
}
