"use client";

import { motion } from "framer-motion";
import type { Dict } from "@/lib/translations";
import type { DateAnswers } from "./ProgramScreen";
import NeonHeartbeat from "./NeonHeartbeat";

export default function RecapScreen({
  dict,
  answers,
}: {
  dict: Dict;
  answers: DateAnswers;
}) {
  return (
    <div className="min-h-dvh flex flex-col items-center justify-center px-6 py-16 gap-10 text-center">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-2"
      >
        <p className="text-gold/80 text-xs tracking-[0.3em] uppercase font-body">
          {dict.recap.eyebrow}
        </p>
        <h1 className="font-display italic text-3xl sm:text-4xl text-cream">
          {dict.recap.title}
        </h1>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.15 }}
        className="w-full max-w-sm rounded-3xl border border-burgundy-light bg-burgundy/40 p-6 flex flex-col gap-4 text-left"
      >
        <Row label={dict.recap.where} value={answers.where} />
        <Row label={dict.recap.date} value={formatDate(answers.date)} />
        <Row label={dict.recap.when} value={answers.time} />
        {answers.note && <Row label={dict.recap.note} value={answers.note} />}
      </motion.div>

      <NeonHeartbeat />

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="font-display italic text-xl text-neon-soft"
      >
        {dict.recap.footer}
      </motion.p>
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  if (!value) return null;
  return (
    <div className="flex flex-col gap-0.5 border-b border-burgundy-light/60 pb-3 last:border-none last:pb-0">
      <span className="text-mauve text-xs uppercase tracking-wide font-body">
        {label}
      </span>
      <span className="text-cream font-body">{value}</span>
    </div>
  );
}

function formatDate(value: string) {
  if (!value) return "";
  const d = new Date(value + "T00:00:00");
  if (Number.isNaN(d.getTime())) return value;
  return d.toLocaleDateString(undefined, {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
