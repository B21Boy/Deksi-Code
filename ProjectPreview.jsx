export default function ProjectPreview({ type, image, imageWidth, imageHeight, images = [], imagesLayout }) {
  return (
    <div
      className={`project-preview project-preview-${type}${imagesLayout === 'screenshot-grid' ? ' project-preview-screenshots' : ''}${imagesLayout === 'portfolio-grid' ? ' project-preview-portfolio' : ''}${imagesLayout === 'skillswap-grid' ? ' project-preview-skillswap' : ''}${imagesLayout === 'lottery-grid' ? ' project-preview-lottery' : ''}`}
      aria-hidden="true"
    >
      <div className="preview-window">
        <span />
        <span />
        <span />
      </div>
      <div className="preview-content">
        {images.length ? (
          imagesLayout === 'skillswap-grid' ? (
            <div className="preview-skillswap-grid">
              {images.map((src) => (
                <img className="preview-skillswap-screen" src={src} alt="" key={src} loading="lazy" decoding="async" />
              ))}
            </div>
          ) : imagesLayout === 'lottery-grid' ? (
            <div className="preview-lottery-grid">
              {images.map((src, index) => (
                <div className="preview-lottery-screen" key={`${src}-${index}`}>
                  <img src={src} alt="" loading="lazy" decoding="async" />
                </div>
              ))}
            </div>
          ) : imagesLayout === 'portfolio-grid' ? (
            <div className="preview-portfolio-grid">
              {images.map((src, index) => (
                <img
                  className={`preview-portfolio-screen${index === 0 ? ' preview-portfolio-screen-hero' : ''}`}
                  src={src}
                  alt=""
                  key={src}
                  loading="lazy"
                  decoding="async"
                />
              ))}
            </div>
          ) : imagesLayout === 'screenshot-grid' ? (
            <div className="preview-desktop-screenshot-grid">
              {images.map((src) => (
                <img className="preview-desktop-screenshot" src={src} alt="" key={src} loading="lazy" decoding="async" />
              ))}
            </div>
          ) : (
            <div className="preview-marketplace-grid">
              <div className="preview-marketplace-row preview-marketplace-row-top">
                {[images[0], images[3], images[4]].map((src) => (
                  <img className="preview-marketplace-image" src={src} alt="" key={src} loading="lazy" decoding="async" />
                ))}
              </div>
              <div className="preview-marketplace-row preview-marketplace-row-bottom">
                {[images[1], images[2]].map((src) => (
                  <img className="preview-marketplace-image" src={src} alt="" key={src} loading="lazy" decoding="async" />
                ))}
              </div>
            </div>
          )
        ) : image ? (
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
