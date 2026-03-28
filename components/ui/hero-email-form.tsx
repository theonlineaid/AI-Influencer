"use client";

import { useState } from "react";
import { hero } from "@/lib/content";

export function HeroEmailForm() {
  const [email, setEmail] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Wire to API / newsletter provider when ready
    if (email.trim()) {
      window.location.href = `/signup?email=${encodeURIComponent(email.trim())}`;
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto mt-8 flex w-full max-w-lg flex-col gap-3 sm:flex-row sm:items-stretch"
    >
      <label htmlFor="hero-email" className="sr-only">
        Email
      </label>
      <input
        id="hero-email"
        name="email"
        type="email"
        autoComplete="email"
        placeholder={hero.email.placeholder}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="min-h-12 flex-1 rounded-2xl border-2 border-white/30 bg-white/10 px-4 text-sm text-white placeholder:text-blue-100/70 backdrop-blur-sm focus:border-white focus:outline-none focus:ring-2 focus:ring-white/40"
      />
      <button
        type="submit"
        className="min-h-12 shrink-0 rounded-2xl bg-white px-6 text-sm font-semibold text-[var(--brand)] shadow-sm transition-colors hover:bg-zinc-100"
      >
        {hero.email.submitLabel}
      </button>
    </form>
  );
}
