export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  image: string;
  highlights: string[];
}

export const servicesData: ServiceItem[] = [
  {
    id: "wedding-organizer",
    number: "01",
    title: "WEDDING ORGANIZER",
    shortDesc: "Pengorganisasian dan manajemen pelaksanaan di hari pernikahan agar setiap rangkaian acara berlangsung terarah dan lancar.",
    fullDesc:
      "Fokus pada koordinasi lapangan pada hari pelaksanaan pernikahan. Tim New Day memastikan susunan acara, kesiapan seluruh pihak, alur prosesi, dan kenyamanan keluarga tetap terjaga dengan tenang dan terorganisir.",
    image: "/images/service-organizer.webp",
    highlights: [
      "Koordinasi Pelaksanaan Hari H",
      "Manajemen Alur & Susunan Acara",
      "Pendampingan Pengantin & Keluarga Inti",
    ],
  },
  {
    id: "wedding-planning",
    number: "02",
    title: "WEDDING PLANNING",
    shortDesc: "Pendampingan persiapan pernikahan sejak tahap perencanaan konsep hingga penyusunan detail perayaan.",
    fullDesc:
      "Membantu pasangan merumuskan konsep perayaan, menyusun timeline persiapan, serta mengarahkan perencanaan pernikahan secara personal dan terstruktur agar calon pengantin merasa tenang selama proses persiapan.",
    image: "/images/service-planning.webp",
    highlights: [
      "Perencanaan Konsep & Visi Pernikahan",
      "Penyusunan Timeline Persiapan",
      "Konsultasi Kebutuhan Pasangan",
    ],
  },
  {
    id: "vendor-coordination",
    number: "03",
    title: "KOORDINASI VENDOR & ACARA",
    shortDesc: "Penyelarasan teknis dan komunikasi terstruktur dengan seluruh rekanan vendor dan pengisi acara.",
    fullDesc:
      "Menjadi jembatan komunikasi antara pasangan dengan berbagai vendor terkait (seperti dekorasi, catering, MUA, dokumentasi foto & video, musik/entertainment, MC, mobil pengantin, dan souvenir) untuk memastikan satu frekuensi kerja.",
    image: "/images/service-vendor.webp",
    highlights: [
      "Technical Meeting Antar-Vendor",
      "Sinkronisasi Jadwal & Loading Venue",
      "Penyelarasan Kebutuhan Lapangan",
    ],
  },
  {
    id: "ceremony-management",
    number: "04",
    title: "PERNIKAHAN ADAT & MODERN",
    shortDesc: "Pendampingan prosesi pernikahan adat maupun format pernikahan modern dengan penuh kekhidmatan.",
    fullDesc:
      "Menangani tata upacara adat tradisional (seperti tata krama adat Jawa) maupun prosesi pernikahan modern dengan perhatian mendalam pada etika, kekhidmatan momen sakral, dan kenyamanan keluarga.",
    image: "/images/service-ceremony.webp",
    highlights: [
      "Prosesi Akad & Pemberkatan",
      "Penataan Rangkaian Prosesi Adat",
      "Format Resepsi Modern & Intimate",
    ],
  },
  {
    id: "preparation-execution",
    number: "05",
    title: "PERSIAPAN & PELAKSANAAN WEDDING",
    shortDesc: "Pengawalan menyeluruh dari gladi resik hingga selesainya seluruh rangkaian perayaan.",
    fullDesc:
      "Memastikan setiap detail yang telah direncanakan dieksekusi dengan baik di lapangan, memberikan rasa aman bagi pasangan dan keluarga untuk menikmati setiap momen indah hari bahagia mereka.",
    image: "/images/service-package.webp",
    highlights: [
      "Penyusunan Master Rundown",
      "Simulasi & Gladi Resik",
      "Monitoring Kelancaran Acara",
    ],
  },
  {
    id: "attire-coordination",
    number: "06",
    title: "NEW DAY GALLERY (ATTIRE)",
    shortDesc: "Sinergi langsung dengan lini busana pernikahan New Day Gallery untuk kebutuhan pakaian di hari istimewa.",
    fullDesc:
      "New Day Gallery menyediakan kebutuhan busana pernikahan (wedding attire) untuk hari istimewa Anda di Yogyakarta, dengan tagline 'Your special attire for your special day'.",
    image: "/images/service-custom.webp",
    highlights: [
      "Koleksi Busana Pengantin",
      "Sesi Konsultasi & Fitting di Yogyakarta",
      "Integrasi Alur Koordinasi Hari H",
    ],
  },
];

export const relatedServicesList = [
  "Wedding Organizer",
  "Wedding Planning",
  "Koordinasi vendor",
  "Koordinasi rangkaian acara",
  "Persiapan dan pelaksanaan wedding",
  "Pernikahan adat",
  "Pernikahan modern",
  "Dekorasi",
  "Catering",
  "Makeup Artist / MUA",
  "Photography",
  "Videography",
  "Entertainment / musik",
  "MC",
  "Wedding car",
  "Souvenir",
];

export const servicesDisclaimer =
  "Catatan: Daftar layanan dan koordinasi vendor berasal dari informasi publik yang tersedia. Ketersediaan dan detail paket dapat dikonfirmasi langsung dengan tim New Day Wedding Organizer saat sesi konsultasi.";
