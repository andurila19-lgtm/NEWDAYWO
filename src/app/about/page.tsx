import Image from "next/image";
import Link from "next/link";
import { getWhatsAppLink } from "@/data/siteConfig";
import { ArrowRight, MessageCircle, Heart, Compass, ShieldCheck, Sparkles } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tentang Kami | New Day Wedding Organizer Yogyakarta",
  description:
    "Mengenal lebih dekat New Day Wedding Organizer di Yogyakarta. Pendekatan terstruktur, personal, dan berdedikasi menjaga ketenangan hari bahagia Anda.",
};

export default function AboutPage() {
  return (
    <div className="pt-20 sm:pt-24">
      {/* Compact Page Header */}
      <section className="bg-[#0D0C0D] py-10 sm:py-16 border-b border-[#2A2629]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <span className="text-[11px] font-semibold tracking-[0.3em] uppercase text-[#E98B98] block mb-3">
            FILOSOFI &amp; CERITA KAMI
          </span>
          <h1
            className="font-editorial text-[#F7F3F1] leading-[1.08] max-w-3xl tracking-tight"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
          >
            MENDAMPINGI DENGAN TENANG, HANGAT, DAN{" "}
            <span className="italic text-[#E98B98]">TERORGANISIR.</span>
          </h1>
          <p className="mt-4 sm:mt-5 text-sm sm:text-base text-[#B7AAA9] max-w-2xl font-light leading-relaxed">
            New Day hadir di Yogyakarta untuk mendampingi calon pengantin melewati persiapan pernikahan dengan tenang, jelas, dan penuh kehangatan.
          </p>
        </div>
      </section>

      {/* Narrative Section - Warm Ivory */}
      <section className="bg-[#F7F3F1] text-[#0D0C0D] py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-[#E98B98] block">
                PENDEKATAN NEW DAY
              </span>
              <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl leading-tight">
                Pernikahan adalah tentang dua jiwa, bukan tentang kepanikan teknis.
              </h2>
              <div className="space-y-4 text-sm sm:text-base text-[#191719]/80 leading-relaxed font-light">
                <p>
                  New Day Wedding Organizer merupakan Wedding Organizer dan Wedding Planner yang berbasis di Yogyakarta. New Day membantu pasangan dalam mempersiapkan dan mengoordinasikan kebutuhan pernikahan agar setiap rangkaian acara dapat berjalan lebih terarah dan lancar.
                </p>
                <p>
                  New Day bukan sekadar membantu pada hari pernikahan, tetapi menjadi partner bagi pasangan dalam mempersiapkan dan mengoordinasikan momen penting mereka.
                </p>
                <p>
                  New Day berfokus pada pengalaman pernikahan yang indah, personal, terorganisir, dan berkesan bagi pasangan, sehingga Anda dan keluarga dapat menikmati setiap detik dengan tenang.
                </p>
              </div>
            </div>

            <div className="lg:col-span-6 relative">
              <div className="relative aspect-[4/5] w-full overflow-hidden shadow-2xl">
                <Image
                  src="/images/intro-wedding.webp"
                  alt="New Day Wedding Planning in Yogyakarta"
                  fill
                  className="object-cover object-center grayscale-[10%]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values - Near Black */}
      <section className="bg-[#0D0C0D] text-[#F7F3F1] py-24 sm:py-32 border-t border-[#2A2629]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[11px] font-semibold tracking-[0.3em] uppercase text-[#E98B98] block mb-3">
              KARAKTER &amp; PRINSIP KAMI
            </span>
            <h2 className="font-editorial text-4xl sm:text-5xl text-[#F7F3F1]">
              NILAI YANG KAMI PEGANG
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-8 bg-[#191719] border border-[#2A2629]">
              <Heart className="w-6 h-6 text-[#E98B98] mb-4" />
              <h3 className="font-editorial text-xl text-[#F7F3F1] mb-2">Sentuhan Personal</h3>
              <p className="text-xs text-[#B7AAA9] leading-relaxed">
                Pendekatan yang disesuaikan dengan karakter pasangan dan ritme keluarga, menjaga perayaan tetap hangat.
              </p>
            </div>

            <div className="p-8 bg-[#191719] border border-[#2A2629]">
              <Compass className="w-6 h-6 text-[#E98B98] mb-4" />
              <h3 className="font-editorial text-xl text-[#F7F3F1] mb-2">Terarah &amp; Terencana</h3>
              <p className="text-xs text-[#B7AAA9] leading-relaxed">
                Timeline teratur dan koordinasi berkala agar pasangan selalu tenang dan terpandu di setiap langkah.
              </p>
            </div>

            <div className="p-8 bg-[#191719] border border-[#2A2629]">
              <ShieldCheck className="w-6 h-6 text-[#E98B98] mb-4" />
              <h3 className="font-editorial text-xl text-[#F7F3F1] mb-2">Eksekusi Tenang</h3>
              <p className="text-xs text-[#B7AAA9] leading-relaxed">
                Koordinasi lapangan yang tangkas, disiplin, dan profesional saat mengawal jalannya hari pernikahan.
              </p>
            </div>

            <div className="p-8 bg-[#191719] border border-[#2A2629]">
              <Sparkles className="w-6 h-6 text-[#E98B98] mb-4" />
              <h3 className="font-editorial text-xl text-[#F7F3F1] mb-2">Ekosistem Terpadu</h3>
              <p className="text-xs text-[#B7AAA9] leading-relaxed">
                Terhubung dengan New Day Gallery untuk kurasi busana pengantin berkualitas dan sesi fitting privat di Yogyakarta.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <section className="bg-[#191719] py-16 border-t border-[#2A2629] text-center">
        <div className="max-w-4xl mx-auto px-5">
          <h3 className="font-editorial text-2xl sm:text-3xl text-[#F7F3F1] mb-4">
            Mari Bicara Tentang Perayaan Anda
          </h3>
          <p className="text-xs sm:text-sm text-[#B7AAA9] mb-8 max-w-lg mx-auto">
            Tim New Day siap menyambut cerita dan rencana pernikahan Anda dengan senang hati di Yogyakarta.
          </p>
          <Link
            href={getWhatsAppLink(
              "Halo New Day Wedding Organizer, saya ingin berdiskusi mengenai rencana pernikahan kami di Yogyakarta."
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#E98B98] text-[#0D0C0D] text-xs font-semibold tracking-[0.2em] uppercase hover:bg-[#F7F3F1] transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            <span>KONSULTASI VIA WHATSAPP</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
