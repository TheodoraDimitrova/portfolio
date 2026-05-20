import { SERVICES } from "@/data/services";
import { Reveal } from "@/components/motion/Reveal";
import { RevealSection } from "@/components/motion/RevealSection";
import styles from "./ServicesSection.module.scss";

export const ServicesSection = () => {
  return (
    <RevealSection
      id="services"
      className={`section ${styles.sectionServices}`}
    >
      <div className="container">
        <header className={`section-header ${styles.servicesHeader}`}>
          <p className="eyebrow">Services</p>
          <h2>
            How I Help Businesses
            <span className="text-accent"> Businesses</span>
          </h2>
          <p className="section-lead">
            Product-focused frontend development — building complete UI-driven
            web applications for SaaS, e-commerce, and internal business tools,
            from design to production-ready frontend implementation
          </p>
        </header>

        <div className={styles.servicesGrid}>
          {SERVICES.map((service, index) => {
            const Icon = service.icon;
            return (
              <Reveal key={service.title} delay={index * 0.15}>
                <article className={styles.serviceCard}>
                  <div className={styles.serviceCardIconWrap} aria-hidden>
                    <Icon
                      className={styles.serviceCardIcon}
                      strokeWidth={1}
                    />
                  </div>
                  <h3 className={styles.serviceCardTitle}>{service.title}</h3>
                  <p className={styles.serviceCardDesc}>{service.description}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </RevealSection>
  );
};
