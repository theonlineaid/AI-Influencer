import Link from "next/link";
import { site } from "@/lib/content";

type Props = {
  searchParams: Promise<{ email?: string }>;
};

export default async function SignupPage({ searchParams }: Props) {
  const { email } = await searchParams;
  const prefill = email ? decodeURIComponent(email) : "";

  return (
    <div className="flex min-h-full flex-col items-center justify-center bg-zinc-50 px-4 py-24 text-center">
      <p className="text-sm font-semibold text-[var(--brand)]">{site.name}</p>
      <h1 className="mt-3 text-2xl font-bold text-zinc-900">Sign up</h1>
      <p className="mt-2 max-w-sm text-sm text-zinc-600">
        Hook this route to your auth provider or API when you&apos;re ready.
      </p>
      {prefill ? (
        <p className="mt-4 text-xs text-zinc-500">
          Email from hero: <span className="font-medium">{prefill}</span>
        </p>
      ) : null}
      <Link
        href="/"
        className="mt-8 text-sm font-medium text-[var(--brand)] underline-offset-4 hover:underline"
      >
        Back to home
      </Link>
    </div>
  );
}
