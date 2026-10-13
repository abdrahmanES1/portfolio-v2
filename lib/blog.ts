import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";
import { marked } from "marked";
import hljs from "highlight.js";

const postsDirectory = path.join(process.cwd(), "content/posts");

export interface BlogPostMeta {
  slug: string;
  title: string;
  description: string;
  date: string;
  category: "AI" | "Software" | "Data Science";
  tags: string[];
  readingTime: string;
  coverImage?: string;
  author: string;
}

export interface BlogPost extends BlogPostMeta {
  contentHtml: string;
  rawContent: string;
}

// Configure marked with custom code highlighting and styles
const renderer = new marked.Renderer();

// Custom code renderer supporting both marked v11 and v12+ signatures
renderer.code = function (arg1: any, arg2?: any) {
  const text = typeof arg1 === "object" && arg1 !== null ? arg1.text : arg1 || "";
  const lang = typeof arg1 === "object" && arg1 !== null ? arg1.lang : arg2 || "";
  const validLang = lang && hljs.getLanguage(lang) ? lang : undefined;

  let highlighted = "";
  try {
    highlighted = validLang
      ? hljs.highlight(text, { language: validLang, ignoreIllegals: true }).value
      : hljs.highlightAuto(text).value;
  } catch {
    highlighted = text;
  }

  const langLabel = (validLang || lang || "code").toUpperCase();
  const encodedText = encodeURIComponent(text);

  return `
    <div class="code-block group my-6 overflow-hidden rounded-xl border border-slate-800 bg-[#0b1120] shadow-2xl transition hover:border-slate-700/80">
      <div class="flex items-center justify-between border-b border-slate-800/80 bg-[#070d19]/90 px-4 py-2.5 backdrop-blur">
        <div class="flex items-center gap-2">
          <div class="flex items-center gap-1.5" aria-hidden="true">
            <span class="h-2.5 w-2.5 rounded-full bg-rose-500/80 inline-block"></span>
            <span class="h-2.5 w-2.5 rounded-full bg-amber-500/80 inline-block"></span>
            <span class="h-2.5 w-2.5 rounded-full bg-emerald-500/80 inline-block"></span>
          </div>
          <span class="ml-2 rounded border border-teal-500/30 bg-teal-500/10 px-2 py-0.5 text-[11px] font-mono font-semibold tracking-wider text-teal-300">
            ${langLabel}
          </span>
        </div>
        <button
          type="button"
          class="copy-code-btn inline-flex items-center gap-1.5 rounded-md border border-slate-700/80 bg-slate-800/60 px-2.5 py-1 text-xs font-medium text-slate-300 transition-all hover:border-teal-400 hover:bg-slate-800 hover:text-teal-300 focus:outline-none focus:ring-1 focus:ring-teal-400"
          data-code="${encodedText}"
          aria-label="Copy code to clipboard"
        >
          <svg class="copy-icon h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>
          <span class="copy-label">Copy</span>
        </button>
      </div>
      <pre class="overflow-x-auto p-4 md:p-5 font-mono text-[13px] md:text-sm leading-relaxed text-slate-200 selection:bg-teal-500/30"><code class="hljs ${validLang ? `language-${validLang}` : ""}">${highlighted}</code></pre>
    </div>
  `;
};

// Custom link renderer to add security and styling
renderer.link = function (arg1: any, arg2?: any, arg3?: any) {
  const href = typeof arg1 === "object" && arg1 !== null ? arg1.href : arg1 || "#";
  const title = typeof arg1 === "object" && arg1 !== null ? arg1.title : arg2 || "";
  const text = typeof arg1 === "object" && arg1 !== null ? arg1.text : arg3 || "";

  const isExternal = href.startsWith("http");
  const attributes = isExternal ? 'target="_blank" rel="noopener noreferrer"' : "";
  const titleAttr = title ? `title="${title}"` : "";

  return `<a href="${href}" ${titleAttr} ${attributes} class="font-medium text-teal-300 underline underline-offset-4 hover:text-teal-200 transition-colors">${text}</a>`;
};

// Custom image renderer for responsive styling
renderer.image = function (arg1: any, arg2?: any, arg3?: any) {
  const href = typeof arg1 === "object" && arg1 !== null ? arg1.href : arg1 || "";
  const title = typeof arg1 === "object" && arg1 !== null ? arg1.title : arg2 || "";
  const text = typeof arg1 === "object" && arg1 !== null ? arg1.text : arg3 || "";

  return `
    <figure class="my-8">
      <img src="${href}" alt="${text}" class="rounded-xl border border-slate-700/60 shadow-lg max-w-full h-auto mx-auto" loading="lazy" />
      ${title ? `<figcaption class="mt-2 text-center text-xs text-slate-400 italic">${title}</figcaption>` : ""}
    </figure>
  `;
};

marked.use({ renderer });

export function ensurePostsDirectory() {
  if (!fs.existsSync(postsDirectory)) {
    fs.mkdirSync(postsDirectory, { recursive: true });
  }
}

export function getPostSlugs(): string[] {
  ensurePostsDirectory();
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames
    .filter((file) => file.endsWith(".md") || file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx?$/, ""));
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  ensurePostsDirectory();
  const realSlug = slug.replace(/\.mdx?$/, "");
  let fullPath = path.join(postsDirectory, `${realSlug}.mdx`);

  if (!fs.existsSync(fullPath)) {
    fullPath = path.join(postsDirectory, `${realSlug}.md`);
  }

  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  const time = readingTime(content);

  const contentHtml = await marked.parse(content);

  return {
    slug: realSlug,
    title: data.title || realSlug,
    description: data.description || "",
    date: data.date ? new Date(data.date).toISOString().split("T")[0] : new Date().toISOString().split("T")[0],
    category: data.category || "Software",
    tags: Array.isArray(data.tags) ? data.tags : [],
    readingTime: time.text || "3 min read",
    coverImage: data.coverImage || undefined,
    author: data.author || "Abderrahman ES-SEBYITY",
    contentHtml,
    rawContent: content,
  };
}

export async function getAllPosts(): Promise<BlogPostMeta[]> {
  const slugs = getPostSlugs();
  const posts = await Promise.all(
    slugs.map(async (slug) => {
      const post = await getPostBySlug(slug);
      if (!post) return null;
      const meta: BlogPostMeta = {
        slug: post.slug,
        title: post.title,
        description: post.description,
        date: post.date,
        category: post.category,
        tags: post.tags,
        readingTime: post.readingTime,
        coverImage: post.coverImage,
        author: post.author,
      };
      return meta;
    })
  );

  return (posts.filter(Boolean) as BlogPostMeta[]).sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
}
