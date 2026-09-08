import { motion, useScroll, useSpring } from "motion/react";

export type Marker = { id: string; label: string };

/** Journey progress: a top bar plus a desktop chapter rail. */
export function ProgressRail({ markers, active }: { markers: Marker[]; active: string }) {
  const { scrollYProgress } = useScroll();
  const x = useSpring(scrollYProgress, { stiffness: 90, damping: 22, restDelta: 0.001 });

  return (
    <>
      <motion.div
        aria-hidden
        style={{ scaleX: x, transformOrigin: "0% 50%", background: "var(--gradient-chrome)" }}
        className="fixed inset-x-0 top-0 z-40 h-[3px]"
      />

      <nav
        aria-label="Journey progress"
        className="fixed right-6 top-1/2 z-40 hidden -translate-y-1/2 flex-col items-end gap-4 lg:flex"
      >
        {markers.map((m) => (
          <a key={m.id} href={`#${m.id}`} className="group flex items-center gap-3">
            <span className="font-mono text-[0.55rem] uppercase tracking-widest text-muted-foreground opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              {m.label}
            </span>
            <span
              className={`h-2 w-2 rounded-full transition-all duration-500 ${
                active === m.id ? "scale-150 bg-glow shadow-[0_0_12px_var(--glow)]" : "bg-border"
              }`}
            />
          </a>
        ))}
      </nav>
    </>
  );
}
