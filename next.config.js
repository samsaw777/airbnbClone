/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["links.papareact.com"],
  },
  env: {
    mapbox_key:
      "pk.eyJ1Ijoic2Ftc2F3Nzc3IiwiYSI6ImNsMGw2NzcydTA5MmczaXFkajlsOGVqMzMifQ.Gy9yrctbtDi-wdWcPhD8Jg",
  },
};

module.exports = nextConfig;
