/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "picsum.photos",
      "website-v5-images.s3.us-west-1.amazonaws.com",
      "website-v5-images-cdn.s3.us-west-1.amazonaws.com",
      "cdn.austinhou.com",
    ],
  },
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  experimental: { images: { allowFutureImage: true } },
  headers: [
    {
      key: "Cache-Control",
      value: "public, max-age=9999999999, must-revalidate",
    },
  ],
};

module.exports = nextConfig;
