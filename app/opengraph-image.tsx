import { ImageResponse } from "next/og";

export const runtime = "nodejs";
export const alt = "Abderrahman ES-SEBYITY | Full-Stack Developer & Data Scientist";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
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
              fontWeight: 600,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "#2dd4bf",
            }}
          >
            Engineering Portfolio & Technical Blog
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <h1
            style={{
              fontSize: "64px",
              fontWeight: 800,
              lineHeight: 1.1,
              margin: 0,
              letterSpacing: "-0.03em",
              color: "#f8fafc",
            }}
          >
            Abderrahman ES-SEBYITY
          </h1>
          <p
            style={{
              fontSize: "30px",
              lineHeight: 1.3,
              color: "#94a3b8",
              margin: 0,
              maxWidth: "960px",
            }}
          >
            Bridging Full-Stack Software Engineering and Advanced AI / Data Science.
          </p>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingTop: "32px",
            borderTop: "1px solid rgba(148, 163, 184, 0.2)",
          }}
        >
          <div style={{ display: "flex", gap: "16px" }}>
            <span
              style={{
                padding: "8px 18px",
                borderRadius: "9999px",
                backgroundColor: "rgba(45, 212, 191, 0.12)",
                color: "#5eead4",
                fontSize: "18px",
                fontWeight: 500,
              }}
            >
              Agentic RAG
            </span>
            <span
              style={{
                padding: "8px 18px",
                borderRadius: "9999px",
                backgroundColor: "rgba(56, 189, 248, 0.12)",
                color: "#7dd3fc",
                fontSize: "18px",
                fontWeight: 500,
              }}
            >
              Next.js & React
            </span>
            <span
              style={{
                padding: "8px 18px",
                borderRadius: "9999px",
                backgroundColor: "rgba(45, 212, 191, 0.12)",
                color: "#5eead4",
                fontSize: "18px",
                fontWeight: 500,
              }}
            >
              Multi-Agent Systems
            </span>
            <span
              style={{
                padding: "8px 18px",
                borderRadius: "9999px",
                backgroundColor: "rgba(56, 189, 248, 0.12)",
                color: "#7dd3fc",
                fontSize: "18px",
                fontWeight: 500,
              }}
            >
              Python & PyTorch
            </span>
          </div>

          <span
            style={{
              fontSize: "20px",
              color: "#cbd5e1",
              fontWeight: 600,
            }}
          >
            abderrahman-essebyity.vercel.app
          </span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
