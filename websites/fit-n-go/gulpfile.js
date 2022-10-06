var gulp = require("gulp");
var plumber = require("gulp-plumber");
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync');
var del = require('del'); // Подключаем библиотеку для удаления файлов и папок


gulp.task("sass", function() {
  return gulp.src("app/sass/**/*.scss")
    .pipe(plumber())
    .pipe(sass())
    .pipe(autoprefixer({
        browsers: ['last 5 versions'],
        cascade: false
    }))
    .pipe(gulp.dest("app/css"))
    .pipe(browserSync.reload({stream: true}));
});

gulp.task('scripts', function() {
  return gulp.src([
    'node_modules/jquery/dist/jquery.min.js',
    'node_modules/slick-carousel/slick/slick.min.js'
    ])
    .pipe(gulp.dest('app/js'));
});

gulp.task('fonts', function() {
	return gulp.src('node_modules/font-awesome/fonts/**/*')
	  .pipe(gulp.dest('app/fonts'));
});

gulp.task("browserSync", function() {
  browserSync.init({
    server: "app",
    // notify: false,
    // cors: true,
    ui: false,
    browser: "google chrome"
  });
});


gulp.task('watch', ['sass', 'scripts', 'fonts', 'browserSync'], function() {
  gulp.watch('app/sass/**/*.scss', ['sass']);
  gulp.watch('app/*.html', browserSync.reload);
  gulp.watch('app/js/**/*.js', browserSync.reload);
});


gulp.task('clean', function() {
  return del.sync('dist'); // Удаляем папку dist перед сборкой
});


gulp.task('build', ['clean', 'sass', 'scripts', 'fonts'], function() {

  gulp.src([ // Переносим библиотеки в продакшен
    'app/css/libs.css',
    'app/css/main.css'
    ])
  .pipe(gulp.dest('dist/css'));

  gulp.src('app/fonts/**/*') // Переносим шрифты в продакшен
  .pipe(gulp.dest('dist/fonts'));

  gulp.src('app/js/**/*') // Переносим скрипты в продакшен
  .pipe(gulp.dest('dist/js'));

  gulp.src('app/img/**/*') // Переносим IMG в продакшен
  .pipe(gulp.dest('dist/img'));

  gulp.src('app/*.{html,php}') // Переносим HTML и PHP в продакшен
  .pipe(gulp.dest('dist'));

});










