const withSerwist = require("@serwist/next").default({
  swSrc: "src/app/sw.ts",
  swDest: "public/sw.js",
  // TODO: Get precaching for videos working
  // additionalPrecacheEntries: [
  //   {
  //     url: "https://cdn.onc-prod.intergalactic.space/Neutrinos_audio_1b0a6a37a3.mp4",
  //     revision: 0,
  //     integrity: {
  //       crossOrigin: "anonymous",
  //     },
  //   },
  // ],
});

const nextConfig = {
  images: {
    domains: ["localhost:3000", "cdn.onc-prod.intergalactic.space"],
  },
};

// module.exports = nextConfig;
module.exports = withSerwist(nextConfig);
