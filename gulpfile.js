const gulp = require("gulp");
const clean = require("gulp-clean");
const shell = require("gulp-shell");
const workbox = require("workbox-build");

gulp.task("clean", function () {
    return gulp.src("docs", { read: false, allowEmpty: true })
    .pipe(clean());
});
gulp.task("hugo-build", shell.task(["hugo"]));

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

gulp.task("build", gulp.series("clean", "hugo-build", "service-worker"));
