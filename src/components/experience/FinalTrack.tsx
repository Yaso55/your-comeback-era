import { motion } from "motion/react";
import { finale } from "@/content/site";
import { Particles, StarField } from "./StarField";

const rise = {
  hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)" },
};

/** The most emotional closing section. */
export function FinalTrack() {
  return (
    <section
      id="final"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-5 py-28 text-center"
      style={{ backgroundImage: "var(--gradient-era)" }}
    >
      <div className="era-halo animate-pulse-glow absolute inset-0" />
      <StarField count={120} />
      <Particles count={22} />

      <div className="relative z-10 mx-auto max-w-3xl">
        <motion.p
          variants={rise}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-lg leading-relaxed text-muted-foreground sm:text-2xl"
        >
          {finale.opening}
        </motion.p>

        <div className="mt-12 space-y-7">
          {finale.lines.map((l, i) => (
            <motion.p
              key={l}
              variants={rise}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.7 }}
              transition={{ duration: 1, delay: i * 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-xl text-silver sm:text-3xl"
            >
              {l}
            </motion.p>
          ))}
        </div>

        <motion.p
          variants={rise}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 1.4, delay: 0.3 }}
          className="mt-14 font-display text-xl leading-relaxed text-chrome text-glow sm:text-3xl"
        >
          {finale.belief}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, filter: "blur(16px)" }}
          whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
          className="mt-24"
        >
          <div className="hairline mx-auto h-px w-52" />
          <h2 className="mt-10 font-display text-3xl font-bold uppercase leading-tight text-chrome text-glow sm:text-6xl">
            {finale.headline}
          </h2>
          <p className="mt-6 font-mono text-[0.62rem] uppercase tracking-era text-silver sm:text-sm">
            {finale.welcome}
          </p>
          <div className="hairline mx-auto mt-10 h-px w-52" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.6 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.6 }}
          className="mt-20 font-mono text-[0.58rem] uppercase tracking-era text-muted-foreground"
        >
          {finale.signature}
        </motion.p>
      </div>
    </section>
  );
}
