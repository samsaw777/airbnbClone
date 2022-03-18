/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["links.papareact.com"],
  },
  env: {
    mapbox_key:
      "pk.eyJ1Ijoic2Ftc2F3Nzc3IiwiYSI6ImNsMGw2NzcydTA5MmczaXFkajlsOGVqMzMifQ.Gy9yrctbtDi-wdWcPhD8Jg",
    GOOGLE_ID:
      "705825533858-0r7ropdmd9bdk5tvdgsvhchvcj3p093u.apps.googleusercontent.com",
    GOOGLE_SECRET: "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",
  },
};

module.exports = nextConfig;
