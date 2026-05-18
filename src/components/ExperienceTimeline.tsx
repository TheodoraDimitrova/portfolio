import { experiences } from '../data/experience'
import { Reveal } from './Reveal'
import { RevealSection } from './RevealSection'

export const ExperienceTimeline = () => {
  return (
    <RevealSection id="experience" className="section section-experience">
      <div className="container">
        <header className="section-header">
          <p className="eyebrow">Experience</p>
          <h2>Professional experience</h2>
          <p className="section-lead">
            5+ years building product-driven interfaces — from logistics platforms
            across the Nordics to eCommerce, SaaS, and freelance delivery.
          </p>
        </header>

        <div className="timeline">
          <div className="timeline-line" aria-hidden="true" />

          <ol className="timeline-list">
            {experiences.map((item, index) => (
              <Reveal
                key={`${item.company}-${item.period}`}
                as="li"
                className={`timeline-item${index % 2 === 0 ? ' timeline-item--left' : ' timeline-item--right'}`}
                delay={index * 0.15}
              >
                <span className="timeline-marker" aria-hidden="true" />
                <article className="timeline-card">
                  <p className="timeline-period">{item.period}</p>
                  <h3 className="timeline-role">
                    {item.role}
                    <span className="timeline-company"> | {item.company}</span>
                  </h3>
                  {item.location ? (
                    <p className="timeline-location">{item.location}</p>
                  ) : null}
                  <ul className="timeline-highlights">
                    {item.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </RevealSection>
  )
};
