import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { easterEgg } from "@/content/site";

/**
 * Hidden track: click the small star that floats in the corner
 * of the memories chapter to unlock a secret message.
 */
export function EasterEggStar({ onUnlock }: { onUnlock?: () => void }) {
  const [open, setOpen] = useState(false);
  const [found, setFound] = useState(false);

  const unlock = () => {
    setOpen(true);
    if (!found) onUnlock?.();
    setFound(true);
  };

  return (
    <>
      <button
        onClick={unlock}
        title={easterEgg.hint}
        aria-label="Hidden track"
        className="animate-float-slow absolute right-4 top-6 z-20 text-lg text-silver/25 transition-all duration-500 hover:scale-150 hover:text-glow sm:right-10"
      >
        ✦
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          >
            <div className="absolute inset-0 bg-background/85 backdrop-blur-lg" />
            <motion.div
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, scale: 0.85, rotate: -2 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="glass relative w-full max-w-md rounded-2xl p-9 text-center"
              style={{ boxShadow: "var(--shadow-glow), var(--shadow-deep)" }}
            >
              <span className="era-halo absolute inset-0 rounded-2xl opacity-60" />
              <div className="relative z-10">
                <p className="font-mono text-[0.58rem] uppercase tracking-era text-muted-foreground">
                  you found it
                </p>
                <h4 className="mt-3 font-display text-2xl uppercase text-chrome text-glow">
                  {easterEgg.title}
                </h4>
                <p className="mt-6 whitespace-pre-line text-sm leading-relaxed text-silver">
                  {easterEgg.message}
                </p>
                <button
                  onClick={() => setOpen(false)}
                  className="mt-8 rounded-full border border-border px-6 py-2.5 font-mono text-[0.58rem] uppercase tracking-era text-muted-foreground transition-colors hover:text-silver"
                >
                  close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
