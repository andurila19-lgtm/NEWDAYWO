"use client";

import Image from "next/image";
import Link from "next/link";
import { featuredStory, portfolioStories } from "@/data/portfolio";
import { useLanguage } from "@/context/LanguageContext";
import { ArrowRight, ArrowUpRight } from "lucide-react";

export default function FeaturedPortfolio() {
  const { t, lang } = useLanguage();

  return (
    <section className="relative w-full bg-[#F7F3F1] text-[#0D0C0D] py-16 sm:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 sm:mb-16">
          <div>
            <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.3em] uppercase text-[#E98B98] block mb-3">
              {t.featured.eyebrow}
            </span>
            <h2
              className="font-editorial font-normal leading-[1.08] text-[#0D0C0D] tracking-tight"
              style={{ fontSize: "clamp(1.8rem, 5.5vw, 3.75rem)" }}
            >
              {t.featured.title}
            </h2>
          </div>
          <div className="mt-4 sm:mt-0">
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-[#0D0C0D] hover:text-[#E98B98] transition-colors group"
            >
              <span>{t.featured.cta}</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#E98B98] group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Featured Large Wedding */}
        {/* Featured Large Wedding */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center mb-10 sm:mb-16">
          <div className="lg:col-span-8 relative aspect-[4/3] sm:aspect-[16/9] w-full overflow-hidden shadow-2xl group">
            <Image
              src={featuredStory.coverImage}
              alt={t.portfolioPage.featuredStory.title}
              fill
              sizes="(max-width: 1024px) 100vw, 70vw"
              className="object-cover object-center brightness-[0.94] group-hover:brightness-105 contrast-[1.02] transition-all duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0D0C0D]/85 via-[#0D0C0D]/20 to-transparent" />
            <div className="absolute bottom-4 sm:bottom-8 left-4 sm:left-8 right-4 sm:right-8 flex flex-col sm:flex-row sm:items-end justify-between gap-3">
              <div>
                <span className="text-[9px] sm:text-[11px] tracking-[0.2em] uppercase text-[#E98B98] font-semibold">
                  {t.portfolioPage.featuredStory.tag} • {t.portfolioPage.featuredStory.location}
                </span>
                <h3
                  className="font-editorial text-[#F7F3F1] mt-1 tracking-wide"
                  style={{ fontSize: "clamp(1.2rem, 3vw, 2.25rem)" }}
                >
                  {t.portfolioPage.featuredStory.title}
                </h3>
              </div>
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-2 text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-[#F7F3F1] bg-[#0D0C0D]/50 hover:bg-[#E98B98] hover:text-[#0D0C0D] px-5 sm:px-6 py-2.5 rounded-full backdrop-blur-sm transition-all duration-400 self-start sm:self-auto shrink-0"
              >
                <span>{lang === "en" ? "VIEW STORY" : "LIHAT CERITA"}</span>
                <ArrowUpRight className="w-3 h-3" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col justify-center space-y-4 sm:space-y-6">
            <div className="border-l-2 border-[#E98B98] pl-4">
              <span className="text-[9px] sm:text-[10px] tracking-[0.25em] uppercase text-[#E98B98] font-semibold block mb-1">
                {t.portfolioPage.featuredStory.tag} • {t.portfolioPage.featuredStory.location}
              </span>
              <p className="text-xs sm:text-sm text-[#191719]/90 font-light leading-relaxed">
                {t.portfolioPage.featuredStory.description}
              </p>
            </div>
            <div>
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-2 text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-[#0D0C0D] hover:text-[#E98B98] transition-colors"
              >
                <span>{t.featured.cta} →</span>
              </Link>
            </div>
          </div>
        </div>

        {/* 3 Thumbnails */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8 pt-6 sm:pt-8 border-t border-[#B7AAA9]/30">
          {t.portfolioPage.archive.stories.map((story, idx) => {
            const coverImage = portfolioStories[idx]?.coverImage || "/images/portfolio-1.webp";
            return (
              <Link key={story.id} href="/portfolio" className="group flex flex-col cursor-pointer">
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#191719] shadow-md mb-3 sm:mb-4 group-hover:shadow-xl transition-shadow duration-500">
                  <Image
                    src={coverImage}
                    alt={story.title}
                    fill
                    sizes="(max-width: 640px) 100vw, 33vw"
                    className="object-cover object-center brightness-[0.94] group-hover:brightness-105 contrast-[1.02] transition-all duration-700 ease-out"
                  />
                </div>
                <span className="text-[9px] sm:text-[10px] tracking-[0.2em] uppercase text-[#E98B98] font-medium">
                  {story.tag} • {story.location}
                </span>
                <h4 className="font-editorial text-base sm:text-lg text-[#0D0C0D] tracking-wide mt-0.5 group-hover:text-[#E98B98] transition-colors">
                  {story.title}
                </h4>
                <p className="text-[11px] text-[#191719]/70 line-clamp-2 mt-1 font-light leading-relaxed">
                  {story.description}
                </p>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
