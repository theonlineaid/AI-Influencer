"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useId, useState } from "react";

export type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

type FaqAccordionProps = {
  items: FaqItem[];
  theme?: "light" | "dark";
};

export function FaqAccordion({ items, theme = "light" }: FaqAccordionProps) {
  const [openId, setOpenId] = useState<string | null>(items[0]?.id ?? null);
  const groupId = useId();
  const isDark = theme === "dark";
  const border = isDark ? "border-white/10" : "border-zinc-200";
  const bg = isDark ? "bg-zinc-900/60" : "bg-white";
  const divide = isDark ? "divide-white/10" : "divide-zinc-200";
  const qColor = isDark ? "text-zinc-100" : "text-zinc-900";
  const aColor = isDark ? "text-zinc-400" : "text-zinc-600";
  const chevron = isDark ? "text-zinc-500" : "text-zinc-400";

  return (
    <div
      className={`divide-y ${divide} overflow-hidden rounded-2xl border ${border} ${bg} shadow-lg shadow-black/20`}
    >
      {items.map((item) => {
        const isOpen = openId === item.id;
        const panelId = `${groupId}-${item.id}-panel`;
        const headerId = `${groupId}-${item.id}-header`;

        return (
          <div key={item.id} className="px-4 py-1 md:px-6">
            <button
              type="button"
              id={headerId}
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => setOpenId(isOpen ? null : item.id)}
              className={`flex w-full items-center justify-between gap-4 py-4 text-left text-sm font-semibold md:text-base ${qColor}`}
            >
              <span>{item.question}</span>
              <ChevronDown
                className={`h-5 w-5 shrink-0 transition-transform ${chevron} ${isOpen ? "rotate-180" : ""}`}
                aria-hidden
              />
            </button>
            <AnimatePresence initial={false}>
              {isOpen ? (
                <motion.div
                  id={panelId}
                  role="region"
                  aria-labelledby={headerId}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <p
                    className={`pb-4 text-sm leading-relaxed md:text-[15px] ${aColor}`}
                  >
                    {item.answer}
                  </p>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
