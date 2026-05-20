import { experiences } from "../../data/experience";
import { Reveal } from "../motion/Reveal";
import { RevealSection } from "../motion/RevealSection";
import styles from "./ExperienceSection.module.scss";

export const ExperienceSection = () => {
  return (
    <RevealSection
      id="experience"
      className={`section ${styles.sectionExperience}`}
    >
      <div className="container">
        <header className="section-header">
          <p className="eyebrow">Experience</p>
          <h2>Professional experience</h2>
          <p className="section-lead">
            5+ years building product-driven interfaces — from logistics
            platforms across the Nordics to eCommerce, SaaS, and freelance
            delivery.
          </p>
        </header>

        <div className={styles.timeline}>
          <div className={styles.timelineLine} aria-hidden="true" />

          <ol className={styles.timelineList}>
            {experiences.map((item, index) => {
              const sideClass =
                index % 2 === 0
                  ? styles.timelineItemLeft
                  : styles.timelineItemRight;

              return (
                <Reveal
                  key={`${item.company}-${item.period}`}
                  as="li"
                  className={`${styles.timelineItem} ${sideClass}`}
                  delay={index * 0.15}
                >
                  <span className={styles.timelineMarker} aria-hidden="true" />
                  <article className={styles.timelineCard}>
                    <p className={styles.timelinePeriod}>{item.period}</p>
                    <h3 className={styles.timelineRole}>
                      {item.role}
                      <span className={styles.timelineCompany}>
                        {" "}
                        | {item.company}
                      </span>
                    </h3>
                    {item.location ? (
                      <p className={styles.timelineLocation}>{item.location}</p>
                    ) : null}
                    <ul className={styles.highlights}>
                      {item.highlights.map((highlight) => (
                        <li key={highlight}>{highlight}</li>
                      ))}
                    </ul>
                  </article>
                </Reveal>
              );
            })}
          </ol>
        </div>
      </div>
    </RevealSection>
  );
};
