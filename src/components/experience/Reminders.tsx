import { motion } from "motion/react";
import { reminders } from "@/content/site";

/** Emotional section: one sentence appears at a time as you scroll. */
export function Reminders() {
  return (
    <div className="mx-auto flex max-w-3xl flex-col gap-14 sm:gap-24">
      {reminders.map((line, i) => (
        <motion.p
          key={i}
          initial={{ opacity: 0, y: 40, filter: "blur(12px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-center font-display text-xl leading-relaxed text-silver text-glow sm:text-3xl md:text-4xl"
        >
          {line}
        </motion.p>
      ))}
    </div>
  );
}
