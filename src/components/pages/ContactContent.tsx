"use client";

import { useState } from "react";
import Link from "next/link";
import { siteConfig, getWhatsAppLink } from "@/data/siteConfig";
import { useLanguage } from "@/context/LanguageContext";
import { MessageCircle, MapPin, Clock, Star, Phone, Sparkles } from "lucide-react";
import InstagramIcon from "@/components/ui/InstagramIcon";

export default function ContactContent() {
  const { t, lang } = useLanguage();
  const page = t.contactPage;

  const [serviceType, setServiceType] = useState(page.form.serviceOptions[0].value);
  const [estimatedDate, setEstimatedDate] = useState("");
  const [guestCount, setGuestCount] = useState(page.form.scaleOptions[1]);
  const [notes, setNotes] = useState("");

  const handleGenerateWa = () => {
    const tmpl = page.waTemplate;
    const message = `${tmpl.greeting}\n\n• ${tmpl.service}: ${serviceType}\n• ${tmpl.date}: ${estimatedDate || tmpl.notSet}\n• ${tmpl.guests}: ${guestCount}\n• ${tmpl.notes}: ${notes || tmpl.defaultNotes}`;
    window.open(getWhatsAppLink(message), "_blank");
  };

  return (
    <div className="pt-20 sm:pt-24">
      {/* Page Header */}
      <section className="bg-[#0D0C0D] py-12 sm:py-16 border-b border-[#2A2629]">
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

      {/* Main Area */}
      <section className="bg-[#F7F3F1] text-[#0D0C0D] py-14 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            {/* Left: Interactive Consultation Form */}
            <div className="lg:col-span-7 bg-[#FFFFFF] p-8 sm:p-12 border border-[#B7AAA9]/30 shadow-xl">
              <span className="text-[10px] tracking-[0.25em] uppercase text-[#E98B98] font-bold block mb-2">
                {page.form.badge}
              </span>
              <h2 className="font-editorial text-2xl sm:text-3xl text-[#0D0C0D] mb-6">
                {page.form.title}
              </h2>

              <div className="space-y-6">
                <div>
                  <label className="text-xs font-semibold uppercase tracking-wider text-[#0D0C0D] block mb-2">
                    {page.form.serviceLabel}
                  </label>
                  <select
                    value={serviceType}
                    onChange={(e) => setServiceType(e.target.value)}
                    className="w-full bg-[#F7F3F1] border border-[#B7AAA9]/50 p-3.5 text-xs text-[#0D0C0D] focus:border-[#E98B98] focus:outline-none"
                  >
                    {page.form.serviceOptions.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="text-xs font-semibold uppercase tracking-wider text-[#0D0C0D] block mb-2">
                    {page.form.dateLabel}
                  </label>
                  <input
                    type="text"
                    placeholder={page.form.datePlaceholder}
                    value={estimatedDate}
                    onChange={(e) => setEstimatedDate(e.target.value)}
                    className="w-full bg-[#F7F3F1] border border-[#B7AAA9]/50 p-3.5 text-xs text-[#0D0C0D] focus:border-[#E98B98] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold uppercase tracking-wider text-[#0D0C0D] block mb-2">
                    {page.form.scaleLabel}
                  </label>
                  <select
                    value={guestCount}
                    onChange={(e) => setGuestCount(e.target.value)}
                    className="w-full bg-[#F7F3F1] border border-[#B7AAA9]/50 p-3.5 text-xs text-[#0D0C0D] focus:border-[#E98B98] focus:outline-none"
                  >
                    {page.form.scaleOptions.map((scale, idx) => (
                      <option key={idx} value={scale}>
                        {scale}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="text-xs font-semibold uppercase tracking-wider text-[#0D0C0D] block mb-2">
                    {page.form.notesLabel}
                  </label>
                  <textarea
                    rows={3}
                    placeholder={page.form.notesPlaceholder}
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
                  <span>{page.form.submitBtn}</span>
                </button>
              </div>
            </div>

            {/* Right: Verified Address & Google Business Info */}
            <div className="lg:col-span-5 space-y-6 flex flex-col justify-start">
              {/* Brand Message Banner */}
              <div className="p-6 bg-[#0D0C0D] text-[#F7F3F1] border border-[#2A2629]">
                <span className="text-[9px] tracking-[0.25em] uppercase text-[#E98B98] font-semibold block mb-1">
                  {page.info.brandMessageBadge}
                </span>
                <p className="font-editorial text-xl italic text-[#F7F3F1]">
                  &ldquo;{lang === "en" ? siteConfig.taglineEn || siteConfig.tagline : siteConfig.tagline}&rdquo;
                </p>
              </div>

              {/* Main Office Details */}
              <div className="p-6 bg-[#FFFFFF] border border-[#B7AAA9]/30 space-y-4 shadow-sm">
                <span className="text-[10px] tracking-[0.25em] uppercase text-[#E98B98] font-bold block">
                  {page.info.officeBadge}
                </span>
                <h3 className="font-editorial text-xl text-[#0D0C0D]">
                  {page.info.officeTitle}
                </h3>

                <div className="space-y-3 text-xs text-[#191719]/80 font-light">
                  <div className="flex items-start gap-2.5">
                    <MapPin className="w-4 h-4 text-[#E98B98] shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-[#0D0C0D]">{page.info.addressLabel}</p>
                      <p className="mt-0.5 leading-relaxed">{siteConfig.address.full}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5 pt-2 border-t border-[#B7AAA9]/20">
                    <Phone className="w-4 h-4 text-[#E98B98] shrink-0" />
                    <div>
                      <span className="font-medium text-[#0D0C0D]">{page.info.whatsappLabel} </span>
                      <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer" className="text-[#E98B98] hover:underline font-semibold">
                        {siteConfig.whatsapp.display}
                      </a>
                      <span className="text-[11px] text-[#B7AAA9] ml-1">({siteConfig.whatsapp.localFormat})</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <Clock className="w-4 h-4 text-[#E98B98] shrink-0" />
                    <div>
                      <span className="font-medium text-[#0D0C0D]">{page.info.hoursLabel} </span>
                      <span>{siteConfig.googleBusiness.openingHours}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5 pt-2 border-t border-[#B7AAA9]/20">
                    <Star className="w-4 h-4 fill-[#E98B98] text-[#E98B98] shrink-0" />
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-[#0D0C0D]">{page.info.googleRatingText}</span>
                      <span className="text-[11px] text-[#B7AAA9]">{page.info.reviewsText}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <InstagramIcon className="w-4 h-4 text-[#E98B98] shrink-0" />
                    <div>
                      <span className="font-medium text-[#0D0C0D]">{page.info.instagramLabel} </span>
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
                    {page.galleryCard.badge}
                  </span>
                  <span className="text-[10px] text-[#B7AAA9]">{siteConfig.galleryInstagram.followers}</span>
                </div>

                <h4 className="font-editorial text-xl text-[#F7F3F1]">
                  {page.galleryCard.title}
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
                    <span>{page.galleryCard.hoursPrefix}{siteConfig.galleryInstagram.openingHours}</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <Sparkles className="w-3.5 h-3.5 text-[#E98B98] shrink-0" />
                    <span>{page.galleryCard.fieldPrefix}{siteConfig.galleryInstagram.field}</span>
                  </p>
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <Link
                    href="/new-day-gallery"
                    className="text-xs text-[#E98B98] hover:underline font-semibold"
                  >
                    {page.galleryCard.attireLink}
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
