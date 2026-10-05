export default function AppScreensPreview({ screens, featured, layout = 'mobile' }) {
  const [left, center, right] = featured.map((id) => screens.find((screen) => screen.id === id))

  if (layout === 'desktop') {
    return (
      <div
        className="project-preview project-preview-distance-education"
        aria-hidden="true"
      >
        <div className="preview-window">
          <span />
          <span />
          <span />
        </div>
        <div className="distance-education-screens">
          {featured.map((id) => {
            const screen = screens.find((item) => item.id === id)
            return (
              <img
                src={screen.src}
                alt=""
                key={screen.id}
                loading="lazy"
                decoding="async"
              />
            )
          })}
        </div>
      </div>
    )
  }

  if (layout === 'desktop-grid') {
    return (
      <div className="project-preview project-preview-honey-shop" aria-hidden="true">
        <div className="preview-window">
          <span />
          <span />
          <span />
        </div>
        <div className="honey-shop-screens">
          {featured.map((id) => {
            const screen = screens.find((item) => item.id === id)
            return (
              <img
                src={screen.src}
                alt=""
                key={screen.id}
                loading="lazy"
                decoding="async"
              />
            )
          })}
        </div>
        <span className="honey-shop-screen-count">5 screens</span>
      </div>
    )
  }

  return (
    <div
      className="project-preview project-preview-mobile project-preview-screens"
      aria-hidden="true"
    >
      <div className="preview-window">
        <span />
        <span />
        <span />
      </div>

      <div className="screens-stage">
        <div className="phone-frame phone-left">
          <img src={left.src} alt="" loading="lazy" decoding="async" />
        </div>
        <div className="phone-frame phone-right">
          <img src={right.src} alt="" loading="lazy" decoding="async" />
        </div>
        <div className="phone-frame phone-center">
          <img src={center.src} alt="" loading="lazy" decoding="async" />
        </div>
      </div>
    </div>
  )
}
