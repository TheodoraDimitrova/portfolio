import type { IconType } from "react-icons";
import {
  SiNextdotjs,
  SiNuxt,
  SiReact,
  SiTypescript,
  SiVuedotjs,
} from "react-icons/si";

export type TechStackItem = {
  name: string;
  color: string;
  Icon: IconType;
};

export const techStack: TechStackItem[] = [
  { name: "Next.js", color: "#ffffff", Icon: SiNextdotjs },
  { name: "React", color: "#61DAFB", Icon: SiReact },
  { name: "TypeScript", color: "#3178C6", Icon: SiTypescript },
  { name: "Vue", color: "#4FC08D", Icon: SiVuedotjs },
  { name: "Nuxt", color: "#00DC82", Icon: SiNuxt },
];
