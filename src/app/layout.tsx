import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { LanguageProvider } from "@/context/LanguageContext";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://newdaywedding.com"),
  title: "New Day Wedding Organizer | Yogyakarta",
  description:
    "New Day Wedding Organizer merupakan Wedding Organizer dan Wedding Planner di Yogyakarta. Jadikan moment pernikahanmu indah dan tak terlupakan.",
  icons: {
    icon: [
      { url: "/images/logo/newday-logo.png", type: "image/png" },
      { url: "/images/logo/newday-logo.webp", type: "image/webp" },
    ],
    shortcut: "/images/logo/newday-logo.png",
    apple: "/images/logo/newday-logo.png",
  },
  keywords: [
    "wedding organizer jogja",
    "wedding organizer yogyakarta",
    "wedding planner jogja",
    "new day wedding organizer",
    "wedding planning yogyakarta",
  ],
  authors: [{ name: "New Day Wedding Organizer" }],
  openGraph: {
    title: "New Day Wedding Organizer | Yogyakarta",
    description:
      "New Day Wedding Organizer merupakan Wedding Organizer dan Wedding Planner di Yogyakarta. Jadikan moment pernikahanmu indah dan tak terlupakan.",
    url: "https://newdaywedding.com",
    siteName: "New Day Wedding Organizer",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "/images/logo/newday-logo.png",
        width: 640,
        height: 640,
        alt: "New Day Wedding Organizer Logo",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "New Day Wedding Organizer | Yogyakarta",
    description:
      "Jadikan moment pernikahanmu indah dan tak terlupakan bersama New Day Wedding Organizer Yogyakarta.",
    images: ["/images/logo/newday-logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      data-scroll-behavior="smooth"
      suppressHydrationWarning
      className={`${cormorant.variable} ${jakarta.variable} scroll-smooth`}
    >
      <body className="bg-[#0D0C0D] text-[#F7F3F1] min-h-screen flex flex-col font-sans antialiased selection:bg-[#E98B98] selection:text-[#0D0C0D]">
        <LanguageProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
