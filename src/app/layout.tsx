import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BuildWithDuke - Full Stack Developer & AI/ML Explorer",
  description: "Showcasing innovative projects in full-stack development, AI/ML, and tools that make life better. Interactive demos and live projects.",
  keywords: "full-stack developer, AI, ML, machine learning, web development, portfolio, interactive projects",
  authors: [{ name: "Duke" }],
  openGraph: {
    title: "BuildWithDuke",
    description: "Full Stack Developer & AI/ML Explorer",
    type: "website",
  },
};

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
