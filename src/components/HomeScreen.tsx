"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { Dict } from "@/lib/translations";
import { carouselPhotos, proposalMedia } from "@/lib/content";
import ArcCarousel from "./ArcCarousel";
import HeartTrace from "./HeartTrace";

const MAX_NO = 3;

export default function HomeScreen({
  dict,
  onYes,
}: {
  dict: Dict;
  onYes: () => void;
}) {
  const [noCount, setNoCount] = useState(0);
  const media = proposalMedia[Math.min(noCount, proposalMedia.length - 1)];
  const noExhausted = noCount >= MAX_NO;

  return (
    <div className="min-h-dvh flex flex-col items-center gap-16 sm:gap-20 px-4 sm:px-6 pt-14 pb-24">
      {/* Carousel */}
      <section className="w-full flex flex-col items-center">
        <ArcCarousel photos={carouselPhotos} />
      </section>

      {/* Heart current */}
      <section>
        <HeartTrace caption={dict.heart.caption} />
      </section>

      {/* Yes / No proposal */}
      <section className="w-full max-w-md flex flex-col items-center gap-6 text-center">
        <div className="relative w-full aspect-[3/4] rounded-3xl overflow-hidden border border-burgundy-light">
          <AnimatePresence mode="wait">
            <motion.div
              key={noCount}
              initial={{ opacity: 0, scale: 1.03 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.45 }}
              className="absolute inset-0"
            >
              {media.type === "image" ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={media.src} alt="" className="w-full h-full object-cover" />
              ) : (
                <video
                  src={media.src}
                  className="w-full h-full object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-midnight-deep/80 via-midnight-deep/10 to-transparent" />
            </motion.div>
          </AnimatePresence>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={`text-${noCount}`}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35 }}
            className="space-y-2"
          >
            <h2 className="font-display italic text-2xl sm:text-3xl text-cream">
              {dict.proposal.question[noCount]}
            </h2>
            <p className="text-mauve text-sm font-body">
              {dict.proposal.caption[noCount]}
            </p>
          </motion.div>
        </AnimatePresence>

        <div className="flex items-center gap-4 pt-2">
          <motion.button
            onClick={onYes}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="rounded-full bg-neon px-9 py-3 font-body font-semibold text-midnight-deep shadow-[0_0_30px_rgba(255,47,109,0.45)]"
          >
            {dict.proposal.yes}
          </motion.button>

          {!noExhausted && (
            <motion.button
              onClick={() => setNoCount((c) => Math.min(c + 1, MAX_NO))}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="rounded-full border border-mauve/40 px-9 py-3 font-body text-mauve hover:text-cream hover:border-cream/40 transition-colors"
            >
              {dict.proposal.no}
            </motion.button>
          )}
        </div>
      </section>
    </div>
  );
}
