import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPostSlugs, getPostBySlug, getAllPosts } from "@/lib/blog";
import CopyCodeListener from "./copy-code-listener";

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const slugs = getPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) {
    return {
      title: "Article Not Found",
    };
  }

  const siteUrl = "https://abderrahman-essebyity.vercel.app";
  const canonicalUrl = `${siteUrl}/blog/${post.slug}`;

  return {
    title: post.title,
    description: post.description,
    alternates: {
      canonical: canonicalUrl,
    },
    authors: [{ name: post.author }],
    keywords: post.tags,
    openGraph: {
      title: `${post.title} | Abderrahman ES-SEBYITY`,
      description: post.description,
      url: canonicalUrl,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      tags: post.tags,
      siteName: "Abderrahman ES-SEBYITY Portfolio",
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      creator: "@abdrahmanES1",
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const allPosts = await getAllPosts();
  const relatedPosts = allPosts
    .filter((p) => p.slug !== post.slug)
    .slice(0, 2);

  const siteUrl = "https://abderrahman-essebyity.vercel.app";
  const postUrl = `${siteUrl}/blog/${post.slug}`;

  // Structured Data (JSON-LD) for Google Search Rich Snippets
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Person",
      name: post.author,
      url: siteUrl,
    },
    publisher: {
      "@type": "Person",
      name: "Abderrahman ES-SEBYITY",
      url: siteUrl,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": postUrl,
    },
    keywords: post.tags.join(", "),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: `${siteUrl}/blog`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: postUrl,
      },
    ],
  };

  const getCategoryBadgeClass = (category: string) => {
    switch (category) {
      case "AI":
        return "bg-teal-500/10 text-teal-300 border-teal-500/30";
      case "Data Science":
        return "bg-purple-500/10 text-purple-300 border-purple-500/30";
      case "Software":
        return "bg-sky-500/10 text-sky-300 border-sky-500/30";
      default:
        return "bg-slate-500/10 text-slate-300 border-slate-500/30";
    }
  };

  return (
    <>
      <CopyCodeListener />

      {/* JSON-LD Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="mx-auto min-h-screen max-w-3xl px-6 py-12 font-sans md:px-8 md:py-20 lg:py-24">
        {/* Navigation Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-10 flex items-center justify-between">
          <Link
            href="/blog"
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
            All Articles
          </Link>

          <Link
            href="/"
            className="text-xs text-slate-400 transition hover:text-slate-200"
          >
            Portfolio Home
          </Link>
        </nav>

        {/* Article Header */}
        <header className="mb-10 border-b border-slate-800 pb-10">
          <div className="flex flex-wrap items-center gap-3 text-xs">
            <span
              className={`rounded-full border px-2.5 py-0.5 font-medium ${getCategoryBadgeClass(
                post.category
              )}`}
            >
              {post.category}
            </span>
            <span className="text-slate-500">•</span>
            <time className="text-slate-400" dateTime={post.date}>
              {new Date(post.date).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </time>
            <span className="text-slate-500">•</span>
            <span className="text-slate-400">{post.readingTime}</span>
          </div>

          <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-100 sm:text-4xl md:text-5xl leading-tight">
            {post.title}
          </h1>

          <p className="mt-4 text-lg leading-relaxed text-slate-300">
            {post.description}
          </p>

          <div className="mt-6 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-tr from-teal-400 to-sky-500 font-bold text-sky-950">
              AE
            </div>
            <div>
              <p className="text-sm font-medium text-slate-200">{post.author}</p>
              <p className="text-xs text-slate-400">
                Full-Stack Developer & Data Scientist
              </p>
            </div>
          </div>
        </header>

        {/* Article Body */}
        <article className="prose prose-invert prose-teal max-w-none prose-headings:scroll-mt-24 prose-headings:font-bold prose-headings:text-slate-100 prose-p:leading-relaxed prose-p:text-slate-300 prose-a:text-teal-300 prose-a:no-underline hover:prose-a:underline prose-code:text-teal-300 prose-pre:bg-transparent prose-pre:p-0">
          <div
            dangerouslySetInnerHTML={{ __html: post.contentHtml }}
          />
        </article>

        {/* Tags */}
        <div className="mt-12 flex flex-wrap items-center gap-2 border-t border-slate-800 pt-6">
          <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider mr-2">
            Tags:
          </span>
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md border border-slate-800 bg-slate-900/60 px-2.5 py-1 text-xs text-slate-300 font-mono"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Share Section */}
        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 rounded-xl border border-slate-800/80 bg-slate-900/40 p-5">
          <p className="text-sm font-medium text-slate-300">
            Enjoyed this article? Share it with your network:
          </p>
          <div className="flex items-center gap-3">
            <a
              href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
                post.title
              )}&url=${encodeURIComponent(postUrl)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-slate-700 bg-slate-800/80 px-3 py-1.5 text-xs text-slate-300 hover:border-teal-400 hover:text-teal-300 transition"
            >
              Share on X
            </a>
            <a
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                postUrl
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-slate-700 bg-slate-800/80 px-3 py-1.5 text-xs text-slate-300 hover:border-teal-400 hover:text-teal-300 transition"
            >
              Share on LinkedIn
            </a>
          </div>
        </div>

        {/* Author bio card */}
        <div className="mt-12 rounded-2xl border border-slate-800 bg-slate-900/60 p-6 md:p-8">
          <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gradient-to-tr from-teal-400 to-sky-500 text-lg font-bold text-sky-950">
              AE
            </div>
            <div>
              <h3 className="text-base font-semibold text-slate-200">
                Written by {post.author}
              </h3>
              <p className="mt-1 text-xs leading-relaxed text-slate-400">
                Full-Stack Developer and Data Scientist building bridges between robust software engineering and advanced machine learning models.
              </p>
              <div className="mt-3 flex justify-center sm:justify-start gap-4 text-xs font-semibold text-teal-300">
                <a
                  href="https://www.linkedin.com/in/abderrahman-essebyity/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  LinkedIn
                </a>
                <a
                  href="https://github.com/abdrahmanES1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  GitHub
                </a>
                <Link href="/" className="hover:underline">
                  Portfolio
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* More Articles */}
        {relatedPosts.length > 0 && (
          <div className="mt-16">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400">
              Read Next
            </h3>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {relatedPosts.map((relPost) => (
                <Link
                  key={relPost.slug}
                  href={`/blog/${relPost.slug}`}
                  className="group rounded-xl border border-slate-800/80 bg-slate-900/40 p-5 transition hover:border-slate-700 hover:bg-slate-800/50"
                >
                  <p className="text-xs text-teal-300">{relPost.category}</p>
                  <h4 className="mt-2 text-sm font-bold text-slate-200 group-hover:text-teal-300">
                    {relPost.title}
                  </h4>
                  <p className="mt-2 text-xs text-slate-400 line-clamp-2">
                    {relPost.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
