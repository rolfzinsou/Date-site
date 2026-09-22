"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { translations, type Locale } from "@/lib/translations";
import LanguageScreen from "@/components/LanguageScreen";
import DoorScreen from "@/components/DoorScreen";
import HomeScreen from "@/components/HomeScreen";
import ProgramScreen, { type DateAnswers } from "@/components/ProgramScreen";
import RecapScreen from "@/components/RecapScreen";

type Step = "language" | "door" | "home" | "program" | "recap";

export default function Page() {
  const [step, setStep] = useState<Step>("language");
  const [locale, setLocale] = useState<Locale>("fr");
  const [answers, setAnswers] = useState<DateAnswers | null>(null);

  const dict = translations[locale];

  return (
    <main className="relative">
      <div className="grain" />
      <AnimatePresence mode="wait">
        {step === "language" && (
          <motion.div
            key="language"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <LanguageScreen
              onSelect={(l) => {
                setLocale(l);
                setStep("door");
              }}
            />
          </motion.div>
        )}

        {step === "door" && (
          <motion.div
            key="door"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <DoorScreen dict={dict} onOpened={() => setStep("home")} />
          </motion.div>
        )}

        {step === "home" && (
          <motion.div
            key="home"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <HomeScreen dict={dict} onYes={() => setStep("program")} />
          </motion.div>
        )}

        {step === "program" && (
          <motion.div
            key="program"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <ProgramScreen
              dict={dict}
              onSubmit={(a) => {
                setAnswers(a);
                setStep("recap");
              }}
            />
          </motion.div>
        )}

        {step === "recap" && answers && (
          <motion.div
            key="recap"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <RecapScreen dict={dict} answers={answers} />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
