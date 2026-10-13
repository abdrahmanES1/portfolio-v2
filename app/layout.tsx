import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SITE_URL, SOCIAL_LINKS } from "@/lib/site";
import MouseSpotlight from "@/app/components/mouse-spotlight";
const inter = Inter({ subsets: ["latin"], display: "swap" });

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0c4a6e",
};

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
    "Agentic RAG",
    "Arabic NLP",
    "Darija",
    "Hybrid Retrieval",
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
  alternates: {
    canonical: "/",
    types: { "application/rss+xml": "/feed.xml" },
  },
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
    <html lang="en" className="scroll-smooth" data-scroll-behavior="smooth">
      <body
        className={`${inter.className} bg-sky-900 leading-relaxed text-slate-400 antialiased selection:bg-teal-300 selection:text-teal-900`}
      >
        <MouseSpotlight />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Person",
                  "@id": `${SITE_URL}/#person`,
                  name: "Abderrahman ES-SEBYITY",
                  url: SITE_URL,
                  email: "mailto:abderrahman.essebyity@gmail.com",
                  jobTitle: ["Full-Stack Developer", "Data Scientist"],
                  alumniOf: [
                    {
                      "@type": "CollegeOrUniversity",
                      name: "Higher School of Technology of Essaouira - Cadi Ayyad University",
                    },
                    {
                      "@type": "CollegeOrUniversity",
                      name: "Polydisciplinary Faculty of Safi - Cadi Ayyad University",
                    },
                  ],
                  knowsAbout: [
                    "React",
                    "Next.js",
                    "Django",
                    "Node.js",
                    "Python",
                    "Machine Learning",
                    "Generative AI",
                    "RAG",
                    "Agentic RAG",
                    "Multilingual NLP",
                    "Arabic and Darija NLP",
                  ],
                  sameAs: SOCIAL_LINKS,
                  description:
                    "Full-Stack Developer and Data Scientist specializing in React, Next.js, Python, and AI/ML.",
                },
                {
                  "@type": "WebSite",
                  "@id": `${SITE_URL}/#website`,
                  url: SITE_URL,
                  name: "Abderrahman ES-SEBYITY Portfolio",
                  inLanguage: "en",
                  publisher: { "@id": `${SITE_URL}/#person` },
                },
              ],
            }),
          }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
