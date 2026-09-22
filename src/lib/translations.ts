export type Locale = "fr" | "en" | "it";

export const locales: { code: Locale; label: string }[] = [
  { code: "fr", label: "Français" },
  { code: "en", label: "English" },
  { code: "it", label: "Italiano" },
];

export interface Dict {
  language: { title: string; subtitle: string };
  door: { eyebrow: string; title: string; hint: string; cta: string };
  heart: { caption: string };
  proposal: {
    question: string[];
    caption: string[];
    yes: string;
    no: string;
  };
  program: {
    eyebrow: string;
    title: string;
    subtitle: string;
    fieldWhere: string;
    placeholderWhere: string;
    fieldTime: string;
    placeholderTime: string;
    fieldDate: string;
    fieldNote: string;
    placeholderNote: string;
    submit: string;
  };
  recap: {
    eyebrow: string;
    title: string;
    where: string;
    when: string;
    date: string;
    note: string;
    footer: string;
  };
}

export const translations: Record<Locale, Dict> = {
  fr: {
    language: {
      title: "Choisis ta langue",
      subtitle: "Avant tout, mettons-nous d'accord sur la langue de la soirée.",
    },
    door: {
      eyebrow: "Il y a quelque chose derrière",
      title: "Une porte t'attend",
      hint: "Elle ne s'ouvre que si tu le décides.",
      cta: "Ouvre la porte",
    },
    heart: {
      caption: "Mi amor❤️‍🩹, j'ai une faveur à te demander.",
    },
    proposal: {
      question: [
        "Ça te tente, un date, toi et moi ?",
        "Vraiment ? For sure ? Laisse-moi réessayer.",
        "Ah wei tu veux vrm pas sortir?...",
        "Bon. Je ne pars plus de là.",
      ],
      caption: [
        "(tu peux dire non, je vais comprendre)",
        "(je vais quand même un peu insister)",
        "(troisième et dernier essai, promis. \n Conseil: acceptes...)",
        "(Acceptes ou c fini)",
      ],
      yes: "Oui",
      no: "Non",
    },
    program: {
      eyebrow: "Tu vois quand tu veux he he😝",
      title: "Alors organisons ça",
      subtitle: "Quelques détails, et le reste, on l'improvise ensemble.",
      fieldWhere: "Tu veux aller où ?",
      placeholderWhere: "Un endroit qui te ressemble...",
      fieldTime: "À quelle heure ?",
      placeholderTime: "L'heure parfaite pour toi",
      fieldDate: "Quelle date ?",
      fieldNote: "Un mot pour moi",
      placeholderNote: "Écris ce qui te passe par la tête...",
      submit: "C'est noté",
    },
    recap: {
      eyebrow: "Rendez-vous pris",
      title: "Voilà ce qu'on a décidé",
      where: "Lieu",
      when: "Heure",
      date: "Date",
      note: "Ton mot",
      footer: "c'est noté <3",
    },
  },
  en: {
    language: {
      title: "Choose your language",
      subtitle: "First things first, let's agree on the language for tonight.",
    },
    door: {
      eyebrow: "Something's waiting behind it",
      title: "A door awaits you",
      hint: "It only opens if you decide so.",
      cta: "Open the door",
    },
    heart: {
      caption: "What it feels like, underneath everything else.",
    },
    proposal: {
      question: [
        "Would you like a date, you and me?",
        "Really? No? Let me try again.",
        "Last chance to change your mind...",
        "Alright. I'm not moving from here.",
      ],
      caption: [
        "(you can say no, I'll understand)",
        "(I'll still insist a little)",
        "(third and final try, I promise)",
        "(only one answer is left)",
      ],
      yes: "Yes",
      no: "No",
    },
    program: {
      eyebrow: "That's a yes",
      title: "Let's plan it, then",
      subtitle: "A few details, we'll improvise the rest together.",
      fieldWhere: "Where do you want to go?",
      placeholderWhere: "Somewhere that feels like you...",
      fieldTime: "What time?",
      placeholderTime: "The perfect time for you",
      fieldDate: "Which date?",
      fieldNote: "A word for me",
      placeholderNote: "Write whatever comes to mind...",
      submit: "Got it",
    },
    recap: {
      eyebrow: "It's booked",
      title: "Here's what we decided",
      where: "Place",
      when: "Time",
      date: "Date",
      note: "Your word",
      footer: "got it <3",
    },
  },
  it: {
    language: {
      title: "Scegli la tua lingua",
      subtitle: "Prima di tutto, mettiamoci d'accordo sulla lingua di stasera.",
    },
    door: {
      eyebrow: "C'è qualcosa dietro",
      title: "Una porta ti aspetta",
      hint: "Si apre solo se lo decidi tu.",
      cta: "Apri la porta",
    },
    heart: {
      caption: "Quello che si prova, sotto tutto il resto.",
    },
    proposal: {
      question: [
        "Ti va un appuntamento, io e te?",
        "Davvero? No? Fammi riprovare.",
        "Ultima possibilità di cambiare idea...",
        "Va bene. Non mi muovo più da qui.",
      ],
      caption: [
        "(puoi dire no, capirò)",
        "(insisterò comunque un po')",
        "(terzo e ultimo tentativo, promesso)",
        "(è rimasta solo una risposta possibile)",
      ],
      yes: "Sì",
      no: "No",
    },
    program: {
      eyebrow: "È un sì",
      title: "Allora organizziamo",
      subtitle: "Qualche dettaglio, il resto lo improvvisiamo insieme.",
      fieldWhere: "Dove vuoi andare?",
      placeholderWhere: "Un posto che ti somiglia...",
      fieldTime: "A che ora?",
      placeholderTime: "L'ora perfetta per te",
      fieldDate: "Quale data?",
      fieldNote: "Una parola per me",
      placeholderNote: "Scrivi quello che ti passa per la testa...",
      submit: "Segnato",
    },
    recap: {
      eyebrow: "Appuntamento fissato",
      title: "Ecco cosa abbiamo deciso",
      where: "Luogo",
      when: "Ora",
      date: "Data",
      note: "La tua parola",
      footer: "segnato <3",
    },
  },
};
