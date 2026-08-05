import type { Metadata } from "next";
import "./globals.css";

import ScrollProgressBar from "@/components/layout/ScrollProgressBar";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import BackToTop from "@/components/layout/BackToTop";
import Preloader from "@/components/ui/Preloader";

export const metadata: Metadata = {
  title: "Ayuragreen Escapes | Luxury Golf, Wellness & Tailored Travel in Sri Lanka",
  description:
    "Experience bespoke luxury travel, championship golf packages, and authentic Ayurvedic wellness retreats in Sri Lanka with Ayuragreen Escapes.",
  keywords: [
    "Ayuragreen Escapes",
    "Sri Lanka Luxury Travel",
    "Golf Tourism Sri Lanka",
    "Ayurveda Wellness Retreats",
    "Destination Wedding Sri Lanka",
    "DMC Sri Lanka",
    "Victoria Golf Resort Kandy",
    "Luxury Sri Lanka DMC",
  ],
  metadataBase: new URL("https://coruscating-wisp-db5332.netlify.app"),
  alternates: {
    canonical: "https://coruscating-wisp-db5332.netlify.app/",
  },
  openGraph: {
    title: "Ayuragreen Escapes | Luxury Golf, Wellness & Tailored Travel in Sri Lanka",
    description:
      "Experience bespoke luxury travel, championship golf packages, and authentic Ayurvedic wellness retreats in Sri Lanka with Ayuragreen Escapes.",
    url: "https://coruscating-wisp-db5332.netlify.app/",
    siteName: "Ayuragreen Escapes",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Ayuragreen Escapes Luxury Golf and Wellness Tour Sri Lanka",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ayuragreen Escapes | Luxury Golf, Wellness & Tailored Travel in Sri Lanka",
    description:
      "Experience bespoke luxury travel, championship golf packages, and authentic Ayurvedic wellness retreats in Sri Lanka with Ayuragreen Escapes.",
    images: ["https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80"],
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
    "name": "Ayuragreen Escapes",
    "url": "https://coruscating-wisp-db5332.netlify.app/",
    "telephone": "+94772158888",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "LK",
      "addressRegion": "Western Province",
      "addressLocality": "Colombo"
    },
    "areaServed": {
      "@type": "Country",
      "name": "Sri Lanka"
    },
    "makesOffer": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "TouristTrip",
          "name": "Luxury Golf & Wellness Tours Sri Lanka"
        }
      }
    ]
  };

  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://coruscating-wisp-db5332.netlify.app/" />
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
        <main id="main-content">{children}</main>
        <Footer />
        <WhatsAppButton />
        <BackToTop />
      </body>
    </html>
  );
}
