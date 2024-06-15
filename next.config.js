/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ["en", "fr"], // Додайте більше мов за потреби
    defaultLocale: "en",
  },
};

module.exports = nextConfig;
