import { skillGroups } from "../../data/skills";
import { Reveal } from "../motion/Reveal";
import styles from "./SkillsSection.module.scss";

export const SkillsSection = () => {
  return (
    <div className={styles.skillsBento}>
      {skillGroups.map((group, index) => (
        <Reveal key={group.title} delay={0.15 * index}>
          <article className={styles.skillCard}>
            <h3 className={styles.skillCardTitle}>{group.title}</h3>
            <ul className={styles.skillCardList}>
              {group.items.map((item) => (
                <li key={item.heading} className={styles.skillCardItem}>
                  <h4 className={styles.skillCardHeading}>{item.heading}</h4>
                  {item.description ? (
                    <p className={styles.skillCardDesc}>{item.description}</p>
                  ) : null}
                </li>
              ))}
            </ul>
          </article>
        </Reveal>
      ))}
    </div>
  );
};
