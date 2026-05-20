import { aboutInfo } from "../../data/site";
import { Reveal } from "../motion/Reveal";
import { RevealSection } from "../motion/RevealSection";
import { SkillsSection } from "../SkillsSection/SkillsSection";
import styles from "./AboutSection.module.scss";

export const AboutSection = () => {
  return (
    <RevealSection id="about" className={`section ${styles.sectionAbout}`}>
      <div className="container">
        <p className={`eyebrow ${styles.aboutEyebrow}`}>About</p>

        <Reveal className={styles.aboutIntro} delay={0.15}>
          <aside className={styles.aboutAside}>
            <div className={styles.aboutPortrait} />
            <p className={styles.aboutLocation}>{aboutInfo.location}</p>
            {aboutInfo.cvUrl ? (
              <a
                href={aboutInfo.cvUrl}
                className={`btn btn-ghost btn-sm ${styles.aboutCv}`}
                target="_blank"
                rel="noreferrer"
              >
                <i className="fas fa-file-arrow-down" /> Download CV
              </a>
            ) : null}
          </aside>

          <div className={styles.aboutBio}>
            <h2 className={styles.aboutHeadline}>
              Specializing in production-ready applications through modern
              JavaScript ecosystems.
            </h2>
            <p>
              <span className={styles.textHighlight}>Front-End Developer</span>{" "}
              with over <span className={styles.textHighlight}>5+ years</span> of
              professional experience, specializing in building modern,
              production-ready applications with{" "}
              <span className={styles.textHighlight}>React</span>,{" "}
              <span className={styles.textHighlight}>Next.js</span>,{" "}
              <span className={styles.textHighlight}>Nuxt.js</span>, and{" "}
              <span className={styles.textHighlight}>TypeScript</span>. My journey
              began in 2016, and since then, I&apos;ve focused on delivering
              clean, maintainable solutions that bridge the gap between complex
              architecture and seamless user experiences.
            </p>
            <p>
              Beyond the interface, I have experience integrating{" "}
              <span className={styles.textHighlight}>backend services</span> and
              working with{" "}
              <span className={styles.textHighlight}>full-stack</span> JavaScript
              technologies. As part of my personal projects, I have built a MERN
              stack application (MongoDB, Express, React, Node.js), focusing on{" "}
              <span className={styles.textHighlight}>end-to-end</span> development
              and product-oriented thinking.
            </p>
          </div>
        </Reveal>

        <SkillsSection />
      </div>
    </RevealSection>
  );
};
