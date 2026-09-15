import type { Metadata } from "next";
import ServicesContent from "@/components/pages/ServicesContent";

export const metadata: Metadata = {
  title: "Layanan | New Day Wedding Organizer Yogyakarta",
  description:
    "Layanan komprehensif New Day Wedding Organizer: Wedding Planning, Organizer Hari H, Koordinasi Vendor & Alur Acara, Pernikahan Adat & Modern di Yogyakarta.",
};

export default function ServicesPage() {
  return <ServicesContent />;
}
