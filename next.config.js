/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["links.papareact.com", "lh3.googleusercontent.com"],
  },
  env: {
    mapbox_key:
      "pk.eyJ1Ijoic2Ftc2F3Nzc3IiwiYSI6ImNsMGw2NzcydTA5MmczaXFkajlsOGVqMzMifQ.Gy9yrctbtDi-wdWcPhD8Jg",
    stripe_publish_key: process.env.STRIPE_PUBLISH_KEY,
    stripe_secret_key: process.env.STRIPE_SECRET_KEY,
    // GOOGLE_ID:
    //   "400731109120-cbp5pp4ik77vu9q2i0cnfgp6ok4gle51.apps.googleusercontent.com",
    // GOOGLE_SECRET: "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",
  },
};

module.exports = nextConfig;
