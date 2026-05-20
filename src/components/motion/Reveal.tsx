import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import {
  revealHidden,
  revealTransition,
  revealViewport,
  revealVisible,
} from "../../utils/motion";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "li";
};

export const Reveal = ({
  children,
  className,
  delay = 0,
  as = "div",
}: RevealProps) => {
  const reduceMotion = useReducedMotion();

  const motionProps = {
    className,
    initial: reduceMotion ? false : revealHidden,
    whileInView: reduceMotion ? undefined : revealVisible,
    viewport: revealViewport,
    transition: revealTransition(delay),
  };

  if (as === "li") {
    return <motion.li {...motionProps}>{children}</motion.li>;
  }

  return <motion.div {...motionProps}>{children}</motion.div>;
};
