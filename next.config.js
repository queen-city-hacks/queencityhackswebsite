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
      {
        source: "/discord",
        destination: "https://discord.gg/fsrnAZaKGM",
        permanent: true,
      },
      {
        source: "/donate",
        destination: "https://bank.hackclub.com/donations/start/queencityhacks",
        permanent: true,
      },
      {
        source: "/gallery",
        destination: "https://photos.app.goo.gl/5JEewrp4ZFYFXJVV6",
        permanent: true,
      },
      {
        source: "/apply",
        destination: "https://docs.google.com/forms/d/e/1FAIpQLSdzURVdIMT8362Mzd3S4s35zDQkugJwZM1W6j9E0IvfIRoauA/viewform?usp=sf_link",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
