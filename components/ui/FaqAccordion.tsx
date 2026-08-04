"use client";

import { useState } from "react";
import { BiChevronDown } from "react-icons/bi";

interface FaqItem {
  question: string;
  answer: string;
}

const FAQS: FaqItem[] = [
  {
    question: "How far in advance should we book our luxury tour or golf tee times?",
    answer: "For peak Sri Lankan travel seasons (December to April and July to September), we recommend booking 2 to 4 months in advance to secure preferred 5-star resort suites and prime tee times at Victoria, Nuwara Eliya, and Royal Colombo golf courses."
  },
  {
    question: "Can AyuraGreen customize an itinerary to combine Golf, Wellness, and Safaris?",
    answer: "Absolutely. Over 80% of our journeys are tailor-made. Our travel designers combine championship golf rounds, authentic Ayurveda wellness retreats, leopard safaris, and beach villa stays into one seamless itinerary."
  },
  {
    question: "Do you handle airport transfers and entry visa assistance?",
    answer: "Yes, our DMC team provides VIP Airport Meet & Greet services at Bandaranaike International Airport, fast-track arrival, luxury private chauffeured transport, and assistance with Sri Lanka ETA visa documentation."
  },
  {
    question: "What support is available during our stay in Sri Lanka?",
    answer: "We provide round-the-clock (24/7) customer support and dedicated multilingual concierge assistance throughout your entire stay in Sri Lanka."
  }
];

export default function FaqAccordion() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem", maxWidth: "840px", margin: "0 auto" }}>
      {FAQS.map((faq, idx) => {
        const isOpen = openIdx === idx;
        return (
          <div
            key={idx}
            style={{
              backgroundColor: "var(--white)",
              borderRadius: "8px",
              border: "1px solid var(--line)",
              overflow: "hidden",
              transition: "all 0.3s ease",
              boxShadow: isOpen ? "0 8px 20px rgba(18, 53, 36, 0.05)" : "none",
            }}
          >
            <button
              onClick={() => toggle(idx)}
              style={{
                width: "100%",
                padding: "1.3rem 1.6rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                backgroundColor: "transparent",
                border: "none",
                textAlign: "left",
                fontSize: "1.05rem",
                fontWeight: 600,
                fontFamily: "var(--font-playfair)",
                color: "var(--forest)",
                cursor: "pointer",
              }}
              aria-expanded={isOpen}
            >
              <span>{faq.question}</span>
              <BiChevronDown
                style={{
                  fontSize: "1.4rem",
                  color: "var(--gold)",
                  flexShrink: 0,
                  transition: "transform 0.3s ease",
                  transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                }}
              />
            </button>

            {isOpen && (
              <div
                style={{
                  padding: "0 1.6rem 1.4rem 1.6rem",
                  fontSize: "0.92rem",
                  color: "var(--ink-soft)",
                  lineHeight: 1.6,
                  borderTop: "1px dashed var(--line)",
                  paddingTop: "1rem",
                }}
              >
                {faq.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
