import Image from "next/image";
import Link from "next/link";
import { servicesData } from "@/data/services";
import { getWhatsAppLink } from "@/data/siteConfig";
import { ArrowUpRight, Check, Calendar, Users, Sparkles, MessageCircle } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Layanan | New Day Wedding Organizer Yogyakarta",
  description:
    "Layanan komprehensif New Day Wedding Organizer: Wedding Planning, Organizer Hari H, Koordinasi Vendor & Alur Acara, Pernikahan Adat & Modern di Yogyakarta.",
};

export default function ServicesPage() {
  const workflow = [
    {
      step: "TAHAP 01",
      title: "Discovery & Pendekatan Konsep",
      desc: "Mendengarkan aspirasi, impian, dan preferensi pasangan untuk merumuskan arah konsep perayaan yang selaras.",
    },
    {
      step: "TAHAP 02",
      title: "Penyusunan Timeline & Rencana Teknis",
      desc: "Menyelaraskan alur acara, timeline persiapan, dan koordinasi dengan rekanan vendor pilihan.",
    },
    {
      step: "TAHAP 03",
      title: "Technical Meeting & Gladi Resik",
      desc: "Mempertemukan seluruh stakeholder, keluarga inti, dan vendor dalam satu sesi penyelarasan teknis dan simulasi.",
    },
    {
      step: "TAHAP 04",
      title: "Manajemen Eksekusi Hari H",
      desc: "Tim profesional New Day memastikan master rundown terlaksana presisi, tenang, dan setiap momen sakral terjaga khidmat.",
    },
  ];

  return (
    <div className="pt-20 sm:pt-24">
      {/* Compact Page Header */}
      <section className="bg-[#0D0C0D] py-10 sm:py-16 border-b border-[#2A2629]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.3em] uppercase text-[#E98B98] block mb-3">
            SERVICES &amp; CAPABILITIES
          </span>
          <h1
            className="font-editorial text-[#F7F3F1] leading-[1.08] max-w-3xl tracking-tight"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
          >
            EVERY DETAIL, BEAUTIFULLY{" "}
            <span className="italic text-[#E98B98]">COORDINATED.</span>
          </h1>
          <p className="mt-4 sm:mt-5 text-sm sm:text-base text-[#B7AAA9] max-w-2xl font-light leading-relaxed">
            Dari perencanaan konsep dasar hingga pendampingan menit demi menit di hari pernikahan, kami memastikan setiap tahap dikerjakan dengan ketelitian tingkat tinggi.
          </p>
        </div>
      </section>

      {/* Detailed Services Breakdown */}
      <section className="bg-[#F7F3F1] text-[#0D0C0D] py-14 sm:py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-16 sm:space-y-24">
          {servicesData.map((service, index) => {
            const isEven = index % 2 === 1;
            return (
              <div
                key={service.id}
                id={service.id}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center ${
                  isEven ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Image */}
                <div
                  className={`lg:col-span-6 relative ${
                    isEven ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden shadow-2xl bg-[#191719]">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover object-center grayscale-[10%]"
                    />
                    <div className="absolute top-4 left-4 bg-[#0D0C0D]/80 backdrop-blur-sm px-3 py-1 text-[10px] tracking-[0.25em] text-[#E98B98] uppercase">
                      SERVICE {service.number}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div
                  className={`lg:col-span-6 space-y-6 ${
                    isEven ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <span className="font-editorial text-3xl text-[#E98B98] font-light">
                    {service.number}
                  </span>
                  <h2 className="font-editorial text-3xl sm:text-4xl text-[#0D0C0D] tracking-wide uppercase">
                    {service.title}
                  </h2>
                  <p className="text-base text-[#191719] font-medium leading-relaxed">
                    {service.shortDesc}
                  </p>
                  <p className="text-sm text-[#191719]/80 font-light leading-relaxed">
                    {service.fullDesc}
                  </p>

                  <div className="pt-4 border-t border-[#B7AAA9]/40 space-y-2.5">
                    <span className="text-[10px] tracking-[0.2em] uppercase text-[#0D0C0D] font-semibold block">
                      Fokus Utama:
                    </span>
                    {service.highlights.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2.5 text-xs text-[#191719]">
                        <Check className="w-3.5 h-3.5 text-[#E98B98] shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-2">
                    <Link
                      href={getWhatsAppLink(
                        `Halo New Day Wedding Organizer, saya tertarik untuk mendiskusikan layanan: ${service.title}.`
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-[#0D0C0D] hover:text-[#E98B98] transition-colors"
                    >
                      <span>KONSULTASI LAYANAN INI</span>
                      <ArrowUpRight className="w-4 h-4 text-[#E98B98]" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Workflow Section */}
      <section className="bg-[#0D0C0D] text-[#F7F3F1] py-24 sm:py-32 border-t border-[#2A2629]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
            <span className="text-[11px] font-semibold tracking-[0.3em] uppercase text-[#E98B98] block mb-3">
              TAHAPAN KERJA SAMA
            </span>
            <h2 className="font-editorial text-4xl sm:text-5xl text-[#F7F3F1]">
              BAGAIMANA KAMI MENDAMPINGI ANDA
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {workflow.map((w, idx) => (
              <div
                key={idx}
                className="p-8 bg-[#191719] border border-[#2A2629] flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] tracking-[0.25em] uppercase text-[#E98B98] font-mono block mb-3">
                    {w.step}
                  </span>
                  <h3 className="font-editorial text-xl text-[#F7F3F1] mb-3">
                    {w.title}
                  </h3>
                  <p className="text-xs text-[#B7AAA9] leading-relaxed font-light">
                    {w.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Action */}
      <section className="bg-[#191719] py-16 text-center border-t border-[#2A2629]">
        <div className="max-w-3xl mx-auto px-5">
          <h3 className="font-editorial text-3xl text-[#F7F3F1] mb-4">
            Ingin Menyesuaikan Kebutuhan Anda?
          </h3>
          <p className="text-sm text-[#B7AAA9] mb-8 font-light">
            Setiap rencana pernikahan memiliki keunikan tersendiri. Kami siap mendengarkan aspirasi Anda.
          </p>
          <Link
            href={getWhatsAppLink(
              "Halo New Day Wedding Organizer, saya ingin konsultasi layanan yang paling cocok untuk rencana pernikahan kami."
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#E98B98] text-[#0D0C0D] text-xs font-semibold tracking-[0.2em] uppercase hover:bg-[#F7F3F1] transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            <span>KONSULTASI VIA WHATSAPP</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
