# Un date, toi et moi 💌

Site Next.js (sans base de données) pour proposer un date à ton/ta partenaire.
Parcours : choix de langue → porte à ouvrir → carrousel + question oui/non → programme → récapitulatif.

## Lancer en local

```bash
npm install
npm run dev
```

Puis ouvre http://localhost:3000

## Remplacer les photos et vidéos

Tous les visuels sont des **placeholders** générés automatiquement.
Remplace-les dans `/public/images` (et `/public/videos` si tu veux une vidéo)
en gardant **exactement les mêmes noms de fichiers** — rien à toucher dans le code :

- `carousel-1.jpg` → `carousel-6.jpg` : les 6 photos du carrousel de la page d'accueil
- `proposal-1.jpg` → `proposal-4.jpg` : les visuels de la section "ça te tente un date ?"
  (1 = premier affichage, 2/3/4 = après chaque clic sur "Non")
  → pour utiliser une vidéo à la place d'une de ces étapes, dépose ton `.mp4`
  dans `/public/videos` et change l'entrée correspondante dans
  `src/lib/content.ts` (`type: "video"`, `src: "/videos/ton-fichier.mp4"`)
- `program.jpg` : l'image en haut de la page "programme"

## Modifier les textes / traductions

Tout le texte (FR/EN/IT) est centralisé dans `src/lib/translations.ts`.

## Déployer sur Vercel

1. Pousse ce projet sur un repo GitHub
2. Va sur https://vercel.com/new, importe le repo
3. Aucune configuration nécessaire (Next.js est détecté automatiquement), clique sur "Deploy"

Aucune base de données, aucune variable d'environnement requise.
