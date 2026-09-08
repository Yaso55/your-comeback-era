import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { chapters } from "@/content/site";

/** Interactive gift box that opens to reveal a personal message. */
export function GiftBox({ onOpen }: { onOpen?: () => void }) {
  const [open, setOpen] = useState(false);

  const handle = () => {
    if (open) return;
    setOpen(true);
    onOpen?.();
  };

  return (
    <div className="flex flex-col items-center">
      <AnimatePresence mode="wait">
        {!open ? (
          <motion.button
            key="box"
            onClick={handle}
            aria-label="Open the gift"
            exit={{ opacity: 0, scale: 0.7, filter: "blur(12px)" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="group relative h-52 w-52 cursor-pointer sm:h-64 sm:w-64"
          >
            <span className="era-halo animate-pulse-glow absolute -inset-10 rounded-full" />

            {/* lid */}
            <motion.span
              className="glass absolute left-1/2 top-6 h-12 w-[92%] -translate-x-1/2 rounded-xl"
              animate={{ y: [0, -6, 0], rotate: [-1.5, 1.5, -1.5] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              style={{ boxShadow: "var(--shadow-glow)" }}
            />
            {/* body */}
            <span className="glass absolute bottom-4 left-1/2 h-32 w-[80%] -translate-x-1/2 rounded-xl transition-transform duration-500 group-hover:scale-105 sm:h-40" />
            {/* ribbon */}
            <span className="absolute bottom-4 left-1/2 h-32 w-3 -translate-x-1/2 rounded-full bg-primary/70 blur-[0.5px] sm:h-40" />
            <span className="absolute left-1/2 top-6 h-12 w-3 -translate-x-1/2 rounded-full bg-primary/70" />

            <span className="absolute -bottom-10 left-1/2 -translate-x-1/2 whitespace-nowrap font-mono text-[0.6rem] uppercase tracking-era text-muted-foreground transition-colors group-hover:text-silver">
              tap to open
            </span>
          </motion.button>
        ) : (
          <motion.div
            key="msg"
            initial={{ opacity: 0, scale: 0.85, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="glass relative w-full max-w-2xl rounded-2xl px-7 py-12 text-center sm:px-14"
            style={{ boxShadow: "var(--shadow-glow), var(--shadow-deep)" }}
          >
            <span className="era-halo absolute inset-0 rounded-2xl opacity-60" />
            <div className="relative z-10">
              <p className="font-mono text-[0.6rem] uppercase tracking-era text-muted-foreground">
                a message inside the box
              </p>
              <p className="mt-7 whitespace-pre-line font-display text-lg leading-relaxed text-silver sm:text-2xl">
                {chapters.two.giftMessage}
              </p>
              <p className="mt-8 font-mono text-xs uppercase tracking-widest text-muted-foreground">
                {chapters.two.giftSignature}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
