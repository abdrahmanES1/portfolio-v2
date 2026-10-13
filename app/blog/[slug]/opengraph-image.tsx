import { ImageResponse } from "next/og";
import { getPostBySlug, getPostSlugs } from "@/lib/blog";

export const runtime = "nodejs";
export const alt = "Technical Article by Abderrahman ES-SEBYITY";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export async function generateStaticParams() {
  const slugs = getPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  const title = post?.title || "Technical Deep-Dive";
  const category = post?.category || "Engineering";
  const readingTime = post?.readingTime || "5 min read";
  const tags = post?.tags?.slice(0, 3) || [];

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px",
          backgroundColor: "#082f49",
          backgroundImage:
            "radial-gradient(circle at 25px 25px, rgba(45, 212, 191, 0.15) 2%, transparent 0%), radial-gradient(circle at 75px 75px, rgba(56, 189, 248, 0.1) 2%, transparent 0%)",
          backgroundSize: "100px 100px",
          color: "#f8fafc",
          fontFamily: "sans-serif",
        }}
      >
        {/* Top Header Badge */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <div
              style={{
                width: "14px",
                height: "14px",
                borderRadius: "50%",
                backgroundColor: "#2dd4bf",
                boxShadow: "0 0 16px #2dd4bf",
              }}
            />
            <span
              style={{
                fontSize: "20px",
                fontWeight: 700,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "#2dd4bf",
              }}
            >
              Abderrahman ES-SEBYITY // Technical Blog
            </span>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              padding: "6px 16px",
              borderRadius: "9999px",
              backgroundColor: "rgba(45, 212, 191, 0.15)",
              border: "1px solid rgba(45, 212, 191, 0.4)",
              color: "#5eead4",
              fontSize: "16px",
              fontWeight: 600,
            }}
          >
            <span>{category}</span>
            <span style={{ margin: "0 8px" }}>•</span>
            <span>{readingTime}</span>
          </div>
        </div>

        {/* Title & Description */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px", maxWidth: "1000px" }}>
          <h1
            style={{
              fontSize: title.length > 55 ? "48px" : "58px",
              fontWeight: 800,
              lineHeight: 1.15,
              margin: 0,
              letterSpacing: "-0.03em",
              color: "#f8fafc",
            }}
          >
            {title}
          </h1>
          {post?.description && (
            <p
              style={{
                fontSize: "24px",
                lineHeight: 1.35,
                color: "#94a3b8",
                margin: 0,
              }}
            >
              {post.description.length > 140
                ? post.description.slice(0, 140) + "..."
                : post.description}
            </p>
          )}
        </div>

        {/* Footer Meta */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingTop: "28px",
            borderTop: "1px solid rgba(148, 163, 184, 0.2)",
          }}
        >
          <div style={{ display: "flex", gap: "12px" }}>
            {tags.map((tag) => (
              <span
                key={tag}
                style={{
                  padding: "6px 14px",
                  borderRadius: "6px",
                  backgroundColor: "rgba(15, 23, 42, 0.7)",
                  border: "1px solid rgba(148, 163, 184, 0.25)",
                  color: "#cbd5e1",
                  fontSize: "16px",
                  fontWeight: 500,
                }}
              >
                #{tag}
              </span>
            ))}
          </div>

          <span
            style={{
              fontSize: "20px",
              color: "#5eead4",
              fontWeight: 600,
            }}
          >
            abderrahman-essebyity.vercel.app/blog
          </span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
