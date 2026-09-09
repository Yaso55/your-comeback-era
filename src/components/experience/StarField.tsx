import { useEffect, useMemo, useState } from "react";

/** Decorative layers render after hydration so SSR markup stays identical. */
function useMounted() {
  const [m, setM] = useState(false);
  useEffect(() => setM(true), []);
  return m;
}

type Star = {
  left: string;
  top: string;
  size: number;
  delay: string;
  duration: string;
};

/** Decorative twinkling star layer. Purely visual. */
export function StarField({ count = 90, className = "" }: { count?: number; className?: string }) {
  const stars = useMemo<Star[]>(() => {
    // Deterministic pseudo-random so SSR and client agree.
    const rand = (i: number, salt: number) => {
      const x = Math.sin((i + 1) * 12.9898 + salt * 78.233) * 43758.5453;
      return x - Math.floor(x);
    };
    return Array.from({ length: count }, (_, i) => ({
      left: `${rand(i, 1) * 100}%`,
      top: `${rand(i, 2) * 100}%`,
      size: 1 + rand(i, 3) * 2.2,
      delay: `${rand(i, 4) * 6}s`,
      duration: `${3 + rand(i, 5) * 5}s`,
    }));
  }, [count]);

  const mounted = useMounted();
  if (!mounted) return null;

  return (
    <div aria-hidden className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      {stars.map((s, i) => (
        <span
          key={i}
          className="absolute rounded-full bg-silver"
          style={{
            left: s.left,
            top: s.top,
            width: s.size,
            height: s.size,
            animation: `twinkle ${s.duration} ease-in-out ${s.delay} infinite`,
            boxShadow: "0 0 6px currentColor",
          }}
        />
      ))}
    </div>
  );
}

/** Slow rising light particles. */
export function Particles({ count = 18 }: { count?: number }) {
  const items = useMemo(() => {
    const rand = (i: number, salt: number) => {
      const x = Math.sin((i + 3) * 4.271 + salt * 19.19) * 9134.77;
      return x - Math.floor(x);
    };
    return Array.from({ length: count }, (_, i) => ({
      left: `${rand(i, 1) * 100}%`,
      size: 2 + rand(i, 2) * 4,
      delay: `${rand(i, 3) * 18}s`,
      duration: `${16 + rand(i, 4) * 18}s`,
      opacity: 0.15 + rand(i, 5) * 0.5,
    }));
  }, [count]);

  const mounted = useMounted();
  if (!mounted) return null;

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {items.map((p, i) => (
        <span
          key={i}
          className="absolute bottom-[-10vh] rounded-full bg-glow blur-[1px]"
          style={{
            left: p.left,
            width: p.size,
            height: p.size,
            opacity: p.opacity,
            animation: `drift ${p.duration} linear ${p.delay} infinite`,
          }}
        />
      ))}
    </div>
  );
}
