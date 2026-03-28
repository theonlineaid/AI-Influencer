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
    <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-red-100 text-red-600">
      <Icon className="h-6 w-6" strokeWidth={2} aria-hidden />
    </span>
  );
}
