import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://abderrahman-essebyity.vercel.app"),
  title: {
    default: "Abderrahman ES-SEBYITY | Full-Stack Developer & Data Scientist",
    template: "%s | Abderrahman ES-SEBYITY",

  },
  description:
    "Portfolio of Abderrahman ES-SEBYITY, a Full-Stack Developer and Data Scientist specializing in React, Next.js, Python, Machine Learning, and Generative AI.",
  keywords: [
    "Abderrahman ES-SEBYITY",
    "Full-Stack Developer",
    "Data Scientist",
    "Software Engineer",
    "React",
    "Next.js",
    "Python",
    "Machine Learning",
    "Artificial Intelligence",
    "Generative AI",
    "LLM",
    "RAG",
    "Deep Learning",
    "Web Development",
    "Portfolio",
  ],
  authors: {
    name: "Abderrahman ES-SEBYITY",
    url: "https://www.linkedin.com/in/abderrahman-essebyity/",
  },
  creator: "Abderrahman ES-SEBYITY",
  openGraph: {
    title: "Abderrahman ES-SEBYITY | Full-Stack Developer & Data Scientist",
    description:
      "Bridging the gap between robust software engineering and advanced data science. Explore my projects in Web Development and AI.",
    url: "https://abderrahman-essebyity.vercel.app",
    siteName: "Abderrahman ES-SEBYITY Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://res.cloudinary.com/abdrahmanes/image/upload/v1759856685/open_graph_portfolio.webp",
        width: 1200,
        height: 630,
        alt: "Abderrahman ES-SEBYITY Portfolio",
      },
    ],
  },
  verification: {
    google: "Fsq5faJJNRmDz1gQ1qOmg7lkYphlTbzlZHaJNCqyDRc"
  },
  twitter: {
    card: "summary_large_image",
    title: "Abderrahman ES-SEBYITY | Full-Stack Developer & Data Scientist",
    description:
      "Full-Stack Developer & Data Scientist. React, Next.js, Python, AI/ML.",
    creator: "@abdrahmanES1", // Assuming existing handle or just name
    images: ["https://res.cloudinary.com/abdrahmanes/image/upload/v1759856685/open_graph_portfolio.webp"],
  },
  icons: {
    icon: ["/icons/favicon.ico"],
    apple: ["/icons/apple-touch-icon.png"],
    shortcut: ["/icons/apple-touch-icon.png"],
  },
  manifest: "/manifest.json",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Abderrahman ES-SEBYITY",
              url: "https://abderrahman-essebyity.vercel.app",
              jobTitle: ["Full-Stack Developer", "Data Scientist"],
              sameAs: [
                "https://www.linkedin.com/in/abderrahman-essebyity/",
                "https://github.com/abdrahmanES1",
              ],
              description:
                "Full-Stack Developer and Data Scientist specializing in React, Next.js, Python, and AI/ML.",
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
