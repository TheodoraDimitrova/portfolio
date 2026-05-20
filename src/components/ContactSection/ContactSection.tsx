import { contactInfo } from "../../data/site";
import { ContactForm } from "../ContactForm/ContactForm";
import { Reveal } from "../motion/Reveal";
import { RevealSection } from "../motion/RevealSection";
import styles from "./ContactSection.module.scss";

export const ContactSection = () => {
  return (
    <RevealSection
      id="contact"
      className={`section ${styles.sectionContact}`}
    >
      <div className={`container ${styles.contactLayout}`}>
        <div className={styles.contactAside}>
          <header className={`section-header ${styles.contactHeader}`}>
            <p className="eyebrow">Contact</p>
            <h2>Let&apos;s build something together</h2>
            <p className="section-lead">
              Get in touch for collaborations, roles, or product work.
            </p>
          </header>

          <ul className={styles.contactDetails}>
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

        <Reveal className={styles.contactFormWrap} delay={0.15}>
          <ContactForm />
        </Reveal>
      </div>
    </RevealSection>
  );
};
