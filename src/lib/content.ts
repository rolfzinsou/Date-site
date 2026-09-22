// Tous les chemins ci-dessous sont des PLACEHOLDERS.
// Remplace les fichiers dans /public/images et /public/videos en gardant
// exactement les mêmes noms, et tout le site utilisera tes propres médias
// sans qu'il n'y ait une seule ligne de code à changer.

export const carouselPhotos = [
  "/images/carousel-1.jpg",
  "/images/carousel-2.jpg",
  "/images/carousel-3.jpg",
  "/images/carousel-4.jpg",
  "/images/carousel-5.jpg",
  "/images/carousel-6.jpg",
];

// Un média par étape de la question (0 = premier affichage,
// 1..3 = après chaque clic sur "non"). Chaque entrée peut être
// une image OU une vidéo : mets type: "video" et pointe vers un .mp4.
export const proposalMedia: { type: "image" | "video"; src: string }[] = [
  { type: "image", src: "/images/proposal-1.jpg" },
  { type: "image", src: "/images/proposal-2.jpg" },
  { type: "image", src: "/images/proposal-3.jpg" },
  { type: "image", src: "/images/proposal-4.jpg" },
];

export const programImage = "/images/program.jpg";
