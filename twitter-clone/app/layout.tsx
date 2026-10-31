import type { Metadata } from "next";
import "./globals.css";
import TwitterLogo from "./ui/twitter-logo";

export const metadata: Metadata = {
  title: "Twitter Clone",
  description: "A Twitter clone built with Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col bg-gray-950 text-gray-100">
        <header className="shrink-0 px-6 py-4 bg-neutral-900 px-6 py-4 border-b border-neutral-800">
          <TwitterLogo />
        </header>

        <main className="mx-auto w-full max-w-2xl flex-1 px-4 py-6">
          {children}
        </main>
      </body>
    </html>
  );
}
