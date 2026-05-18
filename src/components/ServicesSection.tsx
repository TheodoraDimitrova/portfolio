import { SERVICES } from "../constants/services";
import { Reveal } from "./Reveal";
import { RevealSection } from "./RevealSection";

export const ServicesSection = () => {
  return (
    <RevealSection id="services" className="section section-services">
      <div className="container">
        <header className="section-header services-header">
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

        <div className="services-grid">
          {SERVICES.map((service, index) => {
            const Icon = service.icon;
            return (
              <Reveal key={service.title} delay={index * 0.15}>
                <article className="service-card">
                  <div className="service-card__icon-wrap" aria-hidden>
                    <Icon className="service-card__icon" strokeWidth={1} />
                  </div>
                  <h3 className="service-card__title">{service.title}</h3>
                  <p className="service-card__desc">{service.description}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </RevealSection>
  );
};
