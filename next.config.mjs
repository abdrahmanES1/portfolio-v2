/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [{ hostname: "example.com" }, { hostname: "images.unsplash.com" }, { hostname: "res.cloudinary.com" }]

    }
};

export default nextConfig;
