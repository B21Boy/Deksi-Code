import { hasPlaceholders, visibleTestimonials } from './testimonials.js'
import { useCompanion } from './useCompanion.js'
import OrbitCardStack from './OrbitCardStack.jsx'
import { useSectionCompanion } from './useSectionCompanion.js'

export default function Testimonials() {
  const sectionRef = useSectionCompanion('attentive')
  const { reactTo } = useCompanion()

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

      {visibleTestimonials.length > 0 ? (
        <OrbitCardStack
          items={visibleTestimonials}
          defaultActiveIndex={Math.min(1, visibleTestimonials.length - 1)}
          spread={190}
          lift={40}
          label="Testimonials"
          onActiveChange={() => reactTo('attentive')}
        />
      ) : (
        <p className="testimonials-empty">
          Client testimonials are being collected and will appear here once approved.
        </p>
      )}

      {hasPlaceholders && (
        <p className="testimonials-note">
          Draft testimonials are shown for design work only. Get each person to approve or rewrite
          theirs, then remove placeholder: true in testimonials.js.
        </p>
      )}
    </section>
  )
}
