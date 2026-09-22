"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import type { Dict } from "@/lib/translations";
import { programImage } from "@/lib/content";

export type DateAnswers = {
  where: string;
  time: string;
  date: string;
  note: string;
};

export default function ProgramScreen({
  dict,
  onSubmit,
}: {
  dict: Dict;
  onSubmit: (answers: DateAnswers) => void;
}) {
  const [where, setWhere] = useState("");
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");
  const [note, setNote] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit({ where, time, date, note });
  };

  return (
    <div className="min-h-dvh flex flex-col items-center px-6 py-16 gap-10">
      <div className="w-full max-w-md flex flex-col items-center gap-4 text-center">
        <div className="w-full aspect-[3/4] rounded-3xl overflow-hidden border border-burgundy-light">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={programImage} alt="" className="w-full h-full object-cover" />
        </div>
        <p className="text-gold/80 text-xs tracking-[0.3em] uppercase font-body">
          {dict.program.eyebrow}
        </p>
        <h1 className="font-display italic text-3xl sm:text-4xl text-cream">
          {dict.program.title}
        </h1>
        <p className="text-mauve text-sm font-body">{dict.program.subtitle}</p>
      </div>

      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="w-full max-w-md flex flex-col gap-5"
      >
        <Field
          label={dict.program.fieldWhere}
          placeholder={dict.program.placeholderWhere}
          value={where}
          onChange={setWhere}
          required
        />
        <div className="grid grid-cols-2 gap-4">
          <Field
            label={dict.program.fieldTime}
            placeholder={dict.program.placeholderTime}
            value={time}
            onChange={setTime}
            type="time"
            required
          />
          <Field
            label={dict.program.fieldDate}
            value={date}
            onChange={setDate}
            type="date"
            required
          />
        </div>
        <TextAreaField
          label={dict.program.fieldNote}
          placeholder={dict.program.placeholderNote}
          value={note}
          onChange={setNote}
        />

        <motion.button
          type="submit"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="mt-2 rounded-full bg-neon px-8 py-3 font-body font-semibold text-midnight-deep shadow-[0_0_30px_rgba(255,47,109,0.45)]"
        >
          {dict.program.submit}
        </motion.button>
      </motion.form>
    </div>
  );
}

function Field({
  label,
  placeholder,
  value,
  onChange,
  type = "text",
  required,
}: {
  label: string;
  placeholder?: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="flex flex-col gap-2 text-left">
      <span className="text-cream text-sm font-body">{label}</span>
      <input
        type={type}
        required={required}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="rounded-xl bg-burgundy/50 border border-burgundy-light px-4 py-3 text-cream placeholder:text-mauve/60 font-body outline-none focus:border-neon focus:shadow-[0_0_0_3px_rgba(255,47,109,0.15)] transition-shadow [color-scheme:dark]"
      />
    </label>
  );
}

function TextAreaField({
  label,
  placeholder,
  value,
  onChange,
}: {
  label: string;
  placeholder?: string;
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <label className="flex flex-col gap-2 text-left">
      <span className="text-cream text-sm font-body">{label}</span>
      <textarea
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        rows={4}
        className="rounded-xl bg-burgundy/50 border border-burgundy-light px-4 py-3 text-cream placeholder:text-mauve/60 font-body outline-none focus:border-neon focus:shadow-[0_0_0_3px_rgba(255,47,109,0.15)] transition-shadow resize-none"
      />
    </label>
  );
}
