import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import { GiGolfFlag } from "react-icons/gi";
import {
  BiSpa,
  BiHeart,
  BiBriefcase,
  BiTrophy,
  BiBuildingHouse,
  BiCrown,
  BiCar,
  BiCheck,
} from "react-icons/bi";

export const metadata: Metadata = {
  title: "Service Lines & DMC Portfolio | Ayuragreen Escapes",
  description: "Explore Ayuragreen Escapes' 8 core DMC service lines: Golf Tourism, Wellness Tourism, Destination Weddings, Corporate Travel, Corporate Golf Events, Destination Management, Luxury Holidays, and Airport Transfers.",
};

const SERVICES = [
  {
    id: "golf",
    title: "Golf Tourism",
    icon: GiGolfFlag,
    teaser: "Play Sri Lanka's finest championship courses with guaranteed tee times, caddie arrangements, and luxury clubhouse accommodation.",
    details: ["Guaranteed tee times at Victoria, Nuwara Eliya, Royal Colombo & Shangri-La Hambantota", "Private caddie & buggy service coordination", "Golf equipment rental and transport logistics", "Integrated golf & spa wellness packages"],
    link: "/golf",
    linkText: "View Golf Courses",
  },
  {
    id: "wellness",
    title: "Wellness Tourism",
    icon: BiSpa,
    teaser: "Rejuvenate mind, body, and spirit with certified doctor-led Ayurveda programs, daily yoga retreats, and nature therapy.",
    details: ["Ayurveda health & stress consultations", "Detox, herbal healing & stress management programs", "Luxury wellness resort stays in tranquil jungle/ocean settings", "Organic customized wellness cuisine"],
    link: "/wellness",
    linkText: "Explore Wellness Programs",
  },
  {
    id: "weddings",
    title: "Destination Weddings",
    icon: BiHeart,
    teaser: "Exchange vows in an island of endless romance. Elegant beachfront sunset ceremonies and heritage tea garden estate weddings.",
    details: ["Bespoke tropical beach & colonial garden settings", "Comprehensive wedding setup, floral arches & dining", "Guest accommodation & luxury transport management", "Honeymoon & couple photography safaris"],
    link: "/destination-weddings",
    linkText: "View Wedding Packages",
  },
  {
    id: "corporate",
    title: "Corporate Travel & MICE",
    icon: BiBriefcase,
    teaser: "End-to-end corporate event management, executive retreats, MICE conferences, and strategic team building across Sri Lanka.",
    details: ["Corporate Meetings & International Conferences", "Incentive Travel & Executive Leadership Retreats", "Team Building & Experiential Outdoor Workshops", "Business Travel Logistics & Event Branding"],
    link: "/contact?package=corporate-retreat",
    linkText: "Inquire Corporate Services",
  },
  {
    id: "corporate-golf",
    title: "Corporate Golf Events",
    icon: BiTrophy,
    teaser: "Leverage golf as an executive networking platform with turn-key tournament planning, client appreciation days, and awards galas.",
    details: ["Corporate Golf Tournaments & Client Appreciation Days", "Executive Golf Retreats & Charity Golf Tournaments", "Golf Sponsorship Management & VIP Hospitality", "Awards Ceremonies, Branding & Event Coordination"],
    link: "/golf#book",
    linkText: "Organize Golf Event",
  },
  {
    id: "dmc",
    title: "Destination Management Services",
    icon: BiBuildingHouse,
    teaser: "Ground handling, hotel reservations, VIP concierge, and group tour logistics backed by deep local Sri Lankan expertise.",
    details: ["VIP Airport Meet & Greet & Fast-Track Assistance", "Chauffeur Guide Services & Luxury Coach Logistics", "5-Star Hotel & Resort Network Reservations", "Cultural Experiences & Signature Tour Execution"],
    link: "/contact",
    linkText: "Partner With Us",
  },
  {
    id: "luxury",
    title: "Luxury Holidays",
    icon: BiCrown,
    teaser: "Bespoke itineraries, private villa butler service, helicopter transfers, and fine dining for discerning global travelers.",
    details: ["Private boutique villa & butler accommodations", "Helicopter transfers & private catamaran charters", "Exclusive wildlife safari access", "Personal travel designer 24/7 dedicated service"],
    link: "/packages#luxury-escape",
    linkText: "View Luxury Escapes",
  },
  {
    id: "transfers",
    title: "Airport Transfers & Luxury Fleet",
    icon: BiCar,
    teaser: "Comfortable, modern chauffeured vehicles, executive SUVs, and luxury coaches maintained to international safety standards.",
    details: ["24/7 Bandaranaike Airport Meet & Greet", "Chauffeured luxury sedans, SUVs & executive coaches", "Professional multilingual driver guides", "Luggage assistance & fast-track arrival"],
    link: "/contact",
    linkText: "Book Transfer",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ position: "relative", height: "420px", backgroundColor: "var(--forest-deep)", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <Image
          src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1920&q=80"
          alt="Ayuragreen Escapes Luxury Golf and Wellness Tour Sri Lanka - Service Line Portfolio"
          fill
          style={{ objectFit: "cover", opacity: 0.3 }}
          priority
        />
        <div className="container-custom" style={{ position: "relative", zIndex: 2, textAlign: "center", marginTop: "3.5rem" }}>
          <span className="eyebrow" style={{ color: "var(--gold-light)" }}>FULL-SERVICE DMC PORTFOLIO</span>
          <h1 style={{ fontSize: "clamp(2.4rem, 5vw, 4rem)", color: "var(--white)", fontFamily: "var(--font-playfair)" }}>
            Our 8 Core Service Lines
          </h1>
          <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "1.1rem", maxWidth: "700px", margin: "0.8rem auto 0 auto" }}>
            Comprehensive destination management, golf tourism, wellness retreats, and corporate travel solutions.
          </p>
        </div>
      </section>

      {/* 8-Card Grid Overview */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div style={{ textAlign: "center", maxWidth: "650px", margin: "0 auto 3.5rem auto" }}>
            <span className="eyebrow">WHAT WE OFFER</span>
            <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 2.8rem)" }}>Specialist Travel Solutions</h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "2rem" }}>
            {SERVICES.map((s, idx) => {
              const IconComp = s.icon;
              return (
                <RevealOnScroll key={s.id} delay={idx * 60}>
                  <article>
                    <a
                      href={`#${s.id}`}
                      className="card-clean"
                      style={{ padding: "2rem", display: "flex", flexDirection: "column", height: "100%", textDecoration: "none", minHeight: "220px" }}
                    >
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
                      <h3 style={{ fontSize: "1.3rem", fontFamily: "var(--font-playfair)", marginBottom: "0.6rem" }}>{s.title}</h3>
                      <p style={{ fontSize: "0.9rem", color: "var(--ink-soft)", lineHeight: "1.5", marginBottom: "1.2rem" }}>{s.teaser}</p>
                      <span style={{ marginTop: "auto", fontSize: "0.85rem", fontWeight: 600, color: "var(--forest)" }}>Read Detail ↓</span>
                    </a>
                  </article>
                </RevealOnScroll>
              );
            })}
          </div>
        </div>
      </section>

      {/* Expanded Detail Sections */}
      {SERVICES.map((s, idx) => {
        const isEven = idx % 2 === 0;
        return (
          <section key={s.id} id={s.id} className={isEven ? "bg-off-white section-padding" : "bg-white section-padding"} style={{ scrollMarginTop: "90px" }}>
            <div className="container-custom">
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "3.5rem", alignItems: "center" }}>
                <div>
                  <span className="eyebrow">SERVICE LINE {idx + 1}</span>
                  <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 2.6rem)", marginBottom: "1.2rem" }}>{s.title}</h2>
                  <p style={{ fontSize: "1.05rem", color: "var(--ink-soft)", lineHeight: "1.7", marginBottom: "1.8rem" }}>
                    {s.teaser}
                  </p>

                  <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.8rem", marginBottom: "2rem" }}>
                    {s.details.map((item, i) => (
                      <li key={i} style={{ display: "flex", alignItems: "center", gap: "0.7rem", fontSize: "0.95rem", color: "var(--ink)" }}>
                        <BiCheck style={{ color: "var(--gold)", fontSize: "1.3rem", flexShrink: 0 }} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <Link href={s.link} className="btn-gold" style={{ minHeight: "44px" }}>
                    {s.linkText}
                  </Link>
                </div>

                <div style={{ position: "relative", height: "380px", borderRadius: "12px", overflow: "hidden", boxShadow: "0 15px 40px rgba(18,53,36,0.08)" }}>
                  <Image
                    src={
                      idx === 0 ? "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?auto=format&fit=crop&w=800&q=80" :
                      idx === 1 ? "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80" :
                      idx === 2 ? "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80" :
                      idx === 3 ? "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80" :
                      "https://images.unsplash.com/photo-1588598198321-9735fd52455b?auto=format&fit=crop&w=800&q=80"
                    }
                    alt={`Ayuragreen Escapes Luxury Golf and Wellness Tour Sri Lanka - ${s.title}`}
                    fill
                    loading="lazy"
                    style={{ objectFit: "cover" }}
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* Dark CTA Band */}
      <section className="bg-forest section-padding-sm" style={{ textAlign: "center" }}>
        <div className="container-custom">
          <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 2.8rem)", color: "var(--white)", marginBottom: "1rem" }}>
            Require Customized DMC or Corporate Services?
          </h2>
          <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "1.1rem", marginBottom: "2rem" }}>
            Our destination managers are ready to build a tailor-made program for your group.
          </p>
          <Link href="/contact" className="btn-gold" style={{ padding: "1rem 2.5rem", fontSize: "1rem", minHeight: "44px" }}>
            Contact DMC Desk
          </Link>
        </div>
      </section>
    </>
  );
}
