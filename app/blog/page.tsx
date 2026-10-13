import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/blog";
import BlogClient from "./blog-client";

export const metadata: Metadata = {
  title: "Blog & Technical Articles",
  description:
    "Explore in-depth articles on Artificial Intelligence, Full-Stack Architecture, Python, and Machine Learning by Abderrahman ES-SEBYITY.",
  alternates: {
    canonical: "https://abderrahman-essebyity.vercel.app/blog",
  },
  openGraph: {
    title: "Blog & Technical Articles | Abderrahman ES-SEBYITY",
    description:
      "Deep dives into AI, RAG pipelines, Software Engineering, and Modern Web Development.",
    url: "https://abderrahman-essebyity.vercel.app/blog",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog & Technical Articles | Abderrahman ES-SEBYITY",
    description:
      "Deep dives into AI, RAG pipelines, Software Engineering, and Modern Web Development.",
  },
};

export default async function BlogIndexPage() {
  const posts = await getAllPosts();

  return (
    <div className="mx-auto min-h-screen max-w-4xl px-6 py-12 font-sans md:px-12 md:py-20 lg:py-24">
      {/* Top Breadcrumb / Back Link */}
      <div className="mb-10 flex items-center justify-between">
        <Link
          href="/"
          className="group inline-flex items-center text-xs font-semibold uppercase tracking-wider text-teal-300 transition hover:text-teal-200"
        >
          <svg
            className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Back to Portfolio
        </Link>

        <a
          href="/feed.xml"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 rounded-full border border-slate-700 bg-slate-800/80 px-3 py-1 text-xs text-slate-400 transition hover:border-teal-400 hover:text-teal-300"
          title="RSS Feed"
        >
          <svg
            className="h-3.5 w-3.5 text-amber-500"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <circle cx="6.18" cy="17.82" r="2.18" />
            <path d="M4 4.44v2.83c7.03 0 12.73 5.7 12.73 12.73h2.83c0-8.59-6.97-15.56-15.56-15.56zm0 5.66v2.83c3.9 0 7.07 3.17 7.07 7.07h2.83c0-5.46-4.44-9.9-9.9-9.9z" />
          </svg>
          RSS Feed
        </a>
      </div>

      {/* Header section */}
      <header className="mb-12">
        <h1 className="text-3xl font-extrabold tracking-tight text-slate-100 sm:text-5xl">
          Articles & Insights
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-400">
          Thoughts, architecture notes, and step-by-step guides on Machine Learning,
          Full-Stack Web Development, and Generative AI by Abderrahman ES-SEBYITY.
        </p>
      </header>

      {/* Interactive Posts & Filter Component */}
      <main>
        <BlogClient initialPosts={posts} />
      </main>
    </div>
  );
}
