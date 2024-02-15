import { defaultCache } from "@serwist/next/browser";
import type { PrecacheEntry } from "@serwist/precaching";
import { installSerwist } from "@serwist/sw";
import { CacheableResponsePlugin } from "@serwist/cacheable-response";

declare const self: ServiceWorkerGlobalScope & {
  __SW_MANIFEST: (PrecacheEntry | string)[] | undefined;
};

const ONE_DAY_IN_SECONDS = 60 * 60 * 24;

installSerwist({
  precacheEntries: self.__SW_MANIFEST,
  skipWaiting: true,
  clientsClaim: true,
  navigationPreload: true,
  runtimeCaching: [
    {
      urlPattern: /.*\.(mp4|mov|webm)$/i,
      handler: "CacheFirst",
      options: {
        cacheName: "video-cache",
        expiration: {
          maxAgeSeconds: ONE_DAY_IN_SECONDS,
        },
        plugins: [
          new CacheableResponsePlugin({
            statuses: [0, 200],
          }),
        ],
        rangeRequests: true,
      },
    },
    // ...defaultCache,
  ],
});
