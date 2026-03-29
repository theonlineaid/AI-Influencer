"use client";

import { useState } from "react";
import { hero } from "@/lib/content";

export function HeroEmailForm() {
  const [email, setEmail] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    document
      .getElementById("book-call")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
    setEmail("");
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
        className="min-h-12 flex-1 rounded-2xl border border-white/15 bg-zinc-900/60 px-4 text-sm text-white placeholder:text-zinc-500 backdrop-blur-sm focus:border-cyan-500/50 focus:outline-none focus:ring-2 focus:ring-violet-500/30"
      />
      <button
        type="submit"
        className="min-h-12 shrink-0 rounded-2xl bg-gradient-to-r from-violet-600 to-indigo-600 px-6 text-sm font-semibold text-white shadow-lg shadow-violet-500/25 transition-opacity hover:opacity-95"
      >
        {hero.email.submitLabel}
      </button>
    </form>
  );
}
