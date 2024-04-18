
/**@type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  trailingSlash: true,
  swcMinify: true,
  basePath: isProd ? "/ynex-js/preview" : undefined,
  assetPrefix : isProd ? "https://nextjs.spruko.com/ynex-js/preview/" : undefined,
  images: {
    loader: "imgix",
    path: "/",
  },
};

module.exports = nextConfig;
