import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

/** A full chapter section with the shared heading language. */
export function Chapter({
  id,
  label,
  title,
  subtitle,
  children,
  className = "",
  align = "center",
}: {
  id: string;
  label: string;
  title: string;
  subtitle?: string;
  children?: ReactNode;
  className?: string;
  align?: "center" | "left";
}) {
  return (
    <section
      id={id}
      className={`relative flex min-h-screen w-full flex-col justify-center px-5 py-24 sm:px-8 md:py-32 ${className}`}
    >
      <div className="relative z-10 mx-auto w-full max-w-5xl">
        <Reveal>
          <div className={align === "center" ? "text-center" : "text-left"}>
            <p className="font-mono text-[0.62rem] tracking-era text-glow uppercase text-muted-foreground sm:text-xs">
              {label}
            </p>
            <h2 className="mt-4 font-display text-3xl font-semibold uppercase leading-tight text-chrome sm:text-5xl md:text-6xl">
              {title}
            </h2>
            <div className={`hairline mt-6 h-px w-40 ${align === "center" ? "mx-auto" : ""}`} />
            {subtitle ? (
              <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                {subtitle}
              </p>
            ) : null}
          </div>
        </Reveal>
        {children ? <div className="mt-12 sm:mt-16">{children}</div> : null}
      </div>
    </section>
  );
}
