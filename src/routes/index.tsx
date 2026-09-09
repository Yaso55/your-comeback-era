import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

import { chapters, person } from "@/content/site";
import { Chapter } from "@/components/experience/Chapter";
import { EasterEggStar } from "@/components/experience/EasterEgg";
import { FinalTrack } from "@/components/experience/FinalTrack";
import { GiftBox } from "@/components/experience/GiftBox";
import { IdolProfile } from "@/components/experience/IdolProfile";
import { Intro } from "@/components/experience/Intro";
import { MemoryGallery } from "@/components/experience/MemoryGallery";
import { ProgressRail, type Marker } from "@/components/experience/ProgressRail";
import { Reminders } from "@/components/experience/Reminders";
import { Reveal } from "@/components/experience/Reveal";
import { SoundControls, useSound } from "@/components/experience/SoundControls";
import { Particles, StarField } from "@/components/experience/StarField";
import { Tracklist } from "@/components/experience/Tracklist";

const title = `${person.name} — A Birthday Comeback Experience`;
const description =
  "A cinematic, interactive birthday journey: chapters, a gift to open, an artist profile, an album of wishes, memories and a final message.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const markers: Marker[] = [
  { id: "chapter-01", label: "THE BEGINNING" },
  { id: "chapter-02", label: "THE GIFT" },
  { id: "chapter-03", label: "MAIN CHARACTER" },
  { id: "chapter-04", label: "THE NEW ERA" },
  { id: "memories", label: "MEMORIES" },
  { id: "remember", label: "REMEMBER" },
  { id: "final", label: "FINAL TRACK" },
];

function Index() {
  const [entered, setEntered] = useState(false);
  const [active, setActive] = useState<string>("chapter-01");
  const sound = useSound();

  // Track which chapter is on screen for the progress rail.
  useEffect(() => {
    if (!entered) return;
    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { threshold: [0.25, 0.5, 0.75] },
    );
    markers.forEach((m) => {
      const el = document.getElementById(m.id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, [entered]);

  useEffect(() => {
    if (typeof document === "undefined") return;
    document.body.style.overflow = entered ? "" : "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [entered]);

  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Persistent cinematic backdrop */}
      <div aria-hidden className="fixed inset-0 -z-10" style={{ backgroundImage: "var(--gradient-era)" }}>
        <div className="era-halo absolute inset-0 opacity-60" />
        <StarField count={80} />
        <Particles count={16} />
      </div>

      <AnimatePresence>{!entered && <Intro onEnter={() => setEntered(true)} />}</AnimatePresence>

      {entered && (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
        >
          <ProgressRail markers={markers} active={active} />
          <SoundControls enabled={sound.enabled} onToggle={sound.setEnabled} />

          {/* CHAPTER 01 */}
          <Chapter
            id="chapter-01"
            label={chapters.one.label}
            title={chapters.one.title}
            subtitle={chapters.one.subtitle}
          >
            <div className="mx-auto max-w-2xl space-y-6 text-center">
              {chapters.one.body.map((line, i) => (
                <Reveal key={i} index={i}>
                  <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">{line}</p>
                </Reveal>
              ))}
              <Reveal index={chapters.one.body.length}>
                <p className="pt-8 font-mono text-[0.58rem] uppercase tracking-era text-muted-foreground">
                  scroll to continue ↓
                </p>
              </Reveal>
            </div>
          </Chapter>

          {/* CHAPTER 02 */}
          <Chapter
            id="chapter-02"
            label={chapters.two.label}
            title={chapters.two.title}
            subtitle={chapters.two.subtitle}
          >
            <GiftBox onOpen={() => sound.play(784)} />
          </Chapter>

          {/* CHAPTER 03 */}
          <Chapter
            id="chapter-03"
            label={chapters.three.label}
            title={chapters.three.title}
            subtitle={chapters.three.subtitle}
          >
            <IdolProfile />
          </Chapter>

          {/* CHAPTER 04 */}
          <Chapter
            id="chapter-04"
            label={chapters.four.label}
            title={chapters.four.title}
            subtitle={chapters.four.subtitle}
          >
            <Tracklist />
          </Chapter>

          {/* MEMORIES (+ hidden track) */}
          <div className="relative">
            <EasterEggStar onUnlock={() => sound.play(988)} />
            <Chapter
              id="memories"
              label={chapters.memories.label}
              title={chapters.memories.title}
              subtitle={chapters.memories.subtitle}
            >
              <MemoryGallery />
            </Chapter>
          </div>

          {/* REMEMBER */}
          <Chapter
            id="remember"
            label={chapters.remember.label}
            title={chapters.remember.title}
            subtitle={chapters.remember.subtitle}
          >
            <Reminders />
          </Chapter>

          {/* FINAL */}
          <FinalTrack />
        </motion.div>
      )}
    </main>
  );
}
