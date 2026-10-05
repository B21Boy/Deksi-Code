import { useEffect, useRef, useState } from 'react'
import { useCompanion } from '../../context/CompanionContext.jsx'
import Deksiyos from './Deksiyos.jsx'

function prefersReducedMotion() {
  return typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

export default function CompanionWidget() {
  const { pose, pulse, blink, dismissed, toggleDismissed } = useCompanion()
  const stageRef = useRef(null)
  const [look, setLook] = useState({ x: 0, y: 0 })

  useEffect(() => {
    if (dismissed || prefersReducedMotion()) return

    let frame = null

    function handlePointerMove(event) {
      if (frame) return
      frame = window.requestAnimationFrame(() => {
        frame = null
        const stage = stageRef.current
        if (!stage) return
        const rect = stage.getBoundingClientRect()
        const cx = rect.left + rect.width / 2
        const cy = rect.top + rect.height / 2
        const dx = (event.clientX - cx) / (window.innerWidth / 2)
        const dy = (event.clientY - cy) / (window.innerHeight / 2)
        setLook({ x: Math.max(-1, Math.min(1, dx)), y: Math.max(-1, Math.min(1, dy)) })
      })
    }

    window.addEventListener('pointermove', handlePointerMove)
    return () => {
      window.removeEventListener('pointermove', handlePointerMove)
      if (frame) window.cancelAnimationFrame(frame)
    }
  }, [dismissed])

  if (dismissed) {
    return (
      <button
        className="companion-reopen"
        type="button"
        onClick={toggleDismissed}
        aria-label="Show Deksiyos, the portfolio companion"
      >
        <span aria-hidden="true">👋</span>
      </button>
    )
  }

  return (
    <div className="companion-dock">
      <div className="companion-decor" aria-hidden="true">
        <p className="companion-bubble" key={`bubble-${pulse}`}>
          {pose.line}
        </p>

        <div className="companion-stage" ref={stageRef}>
          <div className="companion-pop" key={`pop-${pulse}`}>
            <Deksiyos pose={pose} lookX={look.x} lookY={look.y} blink={blink} />
          </div>
        </div>
      </div>

      <button
        className="companion-dismiss"
        type="button"
        onClick={toggleDismissed}
        aria-label="Hide Deksiyos, the portfolio companion"
      >
        ×
      </button>
    </div>
  )
}
