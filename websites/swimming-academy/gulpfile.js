var gulp = require("gulp");
var plumber = require("gulp-plumber");
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var cssnano = require('gulp-cssnano');
var nunjucks = require('gulp-nunjucks-render');
var del = require('del');
var browserSync = require('browser-sync');
var nunjucks2 = require('gulp-nunjucks');

var path = {
  dist: {
    html: 'dist/',
    js: 'dist/js/',
    css: 'dist/css/',
    img: 'dist/img/',
    fonts: 'dist/fonts/'
  },
  src: {
    html: 'src/html/*.html',
    htmlNunjucks: 'src/html/',
    js: 'src/js/*.js',
    jsNunjucks: [
      'src/js/',
      'node_modules/'
    ],
    sass: 'src/sass/*.scss',
    img: 'src/img/**/*.*',
    fonts: 'src/fonts/**/*.*'
  },
  watch: {
    html: 'src/html/**/*.html',
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
    .pipe(nunjucks({
      path: path.src.htmlNunjucks,
      inheritExtension: true
    }))
    .pipe(gulp.dest(path.dist.html))
    .pipe(browserSync.reload({stream: true}));
});

gulp.task('js', function () {
  gulp.src(path.src.js)
    .pipe(plumber())
    .pipe(nunjucks({
      path: path.src.jsNunjucks,
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
      browsers: ['last 2 versions']
      // cascade: false
    }))
    // .pipe(cssnano())
    .pipe(gulp.dest(path.dist.css))
    .pipe(browserSync.reload({stream: true}));
});

gulp.task('img', function () {
  gulp.src(path.src.img)
    // .pipe(imagemin({
    //     progressive: true,
    //     svgoPlugins: [{removeViewBox: false}],
    //     use: [pngquant()],
    //     interlaced: true
    // }))
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
});

gulp.task("webserver", function() {
  browserSync(browserSyncConfig);
});

gulp.task('del', function() {
  return del.sync(path.del);
});



gulp.task('build', ['del', 'html', 'js', 'sass', 'fonts', 'img']);

gulp.task('default', ['build', 'webserver', 'watch']);








