import { motion, useReducedMotion } from "framer-motion";
import {
  revealHidden,
  revealTransition,
  revealVisible,
} from "../../utils/motion";
import { scrollToSection } from "../../utils/scrollToSection";
import { HeroTechStack } from "../HeroTechStack/HeroTechStack";
import styles from "./HeroSection.module.scss";

export const HeroSection = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section id="hero" className={`section ${styles.sectionHero}`}>
      <div className={styles.heroBg} aria-hidden="true" />

      <div className={`container ${styles.heroInner}`}>
        <motion.div
          className={styles.heroContent}
          initial={reduceMotion ? false : revealHidden}
          animate={reduceMotion ? undefined : revealVisible}
          transition={revealTransition(0, 1.5)}
        >
          <h1 className={styles.heroName}>
            Teodora{" "}
            <span className={styles.heroNameGradient}>Dimitrova</span>
          </h1>
          <HeroTechStack />
          <p className={styles.heroTitle}>
            Front-End Engineer | Specializing in product-driven web applications
          </p>
          <div className={styles.heroCta}>
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
  );
};
