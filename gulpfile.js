const gulp = require('gulp');
const workbox = require('workbox-build');

gulp.task('service-worker', () => {
  // This will return a Promise
  return workbox.generateSW({
    globDirectory: './docs',
    globPatterns: [
      '**/*.{html,json,js,css}',
    ],
    swDest: './docs/sw.js',

    // Define runtime caching rules.
    runtimeCaching: [{
      // Match any request that ends with .png, .jpg, .jpeg or .svg.
      urlPattern: /\.(?:png|jpg|jpeg|svg)$/,

      // Apply a cache-first strategy.
      handler: 'CacheFirst',

      options: {
        // Use a custom cache name.
        cacheName: 'images',

        // Only cache 10 images.
        expiration: {
          maxEntries: 10,
        },
      },
    }],
  });
});
