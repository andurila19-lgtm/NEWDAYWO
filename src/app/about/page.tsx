import type { Metadata } from "next";
import AboutContent from "@/components/pages/AboutContent";

export const metadata: Metadata = {
  title: "Tentang Kami | New Day Wedding Organizer Yogyakarta",
  description:
    "Mengenal lebih dekat New Day Wedding Organizer di Yogyakarta. Pendekatan terstruktur, personal, dan berdedikasi menjaga ketenangan hari bahagia Anda.",
};

export default function AboutPage() {
  return <AboutContent />;
}
