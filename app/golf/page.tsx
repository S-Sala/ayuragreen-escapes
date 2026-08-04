import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import TeeTimeForm from "@/components/ui/TeeTimeForm";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import { GOLF_COURSES, COMPANY_FACTS } from "@/lib/data";
import { GiGolfFlag } from "react-icons/gi";
import {
  BiSpa,
  BiCrown,
  BiMap,
  BiCalendarCheck,
  BiCheck,
} from "react-icons/bi";

export const metadata: Metadata = {
  title: "Golf Holidays in Sri Lanka | AyuraGreen Escapes",
  description:
    "Book championship golf holidays in Sri Lanka. Victoria Golf Resort Kandy, Nuwara Eliya Golf Club, Royal Colombo Golf Club, Eagle's Golf Links Trincomalee, and Shangri-La Hambantota.",
};

const INTRO_HIGHLIGHTS = [
  { icon: GiGolfFlag, title: "Championship Golf", desc: "Play at Sri Lanka's finest 18-hole championship golf courses." },
  { icon: BiSpa, title: "Wellness & Spa", desc: "Rejuvenate your body and mind with luxury wellness experiences." },
  { icon: BiCrown, title: "Finest Hospitality", desc: "Enjoy premium stays, exceptional dining, and warm Sri Lankan hospitality." },
  { icon: BiMap, title: "Scenic Destinations", desc: "Discover the island's natural beauty, culture, and heritage." },
];

const ADDITIONAL_SERVICES = [
  "Golf Coaching Programs",
  "Golf Equipment Assistance & Rental",
  "Tournament Arrangements & Scoring",
  "Luxury Golf & Wellness Packages",
];

const CORPORATE_GOLF_LIST = [
  "Corporate Golf Tournaments",
  "Client Appreciation Golf Days",
  "Executive Golf Retreats",
  "Charity Golf Events",
  "Golf Sponsorship Management",
  "Awards Ceremonies & VIP Hospitality",
  "Branding & Event Coordination",
];

export default function GolfPage() {
  const victoria = GOLF_COURSES[0];
  const otherCourses = GOLF_COURSES.slice(1);

  return (
    <>
      {/* 1. PAGE HERO */}
      <section style={{ position: "relative", height: "550px", backgroundColor: "var(--forest-deep)", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <Image
          src="https://images.unsplash.com/photo-1535131749006-b7f58c99034b?auto=format&fit=crop&w=1920&q=80"
          alt="Golf Tourism Sri Lanka"
          fill
          style={{ objectFit: "cover", opacity: 0.35 }}
          priority
        />
        <div className="container-custom" style={{ position: "relative", zIndex: 2, textAlign: "center", marginTop: "4rem" }}>
          <span className="eyebrow" style={{ color: "var(--gold-light)", letterSpacing: "0.25em" }}>GOLF TOURISM SRI LANKA</span>
          <h1 style={{ fontSize: "clamp(2.8rem, 6vw, 4.5rem)", color: "var(--white)", fontFamily: "var(--font-playfair)", marginBottom: "1rem" }}>
            Tee Off in Paradise
          </h1>
          <p style={{ color: "rgba(255,255,255,0.9)", fontSize: "1.25rem", maxWidth: "750px", margin: "0 auto 2rem auto" }}>
            World-class golf experiences in the heart of Sri Lanka.
          </p>
          <a href="#book" className="btn-gold" style={{ padding: "1rem 2.2rem", fontSize: "1rem" }}>
            Reserve Tee Time <BiCalendarCheck style={{ fontSize: "1.2rem" }} />
          </a>
        </div>
      </section>

      {/* 2. INTRO HIGHLIGHT STRIP */}
      <section className="section-padding-sm bg-white" style={{ borderBottom: "1px solid var(--line)" }}>
        <div className="container-custom">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "2rem" }}>
            {INTRO_HIGHLIGHTS.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div key={idx} style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                  <div style={{ width: "48px", height: "48px", borderRadius: "10px", backgroundColor: "var(--off-white)", color: "var(--gold)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.5rem", flexShrink: 0 }}>
                    <IconComp />
                  </div>
                  <div>
                    <h3 style={{ fontSize: "1.1rem", fontFamily: "var(--font-playfair)", marginBottom: "0.2rem" }}>{item.title}</h3>
                    <p style={{ fontSize: "0.85rem", color: "var(--ink-soft)", lineHeight: "1.4" }}>{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. FEATURED COURSE: VICTORIA GOLF RESORT KANDY */}
      <section className="section-padding bg-off-white">
        <div className="container-custom">
          <div style={{ textAlign: "center", maxWidth: "700px", margin: "0 auto 3.5rem auto" }}>
            <span className="eyebrow">FEATURED CHAMPIONSHIP COURSE</span>
            <h2 style={{ fontSize: "clamp(2.2rem, 4vw, 3.2rem)" }}>Victoria Golf Resort — Kandy</h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: "3.5rem", alignItems: "center" }}>
            <div style={{ position: "relative", height: "450px", borderRadius: "16px", overflow: "hidden", boxShadow: "0 20px 45px rgba(18,53,36,0.12)" }}>
              <Image
                src={victoria.image}
                alt={victoria.name}
                fill
                style={{ objectFit: "cover" }}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div style={{ position: "absolute", top: "1.5rem", left: "1.5rem", backgroundColor: "var(--gold)", color: "var(--white)", padding: "0.4rem 1rem", borderRadius: "4px", fontSize: "0.8rem", fontWeight: 700, textTransform: "uppercase" }}>
                Established 1893
              </div>
            </div>

            <div>
              <span style={{ fontSize: "0.9rem", fontWeight: 700, color: "var(--gold)", textTransform: "uppercase", letterSpacing: "0.15em", display: "block", marginBottom: "0.5rem" }}>
                Kandy, Central Highlands
              </span>
              <h3 style={{ fontSize: "2rem", fontFamily: "var(--font-playfair)", marginBottom: "1rem" }}>
                {victoria.name}
              </h3>
              <p style={{ fontSize: "1.05rem", color: "var(--ink-soft)", lineHeight: "1.7", marginBottom: "1.8rem" }}>
                {victoria.description}
              </p>

              {/* Stat Strip */}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "1.2rem", backgroundColor: "var(--white)", padding: "1.5rem", borderRadius: "10px", border: "1px solid var(--line)", marginBottom: "2rem" }}>
                <div>
                  <span style={{ fontSize: "0.75rem", color: "var(--gold)", fontWeight: 700, textTransform: "uppercase", display: "block" }}>Course Layout</span>
                  <span style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--forest)" }}>18 Holes · Par 70</span>
                </div>
                <div>
                  <span style={{ fontSize: "0.75rem", color: "var(--gold)", fontWeight: 700, textTransform: "uppercase", display: "block" }}>Total Length</span>
                  <span style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--forest)" }}>5,682 Yards</span>
                </div>
                <div>
                  <span style={{ fontSize: "0.75rem", color: "var(--gold)", fontWeight: 700, textTransform: "uppercase", display: "block" }}>Heritage</span>
                  <span style={{ fontSize: "0.92rem", fontWeight: 600, color: "var(--ink)" }}>Over 130 Years of Golfing</span>
                </div>
                <div>
                  <span style={{ fontSize: "0.75rem", color: "var(--gold)", fontWeight: 700, textTransform: "uppercase", display: "block" }}>Scenery</span>
                  <span style={{ fontSize: "0.92rem", fontWeight: 600, color: "var(--ink)" }}>Knuckles Mountain Views</span>
                </div>
              </div>

              <a href="#book" className="btn-gold">
                Book Tee Time at Victoria <BiCalendarCheck style={{ fontSize: "1.2rem" }} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 4. OTHER GOLF COURSES DIRECTORY */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div style={{ textAlign: "center", maxWidth: "700px", margin: "0 auto 3.5rem auto" }}>
            <span className="eyebrow">SRI LANKA GOLF COURSE DIRECTORY</span>
            <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 2.8rem)" }}>Championship & Resort Courses</h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "2.2rem" }}>
            {otherCourses.map((c, idx) => (
              <RevealOnScroll key={c.slug} delay={idx * 80}>
                <div className="card-clean" style={{ height: "100%", display: "flex", flexDirection: "column" }}>
                  <div style={{ position: "relative", width: "100%", height: "230px" }}>
                    <Image src={c.image} alt={c.name} fill style={{ objectFit: "cover" }} sizes="400px" />
                    <div style={{ position: "absolute", bottom: "1rem", left: "1rem", backgroundColor: "rgba(10,33,22,0.85)", color: "var(--white)", padding: "0.3rem 0.8rem", borderRadius: "4px", fontSize: "0.8rem", fontWeight: 600 }}>
                      {c.location}
                    </div>
                  </div>

                  <div style={{ padding: "1.8rem", display: "flex", flexDirection: "column", flex: 1 }}>
                    <h3 style={{ fontSize: "1.35rem", fontFamily: "var(--font-playfair)", marginBottom: "0.6rem" }}>
                      {c.name}
                    </h3>
                    <p style={{ fontSize: "0.88rem", color: "var(--ink-soft)", lineHeight: "1.5", marginBottom: "1.2rem" }}>
                      {c.description}
                    </p>

                    <div style={{ marginTop: "auto", borderTop: "1px solid var(--line)", paddingTop: "1rem" }}>
                      <span style={{ fontSize: "0.75rem", fontWeight: 700, color: "var(--gold)", textTransform: "uppercase", letterSpacing: "0.1em", display: "block", marginBottom: "0.6rem" }}>
                        Technical Specifications:
                      </span>
                      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                        {c.specs.map((spec, i) => (
                          <span key={i} style={{ backgroundColor: "var(--off-white)", border: "1px solid var(--line)", padding: "0.3rem 0.6rem", borderRadius: "4px", fontSize: "0.78rem", color: "var(--forest)" }}>
                            {spec}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* 5. GOLF & WELLNESS PACKAGES BAND */}
      <section className="bg-forest section-padding">
        <div className="container-custom">
          <div style={{ textAlign: "center", maxWidth: "650px", margin: "0 auto 3.5rem auto" }}>
            <span className="eyebrow" style={{ color: "var(--gold-light)" }}>INTEGRATED LUXURY</span>
            <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 2.8rem)", color: "var(--white)" }}>Exclusive Golf & Wellness Packages</h2>
            <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "1rem", marginTop: "0.5rem" }}>
              Tailored for unforgettable experiences combining championship rounds with Ayurveda rejuvenation.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1.8rem" }}>
            <div style={{ backgroundColor: "rgba(255,255,255,0.08)", borderRadius: "10px", padding: "1.8rem", border: "1px solid rgba(217,194,133,0.2)" }}>
              <h3 style={{ color: "var(--gold)", fontFamily: "var(--font-playfair)", fontSize: "1.3rem", marginBottom: "0.5rem" }}>World-Class Golf</h3>
              <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "0.88rem" }}>Access to all 5 championship golf courses across Sri Lanka.</p>
            </div>
            <div style={{ backgroundColor: "rgba(255,255,255,0.08)", borderRadius: "10px", padding: "1.8rem", border: "1px solid rgba(217,194,133,0.2)" }}>
              <h3 style={{ color: "var(--gold)", fontFamily: "var(--font-playfair)", fontSize: "1.3rem", marginBottom: "0.5rem" }}>Wellness & Spa</h3>
              <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "0.88rem" }}>Post-round Ayurveda massages, hydrotherapy, and yoga sessions.</p>
            </div>
            <div style={{ backgroundColor: "rgba(255,255,255,0.08)", borderRadius: "10px", padding: "1.8rem", border: "1px solid rgba(217,194,133,0.2)" }}>
              <h3 style={{ color: "var(--gold)", fontFamily: "var(--font-playfair)", fontSize: "1.3rem", marginBottom: "0.5rem" }}>Exquisite Cuisine</h3>
              <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "0.88rem" }}>Clubhouse fine dining, organic Sri Lankan meals, and wine pairings.</p>
            </div>
            <div style={{ backgroundColor: "rgba(255,255,255,0.08)", borderRadius: "10px", padding: "1.8rem", border: "1px solid rgba(217,194,133,0.2)" }}>
              <h3 style={{ color: "var(--gold)", fontFamily: "var(--font-playfair)", fontSize: "1.3rem", marginBottom: "0.5rem" }}>Luxury Stays</h3>
              <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "0.88rem" }}>5-star golf resort villas in Kandy, Nuwara Eliya & Hambantota.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. ADDITIONAL GOLF SERVICES & CORPORATE GOLF */}
      <section className="section-padding bg-off-white">
        <div className="container-custom">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "3.5rem" }}>
            
            <div>
              <span className="eyebrow">COMPREHENSIVE SUPPORT</span>
              <h3 style={{ fontSize: "1.8rem", fontFamily: "var(--font-playfair)", marginBottom: "1.2rem" }}>Golf Concierge Services</h3>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "2rem" }}>
                {ADDITIONAL_SERVICES.map((s, i) => (
                  <li key={i} style={{ display: "flex", alignItems: "center", gap: "0.8rem", fontSize: "1rem", color: "var(--forest)", fontWeight: 600 }}>
                    <BiCheck style={{ color: "var(--gold)", fontSize: "1.4rem" }} />
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <span className="eyebrow">EXECUTIVE NETWORKING</span>
              <h3 style={{ fontSize: "1.8rem", fontFamily: "var(--font-playfair)", marginBottom: "1.2rem" }}>Corporate Golf Events</h3>
              <p style={{ fontSize: "0.95rem", color: "var(--ink-soft)", lineHeight: "1.6", marginBottom: "1.2rem" }}>
                Golf provides an excellent platform for business networking, executive bonding, and client appreciation.
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "0.6rem" }}>
                {CORPORATE_GOLF_LIST.map((item, i) => (
                  <span key={i} style={{ fontSize: "0.85rem", color: "var(--forest)", fontWeight: 500 }}>
                    • {item}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 7. BOOK TEE TIME FORM */}
      <section id="book" className="section-padding bg-white" style={{ scrollMarginTop: "90px" }}>
        <div className="container-custom">
          <div style={{ maxWidth: "800px", margin: "0 auto", backgroundColor: "var(--off-white)", padding: "3rem", borderRadius: "16px", border: "1px solid var(--line)", boxShadow: "0 15px 40px rgba(18,53,36,0.06)" }}>
            <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
              <GiGolfFlag style={{ fontSize: "2.8rem", color: "var(--gold)", marginBottom: "0.5rem" }} />
              <span className="eyebrow">RESERVE YOUR ROUND</span>
              <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 2.5rem)" }}>Book Tee Time in Sri Lanka</h2>
              <p style={{ fontSize: "0.92rem", color: "var(--ink-soft)", marginTop: "0.4rem" }}>
                Our golf desk will confirm your tee time directly with the club.
              </p>
            </div>
            <TeeTimeForm />
          </div>
        </div>
      </section>

      {/* 8. TAGLINE STRIP BEFORE FOOTER */}
      <section className="bg-forest-deep section-padding-sm" style={{ textAlign: "center", borderTop: "1px solid rgba(217,194,133,0.3)" }}>
        <div className="container-custom">
          <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(2rem, 3.5vw, 2.8rem)", color: "var(--gold-light)", marginBottom: "0.5rem" }}>
            "{COMPANY_FACTS.golfSwingLine}"
          </h2>
          <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "1.05rem", marginBottom: "1.5rem" }}>
            WhatsApp: {COMPANY_FACTS.phone} | Email: {COMPANY_FACTS.email}
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "1.5rem", fontSize: "0.9rem", color: "rgba(255,255,255,0.7)" }}>
            <span>Golf Holidays</span> • <span>Tee Time Reservations</span> • <span>Accommodation</span> • <span>Transfers</span> • <span>Sightseeing</span>
          </div>
        </div>
      </section>
    </>
  );
}
