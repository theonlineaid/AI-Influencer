import Link from "next/link";
import { site } from "@/lib/content";

export default function LoginPage() {
  return (
    <div className="flex min-h-full flex-col items-center justify-center bg-[var(--brand)] px-4 py-24 text-center">
      <p className="text-sm font-medium text-blue-200">{site.name}</p>
      <h1 className="mt-3 text-2xl font-bold text-white">Log in</h1>
      <p className="mt-2 max-w-sm text-sm text-blue-100/90">
        Connect your auth provider here when you&apos;re ready.
      </p>
      <Link
        href="/"
        className="mt-8 text-sm font-medium text-white underline-offset-4 hover:underline"
      >
        Back to home
      </Link>
    </div>
  );
}
