import { projects } from "@/data/projects";
import { Reveal } from "@/components/motion/Reveal";
import { RevealSection } from "@/components/motion/RevealSection";
import styles from "./WorkSection.module.scss";

export const WorkSection = () => {
  return (
    <RevealSection id="work" className={`section ${styles.sectionWork}`}>
      <div className="container">
        <header className="section-header">
          <p className="eyebrow">Work</p>
          <h2>Product showcase</h2>
          <p className="section-lead">
            Selected projects — each built as a focused product experience with
            live demos and open-source repositories.
          </p>
        </header>

        <div className={styles.productGrid}>
          {projects.map((project, index) => (
            <Reveal key={project.title} delay={index * 0.15}>
              <article className={styles.productCard}>
                <div className={styles.productMedia}>
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                  />
                </div>
                <div className={styles.productBody}>
                  <h3 className={styles.productCardTitle}>{project.title}</h3>
                  <p className={styles.productCardDesc}>{project.description}</p>
                  <div className={styles.productTags}>
                    {project.tags.map((tag) => (
                      <span key={tag} className={styles.tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className={styles.productActions}>
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

        <Reveal className={styles.workMore} delay={0.15}>
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
  );
};
