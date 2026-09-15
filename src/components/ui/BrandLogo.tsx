"use client";

import Image from "next/image";
import Link from "next/link";

interface BrandLogoProps {
  variant?: "navbar" | "footer" | "hero";
  className?: string;
}

export default function BrandLogo({ variant = "navbar", className = "" }: BrandLogoProps) {
  const size =
    variant === "footer"
      ? { width: 56, height: 56 }
      : variant === "hero"
      ? { width: 80, height: 80 }
      : { width: 40, height: 40 };

  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-2.5 group transition-opacity hover:opacity-95 ${className}`}
      aria-label="New Day Wedding Organizer"
    >
      <div className="relative rounded-full overflow-hidden flex items-center justify-center p-0.5 border border-[#E98B98]/30 group-hover:border-[#E98B98]/70 transition-colors bg-[#0D0C0D] shrink-0 shadow-sm">
        <Image
          src="/images/logo/newday-logo.png"
          alt="New Day Wedding Organizer Logo"
          width={size.width}
          height={size.height}
          className="object-cover rounded-full"
          priority
        />
      </div>
      <div className="flex flex-col">
        <span className="font-editorial text-sm sm:text-base tracking-[0.22em] uppercase text-[#F7F3F1] leading-tight group-hover:text-[#E98B98] transition-colors font-medium">
          NEW DAY
        </span>
        <span className="text-[8px] sm:text-[9px] uppercase tracking-[0.26em] text-[#B7AAA9] leading-tight font-light">
          Wedding Organizer
        </span>
      </div>
    </Link>
  );
}
