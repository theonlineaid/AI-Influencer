import { DollarSign, TrendingDown, Users } from "lucide-react";
import type { PainIcon } from "@/lib/content";

const map = {
  trendDown: TrendingDown,
  users: Users,
  dollar: DollarSign,
} as const;

export function PainIconGlyph({ name }: { name: PainIcon }) {
  const Icon = map[name];
  return (
    <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-rose-500/30 bg-rose-500/15 text-rose-400">
      <Icon className="h-6 w-6" strokeWidth={2} aria-hidden />
    </span>
  );
}
