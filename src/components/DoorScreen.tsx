"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import type { Dict } from "@/lib/translations";

export default function DoorScreen({
  dict,
  onOpened,
}: {
  dict: Dict;
  onOpened: () => void;
}) {
  const [opening, setOpening] = useState(false);

  const handleOpen = () => {
    if (opening) return;
    setOpening(true);
    setTimeout(onOpened, 1150);
  };

  return (
    <div className="min-h-dvh flex flex-col items-center justify-center px-6 py-16 gap-10 text-center">
      <div className="space-y-2">
        <p className="text-gold/80 text-xs tracking-[0.3em] uppercase font-body">
          {dict.door.eyebrow}
        </p>
        <h1 className="font-display italic text-4xl sm:text-5xl text-cream">
          {dict.door.title}
        </h1>
      </div>

      <button
        onClick={handleOpen}
        aria-label={dict.door.cta}
        className="relative"
        style={{ perspective: 900 }}
      >
        <div className="relative w-[190px] h-[300px] sm:w-[220px] sm:h-[340px] rounded-t-[90px] overflow-hidden border-2 border-gold/40 bg-midnight-deep">
          {/* frame glow */}
          <div className="absolute inset-0 rounded-t-[90px] shadow-[inset_0_0_40px_rgba(217,179,132,0.15)]" />

          {/* left leaf */}
          <motion.div
            className="absolute top-0 left-0 w-1/2 h-full origin-left bg-gradient-to-br from-burgundy-light to-midnight-deep border-r border-gold/20"
            style={{ transformStyle: "preserve-3d" }}
            animate={{ rotateY: opening ? -110 : 0, opacity: opening ? 0.3 : 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            <div className="absolute right-3 top-1/2 -translate-y-1/2 w-1.5 h-8 rounded-full bg-gold/70" />
            <PanelLines side="left" />
          </motion.div>

          {/* right leaf */}
          <motion.div
            className="absolute top-0 right-0 w-1/2 h-full origin-right bg-gradient-to-bl from-burgundy-light to-midnight-deep border-l border-gold/20"
            style={{ transformStyle: "preserve-3d" }}
            animate={{ rotateY: opening ? 110 : 0, opacity: opening ? 0.3 : 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            <div className="absolute left-3 top-1/2 -translate-y-1/2 w-1.5 h-8 rounded-full bg-gold/70" />
            <PanelLines side="right" />
          </motion.div>

          {/* warm light glowing through as it opens */}
          <motion.div
            className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,122,162,0.9),rgba(255,47,109,0.2)_60%,transparent_75%)]"
            initial={{ opacity: 0 }}
            animate={{ opacity: opening ? 1 : 0 }}
            transition={{ duration: 0.8 }}
          />
        </div>

        <motion.p
          className="mt-6 font-display italic text-lg text-neon-soft"
          animate={{ opacity: opening ? 0 : 1 }}
        >
          {dict.door.cta}
        </motion.p>
      </button>

      <p className="text-mauve text-sm max-w-xs font-body">{dict.door.hint}</p>
    </div>
  );
}

function PanelLines({ side }: { side: "left" | "right" }) {
  return (
    <div
      className={`absolute inset-4 border border-gold/15 rounded-sm ${
        side === "left" ? "" : ""
      }`}
    />
  );
}
