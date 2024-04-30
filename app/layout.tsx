import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Abderrahman ES-SEBYITY's Portfolio",
  description:
    "Explore Abderrahman ES-SEBYITY's portfolio showcasing web development projects and skills.",
  keywords:
    "portfolio, web development, projects, frontend, backend, JavaScript, React, Next.js, HTML, CSS",
  authors: {
    name: "Abderrahman ES-SEBYITY",
    url: "https://www.linkedin.com/in/abderrahman-essebyity/",
  },
  icons: {
    icon: ["/icons/favicon.ico"],
    apple: ["/icons/apple-touch-icon.png"],
    shortcut: ["/icons/apple-touch-icon.png"],
  },
  manifest: "/manifest.json",
  openGraph: {
    title: "Abderrahman ES-SEBYITY's Portfolio",
    url: "abderrahman-essebyity.me",
    type: "website",
    images: [
      {
        url: "https://res.cloudinary.com/abdrahmanes/image/upload/v1714471782/Portfolio-v2/Screen_Shot_2024-04-30_at_11.09.14_xzcep4.webp",
      },
    ],
    description:
      "Explore Abderrahman ES-SEBYITY's portfolio showcasing web development projects and skills.",
    locale: "en_US",
    siteName: "Abderrahman ES-SEBYITY's Portfolio",
  },
  robots: { index: true, follow: false },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <Analytics />
      <body
        className={`${inter.className} bg-sky-900 leading-relaxed text-slate-400 antialiased selection:bg-teal-300 selection:text-teal-900`}
      >
        {children}
      </body>
    </html>
  );
}
