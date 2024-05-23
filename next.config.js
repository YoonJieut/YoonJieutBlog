/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    removeConsole: {
      exclude: ["error"],
    },
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config; // Add this line to return the modified config object
  },
};

module.exports = nextConfig;
