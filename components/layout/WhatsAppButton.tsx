"use client";

import { BiLogoWhatsapp } from "react-icons/bi";
import { COMPANY_FACTS } from "@/lib/data";

export default function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${COMPANY_FACTS.whatsapp}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      style={{
        position: "fixed",
        bottom: "24px",
        right: "24px",
        width: "56px",
        height: "56px",
        borderRadius: "50%",
        backgroundColor: "#25D366",
        color: "#FFFFFF",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "2.1rem",
        boxShadow: "0 6px 20px rgba(37, 211, 102, 0.4)",
        zIndex: 999,
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "scale(1.1) translateY(-3px)";
        e.currentTarget.style.boxShadow = "0 10px 25px rgba(37, 211, 102, 0.5)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "scale(1) translateY(0)";
        e.currentTarget.style.boxShadow = "0 6px 20px rgba(37, 211, 102, 0.4)";
      }}
    >
      <BiLogoWhatsapp />
    </a>
  );
}
