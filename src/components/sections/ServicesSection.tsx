"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { servicesData } from "@/data/services";
import { useLanguage } from "@/context/LanguageContext";
import { ArrowUpRight } from "lucide-react";

export default function ServicesSection() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(0);
  const { t } = useLanguage();

  return (
    <section className="relative w-full bg-[#0D0C0D] text-[#F7F3F1] py-16 sm:py-24 lg:py-32 border-t border-[#2A2629]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-16 pb-6 sm:pb-8 border-b border-[#2A2629]">
          <div>
            <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.3em] uppercase text-[#E98B98] block mb-3">
              {t.services.eyebrow}
            </span>
            <h2
              className="font-editorial font-normal leading-[1.1] text-[#F7F3F1] tracking-tight"
              style={{ fontSize: "clamp(1.8rem, 5.5vw, 3.75rem)" }}
            >
              {t.services.title1}
              <br />
              <span className="italic text-[#E98B98]">{t.services.title2}</span> {t.services.titleAccent}
            </h2>
          </div>
          <div className="mt-4 md:mt-0">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-[10px] sm:text-xs tracking-[0.2em] uppercase text-[#F7F3F1] hover:text-[#E98B98] transition-colors group"
            >
              <span>{t.services.viewAll}</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#E98B98] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Editorial Service List */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-7 divide-y divide-[#2A2629]">
            {servicesData.map((service, index) => {
              const isHovered = hoveredIdx === index;
              return (
                <div
                  key={service.id}
                  onMouseEnter={() => setHoveredIdx(index)}
                  className="py-5 sm:py-7 group cursor-pointer transition-all duration-300"
                >
                  <Link href={`/services#${service.id}`} className="block">
                    <div className="flex items-start sm:items-baseline gap-4 sm:gap-8">
                      <span
                        className={`font-editorial text-xl sm:text-3xl font-light transition-colors duration-300 shrink-0 ${
                          isHovered ? "text-[#E98B98]" : "text-[#B7AAA9]/60"
                        }`}
                      >
                        {service.number}
                      </span>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-2">
                          <h3
                            className={`font-editorial text-lg sm:text-2xl lg:text-3xl tracking-wide uppercase transition-all duration-300 ${
                              isHovered ? "text-[#F7F3F1]" : "text-[#F7F3F1]/85"
                            }`}
                          >
                            {service.title}
                          </h3>
                          <ArrowUpRight
                            className={`w-4 h-4 shrink-0 transition-all duration-300 hidden sm:block ${
                              isHovered ? "text-[#E98B98] opacity-100" : "text-[#B7AAA9] opacity-0"
                            }`}
                          />
                        </div>
                        <p className="mt-1.5 text-xs text-[#B7AAA9] leading-relaxed line-clamp-2 sm:line-clamp-none max-w-lg">
                          {service.shortDesc}
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>

          {/* Preview Image - Desktop only */}
          <div className="hidden lg:block lg:col-span-5 sticky top-28">
            <div className="relative aspect-[4/5] w-full overflow-hidden border border-[#2A2629] bg-[#191719] shadow-2xl">
              {servicesData.map((service, index) => (
                <div
                  key={service.id}
                  className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
                    hoveredIdx === index ? "opacity-100 z-10" : "opacity-0 z-0"
                  }`}
                >
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="40vw"
                    className="object-cover object-center brightness-90 contrast-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D0C0D]/80 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                    <div>
                      <span className="text-[10px] tracking-[0.25em] text-[#E98B98] uppercase font-mono">
                        SERVICE {service.number}
                      </span>
                      <h4 className="font-editorial text-lg text-[#F7F3F1] tracking-wider uppercase mt-1">
                        {service.title}
                      </h4>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
