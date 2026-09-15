export interface PackageItem {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  features: string[];
  recommendedFor: string;
}

export const packagesData: PackageItem[] = [
  {
    id: "wedding-organizer",
    number: "01",
    title: "WEDDING ORGANIZER",
    tagline: "Koordinasi Hari H & Manajemen Lapangan",
    description:
      "Untuk pasangan yang membutuhkan koordinasi profesional pada hari pernikahan, memastikan seluruh vendor, keluarga, dan susunan acara terlaksana dengan tertib, terarah, dan lancar.",
    features: [
      "Sinkronisasi teknis seluruh vendor sebelum hari H",
      "Penyusunan Master Rundown & Panduan Acara",
      "Koordinasi Technical Meeting bersama venue & vendor",
      "Tim pelaksana lapangan pada hari pernikahan",
      "Pendampingan khusus pengantin & orang tua",
      "Pengawasan alur hidangan, alur prosesi, dan logistik acara",
    ],
    recommendedFor:
      "Pasangan yang telah memilih vendor sendiri dan membutuhkan tim eksekutor berdedikasi di hari pelaksanaan.",
  },
  {
    id: "wedding-planning",
    number: "02",
    title: "WEDDING PLANNING",
    tagline: "Pendampingan Persiapan Konsep & Rencana Acara",
    description:
      "Layanan pendampingan sejak tahap perencanaan, membantu merumuskan konsep pernikahan, alur prosesi, hingga penyusunan timeline persiapan yang terarah.",
    features: [
      "Konsultasi konsep pernikahan & penyesuaian skala acara",
      "Penyusunan timeline persiapan menuju hari H",
      "Bimbingan perencanaan alur prosesi adat maupun modern",
      "Koordinasi komunikasi teknis bersama rekanan vendor",
      "Pendampingan technical meeting & gladi resik",
      "Pelaksanaan dan pengawasan penuh hari H oleh tim New Day",
    ],
    recommendedFor:
      "Pasangan yang menginginkan perjalanan persiapan yang tenang, terstruktur rapi, dan terorganisir dari awal.",
  },
  {
    id: "custom-coordination",
    number: "03",
    title: "CUSTOM COORDINATION",
    tagline: "Penyesuaian Fleksibel Sesuai Kebutuhan Spesifik",
    description:
      "Skema koordinasi yang dirancang mengikuti kebutuhan khusus pasangan, baik untuk intimate wedding, prosesi adat mendalam, maupun format perayaan personal lainnya.",
    features: [
      "Diskusi mendalam mengenai kebutuhan spesifik acara Anda",
      "Penyesuaian lingkup keterlibatan tim di lapangan",
      "Koordinasi kebutuhan busana bersama New Day Gallery",
      "Fleksibilitas koordinasi vendor sesuai skala acara",
      "Gladi resik prosesi sakral (Akad / Pemberkatan / Upacara Adat)",
      "Manajemen hari H dengan perhatian mendalam pada detail",
    ],
    recommendedFor:
      "Pasangan dengan visi spesifik, intimate wedding, atau susunan acara yang membutuhkan penyesuaian tersendiri.",
  },
];

export const packagesNote =
  "Informasi harga dan penyesuaian detail paket dapat dikonsultasikan langsung bersama tim New Day Wedding Organizer melalui WhatsApp.";
