import type { Metadata } from "next";
import PortfolioContent from "@/components/pages/PortfolioContent";

export const metadata: Metadata = {
  title: "Portofolio | New Day Wedding Organizer Yogyakarta",
  description:
    "Eksplorasi dokumentasi momen perayaan pernikahan yang dikoordinasikan oleh New Day Wedding Organizer di Yogyakarta.",
};

export default function PortfolioPage() {
  return <PortfolioContent />;
}
