import { useEffect, useRef, useState } from "react";
import { audio } from "@/content/site";

/**
 * Background music + UI sound effects.
 * Nothing plays automatically — the visitor is always in control.
 * Add your own audio file path in src/content/site.ts.
 */
export function useSound() {
  const [enabled, setEnabled] = useState(false);
  const ctxRef = useRef<AudioContext | null>(null);

  /** Soft synthesized chime — no copyrighted assets needed. */
  const play = (freq = 660) => {
    if (!enabled || typeof window === "undefined") return;
    try {
      const Ctx = window.AudioContext ?? (window as any).webkitAudioContext;
      if (!Ctx) return;
      ctxRef.current ??= new Ctx();
      const ctx = ctxRef.current;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "sine";
      osc.frequency.value = freq;
      gain.gain.setValueAtTime(0.0001, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.08, ctx.currentTime + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 1.1);
      osc.connect(gain).connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 1.2);
    } catch {
      /* audio unavailable — stay silent */
    }
  };

  return { enabled, setEnabled, play };
}

export function SoundControls({
  enabled,
  onToggle,
}: {
  enabled: boolean;
  onToggle: (v: boolean) => void;
}) {
  const ref = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (playing) void el.play().catch(() => setPlaying(false));
    else el.pause();
  }, [playing]);

  return (
    <div className="glass-soft fixed bottom-5 left-5 z-40 flex items-center gap-2 rounded-full px-3 py-2">
      {audio.src ? (
        <>
          <audio ref={ref} src={audio.src} loop preload="none" />
          <button
            onClick={() => setPlaying((p) => !p)}
            aria-label={playing ? "Pause music" : "Play music"}
            className="font-mono text-[0.58rem] uppercase tracking-widest text-silver transition-opacity hover:opacity-70"
          >
            {playing ? "❚❚" : "▶"} {audio.label}
          </button>
          <span className="h-3 w-px bg-border" />
        </>
      ) : null}
      <button
        onClick={() => onToggle(!enabled)}
        aria-pressed={enabled}
        aria-label="Toggle sound effects"
        className="font-mono text-[0.58rem] uppercase tracking-widest text-muted-foreground transition-colors hover:text-silver"
      >
        SFX {enabled ? "ON" : "OFF"}
      </button>
    </div>
  );
}
