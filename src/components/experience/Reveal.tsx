import { motion, type Variants } from "motion/react";
import type { ReactNode } from "react";

const variants: Variants = {
  hidden: { opacity: 0, y: 28, filter: "blur(8px)" },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.9, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] },
  }),
};

/** Fades + lifts content into view once it enters the viewport. */
export function Reveal({
  children,
  index = 0,
  className = "",
  once = true,
}: {
  children: ReactNode;
  index?: number;
  className?: string;
  once?: boolean;
}) {
  return (
    <motion.div
      className={className}
      custom={index}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.35 }}
    >
      {children}
    </motion.div>
  );
}
