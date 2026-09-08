import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { chapters, tracks } from "@/content/site";

/** Album-style tracklist. Each track opens an animated modal card. */
export function Tracklist() {
  const [active, setActive] = useState<number | null>(null);
  const track = active === null ? null : tracks[active];

  return (
    <div className="mx-auto w-full max-w-3xl">
      <div className="glass rounded-3xl p-6 sm:p-9">
        <div className="flex flex-wrap items-end justify-between gap-3 border-b border-border pb-6">
          <h3 className="font-display text-2xl uppercase text-chrome sm:text-3xl">
            {chapters.four.albumTitle}
          </h3>
          <p className="font-mono text-[0.58rem] uppercase tracking-widest text-muted-foreground">
            {chapters.four.albumMeta}
          </p>
        </div>

        <ul className="mt-2">
          {tracks.map((t, i) => (
            <motion.li
              key={t.no}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
            >
              <button
                onClick={() => setActive(i)}
                className="group flex w-full items-center gap-4 border-b border-border py-4 text-left transition-colors last:border-b-0 hover:bg-secondary/40 sm:gap-6 sm:px-3"
              >
                <span className="font-mono text-[0.58rem] uppercase tracking-widest text-muted-foreground">
                  {t.no}
                </span>
                <span className="flex-1 font-display text-base uppercase text-silver transition-all duration-300 group-hover:text-glow sm:text-lg">
                  {t.title}
                </span>
                <span className="font-mono text-[0.6rem] text-muted-foreground">{t.duration}</span>
                <span className="text-glow opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  ▶
                </span>
              </button>
            </motion.li>
          ))}
        </ul>
      </div>

      <AnimatePresence>
        {track && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
          >
            <div className="absolute inset-0 bg-background/80 backdrop-blur-md" />
            <motion.div
              role="dialog"
              aria-modal="true"
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, y: 40, scale: 0.92 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="glass relative w-full max-w-lg rounded-2xl p-8 text-center sm:p-12"
              style={{ boxShadow: "var(--shadow-glow), var(--shadow-deep)" }}
            >
              <span className="era-halo absolute inset-0 rounded-2xl opacity-50" />
              <div className="relative z-10">
                <p className="font-mono text-[0.58rem] uppercase tracking-era text-muted-foreground">
                  {track.no}
                </p>
                <h4 className="mt-3 font-display text-2xl uppercase text-chrome sm:text-3xl">
                  {track.title}
                </h4>
                <div className="hairline mx-auto mt-5 h-px w-24" />
                <p className="mt-6 whitespace-pre-line text-sm leading-relaxed text-silver sm:text-base">
                  {track.message}
                </p>
                <button
                  onClick={() => setActive(null)}
                  className="mt-9 rounded-full border border-border px-6 py-2.5 font-mono text-[0.58rem] uppercase tracking-era text-muted-foreground transition-colors hover:text-silver"
                >
                  close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
