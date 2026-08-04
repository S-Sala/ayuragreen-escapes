"use client";

import { BiSend } from "react-icons/bi";

export default function NewsletterForm() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        borderRadius: "4px",
        overflow: "hidden",
        border: "1px solid rgba(217, 194, 133, 0.4)",
      }}
    >
      <input
        type="email"
        placeholder="Your email address"
        required
        style={{
          flex: 1,
          padding: "0.75rem 1rem",
          border: "none",
          outline: "none",
          backgroundColor: "rgba(255, 255, 255, 0.08)",
          color: "var(--white)",
          fontSize: "0.85rem",
        }}
      />
      <button
        type="submit"
        style={{
          backgroundColor: "var(--gold)",
          color: "var(--white)",
          border: "none",
          padding: "0 1.2rem",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "1.1rem",
          transition: "background 0.3s ease",
        }}
        aria-label="Subscribe to newsletter"
      >
        <BiSend />
      </button>
    </form>
  );
}
