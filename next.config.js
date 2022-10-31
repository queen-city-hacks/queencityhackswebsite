/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  async redirects() {
    return [
      {
        source: "/register",
        destination:
          "https://organize.mlh.io/participants/events/8723-queen_city_hacks",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
