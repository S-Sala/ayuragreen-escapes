import type { Metadata } from "next";
import "./globals.css";

import ScrollProgressBar from "@/components/layout/ScrollProgressBar";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import BackToTop from "@/components/layout/BackToTop";
import Preloader from "@/components/ui/Preloader";
import { COMPANY_FACTS } from "@/lib/data";

export const metadata: Metadata = {
  title: "AyuraGreen Escapes | Luxury Destination Management Company Sri Lanka",
  description:
    "Crafting unforgettable luxury travel, championship golf holidays, certified Ayurveda wellness retreats, destination weddings, and corporate travel in Sri Lanka.",
  keywords: [
    "Sri Lanka Luxury Travel",
    "Golf Tourism Sri Lanka",
    "Ayurveda Wellness Retreats",
    "Destination Wedding Sri Lanka",
    "DMC Sri Lanka",
    "Victoria Golf Resort",
    "Luxury Sri Lanka DMC",
  ],
  metadataBase: new URL("https://www.ayuragreenescapes.com"),
  openGraph: {
    title: "AyuraGreen Escapes | Luxury DMC Sri Lanka",
    description: "Luxury • Wellness • Golf • Corporate • Authentic Sri Lanka",
    url: "https://www.ayuragreenescapes.com",
    siteName: "AyuraGreen Escapes",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    "name": COMPANY_FACTS.name,
    "description": COMPANY_FACTS.positioning,
    "telephone": COMPANY_FACTS.phone,
    "email": COMPANY_FACTS.email,
    "url": "https://www.ayuragreenescapes.com",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "LK",
      "addressLocality": "Sri Lanka"
    },
    "sameAs": [
      "https://facebook.com",
      "https://instagram.com",
      "https://linkedin.com"
    ]
  };

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,600..800;1,600..800&family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <Preloader />
        <ScrollProgressBar />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
        <BackToTop />
      </body>
    </html>
  );
}
