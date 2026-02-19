import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: "https://abderrahman-essebyity.vercel.app",
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 1,
        },
        // Add resume links if you want them indexed directly, though typically sitemaps form pages.
        // We can add other routes here if the portfolio grows (e.g. blog posts).
    ];
}
