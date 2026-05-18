import type { CSSProperties } from 'react'
import { techStack } from '../data/techStack'

export const HeroTechStack = () => {
  return (
    <ul className="hero-tech" aria-label="Core technologies" role="list">
      {techStack.map((tech) => {
        const Icon = tech.Icon
        return (
          <li key={tech.name}>
            <span
              className="hero-tech__item"
              style={{ '--tech-color': tech.color } as CSSProperties}
              title={tech.name}
            >
              <Icon aria-hidden />
              <span className="sr-only">{tech.name}</span>
            </span>
          </li>
        )
      })}
    </ul>
  )
};
