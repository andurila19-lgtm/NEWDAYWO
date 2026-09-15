export const siteConfig = {
  name: "New Day Wedding Organizer",
  shortName: "New Day WO",
  tagline: "Jadikan moment pernikahanmu indah dan tak terlupakan.",
  description:
    "New Day Wedding Organizer merupakan Wedding Organizer dan Wedding Planner yang berbasis di Yogyakarta. New Day membantu pasangan dalam mempersiapkan dan mengoordinasikan kebutuhan pernikahan agar setiap rangkaian acara dapat berjalan lebih terarah dan lancar.",
  location: "Yogyakarta, Indonesia",
  address: {
    full: "Perumahan Dinas Madukismo No. 1, selatan Gedung Madu Candhya, Jl. Madukismo No. 1, Padokan Kidul, Tirtonirmolo, Kasihan, Bantul, Daerah Istimewa Yogyakarta 55184",
    street: "Jl. Madukismo No. 1, Perumahan Dinas Madukismo No. 1 (selatan Gedung Madu Candhya)",
    district: "Padokan Kidul, Tirtonirmolo, Kasihan, Bantul",
    city: "Yogyakarta",
    postalCode: "55184",
  },
  googleBusiness: {
    name: "New Day Wedding Organizer",
    rating: "5,0",
    reviewCount: 26,
    openingHours: "Buka hingga pukul 21.00",
    mapsUrl: "https://maps.google.com/?q=New+Day+Wedding+Organizer+Madukismo+Bantul+Yogyakarta",
  },
  instagram: {
    handle: "@newday_weddingorganizer",
    url: "https://www.instagram.com/newday_weddingorganizer",
  },
  galleryInstagram: {
    name: "New Day Gallery",
    handle: "@galleryofnewday",
    followers: "Sekitar 622 followers",
    tagline: "Your special attire for your special day.",
    field: "Wedding Attire / Busana Pernikahan",
    address: "Jl. Bugisan 335P, Yogyakarta",
    openingHours: "09.30–16.30",
    description:
      "New Day Gallery menyediakan kebutuhan attire untuk hari istimewa dan merupakan bagian dari ekosistem New Day Wedding Organizer.",
    url: "https://www.instagram.com/galleryofnewday",
  },
  whatsapp: {
    number: "6282342127655",
    display: "+62 823-4212-7655",
    localFormat: "0823-4212-7655",
    defaultMessage:
      "Halo New Day Wedding Organizer, saya ingin konsultasi mengenai perencanaan pernikahan di Yogyakarta.",
  },
  navLinks: [
    { label: "ABOUT", href: "/about" },
    { label: "SERVICES", href: "/services" },
    { label: "PACKAGES", href: "/packages" },
    { label: "PORTFOLIO", href: "/portfolio" },
    { label: "GALLERY", href: "/#gallery" },
    { label: "NEW DAY GALLERY", href: "/new-day-gallery" },
    { label: "FAQ", href: "/#faq" },
    { label: "CONTACT", href: "/contact" },
  ],
};

export const getWhatsAppLink = (customText?: string) => {
  const text = customText || siteConfig.whatsapp.defaultMessage;
  return `https://wa.me/${siteConfig.whatsapp.number}?text=${encodeURIComponent(text)}`;
};
