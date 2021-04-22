var gulp = require("gulp");
var data = require('gulp-data');
var plumber = require("gulp-plumber");
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var cssnano = require('gulp-cssnano');
var nunjucks = require('gulp-nunjucks-render');
var del = require('del');
var browserSync = require('browser-sync');
var fs = require('fs');
var tingpng = require('gulp-tinypng');

var path = {
  dist: {
    html: 'dist/',
    js: 'dist/js/',
    css: 'dist/css/',
    img: 'dist/img/',
    fonts: 'dist/fonts/'
  },
  src: {
    data: './src/html/data.json',
    php: 'src/php/*.php',
    phpParts: 'src/php/parts/',
    html: 'src/html/*.html',
    htmlParts: 'src/html/parts',
    sass: 'src/sass/*.scss',
    js: 'src/js/*.js',
    jsParts: [
      'src/js/parts/',
      'node_modules/'
    ],
    img: 'src/img/**/*.*',
    fonts: 'src/fonts/**/*.*'
  },
  watch: {
    html: 'src/html/**/*.*',
    php: 'src/php/**/*.php',
    js: 'src/js/**/*.js',
    sass: 'src/sass/**/*.scss',
    img: 'src/img/**/*.*',
    fonts: 'src/fonts/**/*.*'
  },
  del: 'dist'
};

var browserSyncConfig = {
  server: "dist",
  browser: "google chrome"
};


gulp.task('html', function () {
  gulp.src(path.src.html)
    .pipe(plumber())
    .pipe(data(function() {
      return JSON.parse(fs.readFileSync(path.src.data));
    }))
    .pipe(nunjucks({
      path: path.src.htmlParts,
      inheritExtension: true
    }))
    .pipe(gulp.dest(path.dist.html))
    .pipe(browserSync.reload({stream: true}));
});

gulp.task('php', function () {
  gulp.src(path.src.php)
    .pipe(plumber())
    .pipe(nunjucks({
      path: path.src.phpParts,
      inheritExtension: true
    }))
    .pipe(gulp.dest(path.dist.html))
    .pipe(browserSync.reload({stream: true}));
});

gulp.task('js', function () {
  gulp.src(path.src.js)
    .pipe(plumber())
    .pipe(nunjucks({
      path: path.src.jsParts,
      inheritExtension: true
    }))
    // .pipe(uglify()) //Сожмем наш js
    .pipe(gulp.dest(path.dist.js))
    .pipe(browserSync.reload({stream: true}));
});

gulp.task("sass", function() {
  gulp.src(path.src.sass)
    .pipe(plumber())
    .pipe(sass())
    .pipe(autoprefixer({
      browsers: ['last 5 versions']
    }))
    .pipe(cssnano())
    .pipe(gulp.dest(path.dist.css))
    .pipe(browserSync.reload({stream: true}));
});

gulp.task('img_compress', function () {
  gulp.src(path.src.img)
    .pipe(tingpng('kXpXh80Kf5XRCR1Y9c6viOcklNMW0lJC'))
    .pipe(gulp.dest(path.dist.img))
    .pipe(browserSync.reload({stream: true}));
});

gulp.task('img', function () {
  gulp.src(path.src.img)
    .pipe(gulp.dest(path.dist.img))
    .pipe(browserSync.reload({stream: true}));
});

gulp.task('fonts', function() {
  gulp.src(path.src.fonts)
    .pipe(gulp.dest(path.dist.fonts))
    .pipe(browserSync.reload({stream: true}));
});



gulp.task('watch', function() {
  gulp.watch(path.watch.html, ['html']);
  gulp.watch(path.watch.js, ['js']);
  gulp.watch(path.watch.sass, ['sass']);
  gulp.watch(path.watch.fonts, ['fonts']);
  gulp.watch(path.watch.img, ['img']);
  gulp.watch(path.watch.php, ['php']);
});

gulp.task("webserver", function() {
  browserSync(browserSyncConfig);
});

gulp.task('del', function() {
  return del.sync(path.del);
});



gulp.task('img_compress', ['img_compress']);
gulp.task('build', ['del', 'html', 'js', 'sass', 'fonts', 'img']);
gulp.task('default', ['build', 'webserver', 'watch']);








