var gulp = require("gulp");
var plumber = require("gulp-plumber");
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync');
var del = require('del');


gulp.task("sass", function() {
  // gulp.src('node_modules/swiper/dist/css/swiper.min.css')
  //   .pipe(gulp.dest('src/css'));
  gulp.src("src/sass/**/*.scss")
    .pipe(plumber())
    .pipe(sass())
    .pipe(autoprefixer({
        browsers: ['last 5 versions'],
        cascade: false
    }))
    .pipe(gulp.dest("src/css"))
    .pipe(browserSync.reload({stream: true}));
});

gulp.task('scripts', function() {
  return gulp.src([
    'node_modules/jquery/dist/jquery.min.js',
    // 'node_modules/jquery-validation/dist/jquery.validate.min.js',
    // 'node_modules/swiper/dist/js/swiper.min.js'
    // 'node_modules/slick-carousel/slick/slick.min.js'
    ])
    .pipe(gulp.dest('src/js'));
});

gulp.task('fonts', function() {
	return gulp.src('node_modules/font-awesome/fonts/**/*')
	  .pipe(gulp.dest('src/fonts'));
});

gulp.task("browserSync", function() {
  browserSync.init({
    server: "src",
    notify: false,
    // cors: true,
    ui: false,
    browser: "google chrome"
  });
});


gulp.task('watch', ['sass', 'scripts', 'fonts', 'browserSync'], function() {
  gulp.watch('src/sass/**/*.scss', ['sass']);
  gulp.watch('src/*.html', browserSync.reload);
  gulp.watch('src/js/**/*.js', browserSync.reload);
});


gulp.task('clean', function() {
  return del.sync('dist');
});


gulp.task('build', ['clean', 'sass', 'scripts', 'fonts'], function() {

  gulp.src([ // Переносим библиотеки в продакшен
    'src/css/*.css'
    ])
  .pipe(gulp.dest('dist/css'));

  gulp.src('src/fonts/**/*')
  .pipe(gulp.dest('dist/fonts'));

  gulp.src('src/js/**/*')
  .pipe(gulp.dest('dist/js'));

  gulp.src('src/img/**/*')
  .pipe(gulp.dest('dist/img'));

  gulp.src('src/*.{html,php}')
  .pipe(gulp.dest('dist'));

});







