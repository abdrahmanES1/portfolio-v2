/** @type {import('next').NextConfig} */
const nextConfig = {
    distDir: 'build',
    images: {
        remotePatterns: [
            { hostname: "magicui.design" },
            { hostname: "images.unsplash.com" },
            { hostname: "res.cloudinary.com" }
        ]

    }
};

export default nextConfig;
