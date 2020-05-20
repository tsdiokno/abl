const gulp = require("gulp");
const clean = require("gulp-clean");
const shell = require("gulp-shell");
const workbox = require("workbox-build");

gulp.task("clean", function () {
    return gulp.src("docs", { read: false, allowEmpty: true })
    .pipe(clean());
});

gulp.task("hugo-build", shell.task(["hugo"]));

gulp.task("generate-service-worker", () => {
    return workbox.generateSW({
        globDirectory: "./docs",
        globPatterns: [
            "**/*.{html,json,css,js,eot,ttf,woff,woff2,otf}"
        ],
        swDest: "./docs/sw.js",
        clientsClaim: true,
        skipWaiting: true,
    });
});

gulp.task("build", gulp.series("clean", "hugo-build", "generate-service-worker"));
