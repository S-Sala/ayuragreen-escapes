"use client";

import { useState } from "react";
import { BiCheckCircle, BiErrorCircle, BiHeart } from "react-icons/bi";

export default function WeddingInquiryForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    setting: "Beach Wedding",
    guests: "20 - 50 Guests",
    date: "",
    message: "",
  });

  const [status, setStatus] = useState<{ type: "idle" | "loading" | "success" | "error"; message?: string }>({
    type: "idle",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ type: "loading" });

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: "wedding", ...formData }),
      });

      const data = await res.json();
      if (res.ok && data.ok) {
        setStatus({
          type: "success",
          message: "Thank you for reaching out to AyuraGreen Escapes. Our wedding specialist will connect with you to curate your dream Sri Lanka ceremony.",
        });
        setFormData({ name: "", email: "", phone: "", setting: "Beach Wedding", guests: "20 - 50 Guests", date: "", message: "" });
      } else {
        setStatus({ type: "error", message: data.error || "Failed to submit wedding inquiry." });
      }
    } catch {
      setStatus({ type: "error", message: "Network error occurred. Please try again." });
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
            Couple / Contact Name *
          </label>
          <input
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="Name & Partner Name"
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
            placeholder="wedding@example.com"
            style={{ width: "100%", padding: "0.8rem 1rem", borderRadius: "6px", border: "1px solid var(--line)", outline: "none", fontSize: "0.9rem" }}
          />
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1.2rem" }}>
        <div>
          <label style={{ fontSize: "0.85rem", fontWeight: 600, color: "var(--forest)", display: "block", marginBottom: "0.4rem" }}>
            Preferred Wedding Setting
          </label>
          <select
            value={formData.setting}
            onChange={(e) => setFormData({ ...formData, setting: e.target.value })}
            style={{ width: "100%", padding: "0.8rem 1rem", borderRadius: "6px", border: "1px solid var(--line)", outline: "none", fontSize: "0.9rem", backgroundColor: "var(--white)" }}
          >
            <option value="Beach Wedding">Tropical Beach Ceremony (South / West Coast)</option>
            <option value="Garden Wedding">Colonial Estate & Tea Garden Ceremony</option>
            <option value="Undecided / Open">Undecided / Open to Recommendations</option>
          </select>
        </div>

        <div>
          <label style={{ fontSize: "0.85rem", fontWeight: 600, color: "var(--forest)", display: "block", marginBottom: "0.4rem" }}>
            Estimated Guests
          </label>
          <select
            value={formData.guests}
            onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
            style={{ width: "100%", padding: "0.8rem 1rem", borderRadius: "6px", border: "1px solid var(--line)", outline: "none", fontSize: "0.9rem", backgroundColor: "var(--white)" }}
          >
            <option value="Intimate / Elopement (2 - 10)">Intimate / Elopement (2 - 10)</option>
            <option value="20 - 50 Guests">20 - 50 Guests</option>
            <option value="50 - 100 Guests">50 - 100 Guests</option>
            <option value="100+ Grand Wedding">100+ Grand Wedding</option>
          </select>
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1.2rem" }}>
        <div>
          <label style={{ fontSize: "0.85rem", fontWeight: 600, color: "var(--forest)", display: "block", marginBottom: "0.4rem" }}>
            Target Wedding Date
          </label>
          <input
            type="date"
            value={formData.date}
            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
            style={{ width: "100%", padding: "0.8rem 1rem", borderRadius: "6px", border: "1px solid var(--line)", outline: "none", fontSize: "0.9rem" }}
          />
        </div>

        <div>
          <label style={{ fontSize: "0.85rem", fontWeight: 600, color: "var(--forest)", display: "block", marginBottom: "0.4rem" }}>
            Phone / WhatsApp Number
          </label>
          <input
            type="tel"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            placeholder="+1 234 567 8900"
            style={{ width: "100%", padding: "0.8rem 1rem", borderRadius: "6px", border: "1px solid var(--line)", outline: "none", fontSize: "0.9rem" }}
          />
        </div>
      </div>

      <div>
        <label style={{ fontSize: "0.85rem", fontWeight: 600, color: "var(--forest)", display: "block", marginBottom: "0.4rem" }}>
          Wedding Vision & Special Requests
        </label>
        <textarea
          rows={3}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          placeholder="Share details about your dream wedding style, accommodation for guests, photography, or honeymoon plans..."
          style={{ width: "100%", padding: "0.8rem 1rem", borderRadius: "6px", border: "1px solid var(--line)", outline: "none", fontSize: "0.9rem", resize: "vertical" }}
        />
      </div>

      <button
        type="submit"
        disabled={status.type === "loading"}
        className="btn-gold"
        style={{ width: "100%", justifyContent: "center", padding: "1rem", fontSize: "1rem" }}
      >
        {status.type === "loading" ? "Submitting Inquiry..." : <>Inquire About Destination Wedding <BiHeart /></>}
      </button>
    </form>
  );
}
