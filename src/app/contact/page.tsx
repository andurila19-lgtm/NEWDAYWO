import type { Metadata } from "next";
import ContactContent from "@/components/pages/ContactContent";

export const metadata: Metadata = {
  title: "Kontak & Konsultasi | New Day Wedding Organizer Yogyakarta",
  description:
    "Hubungi New Day Wedding Organizer di Yogyakarta via WhatsApp resmi. Jadwalkan konsultasi konsep, alur acara, dan kebutuhan pernikahan Anda.",
};

export default function ContactPage() {
  return <ContactContent />;
}
