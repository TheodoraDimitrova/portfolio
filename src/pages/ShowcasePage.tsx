import { motion, useReducedMotion } from "framer-motion";
import { ContactForm } from "../components/ContactForm";
import { ExperienceTimeline } from "../components/ExperienceTimeline";
import { ServicesSection } from "../components/ServicesSection";
import { SkillsSection } from "../components/SkillsSection";
import { Footer } from "../components/Footer";
import { HeroTechStack } from "../components/HeroTechStack";
import { Reveal } from "../components/Reveal";
import { RevealSection } from "../components/RevealSection";
import { projects } from "../data/projects";
import { aboutInfo, contactInfo } from "../data/site";
import { revealHidden, revealTransition, revealVisible } from "../utils/motion";
import { scrollToSection } from "../utils/scrollToSection";

export const ShowcasePage = () => {
  const reduceMotion = useReducedMotion();

  return (
    <div className="showcase">
      <section id="hero" className="section section-hero">
        <div className="hero-bg" aria-hidden="true" />

        <div className="container hero-inner">
          <motion.div
            className="hero-content"
            initial={reduceMotion ? false : revealHidden}
            animate={reduceMotion ? undefined : revealVisible}
            transition={revealTransition(0, 1.5)}
          >
            <h1 className="hero-name">
              Teodora <span className="hero-name-gradient">Dimitrova</span>
            </h1>
            <HeroTechStack />
            <p className="hero-title">
              Front-End Engineer | Specializing in product-driven web
              applications
            </p>
            <div className="hero-cta">
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => scrollToSection("work")}
              >
                View products
              </button>
              <button
                type="button"
                className="btn btn-ghost"
                onClick={() => scrollToSection("contact")}
              >
                Get in touch
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <RevealSection id="about" className="section section-about">
        <div className="container">
          <p className="eyebrow about-eyebrow">About</p>

          <Reveal className="about-intro" delay={0.15}>
            <aside className="about-aside">
              <div className="about-portrait" />
              <p className="about-location">{aboutInfo.location}</p>
              {aboutInfo.cvUrl ? (
                <a
                  href={aboutInfo.cvUrl}
                  className="btn btn-ghost btn-sm about-cv"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fas fa-file-arrow-down" /> Download CV
                </a>
              ) : null}
            </aside>

            <div className="about-bio">
              <h2 className="about-headline">
                Specializing in production-ready applications through modern
                JavaScript ecosystems.
              </h2>
              <p>
                <span className="text-highlight">Front-End Developer</span> with
                over <span className="text-highlight">5+ years</span> of
                professional experience, specializing in building modern,
                production-ready applications with{" "}
                <span className="text-highlight">React</span>,{" "}
                <span className="text-highlight">Next.js</span>,{" "}
                <span className="text-highlight">Nuxt.js</span>, and{" "}
                <span className="text-highlight">TypeScript</span>. My journey
                began in 2016, and since then, I&apos;ve focused on delivering
                clean, maintainable solutions that bridge the gap between
                complex architecture and seamless user experiences.
              </p>
              <p>
                Beyond the interface, I have experience integrating{" "}
                <span className="text-highlight">backend services</span> and
                working with <span className="text-highlight">full-stack</span>{" "}
                JavaScript technologies. As part of my personal projects, I have
                built a MERN stack application (MongoDB, Express, React,
                Node.js), focusing on{" "}
                <span className="text-highlight">end-to-end</span> development
                and product-oriented thinking.
              </p>
            </div>
          </Reveal>

          <SkillsSection />
        </div>
      </RevealSection>

      <ServicesSection />

      <ExperienceTimeline />

      <RevealSection id="work" className="section section-work">
        <div className="container">
          <header className="section-header">
            <p className="eyebrow">Work</p>
            <h2>Product showcase</h2>
            <p className="section-lead">
              Selected projects — each built as a focused product experience
              with live demos and open-source repositories.
            </p>
          </header>

          <div className="product-grid">
            {projects.map((project, index) => (
              <Reveal key={project.title} delay={index * 0.15}>
                <article className="product-card">
                  <div className="product-media">
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                    />
                  </div>
                  <div className="product-body">
                    <h3 className="product-card__title">{project.title}</h3>
                    <p className="product-card__desc">{project.description}</p>
                    <div className="product-tags">
                      {project.tags.map((tag) => (
                        <span key={tag} className="tag">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="product-actions">
                      <a
                        href={project.projectUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-primary btn-sm"
                      >
                        <i className="fas fa-arrow-up-right-from-square" /> Live
                        demo
                      </a>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-ghost btn-sm"
                      >
                        <i className="fab fa-github" /> Source
                      </a>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal className="work-more" delay={0.15}>
            <a
              href="https://github.com/TheodoraDimitrova?tab=repositories"
              target="_blank"
              rel="noreferrer"
            >
              More on GitHub <i className="fab fa-github" />
            </a>
          </Reveal>
        </div>
      </RevealSection>

      <RevealSection id="contact" className="section section-contact">
        <div className="container contact-layout">
          <div className="contact-aside">
            <header className="section-header contact-header">
              <p className="eyebrow">Contact</p>
              <h2>Let&apos;s build something together</h2>
              <p className="section-lead">
                Get in touch for collaborations, roles, or product work.
              </p>
            </header>

            <ul className="contact-details">
              <li>
                <i className="fa-solid fa-at" aria-hidden />
                <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
              </li>
              <li>
                <i className="fa-solid fa-phone" aria-hidden />
                <a href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}>
                  {contactInfo.phone}
                </a>
              </li>
            </ul>
          </div>

          <Reveal className="contact-form-wrap" delay={0.15}>
            <ContactForm />
          </Reveal>
        </div>
      </RevealSection>

      <Reveal delay={0.05}>
        <Footer />
      </Reveal>
    </div>
  );
};
