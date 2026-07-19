const { i18n } = require("./next-i18next.config");

/** @type {import("next").NextConfig} */
const nextConfig = {
  outputFileTracingIncludes: {
    "/*": [
      "./next-i18next.config.js",
      "./public/locales/**/*.json",
    ],
  },
  async headers() {
    return [
      {
        source: "/locales/:path*",
        headers: [
          {
            key: "X-Robots-Tag",
            value: "noindex",
          },
        ],
      },
      {
        source: "/:path*.(gif|jpg|jpeg|svg|pdf|png|ico|html|glb)",
        headers: [
          {
            key: "X-Robots-Tag",
            value: "noindex",
          },
        ],
      },
    ];
  },
  i18n,
};

module.exports = nextConfig;
