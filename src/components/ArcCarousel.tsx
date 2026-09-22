"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export default function ArcCarousel({ photos }: { photos: string[] }) {
  const [active, setActive] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setActive((a) => (a + 1) % photos.length);
    }, 2800);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [photos.length]);

  const resetTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setActive((a) => (a + 1) % photos.length);
    }, 2800);
  };

  if (isMobile) {
    return (
      <div className="w-full">
        <div className="flex gap-4 overflow-x-auto no-scrollbar px-6 py-4 snap-x snap-mandatory">
          {photos.map((src, i) => (
            <div
              key={src}
              className="relative shrink-0 w-[68vw] aspect-[3/4] snap-center rounded-2xl overflow-hidden border border-burgundy-light"
              style={{
                boxShadow:
                  i === active
                    ? "0 0 0 2px rgba(255,47,109,0.5), 0 20px 40px -12px rgba(255,47,109,0.35)"
                    : "0 10px 30px -15px rgba(0,0,0,0.6)",
              }}
              onClick={() => {
                setActive(i);
                resetTimer();
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={src} alt="" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-midnight-deep/50 via-transparent to-transparent" />
            </div>
          ))}
        </div>
        <Dots count={photos.length} active={active} onSelect={(i) => { setActive(i); resetTimer(); }} />
      </div>
    );
  }

  // Desktop: a 180 degree arc. Each photo sits along a semicircle and
  // rotates position — the active one comes to the front & center.
  const radius = 230;
  const count = photos.length;

  return (
    <div className="relative w-full flex flex-col items-center">
      <div className="relative h-[340px] w-full max-w-3xl" style={{ perspective: 1400 }}>
        {photos.map((src, i) => {
          const offset = (i - active + count) % count;
          // map offset (0..count-1) to an angle across a 180deg arc, centered
          const centered = offset > count / 2 ? offset - count : offset;
          const angle = (centered / count) * 180;
          const rad = (angle * Math.PI) / 180;
          const x = Math.sin(rad) * radius;
          const z = Math.cos(rad) * radius - radius;
          const isActive = centered === 0;
          return (
            <motion.button
              key={src}
              onClick={() => {
                setActive(i);
                resetTimer();
              }}
              className="absolute left-1/2 top-1/2 rounded-2xl overflow-hidden border border-burgundy-light"
              style={{ transformStyle: "preserve-3d" }}
              animate={{
                x: `calc(-50% + ${x}px)`,
                y: "-50%",
                z,
                rotateY: -angle * 0.6,
                scale: isActive ? 1 : 0.72,
                opacity: Math.abs(centered) > 2 ? 0 : 1,
                boxShadow: isActive
                  ? "0 0 0 2px rgba(255,47,109,0.55), 0 30px 60px -20px rgba(255,47,109,0.4)"
                  : "0 15px 40px -20px rgba(0,0,0,0.7)",
              }}
              transition={{ type: "spring", stiffness: 120, damping: 18 }}
              initial={false}
            >
              <div className="relative w-[220px] h-[290px]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={src} alt="" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-midnight-deep/40 via-transparent to-transparent" />
              </div>
            </motion.button>
          );
        })}
      </div>
      <Dots count={photos.length} active={active} onSelect={(i) => { setActive(i); resetTimer(); }} />
    </div>
  );
}

function Dots({
  count,
  active,
  onSelect,
}: {
  count: number;
  active: number;
  onSelect: (i: number) => void;
}) {
  return (
    <div className="flex gap-2 mt-6">
      {Array.from({ length: count }).map((_, i) => (
        <button
          key={i}
          aria-label={`Photo ${i + 1}`}
          onClick={() => onSelect(i)}
          className="h-1.5 rounded-full transition-all duration-300"
          style={{
            width: i === active ? 22 : 8,
            background: i === active ? "var(--color-neon)" : "var(--color-burgundy-light)",
          }}
        />
      ))}
    </div>
  );
}
