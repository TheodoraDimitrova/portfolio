import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import {
  revealHidden,
  revealVisible,
  sectionRevealTransition,
  sectionRevealViewport,
} from "../../utils/motion";

type RevealSectionProps = {
  children: ReactNode;
  id?: string;
  className?: string;
  delay?: number;
};

export const RevealSection = ({
  children,
  id,
  className,
  delay = 0,
}: RevealSectionProps) => {
  const reduceMotion = useReducedMotion();

  return (
    <motion.section
      id={id}
      className={className}
      initial={reduceMotion ? false : revealHidden}
      whileInView={reduceMotion ? undefined : revealVisible}
      viewport={sectionRevealViewport}
      transition={sectionRevealTransition(delay)}
    >
      {children}
    </motion.section>
  );
};
