import { Metadata } from "next";
import Image from "next/image";
import WeddingInquiryForm from "@/components/ui/WeddingInquiryForm";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import { COMPANY_FACTS } from "@/lib/data";
import {
  BiHeart,
  BiMapPin,
  BiStar,
  BiCrown,
  BiCamera,
  BiGlobe,
  BiCheck,
} from "react-icons/bi";

export const metadata: Metadata = {
  title: "Destination Weddings in Sri Lanka | AyuraGreen Escapes",
  description:
    "Where love meets paradise. Say 'I do' on pristine Sri Lankan beaches or colonial tea garden estates. Turn-key wedding planning, luxury accommodation, and guest logistics.",
};

const WEDDING_FEATURES = [
  { icon: BiMapPin, title: "Stunning Tropical Locations", desc: "Secluded golden beaches, coconut palm groves, and colonial heritage estates." },
  { icon: BiStar, title: "Bespoke Wedding Experiences", desc: "Customized floral decor, traditional Kandyan drummers, and gourmet banquets." },
  { icon: BiCrown, title: "Luxury Stays & World Class Hospitality", desc: "5-star oceanfront suites, private butler villas, and guest hosting." },
  { icon: BiCamera, title: "Unforgettable Moments Captured", desc: "Professional editorial photography, drone cinematography, and sunset sessions." },
  { icon: BiGlobe, title: "Culture, Nature & Adventure", desc: "Post-wedding island honeymoon tours, whale watching, and safari excursions." },
];

const GALLERY_STRIP = [
  { src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80", title: "Sunset Beach Arch Ceremony" },
  { src: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80", title: "Coastal Lighthouse Romantic Walk" },
  { src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=800&q=80", title: "Candlelit Outdoor Dinner Reception" },
  { src: "https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=800&q=80", title: "Scenic Rock Fortress Couple Excursion" },
];

export default function WeddingsPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ position: "relative", height: "550px", backgroundColor: "var(--forest-deep)", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <Image
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1920&q=80"
          alt="Destination Weddings Sri Lanka"
          fill
          style={{ objectFit: "cover", opacity: 0.35 }}
          priority
        />
        <div className="container-custom" style={{ position: "relative", zIndex: 2, textAlign: "center", marginTop: "4rem" }}>
          <BiHeart style={{ fontSize: "3rem", color: "var(--gold)", marginBottom: "0.5rem" }} />
          <span className="eyebrow" style={{ color: "var(--gold-light)", letterSpacing: "0.3em" }}>ISLAND OF ENDLESS ROMANCE</span>
          <h1 style={{ fontSize: "clamp(2.8rem, 6vw, 4.5rem)", color: "var(--white)", fontFamily: "var(--font-playfair)" }}>
            Destination Weddings in Sri Lanka
          </h1>
          <p style={{ color: "var(--gold-light)", fontFamily: "var(--font-playfair)", fontSize: "1.6rem", fontStyle: "italic", marginTop: "0.5rem" }}>
            "Where love meets paradise"
          </p>
        </div>
      </section>

      {/* Tagline Banner */}
      <section className="bg-forest section-padding-sm" style={{ textAlign: "center" }}>
        <div className="container-custom">
          <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(2rem, 4vw, 3.2rem)", color: "var(--white)" }}>
            "Say 'I do' in an island of endless romance."
          </h2>
        </div>
      </section>

      {/* 5 Feature Bullets */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div style={{ textAlign: "center", maxWidth: "650px", margin: "0 auto 3.5rem auto" }}>
            <span className="eyebrow">WHY MARRY IN SRI LANKA</span>
            <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 2.8rem)" }}>Unrivaled Island Wedding Experiences</h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "2rem" }}>
            {WEDDING_FEATURES.map((feat, idx) => {
              const IconComp = feat.icon;
              return (
                <RevealOnScroll key={feat.title} delay={idx * 60}>
                  <div className="card-clean" style={{ padding: "2rem", height: "100%", textAlign: "center" }}>
                    <div style={{ width: "56px", height: "56px", borderRadius: "50%", backgroundColor: "var(--off-white)", color: "var(--gold)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.8rem", margin: "0 auto 1.2rem auto" }}>
                      <IconComp />
                    </div>
                    <h3 style={{ fontSize: "1.2rem", fontFamily: "var(--font-playfair)", marginBottom: "0.5rem" }}>{feat.title}</h3>
                    <p style={{ fontSize: "0.88rem", color: "var(--ink-soft)", lineHeight: "1.5" }}>{feat.desc}</p>
                  </div>
                </RevealOnScroll>
              );
            })}
          </div>
        </div>
      </section>

      {/* Two Wedding Settings Tiles: Beach vs Garden */}
      <section className="section-padding bg-off-white">
        <div className="container-custom">
          <div style={{ textAlign: "center", maxWidth: "650px", margin: "0 auto 3.5rem auto" }}>
            <span className="eyebrow">CEREMONY VENUES</span>
            <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 2.8rem)" }}>Choose Your Perfect Backdrop</h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: "3rem" }}>
            {/* Tile 1: Beach */}
            <div id="beach" className="card-clean" style={{ overflow: "hidden" }}>
              <div style={{ position: "relative", width: "100%", height: "300px" }}>
                <Image src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80" alt="Tropical Beach Wedding" fill style={{ objectFit: "cover" }} sizes="500px" />
                <div style={{ position: "absolute", top: "1rem", left: "1rem", backgroundColor: "var(--gold)", color: "var(--white)", padding: "0.3rem 0.8rem", borderRadius: "4px", fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase" }}>
                  West & South Coast
                </div>
              </div>
              <div style={{ padding: "2rem" }}>
                <h3 style={{ fontSize: "1.6rem", fontFamily: "var(--font-playfair)", marginBottom: "0.5rem" }}>Barefoot Sunset Beach Weddings</h3>
                <p style={{ fontSize: "0.92rem", color: "var(--ink-soft)", lineHeight: "1.6", marginBottom: "1.2rem" }}>
                  Exchange vows along golden beaches in Bentota, Mirissa, or Tangalle under floral bamboo arches with gentle ocean waves and crimson tropical sunsets.
                </p>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.5rem", fontSize: "0.85rem", color: "var(--forest)" }}>
                  <li style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}><BiCheck style={{ color: "var(--gold)" }} /> Oceanfront Sunset Ceremony Arch</li>
                  <li style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}><BiCheck style={{ color: "var(--gold)" }} /> Seafood Banquet & Beach Firepit</li>
                </ul>
              </div>
            </div>

            {/* Tile 2: Garden */}
            <div id="garden" className="card-clean" style={{ overflow: "hidden" }}>
              <div style={{ position: "relative", width: "100%", height: "300px" }}>
                <Image src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80" alt="Colonial Garden Wedding" fill style={{ objectFit: "cover" }} sizes="500px" />
                <div style={{ position: "absolute", top: "1rem", left: "1rem", backgroundColor: "var(--forest)", color: "var(--white)", padding: "0.3rem 0.8rem", borderRadius: "4px", fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase" }}>
                  Kandy & Nuwara Eliya
                </div>
              </div>
              <div style={{ padding: "2rem" }}>
                <h3 style={{ fontSize: "1.6rem", fontFamily: "var(--font-playfair)", marginBottom: "0.5rem" }}>Colonial Estate & Garden Weddings</h3>
                <p style={{ fontSize: "0.92rem", color: "var(--ink-soft)", lineHeight: "1.6", marginBottom: "1.2rem" }}>
                  Surround your ceremony with misty tea country gardens, vintage 19th-century colonial mansions, and lush tropical flora in Kandy and Nuwara Eliya.
                </p>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.5rem", fontSize: "0.85rem", color: "var(--forest)" }}>
                  <li style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}><BiCheck style={{ color: "var(--gold)" }} /> Manicured Tea Estate Lawns</li>
                  <li style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}><BiCheck style={{ color: "var(--gold)" }} /> Traditional Poruwa Ceremony Options</li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Photo Gallery Strip */}
      <section id="gallery" className="section-padding bg-white">
        <div className="container-custom">
          <div style={{ textAlign: "center", maxWidth: "600px", margin: "0 auto 3rem auto" }}>
            <span className="eyebrow">ROMANTIC INSPIRATION</span>
            <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 2.8rem)" }}>Wedding Gallery</h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
            {GALLERY_STRIP.map((img, idx) => (
              <div key={idx} style={{ position: "relative", height: "280px", borderRadius: "10px", overflow: "hidden" }}>
                <Image src={img.src} alt={img.title} fill style={{ objectFit: "cover" }} sizes="300px" />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(0,0,0,0) 50%, rgba(10,33,22,0.85) 100%)", padding: "1.2rem", display: "flex", alignItems: "flex-end" }}>
                  <span style={{ color: "var(--white)", fontFamily: "var(--font-playfair)", fontSize: "1.1rem" }}>{img.title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section className="section-padding bg-off-white">
        <div className="container-custom">
          <div style={{ maxWidth: "800px", margin: "0 auto", backgroundColor: "var(--white)", padding: "3rem", borderRadius: "16px", border: "1px solid var(--line)", boxShadow: "0 15px 40px rgba(18,53,36,0.06)" }}>
            <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
              <BiHeart style={{ fontSize: "2.5rem", color: "var(--gold)", marginBottom: "0.5rem" }} />
              <span className="eyebrow">PLAN YOUR CELEBRATION</span>
              <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 2.5rem)" }}>Wedding Inquiry Form</h2>
            </div>
            <WeddingInquiryForm />
          </div>
        </div>
      </section>

      {/* Footer Band */}
      <section className="bg-forest-deep section-padding-sm" style={{ textAlign: "center", borderTop: "1px solid rgba(217,194,133,0.3)" }}>
        <div className="container-custom">
          <h3 style={{ color: "var(--gold)", fontFamily: "var(--font-playfair)", letterSpacing: "0.15em", fontSize: "1.1rem", marginBottom: "0.8rem" }}>
            GOLF • AYURVEDA • WELLNESS • LEISURE
          </h3>
          <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "1rem" }}>
            AyuraGreen Escapes (Pvt) Ltd | WhatsApp: {COMPANY_FACTS.phone} | Email: {COMPANY_FACTS.email}
          </p>
        </div>
      </section>
    </>
  );
}
