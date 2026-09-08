import { motion } from "motion/react";
import { person } from "@/content/site";

const rows = [
  { k: "NAME", v: person.name },
  { k: "BIRTHDAY", v: person.birthday },
  { k: "ROLE", v: person.role },
  { k: "SUPERPOWER", v: person.superpower },
  { k: "SPECIAL SKILL", v: person.specialSkill },
  { k: "CURRENT ERA", v: person.era },
];

/** Premium artist profile card. */
export function IdolProfile() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className="glass mx-auto grid w-full max-w-4xl overflow-hidden rounded-3xl md:grid-cols-[0.85fr_1.15fr]"
      style={{ boxShadow: "var(--shadow-deep)" }}
    >
      {/* portrait */}
      <div className="relative min-h-64 overflow-hidden border-b border-border md:min-h-full md:border-b-0 md:border-r">
        <div className="era-halo absolute inset-0" />
        {person.photo ? (
          <img
            src={person.photo}
            alt={`Portrait of ${person.name}`}
            className="h-full w-full object-cover"
            loading="lazy"
          />
        ) : (
          <div className="flex h-full min-h-64 flex-col items-center justify-center gap-3 p-8 text-center">
            <div className="animate-float-slow flex h-24 w-24 items-center justify-center rounded-full border border-border">
              <span className="font-display text-3xl text-chrome">{person.name.charAt(1) || "★"}</span>
            </div>
            <p className="font-mono text-[0.58rem] uppercase tracking-era text-muted-foreground">
              add photo in site.ts
            </p>
          </div>
        )}
        <span className="absolute left-5 top-5 font-mono text-[0.58rem] uppercase tracking-era text-silver">
          01 / debut
        </span>
      </div>

      {/* data */}
      <div className="p-7 sm:p-10">
        <p className="font-mono text-[0.58rem] uppercase tracking-era text-muted-foreground">
          artist profile
        </p>
        <h3 className="mt-3 font-display text-3xl uppercase text-chrome sm:text-4xl">{person.name}</h3>
        <dl className="mt-8 space-y-0">
          {rows.map((r, i) => (
            <motion.div
              key={r.k}
              initial={{ opacity: 0, x: 18 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.08 * i }}
              className="flex items-baseline justify-between gap-4 border-b border-border py-3.5 last:border-b-0"
            >
              <dt className="font-mono text-[0.58rem] uppercase tracking-widest text-muted-foreground">
                {r.k}
              </dt>
              <dd className="text-right text-sm text-silver sm:text-base">{r.v}</dd>
            </motion.div>
          ))}
        </dl>
      </div>
    </motion.div>
  );
}
