"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { BlogPostMeta } from "@/lib/blog";

interface BlogClientProps {
  initialPosts: BlogPostMeta[];
}

const CATEGORIES = ["All", "AI", "Software", "Data Science"] as const;

export default function BlogClient({ initialPosts }: BlogClientProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredPosts = useMemo(() => {
    return initialPosts.filter((post) => {
      const matchesCategory =
        selectedCategory === "All" || post.category === selectedCategory;
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !query ||
        post.title.toLowerCase().includes(query) ||
        post.description.toLowerCase().includes(query) ||
        post.tags.some((tag) => tag.toLowerCase().includes(query));
      return matchesCategory && matchesSearch;
    });
  }, [initialPosts, selectedCategory, searchQuery]);

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
    <div className="space-y-10">
      {/* Search and Category Filter Controls */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2">
          {CATEGORIES.map((category) => {
            const isSelected = selectedCategory === category;
            return (
              <button
                key={category}
                type="button"
                onClick={() => setSelectedCategory(category)}
                className={`rounded-full px-4 py-1.5 text-xs font-semibold tracking-wide transition-all ${
                  isSelected
                    ? "bg-teal-400 text-sky-950 shadow-md shadow-teal-500/20"
                    : "bg-slate-800/80 text-slate-400 border border-slate-700 hover:border-teal-400/50 hover:text-slate-200"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Search Input */}
        <div className="relative w-full sm:w-72">
          <input
            type="text"
            placeholder="Search articles or tags..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-lg border border-slate-700 bg-slate-900/90 px-4 py-2 pl-9 text-xs text-slate-200 placeholder-slate-500 outline-none transition focus:border-teal-400 focus:ring-1 focus:ring-teal-400"
          />
          <svg
            className="pointer-events-none absolute left-3 top-2.5 h-4 w-4 text-slate-500"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </div>

      {/* Posts Listing */}
      {filteredPosts.length === 0 ? (
        <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-12 text-center">
          <p className="text-slate-400">No articles found matching your criteria.</p>
          <button
            onClick={() => {
              setSelectedCategory("All");
              setSearchQuery("");
            }}
            className="mt-4 text-xs font-medium text-teal-300 underline hover:text-teal-200"
          >
            Reset filters
          </button>
        </div>
      ) : (
        <div className="grid gap-6">
          {filteredPosts.map((post) => (
            <article
              key={post.slug}
              className="group relative rounded-xl border border-slate-800/80 bg-slate-900/40 p-6 transition-all duration-200 hover:-translate-y-0.5 hover:border-slate-700 hover:bg-slate-800/50 hover:shadow-lg hover:shadow-sky-950/50"
            >
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
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </time>
                <span className="text-slate-500">•</span>
                <span className="text-slate-400">{post.readingTime}</span>
              </div>

              <h2 className="mt-3 text-xl font-bold tracking-tight text-slate-100 group-hover:text-teal-300 sm:text-2xl">
                <Link href={`/blog/${post.slug}`}>
                  <span className="absolute -inset-px rounded-xl" />
                  {post.title}
                </Link>
              </h2>

              <p className="mt-2 text-sm leading-relaxed text-slate-400 line-clamp-3">
                {post.description}
              </p>

              <div className="mt-4 flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap gap-1.5">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded bg-slate-800/90 px-2 py-0.5 text-[11px] font-mono text-slate-400"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                <span className="inline-flex items-center text-xs font-semibold text-teal-300 group-hover:translate-x-1 transition-transform">
                  Read article
                  <svg
                    className="ml-1 h-3.5 w-3.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </span>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
