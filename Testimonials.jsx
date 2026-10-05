import { hasPlaceholders, visibleTestimonials } from '../../data/testimonials.js'
import { useCompanion } from '../../context/CompanionContext.jsx'
import OrbitCardStack from '../ui/OrbitCardStack.jsx'
import { useSectionCompanion } from '../../hooks/useSectionCompanion.js'

export default function Testimonials() {
  const sectionRef = useSectionCompanion('attentive')
  const { reactTo } = useCompanion()

  // No visible testimonials (only samples in production): render nothing.
  if (visibleTestimonials.length === 0) return null

  return (
    <section
      className="testimonials-section"
      id="testimonials"
      aria-labelledby="testimonials-title"
      ref={sectionRef}
    >
      <div className="testimonials-header">
        <p className="section-kicker">Testimonials</p>
        <h2 id="testimonials-title">What people say about working with me.</h2>
      </div>

      <OrbitCardStack
        items={visibleTestimonials}
        defaultActiveIndex={Math.min(1, visibleTestimonials.length - 1)}
        spread={190}
        lift={40}
        label="Testimonials"
        onActiveChange={() => reactTo('attentive')}
      />

      {hasPlaceholders && (
        <p className="testimonials-note">
          Draft testimonials for design work, hidden in the production build. Get each person to
          approve or rewrite theirs, then remove placeholder: true in src/data/testimonials.js.
        </p>
      )}
    </section>
  )
}
