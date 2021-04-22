var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var cssnano = require('cssnano');
var fileinclude = require('gulp-file-include');


gulp.task('fileinclude', function() {
  gulp.src([
    'html/index.html',
    'html/account.html',
    'html/article.html',
    'html/blog.html',
    'html/cart.html',
    'html/catalog.html',
    'html/contacts.html',
    'html/liked_items.html',
    'html/ordering.html',
    'html/reviews.html',
    'html/subcatalog.html',
    'html/subsubcatalog.html',
    'html/subsubcatalogCard.html'
    ])
    .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(gulp.dest('./'));
});


gulp.task('sass', function() {
  return gulp.src('sass/main.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(postcss([
    autoprefixer({
      browsers: [
      "last 5 versions"
      ]
    }),
    cssnano()
  ]))
  .pipe(gulp.dest('css'))
  .pipe(browserSync.reload({
    stream: true
  }));
});


gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: './'
    }
  });
});


gulp.task('watch', ['browserSync'], function() {
  gulp.watch('sass/**/*.scss', ['sass']);
  gulp.watch('html/**/*.html', ['fileinclude']);
  gulp.watch('*.html').on('change', browserSync.reload);
  gulp.watch('js/**/*.js').on('change', browserSync.reload);

});

