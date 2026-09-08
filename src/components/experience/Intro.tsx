import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { intro } from "@/content/site";
import { Particles, StarField } from "./StarField";

/** Cinematic full-screen opening. Calls onEnter when the visitor steps in. */
export function Intro({ onEnter }: { onEnter: () => void }) {
  const [step, setStep] = useState(0);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    if (step >= intro.lines.length - 1) return;
    const t = setTimeout(() => setStep((s) => s + 1), step === 0 ? 2600 : 2400);
    return () => clearTimeout(t);
  }, [step]);

  const handleEnter = () => {
    setLeaving(true);
    setTimeout(onEnter, 900);
  };

  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center overflow-hidden px-6"
      style={{ backgroundImage: "var(--gradient-era)" }}
      animate={leaving ? { opacity: 0, scale: 1.08, filter: "blur(14px)" } : {}}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="era-halo animate-pulse-glow absolute inset-0" />
      <StarField count={110} />
      <Particles count={14} />

      <div className="relative z-10 flex min-h-[46vh] w-full max-w-3xl flex-col items-center justify-center text-center">
        <AnimatePresence mode="wait">
          <motion.h1
            key={step}
            initial={{ opacity: 0, y: 26, filter: "blur(14px)", letterSpacing: "0.6em" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)", letterSpacing: "0.16em" }}
            exit={{ opacity: 0, y: -20, filter: "blur(14px)" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className={
              step === intro.lines.length - 1
                ? "font-display text-4xl font-bold uppercase text-chrome text-glow sm:text-6xl md:text-7xl"
                : "font-display text-xl font-medium uppercase leading-relaxed text-silver sm:text-3xl md:text-4xl"
            }
          >
            {intro.lines[step]}
          </motion.h1>
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {step === intro.lines.length - 1 && (
          <motion.button
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
            onClick={handleEnter}
            className="glass group relative z-10 mt-14 rounded-full px-8 py-4 font-mono text-[0.65rem] uppercase tracking-era text-silver transition-all duration-500 hover:scale-105 sm:text-xs"
            style={{ boxShadow: "var(--shadow-glow)" }}
          >
            <span className="relative z-10">{intro.button}</span>
            <span className="era-halo absolute inset-0 rounded-full opacity-0 transition-opacity duration-500 group-hover:opacity-70" />
          </motion.button>
        )}
      </AnimatePresence>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 font-mono text-[0.6rem] uppercase tracking-era text-muted-foreground"
      >
        headphones recommended
      </motion.p>
    </motion.div>
  );
}
