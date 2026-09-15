"use client";

import { useState } from "react";
import Image from "next/image";
import {
  galleryItems,
  galleryCategories,
  type GalleryCategory,
} from "@/data/gallery";
import { useLanguage } from "@/context/LanguageContext";

export default function MasonryGallerySection() {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>("ALL");
  const { t } = useLanguage();

  const filteredItems =
    activeCategory === "ALL"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <section id="gallery" className="relative w-full bg-[#0D0C0D] text-[#F7F3F1] py-16 sm:py-24 lg:py-32 border-t border-[#2A2629]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col gap-6 sm:gap-0 sm:flex-row sm:items-end justify-between mb-8 sm:mb-12 pb-6 sm:pb-8 border-b border-[#2A2629]">
          <div>
            <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.3em] uppercase text-[#E98B98] block mb-3">
              {t.masonry.eyebrow}
            </span>
            <h2
              className="font-editorial font-normal leading-[1.08] text-[#F7F3F1] tracking-tight"
              style={{ fontSize: "clamp(1.8rem, 5.5vw, 3.75rem)" }}
            >
              {t.masonry.title}
            </h2>
          </div>

          {/* Filter Tabs - horizontally scrollable on mobile */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 -mx-1 px-1 no-scrollbar">
            {galleryCategories.map((cat) => {
              const tabLabelMap: Record<GalleryCategory, string> = {
                ALL: t.masonry.tabs.all,
                CEREMONY: t.masonry.tabs.ceremony,
                RECEPTION: t.masonry.tabs.reception,
                DECORATION: t.masonry.tabs.details,
                DETAILS: t.masonry.tabs.details,
              };
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`text-[9px] sm:text-[11px] uppercase tracking-[0.15em] sm:tracking-[0.2em] px-3 py-1.5 transition-all duration-300 whitespace-nowrap shrink-0 ${
                    activeCategory === cat
                      ? "bg-[#E98B98] text-[#0D0C0D] font-semibold"
                      : "text-[#B7AAA9] hover:text-[#F7F3F1] border border-[#2A2629]"
                  }`}
                >
                  {tabLabelMap[cat] || cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Responsive Masonry Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6">
          {filteredItems.map((item) => {
            const aspectClass =
              item.span === "portrait"
                ? "aspect-[3/4]"
                : item.span === "landscape"
                ? "aspect-[4/3]"
                : item.span === "tall"
                ? "aspect-[2/3]"
                : "aspect-square";

            return (
              <div
                key={item.id}
                className={`group relative ${aspectClass} w-full overflow-hidden bg-[#191719] border border-[#2A2629] hover:border-[#E98B98]/50 hover:shadow-[0_10px_25px_rgba(233,139,152,0.12)] transition-all duration-500 cursor-pointer`}
              >
                <Image
                  src={item.image}
                  alt={`${item.title} - ${item.subtitle}`}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover object-center brightness-[0.92] group-hover:brightness-105 contrast-[1.02] transition-all duration-700 ease-out"
                />

                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D0C0D]/90 via-[#0D0C0D]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3 sm:p-6">
                  <span className="text-[9px] sm:text-[10px] tracking-[0.2em] uppercase text-[#E98B98] font-medium block">
                    {item.category}
                  </span>
                  <h4 className="font-editorial text-sm sm:text-xl text-[#F7F3F1] tracking-wide mt-0.5">
                    {item.title}
                  </h4>
                  <p className="text-[10px] sm:text-xs text-[#B7AAA9] font-light mt-0.5 hidden sm:block">
                    {item.subtitle}
                  </p>
                </div>

                {/* Category tag */}
                <div className="absolute top-2 right-2 sm:top-3 sm:right-3 opacity-90 group-hover:opacity-0 transition-opacity">
                  <span className="text-[8px] sm:text-[9px] uppercase tracking-widest px-1.5 sm:px-2 py-0.5 bg-[#0D0C0D]/70 backdrop-blur-sm text-[#F7F3F1] border border-[#2A2629]">
                    {item.category}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
