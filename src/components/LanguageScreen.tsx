"use client";

import { motion } from "framer-motion";
import { locales, translations, type Locale } from "@/lib/translations";

export default function LanguageScreen({
  onSelect,
}: {
  onSelect: (locale: Locale) => void;
}) {
  return (
    <div className="min-h-dvh flex flex-col items-center justify-center px-6 py-16 gap-12 text-center">
      <div className="space-y-3">
        <span className="text-neon-soft text-2xl">♡</span>
        <h1 className="font-display italic text-3xl sm:text-4xl text-cream">
          {translations.fr.language.title} · {translations.en.language.title} ·{" "}
          {translations.it.language.title}
        </h1>
        <p className="text-mauve text-sm font-body max-w-sm mx-auto">
          {translations.fr.language.subtitle}
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        {locales.map((l, i) => (
          <motion.button
            key={l.code}
            onClick={() => onSelect(l.code)}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08, duration: 0.4 }}
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.97 }}
            className="min-w-[160px] rounded-full border border-gold/30 bg-burgundy/60 px-8 py-3 font-body text-cream tracking-wide hover:border-neon hover:text-neon-soft hover:shadow-[0_0_24px_rgba(255,47,109,0.25)] transition-colors"
          >
            {l.label}
          </motion.button>
        ))}
      </div>
    </div>
  );
}
