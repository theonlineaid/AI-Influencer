import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "ForgeAIStudio — AI workspace for founders",
    template: "%s · ForgeAIStudio",
  },
  description:
    "Get your AI product in front of millions — the ForgeAIStudio influencer flywheel for founders.",
  openGraph: {
    title: "ForgeAIStudio",
    description:
      "Get your AI tool millions of views and thousands of signups — with a done-for-you growth flywheel.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-[var(--background)] font-sans text-zinc-100 antialiased">
        {children}
      </body>
    </html>
  );
}
