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
  build: {
    html: 'dist/',
    js: 'dist/js/',
    css: 'dist/css/',
    img: 'dist/img/',
    fonts: 'dist/fonts/'
  },
  src: {
    html: 'src/html/*.*',
    htmlNunjucks: 'src/html/',
    js: 'src/js/*.js',
    jsNunjucks: 'src/js/',
    sass: 'src/sass/*.scss',
    img: 'src/img/**/*.*',
    fonts: 'src/fonts/**/*.*'
  },
  watch: {
    html: 'src/html/**/*.*',
    js: 'src/js/**/*.*',
    sass: 'src/sass/**/*.scss',
    img: 'src/img/**/*.*',
    fonts: 'src/fonts/**/*.*'
  },
  del: 'dist'
};



gulp.task('watch', function() {
  gulp.watch(path.watch.html, ['html', browserSync.reload]);
  gulp.watch(path.watch.js, ['js', browserSync.reload]);
  gulp.watch(path.watch.sass, ['sass']);
  gulp.watch(path.watch.fonts, ['fonts', browserSync.reload]);
  gulp.watch(path.watch.img, ['img', browserSync.reload]);
});

gulp.task("webserver", function() {
  browserSync.init({
    server: "dist",
    notify: true,
    ui: false,
    browser: "google chrome"
  });
});

gulp.task('clean', function() {
  return del.sync(path.del);
});



gulp.task('html', function () {
  gulp.src(path.src.html)
    .pipe(plumber())
    .pipe(nunjucks({
      path: path.src.htmlNunjucks,
      inheritExtension: true
    }))
    .pipe(gulp.dest(path.build.html))
    // .pipe(browserSync.reload);
});

gulp.task('js', function () {
  gulp.src(path.src.js)
    .pipe(nunjucks({
      path: path.src.jsNunjucks,
      inheritExtension: true
    }))
    // .pipe(uglify()) //Сожмем наш js
    .pipe(gulp.dest(path.build.js))
    // .pipe(browserSync.reload());
});

gulp.task("sass", function() {
  gulp.src(path.src.sass)
    .pipe(plumber())
    .pipe(sass())
    .pipe(autoprefixer({
      browsers: ['last 5 versions'],
      cascade: false
    }))
    // .pipe(cssnano())
    .pipe(gulp.dest(path.build.css))
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
    .pipe(gulp.dest(path.build.img))
    // .pipe(browserSync.reload());
});

gulp.task('fonts', function() {
  gulp.src(path.src.fonts)
    .pipe(gulp.dest(path.build.fonts))
    // .pipe(browserSync.reload());
});



gulp.task('build', ['clean', 'html', 'js', 'sass', 'fonts', 'img']);

gulp.task('default', ['build', 'watch', 'webserver']);






// gulp.task('nunjucks', function () {
//   return gulp.src('src/html/*.html')
//     .pipe(plumber())
//     .pipe(nunjucks({
//       path: ['src/html/']
//     }))
//     .pipe(gulp.dest('src'));
// });

// gulp.task("sass", function() {
//   gulp.src('node_modules/swiper/dist/css/swiper.min.css')
//     .pipe(gulp.dest('src/css'));
//   gulp.src("src/sass/**/*.scss")
//     .pipe(plumber())
//     .pipe(sass())
//     .pipe(autoprefixer({
//         browsers: ['last 5 versions'],
//         cascade: false
//     }))
//     .pipe(gulp.dest("src/css"))
//     .pipe(browserSync.reload({stream: true}));
// });

// gulp.task('scripts', function() {
//   return gulp.src([
//     'node_modules/jquery/dist/jquery.min.js',
//     'node_modules/jquery-validation/dist/jquery.validate.min.js',
//     'node_modules/swiper/dist/js/swiper.min.js'
//     // 'node_modules/slick-carousel/slick/slick.min.js'
//     ])
//     .pipe(gulp.dest('src/js'));
// });

// gulp.task('fonts', function() {
//   return gulp.src('node_modules/font-awesome/fonts/**/*')
//     .pipe(gulp.dest('src/fonts'));
// });

// gulp.task("browserSync", function() {
//   browserSync.init(config);
// });

// gulp.task('clean', function() {
//   return del.sync('dist');
// });


// gulp.task('watch', ['nunjucks', 'sass', 'scripts', 'fonts', 'browserSync'], function() {
//   gulp.watch('src/sass/**/*.scss', ['sass']);
//   gulp.watch('src/html/**/*.html', ['nunjucks']);
//   gulp.watch('src/*.html', browserSync.reload);
//   gulp.watch('src/js/**/*.js', browserSync.reload);
// });

// gulp.task('build', ['clean', 'nunjucks', 'sass', 'scripts', 'fonts'], function() {

//   // Переносим библиотеки в продакшен
//   gulp.src([
//     'src/css/*.css'
//     ])
//   .pipe(gulp.dest('dist/css'));

//   gulp.src('src/fonts/**/*')
//   .pipe(gulp.dest('dist/fonts'));

//   gulp.src('src/js/**/*')
//   .pipe(gulp.dest('dist/js'));

//   gulp.src('src/img/**/*')
//   .pipe(gulp.dest('dist/img'));

//   gulp.src('src/*.{html,php}')
//   .pipe(gulp.dest('dist'));

// });







