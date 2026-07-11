import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://abderrahman-essebyity.vercel.app"),
  title: {
    default: "Abderrahman ES-SEBYITY | AI/ML & Full-Stack Engineer",
    template: "%s | Abderrahman ES-SEBYITY",

  },
  description:
    "Portfolio of Abderrahman ES-SEBYITY, an AI/ML & Full-Stack Engineer specializing in LLM Fine-Tuning, RAG, Generative AI, Python, PyTorch, React, and FastAPI.",
  keywords: [
    "Abderrahman ES-SEBYITY",
    "AI/ML Engineer",
    "Full-Stack Engineer",
    "Software Engineer",
    "React",
    "Next.js",
    "Python",
    "Machine Learning",
    "Artificial Intelligence",
    "Generative AI",
    "LLM",
    "LLM Fine-Tuning",
    "RAG",
    "PyTorch",
    "FastAPI",
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
    title: "Abderrahman ES-SEBYITY | AI/ML & Full-Stack Engineer",
    description:
      "Building production AI systems — LLM fine-tuning, RAG, and Generative AI with full-stack engineering.",
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
    title: "Abderrahman ES-SEBYITY | AI/ML & Full-Stack Engineer",
    description:
      "AI/ML & Full-Stack Engineer. LLM Fine-Tuning, RAG, Python, PyTorch, React, FastAPI.",
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
    canonical: "https://abderrahman-essebyity.vercel.app",
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
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.className} bg-sky-900 leading-relaxed text-slate-400 antialiased selection:bg-teal-300 selection:text-teal-900`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "ProfilePage",
                  dateCreated: "2024-04-01",
                  dateModified: new Date().toISOString().split("T")[0],
                  mainEntity: { "@id": "#person" },
                },
                {
                  "@type": "Person",
                  "@id": "#person",
                  name: "Abderrahman ES-SEBYITY",
                  url: "https://abderrahman-essebyity.vercel.app",
                  email: "e.abdrahman2018@gmail.com",
                  jobTitle: ["AI/ML Engineer", "Full-Stack Engineer"],
                  description:
                    "AI/ML & Full-Stack Engineer specializing in LLM Fine-Tuning (QLoRA), RAG pipelines, Generative AI, and full-stack web development with Python, PyTorch, React, Next.js, and FastAPI.",
                  knowsAbout: [
                    "Large Language Models",
                    "LLM Fine-Tuning",
                    "Retrieval-Augmented Generation",
                    "Deep Learning",
                    "Computer Vision",
                    "Natural Language Processing",
                    "React",
                    "Next.js",
                    "Python",
                    "PyTorch",
                    "FastAPI",
                    "Node.js",
                    "Full-Stack Development",
                  ],
                  alumniOf: [
                    {
                      "@type": "EducationalOrganization",
                      name: "Université Cadi Ayyad",
                      department: "Polydisciplinary Faculty of Safi",
                    },
                    {
                      "@type": "EducationalOrganization",
                      name: "Higher School of Technology of Essaouira",
                    },
                  ],
                  hasCredential: [
                    {
                      "@type": "EducationalOccupationalCredential",
                      name: "Master's in Data Science & Intelligent Systems",
                      credentialCategory: "degree",
                      recognizedBy: {
                        "@type": "EducationalOrganization",
                        name: "Université Cadi Ayyad",
                      },
                    },
                    {
                      "@type": "EducationalOccupationalCredential",
                      name: "Meta Full-Stack Software Engineer Professional Certificate",
                      credentialCategory: "certificate",
                      recognizedBy: {
                        "@type": "Organization",
                        name: "Meta",
                      },
                    },
                  ],
                  sameAs: [
                    "https://www.linkedin.com/in/abderrahman-essebyity/",
                    "https://github.com/abdrahmanES1",
                  ],
                },
                {
                  "@type": "WebSite",
                  name: "Abderrahman ES-SEBYITY Portfolio",
                  url: "https://abderrahman-essebyity.vercel.app",
                  author: { "@id": "#person" },
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
