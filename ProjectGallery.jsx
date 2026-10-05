import { useCallback, useRef, useState } from 'react'
import { useModal } from './useModal.js'

export default function ProjectGallery({ project, onClose }) {
  const { screens } = project
  const total = screens.length
  const [index, setIndex] = useState(0)
  const dialogRef = useRef(null)
  const touchStartX = useRef(null)

  const handleArrowKeys = useCallback(
    (event) => {
      if (event.key === 'ArrowRight') setIndex((current) => (current + 1) % total)
      if (event.key === 'ArrowLeft') setIndex((current) => (current - 1 + total) % total)
    },
    [total],
  )

  useModal(dialogRef, onClose, { focusDialog: true, onKeyDown: handleArrowKeys })

  const screen = screens[index]

  const handleTouchEnd = (event) => {
    if (touchStartX.current === null) return
    const distance = event.changedTouches[0].clientX - touchStartX.current
    touchStartX.current = null

    if (Math.abs(distance) < 40) return
    setIndex((current) => (distance < 0 ? (current + 1) % total : (current - 1 + total) % total))
  }

  return (
    <div className="notice-overlay" onClick={onClose}>
      <div
        className="notice-dialog gallery-dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="gallery-title"
        tabIndex={-1}
        ref={dialogRef}
        onClick={(event) => event.stopPropagation()}
      >
        <div
          className="gallery-stage"
          onTouchStart={(event) => {
            touchStartX.current = event.touches[0].clientX
          }}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className={`phone-frame gallery-phone${screen.isDesktop ? ' gallery-desktop-frame' : ''}`}
            style={screen.aspectRatio ? { '--gallery-aspect-ratio': screen.aspectRatio } : undefined}
          >
            <img key={index} src={screen.src} alt={screen.alt} />
          </div>
        </div>

        <div className="gallery-info">
          <p className="section-kicker">{project.title}</p>
          <h2 id="gallery-title">{screen.title}</h2>
          <p className="gallery-text" aria-live="polite">
            {screen.text}
          </p>

          <div className="gallery-nav">
            <button
              className="gallery-arrow"
              type="button"
              aria-label="Previous screen"
              onClick={() => setIndex((current) => (current - 1 + total) % total)}
            >
              <svg aria-hidden="true" viewBox="0 0 24 24">
                <path d="M15 5l-7 7 7 7" />
              </svg>
            </button>
            <span className="gallery-count">
              {index + 1} / {total}
            </span>
            <button
              className="gallery-arrow"
              type="button"
              aria-label="Next screen"
              onClick={() => setIndex((current) => (current + 1) % total)}
            >
              <svg aria-hidden="true" viewBox="0 0 24 24">
                <path d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          <div className="gallery-dots" role="group" aria-label="Choose a screen">
            {screens.map((item, dotIndex) => (
              <button
                className="gallery-dot"
                type="button"
                key={item.title}
                aria-label={`Show ${item.title}`}
                aria-current={dotIndex === index}
                onClick={() => setIndex(dotIndex)}
              />
            ))}
          </div>

          <button className="notice-action gallery-close" type="button" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  )
}
