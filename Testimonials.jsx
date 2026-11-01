import { visibleTestimonials } from './testimonials.js'
import { useSectionCompanion } from './useSectionCompanion.js'

export default function Testimonials() {
  const sectionRef = useSectionCompanion('attentive')

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
        <div className="testimonials-grid">
          {visibleTestimonials.map((testimonial) => (
            <article
              className="testimonial-card"
              key={testimonial.name}
              style={{ '--card-accent': testimonial.accent }}
            >
              <div className="testimonial-card-head">
                <span
                  className="testimonial-avatar"
                  aria-hidden="true"
                >
                  {testimonial.initials}
                </span>
                <div className="testimonial-person">
                  <h3>{testimonial.name}</h3>
                  <p>{testimonial.role}</p>
                </div>
              </div>
              <blockquote className="testimonial-quote">
                <p>{testimonial.description}</p>
              </blockquote>
              <span className="testimonial-tag">
                {testimonial.stat}
              </span>
            </article>
          ))}
        </div>
      ) : (
        <p className="testimonials-empty">
          <strong>Testimonials are coming soon.</strong>
          <span>
            This section will show client and collaborator feedback once they have approved their
            words for publication.
          </span>
        </p>
      )}
    </section>
  )
}
