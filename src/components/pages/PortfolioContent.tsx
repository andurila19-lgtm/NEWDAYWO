"use client";

import Image from "next/image";
import Link from "next/link";
import { galleryItems } from "@/data/gallery";
import { getWhatsAppLink } from "@/data/siteConfig";
import { useLanguage } from "@/context/LanguageContext";
import { MessageCircle } from "lucide-react";

const storyCovers: Record<string, string> = {
  "story-01": "/images/portfolio-1.webp",
  "story-02": "/images/portfolio-2.webp",
  "story-03": "/images/portfolio-3.webp",
};

export default function PortfolioContent() {
  const { t } = useLanguage();
  const page = t.portfolioPage;

  return (
    <div className="pt-20 sm:pt-24">
      {/* Compact Header */}
      <section className="bg-[#0D0C0D] py-10 sm:py-16 border-b border-[#2A2629]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.3em] uppercase text-[#E98B98] block mb-3">
            {page.header.eyebrow}
          </span>
          <h1
            className="font-editorial text-[#F7F3F1] leading-[1.08] max-w-3xl tracking-tight"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
          >
            {page.header.titleLine1}{" "}
            <span className="italic text-[#E98B98]">{page.header.titleAccent}</span>{" "}
            {page.header.titleRest}
          </h1>
          <p className="mt-4 sm:mt-5 text-sm sm:text-base text-[#B7AAA9] max-w-2xl font-light leading-relaxed">
            {page.header.description}
          </p>
        </div>
      </section>

      {/* Featured Grand Story */}
      <section className="bg-[#F7F3F1] text-[#0D0C0D] py-14 sm:py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="border-b border-[#B7AAA9]/40 pb-6 mb-12 flex items-center justify-between">
            <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#E98B98]">
              {page.featuredStory.tag} • {page.featuredStory.location}
            </span>
            <span className="text-xs text-[#B7AAA9] uppercase tracking-widest font-mono">
              YOGYAKARTA
            </span>
          </div>

          <div className="relative aspect-[16/9] w-full overflow-hidden shadow-2xl mb-8 group">
            <Image
              src="/images/portfolio-hero.webp"
              alt={page.featuredStory.title}
              fill
              className="object-cover object-center brightness-[0.94] group-hover:brightness-105 contrast-[1.02] transition-all duration-700 ease-out"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7">
              <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl leading-tight text-[#0D0C0D]">
                {page.featuredStory.title}
              </h2>
            </div>
            <div className="lg:col-span-5 space-y-4">
              <p className="text-sm sm:text-base text-[#191719]/85 font-light leading-relaxed">
                {page.featuredStory.description}
              </p>
              <p className="text-xs text-[#191719]/70 leading-relaxed font-light">
                {page.featuredStory.note}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stories Archive */}
      <section className="bg-[#0D0C0D] text-[#F7F3F1] py-24 sm:py-32 border-t border-[#2A2629]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="mb-16">
            <span className="text-[11px] font-semibold tracking-[0.3em] uppercase text-[#E98B98] block mb-3">
              {page.archive.eyebrow}
            </span>
            <h2 className="font-editorial text-4xl sm:text-5xl text-[#F7F3F1]">
              {page.archive.title}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
            {page.archive.stories.map((story) => {
              const coverImg = storyCovers[story.id] || "/images/portfolio-1.webp";
              return (
                <div key={story.id} className="group flex flex-col">
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#191719] border border-[#2A2629] group-hover:border-[#E98B98]/50 group-hover:shadow-[0_8px_20px_rgba(233,139,152,0.12)] transition-all duration-500 mb-4">
                    <Image
                      src={coverImg}
                      alt={story.title}
                      fill
                      className="object-cover object-center brightness-[0.94] group-hover:brightness-105 contrast-[1.02] transition-all duration-700 ease-out"
                    />
                    <div className="absolute top-3 left-3 bg-[#0D0C0D]/80 px-2.5 py-1 text-[9px] uppercase tracking-widest text-[#E98B98]">
                      {story.category}
                    </div>
                  </div>
                  <span className="text-[10px] tracking-[0.2em] uppercase text-[#B7AAA9] font-medium">
                    {story.tag} • {story.location}
                  </span>
                  <h3 className="font-editorial text-xl sm:text-2xl text-[#F7F3F1] tracking-wide mt-1 group-hover:text-[#E98B98] transition-colors">
                    {story.title}
                  </h3>
                  <p className="text-xs text-[#B7AAA9] mt-2 font-light leading-relaxed">
                    {story.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Visual Moment Collage */}
      <section className="bg-[#191719] text-[#F7F3F1] py-24 border-t border-[#2A2629]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="text-center mb-16">
            <span className="text-[11px] font-semibold tracking-[0.3em] uppercase text-[#E98B98] block mb-3">
              {page.collage.eyebrow}
            </span>
            <h3 className="font-editorial text-3xl sm:text-4xl text-[#F7F3F1]">
              {page.collage.title}
            </h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {galleryItems.slice(0, 4).map((g) => (
              <div key={g.id} className="relative aspect-square w-full overflow-hidden border border-[#2A2629]">
                <Image
                  src={g.image}
                  alt={g.title}
                  fill
                  className="object-cover object-center grayscale-[15%] hover:grayscale-0 transition-all duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Consultation Banner */}
      <section className="bg-[#0D0C0D] py-16 text-center border-t border-[#2A2629]">
        <div className="max-w-3xl mx-auto px-5">
          <h3 className="font-editorial text-3xl text-[#F7F3F1] mb-4">
            {page.banner.title}
          </h3>
          <p className="text-sm text-[#B7AAA9] mb-8 font-light">
            {page.banner.desc}
          </p>
          <Link
            href={getWhatsAppLink(page.banner.waMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#E98B98] text-[#0D0C0D] text-xs font-semibold tracking-[0.2em] uppercase hover:bg-[#F7F3F1] transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            <span>{page.banner.button}</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
