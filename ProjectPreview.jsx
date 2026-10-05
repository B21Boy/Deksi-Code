export default function ProjectPreview({ type, image, imageWidth, imageHeight }) {
  return (
    <div className={`project-preview project-preview-${type}`} aria-hidden="true">
      <div className="preview-window">
        <span />
        <span />
        <span />
      </div>
      <div className="preview-content">
        {image ? (
          <img
            className="preview-screenshot"
            src={image}
            alt="Project preview"
            width={imageWidth}
            height={imageHeight}
            loading="lazy"
            decoding="async"
          />
        ) : (
          <div className="preview-main" />
        )}
        <div className="preview-stack">
          <span />
          <span />
          <span />
        </div>
      </div>
    </div>
  )
}
