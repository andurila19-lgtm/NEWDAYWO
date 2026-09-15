"use client";

import { useState } from "react";
import Link from "next/link";
import { siteConfig, getWhatsAppLink } from "@/data/siteConfig";
import { MessageCircle, MapPin, Calendar, Clock, Star, Phone, Sparkles, Send, ExternalLink } from "lucide-react";
import InstagramIcon from "@/components/ui/InstagramIcon";

export default function ContactPage() {
  const [serviceType, setServiceType] = useState("Wedding Organizer");
  const [estimatedDate, setEstimatedDate] = useState("");
  const [guestCount, setGuestCount] = useState("200 - 500 Tamu");
  const [notes, setNotes] = useState("");

  const handleGenerateWa = () => {
    const message = `Halo New Day Wedding Organizer Yogyakarta, saya ingin konsultasi rencana pernikahan.\n\n• Layanan: ${serviceType}\n• Perkiraan Tanggal: ${estimatedDate || "Belum ditentukan"}\n• Perkiraan Tamu: ${guestCount}\n• Catatan: ${notes || "Ingin berdiskusi mengenai konsep dan alur acara"}`;
    window.open(getWhatsAppLink(message), "_blank");
  };

  return (
    <div className="pt-20 sm:pt-24">
      {/* Page Header */}
      <section className="bg-[#0D0C0D] py-12 sm:py-16 border-b border-[#2A2629]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.3em] uppercase text-[#E98B98] block mb-3">
            HUBUNGI KAMI &amp; KONSULTASI
          </span>
          <h1
            className="font-editorial text-[#F7F3F1] leading-[1.08] max-w-3xl tracking-tight"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
          >
            MARI MEMULAI{" "}
            <span className="italic text-[#E98B98]">PERCAKAPAN</span> DENGAN KAMI.
          </h1>
          <p className="mt-4 sm:mt-5 text-sm sm:text-base text-[#B7AAA9] max-w-2xl font-light leading-relaxed">
            New Day Wedding Organizer siap menjadi partner Anda dalam merencanakan pernikahan yang indah, personal, dan terorganisir di Yogyakarta.
          </p>
        </div>
      </section>

      {/* Main Area */}
      <section className="bg-[#F7F3F1] text-[#0D0C0D] py-14 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            {/* Left: Interactive Consultation Form */}
            <div className="lg:col-span-7 bg-[#FFFFFF] p-8 sm:p-12 border border-[#B7AAA9]/30 shadow-xl">
              <span className="text-[10px] tracking-[0.25em] uppercase text-[#E98B98] font-bold block mb-2">
                KONSULTASI LANGSUNG VIA WHATSAPP
              </span>
              <h2 className="font-editorial text-2xl sm:text-3xl text-[#0D0C0D] mb-6">
                SESUAIKAN RENCANA ANDA
              </h2>

              <div className="space-y-6">
                <div>
                  <label className="text-xs font-semibold uppercase tracking-wider text-[#0D0C0D] block mb-2">
                    Pilihan Kebutuhan Layanan
                  </label>
                  <select
                    value={serviceType}
                    onChange={(e) => setServiceType(e.target.value)}
                    className="w-full bg-[#F7F3F1] border border-[#B7AAA9]/50 p-3.5 text-xs text-[#0D0C0D] focus:border-[#E98B98] focus:outline-none"
                  >
                    <option value="Wedding Organizer">Wedding Organizer (Hari Pelaksanaan)</option>
                    <option value="Wedding Planning">Wedding Planning (Perencanaan Menyeluruh)</option>
                    <option value="Koordinasi Vendor & Acara">Koordinasi Vendor & Alur Acara</option>
                    <option value="Pernikahan Adat / Modern">Pernikahan Adat / Modern</option>
                    <option value="New Day Gallery (Attire)">New Day Gallery (Busana Pengantin)</option>
                    <option value="Konsultasi Umum">Konsultasi Terbuka / Tanya Jawab</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-semibold uppercase tracking-wider text-[#0D0C0D] block mb-2">
                    Perkiraan Bulan / Tanggal Pernikahan
                  </label>
                  <input
                    type="text"
                    placeholder="Contoh: Akhir 2026 / Fleksibel"
                    value={estimatedDate}
                    onChange={(e) => setEstimatedDate(e.target.value)}
                    className="w-full bg-[#F7F3F1] border border-[#B7AAA9]/50 p-3.5 text-xs text-[#0D0C0D] focus:border-[#E98B98] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold uppercase tracking-wider text-[#0D0C0D] block mb-2">
                    Perkiraan Skala Acara
                  </label>
                  <select
                    value={guestCount}
                    onChange={(e) => setGuestCount(e.target.value)}
                    className="w-full bg-[#F7F3F1] border border-[#B7AAA9]/50 p-3.5 text-xs text-[#0D0C0D] focus:border-[#E98B98] focus:outline-none"
                  >
                    <option value="Intimate Wedding (di bawah 150 Tamu)">Intimate Wedding (di bawah 150 Tamu)</option>
                    <option value="200 - 500 Tamu">200 - 500 Tamu</option>
                    <option value="500 - 1000 Tamu">500 - 1000 Tamu</option>
                    <option value="Di atas 1000 Tamu">Di atas 1000 Tamu</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-semibold uppercase tracking-wider text-[#0D0C0D] block mb-2">
                    Catatan atau Keinginan Khusus (Opsional)
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Ceritakan gambaran konsep yang Anda impikan, preferensi adat atau modern..."
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="w-full bg-[#F7F3F1] border border-[#B7AAA9]/50 p-3.5 text-xs text-[#0D0C0D] focus:border-[#E98B98] focus:outline-none"
                  />
                </div>

                <button
                  type="button"
                  onClick={handleGenerateWa}
                  className="w-full py-4 bg-[#E98B98] text-[#0D0C0D] text-xs font-semibold tracking-[0.2em] uppercase hover:bg-[#0D0C0D] hover:text-[#F7F3F1] transition-all flex items-center justify-center gap-2 shadow-lg"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>KIRIM VIA WHATSAPP RESMI</span>
                </button>
              </div>
            </div>

            {/* Right: Verified Address & Google Business Info */}
            <div className="lg:col-span-5 space-y-6 flex flex-col justify-start">
              {/* Brand Message Banner */}
              <div className="p-6 bg-[#0D0C0D] text-[#F7F3F1] border border-[#2A2629]">
                <span className="text-[9px] tracking-[0.25em] uppercase text-[#E98B98] font-semibold block mb-1">
                  BRAND MESSAGE
                </span>
                <p className="font-editorial text-xl italic text-[#F7F3F1]">
                  &ldquo;{siteConfig.tagline}&rdquo;
                </p>
              </div>

              {/* Main Office Details */}
              <div className="p-6 bg-[#FFFFFF] border border-[#B7AAA9]/30 space-y-4 shadow-sm">
                <span className="text-[10px] tracking-[0.25em] uppercase text-[#E98B98] font-bold block">
                  KANTOR &amp; WORKSPACE
                </span>
                <h3 className="font-editorial text-xl text-[#0D0C0D]">
                  New Day Wedding Organizer
                </h3>

                <div className="space-y-3 text-xs text-[#191719]/80 font-light">
                  <div className="flex items-start gap-2.5">
                    <MapPin className="w-4 h-4 text-[#E98B98] shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-[#0D0C0D]">Alamat Lengkap:</p>
                      <p className="mt-0.5 leading-relaxed">{siteConfig.address.full}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5 pt-2 border-t border-[#B7AAA9]/20">
                    <Phone className="w-4 h-4 text-[#E98B98] shrink-0" />
                    <div>
                      <span className="font-medium text-[#0D0C0D]">WhatsApp / Telepon: </span>
                      <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer" className="text-[#E98B98] hover:underline font-semibold">
                        {siteConfig.whatsapp.display}
                      </a>
                      <span className="text-[11px] text-[#B7AAA9] ml-1">({siteConfig.whatsapp.localFormat})</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <Clock className="w-4 h-4 text-[#E98B98] shrink-0" />
                    <div>
                      <span className="font-medium text-[#0D0C0D]">Jam Operasional: </span>
                      <span>{siteConfig.googleBusiness.openingHours}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5 pt-2 border-t border-[#B7AAA9]/20">
                    <Star className="w-4 h-4 fill-[#E98B98] text-[#E98B98] shrink-0" />
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-[#0D0C0D]">Rating 5,0 di Google Business</span>
                      <span className="text-[11px] text-[#B7AAA9]">(26 ulasan)</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <InstagramIcon className="w-4 h-4 text-[#E98B98] shrink-0" />
                    <div>
                      <span className="font-medium text-[#0D0C0D]">Instagram: </span>
                      <a
                        href={siteConfig.instagram.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#E98B98] hover:underline"
                      >
                        {siteConfig.instagram.handle}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* New Day Gallery Card */}
              <div className="p-6 bg-[#191719] text-[#F7F3F1] border border-[#2A2629] space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] tracking-[0.25em] uppercase text-[#E98B98] font-bold">
                    LINI TERKAIT
                  </span>
                  <span className="text-[10px] text-[#B7AAA9]">{siteConfig.galleryInstagram.followers}</span>
                </div>

                <h4 className="font-editorial text-xl text-[#F7F3F1]">
                  New Day Gallery
                </h4>
                <p className="text-xs text-[#E98B98] italic">
                  &ldquo;{siteConfig.galleryInstagram.tagline}&rdquo;
                </p>

                <div className="space-y-1.5 text-xs text-[#B7AAA9] pt-1">
                  <p className="flex items-start gap-2">
                    <MapPin className="w-3.5 h-3.5 text-[#E98B98] shrink-0 mt-0.5" />
                    <span>{siteConfig.galleryInstagram.address}</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5 text-[#E98B98] shrink-0" />
                    <span>Jam Operasional: {siteConfig.galleryInstagram.openingHours}</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <Sparkles className="w-3.5 h-3.5 text-[#E98B98] shrink-0" />
                    <span>Bidang: {siteConfig.galleryInstagram.field}</span>
                  </p>
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <Link
                    href="/new-day-gallery"
                    className="text-xs text-[#E98B98] hover:underline font-semibold"
                  >
                    Lihat Koleksi Busana →
                  </Link>
                  <a
                    href={siteConfig.galleryInstagram.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-[#B7AAA9] hover:text-[#F7F3F1]"
                  >
                    {siteConfig.galleryInstagram.handle}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
