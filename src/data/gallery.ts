export interface GalleryItem {
  id: string;
  category: "CEREMONY" | "RECEPTION" | "DECORATION" | "DETAILS";
  title: string;
  subtitle: string;
  image: string;
  span: "portrait" | "landscape" | "square" | "tall";
}

export const galleryCategories = [
  "ALL",
  "CEREMONY",
  "RECEPTION",
  "DECORATION",
  "DETAILS",
] as const;

export type GalleryCategory = (typeof galleryCategories)[number];

export const galleryItems: GalleryItem[] = [
  {
    id: "gal-01",
    category: "DECORATION",
    title: "Botanical Canopy",
    subtitle: "Yogyakarta Reception Hall",
    image: "/images/gallery-1.webp",
    span: "landscape",
  },
  {
    id: "gal-02",
    category: "CEREMONY",
    title: "The Holy Vow",
    subtitle: "Sacred Matrimony",
    image: "/images/gallery-2.webp",
    span: "portrait",
  },
  {
    id: "gal-03",
    category: "DETAILS",
    title: "Editorial Keepsakes",
    subtitle: "Stationery & Rings",
    image: "/images/gallery-3.webp",
    span: "square",
  },
  {
    id: "gal-04",
    category: "RECEPTION",
    title: "Candlelit Long Table",
    subtitle: "Intimate Dinner",
    image: "/images/gallery-4.webp",
    span: "tall",
  },
  {
    id: "gal-05",
    category: "CEREMONY",
    title: "Quiet Radiance",
    subtitle: "Bride in Heritage Attire",
    image: "/images/gallery-5.webp",
    span: "portrait",
  },
  {
    id: "gal-06",
    category: "DETAILS",
    title: "The Golden Bands",
    subtitle: "Heirloom & Florals",
    image: "/images/gallery-6.webp",
    span: "square",
  },
  {
    id: "gal-07",
    category: "RECEPTION",
    title: "Evening Ambience",
    subtitle: "Celebration Gathering",
    image: "/images/gallery-7.webp",
    span: "landscape",
  },
  {
    id: "gal-08",
    category: "DECORATION",
    title: "Arch of Blossoms",
    subtitle: "Altar Installation",
    image: "/images/gallery-8.webp",
    span: "tall",
  },
];
