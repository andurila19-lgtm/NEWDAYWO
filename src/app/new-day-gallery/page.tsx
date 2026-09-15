import type { Metadata } from "next";
import NewDayGalleryContent from "@/components/pages/NewDayGalleryContent";

export const metadata: Metadata = {
  title: "New Day Gallery | Special Attire for Your Special Day",
  description:
    "New Day Gallery - Koleksi busana pengantin terkurasi dan pendampingan fitting eksklusif di Yogyakarta. Part of @newday_weddingorganizer.",
};

export default function NewDayGalleryPage() {
  return <NewDayGalleryContent />;
}
