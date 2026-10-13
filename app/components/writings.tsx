import React from "react";
import Link from "next/link";
import { BlogPostMeta } from "@/lib/blog";

interface WritingsProps {
  posts?: BlogPostMeta[];
}

export default function Writings({ posts = [] }: WritingsProps) {
  // Show up to 3 latest posts on the homepage preview
  const displayPosts = posts.slice(0, 3);

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "AI":
        return "text-teal-300 bg-teal-500/10 border-teal-500/30";
      case "Data Science":
        return "text-purple-300 bg-purple-500/10 border-purple-500/30";
      case "Software":
        return "text-sky-300 bg-sky-500/10 border-sky-500/30";
      default:
        return "text-slate-300 bg-slate-500/10 border-slate-500/30";
    }
  };

  return (
    <section
      id="writing"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="Blog posts"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200">
          Writing
        </h2>
      </div>

      <div>
        <ul className="group/list">
          {displayPosts.map((post) => {
            const year = new Date(post.date).getFullYear();
            return (
              <li key={post.slug} className="mb-12">
                <div className="group relative grid grid-cols-8 gap-4 transition-all sm:items-baseline sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                  <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>

                  {/* Left Column: Date and category */}
                  <div className="z-10 col-span-8 sm:col-span-2">
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                      {year}
                    </p>
                    <span
                      className={`mt-1.5 inline-block rounded-full border px-2 py-0.5 text-[10px] font-medium ${getCategoryColor(
                        post.category
                      )}`}
                    >
                      {post.category}
                    </span>
                  </div>

                  {/* Right Column: Title and excerpt */}
                  <div className="z-10 col-span-8 sm:col-span-6">
                    <h3>
                      <Link
                        className="group/link inline-flex items-baseline text-base font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
                        href={`/blog/${post.slug}`}
                        aria-label={`${post.title}`}
                      >
                        <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                        <span>
                          {post.title}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="ml-1 inline-block h-4 w-4 shrink-0 translate-y-px transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none"
                            aria-hidden="true"
                          >
                            <path
                              fillRule="evenodd"
                              d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                              clipRule="evenodd"
                            ></path>
                          </svg>
                        </span>
                      </Link>
                    </h3>

                    <p className="mt-2 text-sm leading-relaxed text-slate-400">
                      {post.description}
                    </p>

                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded bg-teal-400/10 px-2 py-0.5 text-[11px] font-mono text-teal-300"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>

        {/* View All Blog Posts Link */}
        <div className="mt-12">
          <Link
            href="/blog"
            className="group inline-flex items-center text-sm font-semibold text-teal-300 hover:text-teal-200"
          >
            <span>View All Articles & Guides</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-1"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                clipRule="evenodd"
              ></path>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
