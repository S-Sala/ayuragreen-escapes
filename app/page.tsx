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
    src: "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?auto=format&fit=crop&w=1920&q=80",
    alt: "Luxury Championship Golf at Dawn in Kandy Sri Lanka",
  },
  {
    src: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1920&q=80",
    alt: "Serene Ayurveda Wellness Resort in Sri Lanka",
  },
  {
    src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1920&q=80",
    alt: "Romantic Beach Wedding Setup on Pristine Sri Lankan Coast",
  },
  {
    src: "https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&w=1920&q=80",
    alt: "Nine Arch Bridge in Ella Misty Tea Country",
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
  { src: "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?auto=format&fit=crop&w=800&q=80", title: "Victoria Golf Resort Kandy" },
  { src: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80", title: "Ayurveda Spa Deck" },
  { src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80", title: "Bentota Sunset Beach" },
  { src: "https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=800&q=80", title: "Sigiriya Lion Rock Fortress" },
  { src: "https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&w=800&q=80", title: "Nine Arch Bridge Ella" },
  { src: "https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?auto=format&fit=crop&w=800&q=80", title: "Nuwara Eliya Tea Hills" },
];

export default function HomePage() {
  return (
    <>
      {/* 1. HERO SLIDER SECTION */}
      <HeroSlider slides={HERO_SLIDES} />

      {/* 2. TRAVEL STYLES GRID */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div style={{ textAlign: "center", maxWidth: "700px", margin: "0 auto 3.5rem auto" }}>
            <span className="eyebrow">TAILORED EXPERIENCES</span>
            <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 2.8rem)", marginBottom: "1rem" }}>
              Explore Our Signature Travel Styles
            </h2>
            <p style={{ color: "var(--ink-soft)", fontSize: "1rem" }}>
              From world-class golf fairways to holistic Ayurveda retreats, discover Sri Lanka with unparalleled luxury hospitality.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.8rem" }}>
            {TRAVEL_STYLES.map((style, idx) => {
              const IconComp = style.icon;
              return (
                <RevealOnScroll key={style.title} delay={idx * 60}>
                  <Link href={style.link} className="card-clean" style={{ padding: "2rem", display: "flex", flexDirection: "column", height: "100%" }}>
                    <div
                      style={{
                        width: "56px",
                        height: "56px",
                        borderRadius: "12px",
                        backgroundColor: "var(--off-white)",
                        color: "var(--gold)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "1.8rem",
                        marginBottom: "1.2rem",
                        border: "1px solid var(--line)",
                      }}
                    >
                      <IconComp />
                    </div>
                    <h3 style={{ fontSize: "1.25rem", fontFamily: "var(--font-playfair)", marginBottom: "0.5rem" }}>
                      {style.title}
                    </h3>
                    <p style={{ fontSize: "0.88rem", color: "var(--ink-soft)", lineHeight: "1.5", marginBottom: "1.2rem" }}>
                      {style.desc}
                    </p>
                    <span style={{ marginTop: "auto", fontSize: "0.85rem", fontWeight: 600, color: "var(--gold)", display: "flex", alignItems: "center", gap: "0.3rem" }}>
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
      <section className="bg-forest" style={{ padding: "6rem 0" }}>
        <div className="container-custom">
          <div style={{ textAlign: "center", maxWidth: "650px", margin: "0 auto 3rem auto" }}>
            <span className="eyebrow" style={{ color: "var(--gold-light)" }}>CURATED PILLARS</span>
            <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 2.8rem)", color: "var(--white)" }}>Four Pillars of Luxury Travel</h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.8rem" }}>
            {/* Tile 1: Golf */}
            <div style={{ position: "relative", height: "380px", borderRadius: "12px", overflow: "hidden", boxShadow: "0 15px 35px rgba(0,0,0,0.3)" }}>
              <Image src="https://images.unsplash.com/photo-1535131749006-b7f58c99034b?auto=format&fit=crop&w=800&q=80" alt="Golf Tourism" fill style={{ objectFit: "cover" }} sizes="300px" />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(0,0,0,0) 40%, rgba(10,33,22,0.95) 100%)", padding: "1.8rem", display: "flex", flexDirection: "column", justifyContent: "flex-end" }}>
                <span style={{ color: "var(--gold-light)", fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.15em", fontWeight: 700 }}>Tee Off In Paradise</span>
                <h3 style={{ color: "var(--white)", fontFamily: "var(--font-playfair)", fontSize: "1.6rem", margin: "0.3rem 0 0.8rem 0" }}>Golf Tourism</h3>
                <Link href="/golf" className="btn-gold" style={{ padding: "0.6rem 1.2rem", fontSize: "0.85rem", width: "fit-content" }}>
                  Explore Courses →
                </Link>
              </div>
            </div>

            {/* Tile 2: Wellness */}
            <div style={{ position: "relative", height: "380px", borderRadius: "12px", overflow: "hidden", boxShadow: "0 15px 35px rgba(0,0,0,0.3)" }}>
              <Image src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80" alt="Ayurveda Wellness" fill style={{ objectFit: "cover" }} sizes="300px" />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(0,0,0,0) 40%, rgba(10,33,22,0.95) 100%)", padding: "1.8rem", display: "flex", flexDirection: "column", justifyContent: "flex-end" }}>
                <span style={{ color: "var(--gold-light)", fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.15em", fontWeight: 700 }}>Mind & Body Harmony</span>
                <h3 style={{ color: "var(--white)", fontFamily: "var(--font-playfair)", fontSize: "1.6rem", margin: "0.3rem 0 0.8rem 0" }}>Wellness & Ayurveda</h3>
                <Link href="/wellness" className="btn-gold" style={{ padding: "0.6rem 1.2rem", fontSize: "0.85rem", width: "fit-content" }}>
                  View Retreats →
                </Link>
              </div>
            </div>

            {/* Tile 3: Weddings */}
            <div style={{ position: "relative", height: "380px", borderRadius: "12px", overflow: "hidden", boxShadow: "0 15px 35px rgba(0,0,0,0.3)" }}>
              <Image src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80" alt="Destination Weddings" fill style={{ objectFit: "cover" }} sizes="300px" />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(0,0,0,0) 40%, rgba(10,33,22,0.95) 100%)", padding: "1.8rem", display: "flex", flexDirection: "column", justifyContent: "flex-end" }}>
                <span style={{ color: "var(--gold-light)", fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.15em", fontWeight: 700 }}>Where Love Meets Paradise</span>
                <h3 style={{ color: "var(--white)", fontFamily: "var(--font-playfair)", fontSize: "1.6rem", margin: "0.3rem 0 0.8rem 0" }}>Destination Weddings</h3>
                <Link href="/destination-weddings" className="btn-gold" style={{ padding: "0.6rem 1.2rem", fontSize: "0.85rem", width: "fit-content" }}>
                  Plan Ceremony →
                </Link>
              </div>
            </div>

            {/* Tile 4: Corporate */}
            <div style={{ position: "relative", height: "380px", borderRadius: "12px", overflow: "hidden", boxShadow: "0 15px 35px rgba(0,0,0,0.3)" }}>
              <Image src="https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80" alt="Corporate Travel" fill style={{ objectFit: "cover" }} sizes="300px" />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(0,0,0,0) 40%, rgba(10,33,22,0.95) 100%)", padding: "1.8rem", display: "flex", flexDirection: "column", justifyContent: "flex-end" }}>
                <span style={{ color: "var(--gold-light)", fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.15em", fontWeight: 700 }}>Executive Events & MICE</span>
                <h3 style={{ color: "var(--white)", fontFamily: "var(--font-playfair)", fontSize: "1.6rem", margin: "0.3rem 0 0.8rem 0" }}>Corporate Travel</h3>
                <Link href="/services#corporate" className="btn-gold" style={{ padding: "0.6rem 1.2rem", fontSize: "0.85rem", width: "fit-content" }}>
                  MICE Services →
                </Link>
              </div>
            </div>
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
          <div style={{ textAlign: "center", maxWidth: "600px", margin: "0 auto 3rem auto" }}>
            <span className="eyebrow">VISUAL JOURNEYS</span>
            <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 2.8rem)", marginBottom: "0.8rem" }}>Captured Moments</h2>
            <p style={{ color: "var(--ink-soft)", fontSize: "0.95rem" }}>A glimpse into guest experiences across championship fairways, tranquil spas, and coastal sanctuaries.</p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.5rem" }}>
            {GALLERY_TEASERS.map((g, idx) => (
              <RevealOnScroll key={idx} delay={idx * 70}>
                <div style={{ position: "relative", height: "260px", borderRadius: "10px", overflow: "hidden", boxShadow: "0 8px 25px rgba(18,53,36,0.06)" }}>
                  <Image src={g.src} alt={g.title} fill style={{ objectFit: "cover" }} sizes="400px" />
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(0,0,0,0) 50%, rgba(10,33,22,0.85) 100%)", padding: "1.2rem", display: "flex", alignItems: "flex-end" }}>
                    <span style={{ color: "var(--white)", fontFamily: "var(--font-playfair)", fontSize: "1.1rem" }}>{g.title}</span>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
            <Link href="/gallery" className="btn-forest">
              View Full Photo Gallery <BiRightArrowAlt style={{ fontSize: "1.3rem" }} />
            </Link>
          </div>
        </div>
      </section>

      {/* 9. FAQ ACCORDION */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div style={{ textAlign: "center", maxWidth: "650px", margin: "0 auto 3rem auto" }}>
            <span className="eyebrow">FREQUENTLY ASKED QUESTIONS</span>
            <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 2.8rem)" }}>Plan Your Trip With Ease</h2>
          </div>
          <FaqAccordion />
        </div>
      </section>

      {/* 10. CONTACT CTA BAND (Dark --forest background) */}
      <section className="bg-forest section-padding">
        <div className="container-custom">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "4rem", alignItems: "center" }}>
            
            <div>
              <span className="eyebrow" style={{ color: "var(--gold-light)" }}>LET'S PLAN YOUR SRI LANKA ESCAPE</span>
              <h2 style={{ fontSize: "clamp(2.2rem, 4vw, 3.2rem)", color: "var(--white)", marginBottom: "1.5rem" }}>
                Ready to Experience Authentic Luxury?
              </h2>
              <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "1.05rem", lineHeight: "1.7", marginBottom: "2rem" }}>
                Connect with our expert travel designers for custom golf itineraries, certified Ayurveda retreats, luxury private villa stays, or MICE logistics.
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: "1rem", color: "var(--gold-light)", fontSize: "1rem" }}>
                <p><strong>Direct Desk:</strong> {COMPANY_FACTS.phone}</p>
                <p><strong>Direct Email:</strong> {COMPANY_FACTS.email}</p>
                <p><strong>Response Time:</strong> Guaranteed within 12 hours</p>
              </div>
            </div>

            <div style={{ backgroundColor: "var(--white)", borderRadius: "16px", padding: "2.5rem", color: "var(--ink)", boxShadow: "0 20px 50px rgba(0,0,0,0.3)" }}>
              <h3 style={{ fontSize: "1.5rem", fontFamily: "var(--font-playfair)", marginBottom: "1rem" }}>Quick Travel Inquiry</h3>
              <ContactForm />
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
