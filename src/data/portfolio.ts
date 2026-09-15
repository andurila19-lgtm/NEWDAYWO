export interface PortfolioStory {
  id: string;
  tag: string;
  location: string;
  category: "CEREMONY" | "RECEPTION" | "DECORATION" | "DETAILS";
  title: string;
  description: string;
  coverImage: string;
  aspectRatio?: string;
  galleryImages: string[];
}

export const featuredStory: PortfolioStory = {
  id: "featured-wedding-yogyakarta",
  tag: "FEATURED WEDDING",
  location: "YOGYAKARTA",
  category: "CEREMONY",
  title: "A CELEBRATION OF TIMELESS GRACE",
  description:
    "A celebration shaped around meaningful moments, thoughtful details, and a day designed around the couple.",
  coverImage: "/images/portfolio-hero.webp",
  galleryImages: [
    "/images/portfolio-1.webp",
    "/images/portfolio-2.webp",
    "/images/portfolio-3.webp",
  ],
};

export const portfolioStories: PortfolioStory[] = [
  {
    id: "story-01",
    tag: "WEDDING STORY",
    location: "YOGYAKARTA",
    category: "CEREMONY",
    title: "SACRED PROMISES IN HERITAGE LIGHT",
    description:
      "Kehangatan prosesi sakral yang dirajut dengan kesederhanaan bersahaja dan sentuhan estetika kontemporer.",
    coverImage: "/images/portfolio-1.webp",
    galleryImages: ["/images/portfolio-1.webp", "/images/gallery-2.webp", "/images/gallery-5.webp"],
  },
  {
    id: "story-02",
    tag: "WEDDING STORY",
    location: "YOGYAKARTA",
    category: "RECEPTION",
    title: "AN INTIMATE EVENING UNDER CANDLELIGHT",
    description:
      "Perayaan malam yang akrab dengan alunan kebersamaan hangat antara keluarga dekat dan para sahabat.",
    coverImage: "/images/portfolio-2.webp",
    galleryImages: ["/images/portfolio-2.webp", "/images/gallery-4.webp", "/images/gallery-7.webp"],
  },
  {
    id: "story-03",
    tag: "WEDDING STORY",
    location: "YOGYAKARTA",
    category: "DECORATION",
    title: "ORGANIC FLORALS & POETIC COMPOSITION",
    description:
      "Goresan tata visual yang menyeimbangkan unsur botani alami dengan arsitektur ruang yang tenang.",
    coverImage: "/images/portfolio-3.webp",
    galleryImages: ["/images/portfolio-3.webp", "/images/gallery-1.webp", "/images/gallery-8.webp"],
  },
];
