import { CalendarDays } from "lucide-react";
import { booking } from "@/lib/content";
import { FadeIn } from "@/components/ui/fade-in";
import { Section } from "@/components/ui/section";

export function BookingSection() {
  const hasCalendly = Boolean(booking.calendlyEmbedUrl?.trim());

  return (
    <Section
      id={booking.id}
      className="bg-zinc-50 py-16 md:py-24"
      containerClassName="max-w-4xl"
    >
      <FadeIn className="text-center">
        <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--brand)] text-white shadow-lg">
          <CalendarDays className="h-7 w-7" aria-hidden />
        </span>
        <h2 className="mt-6 text-3xl font-bold tracking-tight text-zinc-900 md:text-4xl">
          {booking.title}
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-zinc-600">{booking.subtitle}</p>
      </FadeIn>

      <FadeIn delay={0.08} className="mt-10">
        {hasCalendly ? (
          <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm">
            <iframe
              title="Schedule a call"
              src={booking.calendlyEmbedUrl}
              className="min-h-[650px] w-full"
            />
          </div>
        ) : (
          <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm md:p-10">
            <p className="text-center text-sm font-medium text-zinc-500">
              Calendly embed placeholder — set{" "}
              <code className="rounded bg-zinc-100 px-1.5 py-0.5 text-xs text-zinc-800">
                booking.calendlyEmbedUrl
              </code>{" "}
              in{" "}
              <code className="rounded bg-zinc-100 px-1.5 py-0.5 text-xs text-zinc-800">
                lib/content.ts
              </code>
            </p>
            <div className="mt-8 grid grid-cols-7 gap-2 text-center text-xs text-zinc-400">
              {["S", "M", "T", "W", "T", "F", "S"].map((d, idx) => (
                <div key={`${d}-${idx}`} className="font-semibold">
                  {d}
                </div>
              ))}
              {Array.from({ length: 35 }, (_, i) => {
                const day = i + 1;
                const isPick = day === 12 || day === 13;
                return (
                  <div
                    key={i}
                    className={`flex h-9 items-center justify-center rounded-lg text-zinc-500 ${isPick ? "bg-[var(--brand)] font-semibold text-white" : "bg-zinc-50"}`}
                  >
                    {day <= 31 ? day : ""}
                  </div>
                );
              })}
            </div>
            <p className="mt-6 text-center text-xs text-zinc-400">
              Replace this block with your real Calendly inline widget when ready.
            </p>
          </div>
        )}
      </FadeIn>
    </Section>
  );
}
