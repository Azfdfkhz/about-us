const isProd = process.env.NODE_ENV === "production";
const basePath = isProd ? "/about-us" : "";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath,
  images: {
    loader: "custom",
    loaderFile: "./image-loader.js",
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
