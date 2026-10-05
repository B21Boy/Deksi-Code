export default function AppScreensPreview({ screens, featured }) {
  const [left, center, right] = featured.map((id) => screens.find((screen) => screen.id === id))

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
