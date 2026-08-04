"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { BiSend, BiCheckCircle, BiErrorCircle } from "react-icons/bi";

function ContactFormInner() {
  const searchParams = useSearchParams();
  const packageParam = searchParams ? searchParams.get("package") : null;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "Tailor-Made Tours",
    travelDate: "",
    message: "",
  });

  const [status, setStatus] = useState<{ type: "idle" | "loading" | "success" | "error"; message?: string }>({
    type: "idle",
  });

  useEffect(() => {
    if (packageParam) {
      const formatted = packageParam
        .split("-")
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
        .join(" ");
      setFormData((prev) => ({ ...prev, interest: formatted }));
    }
  }, [packageParam]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ type: "loading" });

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: "general", ...formData }),
      });

      const data = await res.json();
      if (res.ok && data.ok) {
        setStatus({
          type: "success",
          message: "Thank you for contacting AyuraGreen Escapes. Our travel team will reach out to you within 12 hours.",
        });
        setFormData({ name: "", email: "", phone: "", interest: "Tailor-Made Tours", travelDate: "", message: "" });
      } else {
        setStatus({ type: "error", message: data.error || "Failed to submit request. Please try again or WhatsApp us." });
      }
    } catch {
      setStatus({ type: "error", message: "Network error occurred. Please try again or contact us directly via WhatsApp." });
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}>
      {status.type === "success" && (
        <div
          style={{
            backgroundColor: "rgba(37, 211, 102, 0.12)",
            border: "1px solid #25D366",
            color: "var(--forest)",
            padding: "1rem 1.2rem",
            borderRadius: "6px",
            display: "flex",
            alignItems: "center",
            gap: "0.8rem",
            fontSize: "0.9rem",
          }}
        >
          <BiCheckCircle style={{ fontSize: "1.4rem", color: "#25D366", flexShrink: 0 }} />
          <span>{status.message}</span>
        </div>
      )}

      {status.type === "error" && (
        <div
          style={{
            backgroundColor: "rgba(220, 53, 69, 0.1)",
            border: "1px solid #dc3545",
            color: "#dc3545",
            padding: "1rem 1.2rem",
            borderRadius: "6px",
            display: "flex",
            alignItems: "center",
            gap: "0.8rem",
            fontSize: "0.9rem",
          }}
        >
          <BiErrorCircle style={{ fontSize: "1.4rem", flexShrink: 0 }} />
          <span>{status.message}</span>
        </div>
      )}

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1.2rem" }}>
        <div>
          <label style={{ fontSize: "0.85rem", fontWeight: 600, color: "var(--forest)", display: "block", marginBottom: "0.4rem" }}>
            Full Name *
          </label>
          <input
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="John Doe"
            style={{ width: "100%", padding: "0.8rem 1rem", borderRadius: "6px", border: "1px solid var(--line)", outline: "none", fontSize: "0.9rem" }}
          />
        </div>

        <div>
          <label style={{ fontSize: "0.85rem", fontWeight: 600, color: "var(--forest)", display: "block", marginBottom: "0.4rem" }}>
            Email Address *
          </label>
          <input
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="john@example.com"
            style={{ width: "100%", padding: "0.8rem 1rem", borderRadius: "6px", border: "1px solid var(--line)", outline: "none", fontSize: "0.9rem" }}
          />
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1.2rem" }}>
        <div>
          <label style={{ fontSize: "0.85rem", fontWeight: 600, color: "var(--forest)", display: "block", marginBottom: "0.4rem" }}>
            Phone / WhatsApp
          </label>
          <input
            type="tel"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            placeholder="+1 234 567 8900"
            style={{ width: "100%", padding: "0.8rem 1rem", borderRadius: "6px", border: "1px solid var(--line)", outline: "none", fontSize: "0.9rem" }}
          />
        </div>

        <div>
          <label style={{ fontSize: "0.85rem", fontWeight: 600, color: "var(--forest)", display: "block", marginBottom: "0.4rem" }}>
            Primary Interest
          </label>
          <select
            value={formData.interest}
            onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
            style={{ width: "100%", padding: "0.8rem 1rem", borderRadius: "6px", border: "1px solid var(--line)", outline: "none", fontSize: "0.9rem", backgroundColor: "var(--white)" }}
          >
            <option value="Golf Holidays">Golf Holidays & Tee Times</option>
            <option value="Wellness Retreat">Ayurveda & Wellness Retreats</option>
            <option value="Destination Wedding">Destination Wedding</option>
            <option value="Corporate Travel">Corporate MICE & Golf Events</option>
            <option value="Family Holiday">Family Holiday</option>
            <option value="Luxury Escape">Luxury Villa Escape</option>
            <option value="Tailor-Made Tours">Tailor-Made Custom Tour</option>
          </select>
        </div>
      </div>

      <div>
        <label style={{ fontSize: "0.85rem", fontWeight: 600, color: "var(--forest)", display: "block", marginBottom: "0.4rem" }}>
          Estimated Travel Date
        </label>
        <input
          type="date"
          value={formData.travelDate}
          onChange={(e) => setFormData({ ...formData, travelDate: e.target.value })}
          style={{ width: "100%", padding: "0.8rem 1rem", borderRadius: "6px", border: "1px solid var(--line)", outline: "none", fontSize: "0.9rem" }}
        />
      </div>

      <div>
        <label style={{ fontSize: "0.85rem", fontWeight: 600, color: "var(--forest)", display: "block", marginBottom: "0.4rem" }}>
          Your Message & Travel Preferences *
        </label>
        <textarea
          required
          rows={4}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          placeholder="Tell us about your travel dates, group size, desired golf courses or wellness requirements..."
          style={{ width: "100%", padding: "0.8rem 1rem", borderRadius: "6px", border: "1px solid var(--line)", outline: "none", fontSize: "0.9rem", resize: "vertical" }}
        />
      </div>

      <button
        type="submit"
        disabled={status.type === "loading"}
        className="btn-gold"
        style={{ width: "100%", justifyContent: "center", padding: "1rem", fontSize: "1rem" }}
      >
        {status.type === "loading" ? "Submitting Inquiry..." : <>Send Inquiry <BiSend /></>}
      </button>
    </form>
  );
}

export default function ContactForm() {
  return (
    <Suspense fallback={<div>Loading form...</div>}>
      <ContactFormInner />
    </Suspense>
  );
}
