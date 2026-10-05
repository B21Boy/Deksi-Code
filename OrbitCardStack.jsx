import { useRef, useState } from 'react'

// Position of a card relative to the active one on a circular track (0 = active card).
function getOffset(index, active, total) {
  const half = Math.floor(total / 2)
  return ((index - active + total + half) % total) - half
}

/**
 * Cards fanned out along an orbit. The active card sits in front and lifted;
 * click a card, use the arrows or dots, press the arrow keys, or swipe to change it.
 *
 * items: { name, role, description, initials, stat, accent, image? }[]
 * spread: horizontal distance between neighbouring cards (px)
 * lift: how far the active card rises above the others (px)
 */
export default function OrbitCardStack({
  items,
  defaultActiveIndex = 0,
  spread = 150,
  lift = 40,
  onActiveChange,
  label = 'Cards',
}) {
  const total = items.length
  const [active, setActive] = useState(Math.min(defaultActiveIndex, total - 1))
  const touchStartX = useRef(null)

  function goTo(next) {
    const index = (next + total) % total
    setActive(index)
    onActiveChange?.(items[index], index)
  }

  function handleKeyDown(event) {
    if (event.key === 'ArrowRight') goTo(active + 1)
    if (event.key === 'ArrowLeft') goTo(active - 1)
  }

  function handleTouchEnd(event) {
    if (touchStartX.current === null) return
    const distance = event.changedTouches[0].clientX - touchStartX.current
    touchStartX.current = null

    if (Math.abs(distance) < 40) return
    goTo(distance < 0 ? active + 1 : active - 1)
  }

  return (
    <div
      className="orbit-stack"
      role="group"
      aria-roledescription="carousel"
      aria-label={label}
      style={{
        '--accent': items[active].accent,
        '--spread': `${spread}px`,
        '--lift': `${lift}px`,
      }}
    >
      <div
        className="orbit-stage"
        tabIndex={0}
        onKeyDown={handleKeyDown}
        onTouchStart={(event) => {
          touchStartX.current = event.touches[0].clientX
        }}
        onTouchEnd={handleTouchEnd}
      >
        <span className="orbit-ring orbit-ring-outer" aria-hidden="true" />
        <span className="orbit-ring orbit-ring-inner" aria-hidden="true" />
        <span className="orbit-glow" aria-hidden="true" />

        {items.map((item, index) => {
          const offset = getOffset(index, active, total)
          const distance = Math.abs(offset)
          const isActive = distance === 0

          return (
            <figure
              className={`orbit-card ${isActive ? 'is-active' : ''}`}
              key={`${item.name}-${index}`}
              data-hidden={distance > 2}
              aria-current={isActive}
              onClick={() => {
                if (!isActive) goTo(index)
              }}
              style={{
                '--offset': offset,
                '--distance': distance,
                '--is-active': isActive ? 1 : 0,
                '--visible': distance > 2 ? 0 : 1,
                '--card-accent': item.accent,
                zIndex: total - distance,
              }}
            >
              <figcaption className="orbit-card-head">
                <span className="orbit-avatar" aria-hidden="true">
                  {item.initials}
                  {item.image && (
                    <img
                      src={item.image}
                      alt=""
                      width="48"
                      height="48"
                      loading="lazy"
                      decoding="async"
                      onError={(event) => {
                        event.currentTarget.style.display = 'none'
                      }}
                    />
                  )}
                </span>
                <span className="orbit-person">
                  <strong>{item.name}</strong>
                  <span>{item.role}</span>
                </span>
              </figcaption>

              <blockquote className="orbit-quote">
                <p>{item.description}</p>
              </blockquote>

              <span className="orbit-stat">{item.stat}</span>
            </figure>
          )
        })}
      </div>

      {total > 1 && (
        <div className="orbit-controls">
          <button
            className="orbit-arrow"
            type="button"
            aria-label="Previous"
            onClick={() => goTo(active - 1)}
          >
            <svg aria-hidden="true" viewBox="0 0 24 24">
              <path d="M15 5l-7 7 7 7" />
            </svg>
          </button>

          <div className="orbit-dots" role="group" aria-label={`Choose from ${label}`}>
            {items.map((item, index) => (
              <button
                className="orbit-dot"
                type="button"
                key={`${item.name}-${index}`}
                aria-label={`Show ${item.name}`}
                aria-current={index === active}
                onClick={() => goTo(index)}
              />
            ))}
          </div>

          <button
            className="orbit-arrow"
            type="button"
            aria-label="Next"
            onClick={() => goTo(active + 1)}
          >
            <svg aria-hidden="true" viewBox="0 0 24 24">
              <path d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      )}

      <p className="orbit-sr-only" aria-live="polite">
        Showing {items[active].name}, {active + 1} of {total}
      </p>
    </div>
  )
}
