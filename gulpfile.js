let gulp = require('gulp')
let plugins = require('gulp-load-plugins')()

/**
 * SASS & CSS
 */
gulp.task('sass', function () {
  return gulp.src('./src/scss/**/*.scss')
    .pipe(plugins.sourcemaps.init())
    .pipe(plugins.sass({
      outputStyle: 'compressed'
    }).on('error', plugins.sass.logError))
    .pipe(plugins.autoprefixer({
      browsers: ['> 1%', 'Last 2 versions', 'IE 9'],
      cascade: false
    }))
    .pipe(plugins.sourcemaps.write('.'))
    .pipe(gulp.dest('./dist/css'))
})

/**
 * HTML
 */
gulp.task('html', function () {
  return gulp.src('src/index.html')
    .pipe(gulp.dest('dist'))
})

/**
 * Scripts
 */
gulp.task('scripts', () =>
  gulp.src('src/**/*.js')
    .pipe(plugins.plumber())
    .pipe(plugins.sourcemaps.init())
    .pipe(plugins.babel({
      presets: ['env']
    }))
    .pipe(plugins.concat('header.js'))
    .pipe(plugins.sourcemaps.write('.'))
    .pipe(gulp.dest('./dist/js'))
)

/**
 * Images
 */
gulp.task('images', () =>
  gulp.src('src/images/*')
    .pipe(plugins.imagemin())
    .pipe(gulp.dest('dist/images'))
);

/**
 * Watch
 */
gulp.task('watch', ['html', 'sass', 'scripts', 'images'], function () {
  gulp.watch('./src/**/*.html', ['html'])
  gulp.watch('./src/scss/**/*.scss', ['sass'])
  gulp.watch('./src/**/*.js', ['scripts'])
  gulp.watch('./src/images/**/*', ['images'])
})

/**
 * Server and watch
 */
gulp.task('serve', ['watch'], function () {
  gulp.src('dist')
    .pipe(plugins.serverLivereload({
      livereload: true,
      open: true,
      port: 9010
    }))
})

gulp.task('default', ['serve'])