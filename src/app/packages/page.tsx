import type { Metadata } from "next";
import PackagesContent from "@/components/pages/PackagesContent";

export const metadata: Metadata = {
  title: "Pilihan Layanan & Skema | New Day Wedding Organizer Yogyakarta",
  description:
    "Pilihan layanan New Day Wedding Organizer di Yogyakarta: Wedding Organizer, Wedding Planning, dan Custom Coordination. Rancang perayaan Anda bersama tim profesional.",
};

export default function PackagesPage() {
  return <PackagesContent />;
}
