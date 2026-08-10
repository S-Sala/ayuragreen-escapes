import Image from "next/image";
import Link from "next/link";
import HeroSlider from "@/components/ui/HeroSlider";
import DestinationsCarousel from "@/components/ui/DestinationsCarousel";
import WhyUsSlider from "@/components/ui/WhyUsSlider";
import PackagesCarousel from "@/components/ui/PackagesCarousel";
import TestimonialSlider from "@/components/ui/TestimonialSlider";
import FaqAccordion from "@/components/ui/FaqAccordion";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import ContactForm from "@/components/ui/ContactForm";
import { COMPANY_FACTS } from "@/lib/data";
import { GiGolfFlag } from "react-icons/gi";
import {
  BiSpa,
  BiHeart,
  BiBriefcase,
  BiCrown,
  BiGroup,
  BiSolidLandmark,
  BiSun,
  BiRightArrowAlt,
} from "react-icons/bi";

const HERO_SLIDES = [
  {
    src: "/images/hero/hero-golf-mountain.jpg",
    alt: "Ayuragreen Escapes Luxury Golf and Wellness Tour Sri Lanka - Victoria Championship Golf Resort",
  },
  {
    src: "/images/hero/hero-ayurveda-spa.jpg",
    alt: "Ayuragreen Escapes Luxury Golf and Wellness Tour Sri Lanka - Certified Ayurveda Spa Therapy",
  },
  {
    src: "/images/hero/hero-luxury-villa.jpg",
    alt: "Ayuragreen Escapes Luxury Golf and Wellness Tour Sri Lanka - Executive Resort Villa & Pool",
  },
  {
    src: "/images/hero/hero-beach-wedding.jpg",
    alt: "Ayuragreen Escapes Luxury Golf and Wellness Tour Sri Lanka - Sunset Beach Wedding Ceremony",
  },
];

const TRAVEL_STYLES = [
  { icon: GiGolfFlag, title: "Golf Tourism", desc: "Championship 18-hole tee times, caddie arrangements, and luxury clubhouse stays.", link: "/golf" },
  { icon: BiSpa, title: "Wellness & Ayurveda", desc: "Certified doctor consultations, daily yoga, detox, and organic healing cuisine.", link: "/wellness" },
  { icon: BiHeart, title: "Destination Weddings", desc: "Bespoke beach & garden ceremonies, luxury hosting, and honeymoon touring.", link: "/destination-weddings" },
  { icon: BiBriefcase, title: "Corporate Travel", desc: "Executive MICE conferences, leadership workshops, team building, and VIP logistics.", link: "/services#corporate" },
  { icon: BiCrown, title: "Luxury Holidays", desc: "Private chauffeured touring, butler service villas, and helicopter charters.", link: "/services#luxury" },
  { icon: BiGroup, title: "Leisure & Family", desc: "Child-safe wildlife safaris, scenic mountain trains, and beach escapes.", link: "/packages#family-holiday" },
  { icon: BiSolidLandmark, title: "Culture & Heritage", desc: "Sigiriya Rock Fortress, Temple of the Tooth, and Kandyan cultural shows.", link: "/services" },
  { icon: BiSun, title: "Beach Escapes", desc: "Pristine golden sands, whale watching, surfing adventures, and sunset cruises.", link: "/packages#beach-escape" },
];

const GALLERY_TEASERS = [
  { src: "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?auto=format&fit=crop&w=800&q=80", title: "Victoria Golf Resort Kandy", alt: "Ayuragreen Escapes Luxury Golf and Wellness Tour Sri Lanka - Victoria Golf Resort Kandy" },
  { src: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80", title: "Ayurveda Spa Deck", alt: "Ayuragreen Escapes Luxury Golf and Wellness Tour Sri Lanka - Certified Ayurveda Spa Deck" },
  { src: "/images/destinations/bentota.jpg", title: "Bentota Sunset Beach", alt: "Ayuragreen Escapes Luxury Golf and Wellness Tour Sri Lanka - Bentota Sunset Beach" },
  { src: "/images/destinations/sigiriya.jpg", title: "Sigiriya Lion Rock Fortress", alt: "Ayuragreen Escapes Luxury Golf and Wellness Tour Sri Lanka - Sigiriya Lion Rock Fortress" },
  { src: "/images/destinations/ella.jpg", title: "Nine Arch Bridge Ella", alt: "Ayuragreen Escapes Luxury Golf and Wellness Tour Sri Lanka - Nine Arch Bridge Ella Tea Country" },
  { src: "/images/destinations/nuwara-eliya.jpg", title: "Nuwara Eliya Tea Hills", alt: "Ayuragreen Escapes Luxury Golf and Wellness Tour Sri Lanka - Nuwara Eliya Tea Estate Hills" },
];

export default function HomePage() {
  return (
    <>
      {/* 1. HERO SLIDER SECTION */}
      <HeroSlider slides={HERO_SLIDES} />

      {/* 2. TRAVEL STYLES GRID */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div style={{ textAlign: "center", maxWidth: "700px", margin: "0 auto 3rem auto" }}>
            <span className="eyebrow">TAILORED EXPERIENCES</span>
            <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 2.8rem)", marginBottom: "0.8rem" }}>
              Explore Our Signature Travel Styles
            </h2>
            <p style={{ color: "var(--ink-soft)", fontSize: "1rem" }}>
              From world-class golf fairways to holistic Ayurveda retreats, discover Sri Lanka with unparalleled luxury hospitality.
            </p>
          </div>

          <div className="tailored-experiences-grid">
            {TRAVEL_STYLES.map((style, idx) => {
              const IconComp = style.icon;
              return (
                <RevealOnScroll key={style.title} delay={idx * 40}>
                  <Link href={style.link} className="card-clean tailored-card">
                    <div className="tailored-card-icon">
                      <IconComp />
                    </div>
                    <h3 className="tailored-card-title">
                      {style.title}
                    </h3>
                    <p className="tailored-card-desc">
                      {style.desc}
                    </p>
                    <span className="tailored-card-link">
                      Explore <BiRightArrowAlt style={{ fontSize: "1.1rem" }} />
                    </span>
                  </Link>
                </RevealOnScroll>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. WHERE WILL YOU GO? DESTINATIONS CAROUSEL */}
      <DestinationsCarousel />

      {/* 4. WHY CHOOSE US SLIDER */}
      <WhyUsSlider />

      {/* 5. EXPERIENCE SPLIT BANNER */}
      <section style={{ position: "relative", padding: "5.5rem 0", overflow: "hidden" }}>
        {/* Generated Background Image */}
        <Image
          src="/images/four-pillars-bg.jpg"
          alt="Four Pillars of Luxury Travel - AyuraGreen Escapes Sri Lanka"
          fill
          priority
          style={{ objectFit: "cover", objectPosition: "center", zIndex: 0 }}
          sizes="100vw"
        />
        {/* Gradient Overlay for Optimal Readability */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(180deg, rgba(10, 33, 22, 0.88) 0%, rgba(10, 33, 22, 0.94) 100%)",
            zIndex: 1,
          }}
        />

        <div className="container-custom" style={{ position: "relative", zIndex: 2 }}>
          <div style={{ textAlign: "center", maxWidth: "650px", margin: "0 auto 2.5rem auto" }}>
            <span className="eyebrow" style={{ color: "var(--gold-light)" }}>CURATED PILLARS</span>
            <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 2.8rem)", color: "var(--white)" }}>Four Pillars of Luxury Travel</h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.8rem" }}>
            {/* Tile 1: Golf */}
            <article className="pillar-card" style={{ position: "relative", height: "340px", borderRadius: "12px", overflow: "hidden", boxShadow: "0 15px 35px rgba(0,0,0,0.3)" }}>
              <Image
                src="/images/hero/hero-golf-mountain.jpg"
                alt="Ayuragreen Escapes Luxury Golf and Wellness Tour Sri Lanka - Golf Tourism Championship Fairway"
                fill
                loading="lazy"
                style={{ objectFit: "cover" }}
                sizes="300px"
              />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(0,0,0,0) 40%, rgba(10,33,22,0.95) 100%)", padding: "1.5rem", display: "flex", flexDirection: "column", justifyContent: "flex-end" }}>
                <span style={{ color: "var(--gold-light)", fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.15em", fontWeight: 700 }}>Tee Off In Paradise</span>
                <h3 style={{ color: "var(--white)", fontFamily: "var(--font-playfair)", fontSize: "1.5rem", margin: "0.3rem 0 0.8rem 0" }}>Golf Tourism</h3>
                <Link href="/golf" className="btn-gold" style={{ padding: "0.5rem 1.1rem", fontSize: "0.85rem", width: "fit-content", minHeight: "38px" }}>
                  Explore Courses →
                </Link>
              </div>
            </article>

            {/* Tile 2: Wellness */}
            <article className="pillar-card" style={{ position: "relative", height: "340px", borderRadius: "12px", overflow: "hidden", boxShadow: "0 15px 35px rgba(0,0,0,0.3)" }}>
              <Image
                src="/images/hero/hero-ayurveda-spa.jpg"
                alt="Ayuragreen Escapes Luxury Golf and Wellness Tour Sri Lanka - Ayurveda Wellness Retreat"
                fill
                loading="lazy"
                style={{ objectFit: "cover" }}
                sizes="300px"
              />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(0,0,0,0) 40%, rgba(10,33,22,0.95) 100%)", padding: "1.5rem", display: "flex", flexDirection: "column", justifyContent: "flex-end" }}>
                <span style={{ color: "var(--gold-light)", fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.15em", fontWeight: 700 }}>Mind & Body Harmony</span>
                <h3 style={{ color: "var(--white)", fontFamily: "var(--font-playfair)", fontSize: "1.5rem", margin: "0.3rem 0 0.8rem 0" }}>Wellness & Ayurveda</h3>
                <Link href="/wellness" className="btn-gold" style={{ padding: "0.5rem 1.1rem", fontSize: "0.85rem", width: "fit-content", minHeight: "38px" }}>
                  View Retreats →
                </Link>
              </div>
            </article>

            {/* Tile 3: Weddings */}
            <article className="pillar-card" style={{ position: "relative", height: "340px", borderRadius: "12px", overflow: "hidden", boxShadow: "0 15px 35px rgba(0,0,0,0.3)" }}>
              <Image
                src="/images/hero/hero-beach-wedding.jpg"
                alt="Ayuragreen Escapes Luxury Golf and Wellness Tour Sri Lanka - Destination Wedding Ceremony Bentota"
                fill
                loading="lazy"
                style={{ objectFit: "cover" }}
                sizes="300px"
              />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(0,0,0,0) 40%, rgba(10,33,22,0.95) 100%)", padding: "1.5rem", display: "flex", flexDirection: "column", justifyContent: "flex-end" }}>
                <span style={{ color: "var(--gold-light)", fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.15em", fontWeight: 700 }}>Where Love Meets Paradise</span>
                <h3 style={{ color: "var(--white)", fontFamily: "var(--font-playfair)", fontSize: "1.5rem", margin: "0.3rem 0 0.8rem 0" }}>Destination Weddings</h3>
                <Link href="/destination-weddings" className="btn-gold" style={{ padding: "0.5rem 1.1rem", fontSize: "0.85rem", width: "fit-content", minHeight: "38px" }}>
                  Plan Ceremony →
                </Link>
              </div>
            </article>

            {/* Tile 4: Corporate / Luxury */}
            <article className="pillar-card" style={{ position: "relative", height: "340px", borderRadius: "12px", overflow: "hidden", boxShadow: "0 15px 35px rgba(0,0,0,0.3)" }}>
              <Image
                src="/images/hero/hero-luxury-villa.jpg"
                alt="Ayuragreen Escapes Luxury Golf and Wellness Tour Sri Lanka - Corporate Travel MICE Conference Luxury Villa"
                fill
                loading="lazy"
                style={{ objectFit: "cover" }}
                sizes="300px"
              />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(0,0,0,0) 40%, rgba(10,33,22,0.95) 100%)", padding: "1.5rem", display: "flex", flexDirection: "column", justifyContent: "flex-end" }}>
                <span style={{ color: "var(--gold-light)", fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.15em", fontWeight: 700 }}>Executive Events & MICE</span>
                <h3 style={{ color: "var(--white)", fontFamily: "var(--font-playfair)", fontSize: "1.5rem", margin: "0.3rem 0 0.8rem 0" }}>Corporate Travel</h3>
                <Link href="/services#corporate" className="btn-gold" style={{ padding: "0.5rem 1.1rem", fontSize: "0.85rem", width: "fit-content", minHeight: "38px" }}>
                  MICE Services →
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* 6. SIGNATURE PACKAGES CAROUSEL */}
      <PackagesCarousel />

      {/* 7. TESTIMONIAL SLIDER */}
      <TestimonialSlider />

      {/* 8. MASONRY GALLERY PREVIEW */}
      <section className="section-padding bg-off-white">
        <div className="container-custom">
          <div style={{ textAlign: "center", maxWidth: "600px", margin: "0 auto 2.5rem auto" }}>
            <span className="eyebrow">VISUAL JOURNEYS</span>
            <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 2.8rem)", marginBottom: "0.8rem" }}>Captured Moments</h2>
            <p style={{ color: "var(--ink-soft)", fontSize: "0.95rem" }}>A glimpse into guest experiences across championship fairways, tranquil spas, and coastal sanctuaries.</p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.2rem" }}>
            {GALLERY_TEASERS.map((g, idx) => (
              <RevealOnScroll key={idx} delay={idx * 60}>
                <article style={{ position: "relative", height: "240px", borderRadius: "10px", overflow: "hidden", boxShadow: "0 8px 25px rgba(18,53,36,0.06)" }}>
                  <Image src={g.src} alt={g.alt} fill loading="lazy" style={{ objectFit: "cover" }} sizes="400px" />
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(0,0,0,0) 50%, rgba(10,33,22,0.85) 100%)", padding: "1.2rem", display: "flex", alignItems: "flex-end" }}>
                    <span style={{ color: "var(--white)", fontFamily: "var(--font-playfair)", fontSize: "1.05rem" }}>{g.title}</span>
                  </div>
                </article>
              </RevealOnScroll>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: "2rem" }}>
            <Link href="/gallery" className="btn-forest" style={{ minHeight: "44px" }}>
              View Full Photo Gallery <BiRightArrowAlt style={{ fontSize: "1.3rem" }} />
            </Link>
          </div>
        </div>
      </section>

      {/* 9. FAQ ACCORDION */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div style={{ textAlign: "center", maxWidth: "650px", margin: "0 auto 2.5rem auto" }}>
            <span className="eyebrow">FREQUENTLY ASKED QUESTIONS</span>
            <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 2.8rem)" }}>Plan Your Trip With Ease</h2>
          </div>
          <FaqAccordion />
        </div>
      </section>

      {/* 10. CONTACT CTA BAND */}
      <section className="bg-forest section-padding">
        <div className="container-custom">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "3.5rem", alignItems: "center" }}>
            
            <div>
              <span className="eyebrow" style={{ color: "var(--gold-light)" }}>LET'S PLAN YOUR SRI LANKA ESCAPE</span>
              <h2 style={{ fontSize: "clamp(2.2rem, 4vw, 3.2rem)", color: "var(--white)", marginBottom: "1.2rem" }}>
                Ready to Experience Authentic Luxury?
              </h2>
              <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "1rem", lineHeight: "1.6", marginBottom: "1.8rem" }}>
                Connect with our expert travel designers for custom golf itineraries, certified Ayurveda retreats, luxury private villa stays, or MICE logistics.
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: "0.8rem", color: "var(--gold-light)", fontSize: "0.95rem" }}>
                <p><strong>Direct Desk:</strong> {COMPANY_FACTS.phone}</p>
                <p><strong>Direct Email:</strong> {COMPANY_FACTS.email}</p>
                <p><strong>Response Time:</strong> Guaranteed within 12 hours</p>
              </div>
            </div>

            <div style={{ backgroundColor: "var(--white)", borderRadius: "16px", padding: "2rem", color: "var(--ink)", boxShadow: "0 20px 50px rgba(0,0,0,0.3)" }}>
              <h3 style={{ fontSize: "1.4rem", fontFamily: "var(--font-playfair)", marginBottom: "1rem" }}>Quick Travel Inquiry</h3>
              <ContactForm />
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
