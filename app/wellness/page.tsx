import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import { DIRECTORS } from "@/lib/data";
import {
  BiSpa,
  BiLeaf,
  BiSun,
  BiHeart,
  BiRightArrowAlt,
} from "react-icons/bi";

export const metadata: Metadata = {
  title: "Wellness & Ayurveda Tourism Sri Lanka | Ayuragreen Escapes",
  description:
    "Doctor-led Ayurveda retreats, yoga, meditation, nature therapy, and holistic wellness holidays in Sri Lanka luxury wellness resorts with Ayuragreen Escapes.",
};

const WELLNESS_PROGRAMS = [
  { title: "Ayurveda Treatments", desc: "Traditional Panchakarma and herbal oil therapies led by certified Ayurveda physicians." },
  { title: "Detox Programs", desc: "Body cleansing regimens, herbal teas, and organic dietary detox in serene nature." },
  { title: "Yoga Retreats", desc: "Daily Hatha & Vinyasa sessions guided by experienced yogis overlooking ocean waves or mist hills." },
  { title: "Meditation Sessions", desc: "Mindfulness meditation and Buddhist philosophy in peaceful monastic forest settings." },
  { title: "Spa Holidays", desc: "Hydrotherapy, hot stone massages, floral aromatherapy, and deep tissue relaxation." },
  { title: "Nature Therapy", desc: "Forest bathing, botanical walks, and waterfall therapy in Sri Lanka's central highlands." },
  { title: "Herbal Healing", desc: "Authentic Sri Lankan Indigenous (Deshiya Chikitsa) herbal poultices and elixirs." },
  { title: "Stress Management", desc: "Customized lifestyle coaching, sleep enhancement, and burnout recovery retreats." },
  { title: "Healthy Cuisine Programs", desc: "Doctor-prescribed organic vegetarian meals tailored to dosha balance." },
  { title: "Luxury Wellness Resorts", desc: "Stays in 5-star Eco-Ayurveda sanctuaries, private pool villas, and boutique retreats." },
];

export default function WellnessPage() {
  const drSharmini = DIRECTORS[1];

  return (
    <>
      {/* Hero */}
      <section style={{ position: "relative", height: "500px", backgroundColor: "var(--forest-deep)", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <Image
          src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1920&q=80"
          alt="Ayuragreen Escapes Luxury Golf and Wellness Tour Sri Lanka - Ayurveda Wellness Retreat Hero"
          fill
          style={{ objectFit: "cover", opacity: 0.35 }}
          priority
        />
        <div className="container-custom" style={{ position: "relative", zIndex: 2, textAlign: "center", marginTop: "4rem" }}>
          <span className="eyebrow" style={{ color: "var(--gold-light)" }}>HOLISTIC HEALING IN PARADISE</span>
          <h1 style={{ fontSize: "clamp(2.5rem, 5.5vw, 4.2rem)", color: "var(--white)", fontFamily: "var(--font-playfair)" }}>
            Reconnect. Rejuvenate. Renew.
          </h1>
          <p style={{ color: "rgba(255,255,255,0.9)", fontSize: "1.2rem", maxWidth: "750px", margin: "1rem auto 2rem auto" }}>
            Certified Ayurveda retreats, daily yoga, mindfulness meditation, and luxury wellness resort stays in Sri Lanka.
          </p>
          <Link href="/packages#wellness-retreat" className="btn-gold" style={{ minHeight: "44px" }}>
            View Wellness Retreat Package <BiRightArrowAlt style={{ fontSize: "1.2rem" }} />
          </Link>
        </div>
      </section>

      {/* 10 Wellness Programs Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div style={{ textAlign: "center", maxWidth: "650px", margin: "0 auto 3.5rem auto" }}>
            <span className="eyebrow">CURATED WELLNESS JOURNEYS</span>
            <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 2.8rem)" }}>10 Holistic Wellness Programmes</h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.8rem" }}>
            {WELLNESS_PROGRAMS.map((prog, idx) => (
              <RevealOnScroll key={prog.title} delay={idx * 50}>
                <article className="card-clean" style={{ padding: "1.8rem", height: "100%" }}>
                  <div style={{ width: "48px", height: "48px", borderRadius: "10px", backgroundColor: "var(--off-white)", color: "var(--gold)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.5rem", marginBottom: "1rem" }}>
                    {idx % 3 === 0 ? <BiSpa /> : idx % 3 === 1 ? <BiLeaf /> : <BiSun />}
                  </div>
                  <h3 style={{ fontSize: "1.2rem", fontFamily: "var(--font-playfair)", marginBottom: "0.5rem" }}>{prog.title}</h3>
                  <p style={{ fontSize: "0.88rem", color: "var(--ink-soft)", lineHeight: "1.6" }}>{prog.desc}</p>
                </article>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Parallax Band Quote */}
      <section
        style={{
          position: "relative",
          padding: "7rem 0",
          backgroundColor: "var(--forest)",
          color: "var(--white)",
          textAlign: "center",
          backgroundImage: "linear-gradient(rgba(10,33,22,0.85), rgba(10,33,22,0.85)), url(https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1920&q=80)",
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container-custom" style={{ maxWidth: "900px" }}>
          <BiHeart style={{ fontSize: "3rem", color: "var(--gold)", marginBottom: "1rem" }} />
          <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", color: "var(--white)", lineHeight: 1.4, fontStyle: "italic" }}>
            "Our wellness journeys focus on achieving harmony between mind, body, and spirit in tranquil natural surroundings."
          </h2>
        </div>
      </section>

      {/* Leadership Profile: Dr. Sharmini Perera */}
      <section className="section-padding bg-off-white">
        <div className="container-custom">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "3.5rem", alignItems: "center" }}>
            <div style={{ position: "relative", height: "420px", borderRadius: "16px", overflow: "hidden", boxShadow: "0 15px 40px rgba(18,53,36,0.1)" }}>
              <Image
                src={drSharmini.image}
                alt={`Ayuragreen Escapes Luxury Golf and Wellness Tour Sri Lanka - ${drSharmini.name}`}
                fill
                loading="lazy"
                style={{ objectFit: "cover" }}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            <div>
              <span className="eyebrow">DOCTOR-LED WELLNESS DIRECTION</span>
              <h2 style={{ fontSize: "2.2rem", fontFamily: "var(--font-playfair)", marginBottom: "0.5rem" }}>{drSharmini.name}</h2>
              <span style={{ fontSize: "0.85rem", fontWeight: 700, color: "var(--gold)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "1.2rem", display: "block" }}>
                {drSharmini.role} — Healthcare & Wellness Specialist
              </span>
              <p style={{ fontSize: "1rem", color: "var(--ink-soft)", lineHeight: "1.7", marginBottom: "1.5rem" }}>
                {drSharmini.bio}
              </p>
              <Link href="/about#leadership" className="btn-outline-gold" style={{ minHeight: "44px" }}>
                Learn About Leadership Team
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-forest section-padding-sm" style={{ textAlign: "center" }}>
        <div className="container-custom">
          <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 2.8rem)", color: "var(--white)", marginBottom: "1rem" }}>
            Begin Your Wellness Transformation
          </h2>
          <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "1.1rem", marginBottom: "2rem" }}>
            Consult with our wellness desk for doctor-approved Ayurveda resort packages.
          </p>
          <Link href="/packages#wellness-retreat" className="btn-gold" style={{ padding: "1rem 2.5rem", fontSize: "1rem", minHeight: "44px" }}>
            Explore Wellness Packages
          </Link>
        </div>
      </section>
    </>
  );
}
