import { skillGroups } from '../data/skills'
import { Reveal } from './Reveal'

export const SkillsSection = () => {
  return (
    <div className="skills-bento">
      {skillGroups.map((group, index) => (
        <Reveal key={group.title} delay={0.15 * index}>
          <article className="skill-card">
            <h3 className="skill-card__title">{group.title}</h3>
            <ul className="skill-card__list">
              {group.items.map((item) => (
                <li key={item.heading} className="skill-card__item">
                  <h4 className="skill-card__heading">{item.heading}</h4>
                  {item.description ? (
                    <p className="skill-card__desc">{item.description}</p>
                  ) : null}
                </li>
              ))}
            </ul>
          </article>
        </Reveal>
      ))}
    </div>
  )
};
