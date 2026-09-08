import { motion } from "motion/react";
import { memories } from "@/content/site";

/** Interactive memory gallery — drop your own photos into site.ts. */
export function MemoryGallery() {
  return (
    <div className="grid grid-cols-2 gap-3 sm:gap-5 md:grid-cols-3">
      {memories.map((m, i) => (
        <motion.figure
          key={i}
          initial={{ opacity: 0, y: 30, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: (i % 3) * 0.1, ease: [0.16, 1, 0.3, 1] }}
          whileHover={{ y: -8 }}
          className="glass group relative aspect-[3/4] overflow-hidden rounded-2xl"
        >
          {m.src ? (
            <img
              src={m.src}
              alt={m.caption}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          ) : (
            <div className="era-halo flex h-full w-full items-center justify-center opacity-70 transition-opacity duration-500 group-hover:opacity-100">
              <span className="font-display text-4xl text-chrome">
                {String(i + 1).padStart(2, "0")}
              </span>
            </div>
          )}

          <figcaption className="absolute inset-x-0 bottom-0 translate-y-2 bg-gradient-to-t from-background to-transparent p-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
            <p className="font-display text-xs uppercase text-silver sm:text-sm">{m.caption}</p>
            <p className="font-mono text-[0.55rem] uppercase tracking-widest text-muted-foreground">
              {m.date}
            </p>
          </figcaption>
        </motion.figure>
      ))}
    </div>
  );
}
