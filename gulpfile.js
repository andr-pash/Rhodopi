var gulp = require('gulp'),
  sass = require('gulp-ruby-sass'),
  autoprefixer = require('gulp-autoprefixer'),
  babel = require('gulp-babel'),
  browserify = require('browserify'),
  source = require('vinyl-source-stream'),
  buffer = require('vinyl-buffer'),
  uglify = require('gulp-uglify'),
  sourcemaps = require('gulp-sourcemaps'),
  gutil = require('gulp-util');


gulp.task('babel', function () {
  return gulp.src('./js/assets/main.js')
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(gulp.dest('js'));
});

gulp.task('bundle', function () {
  // set up the browserify instance on a task basis
  var b = browserify({
    entries: './js/main.js',
    debug: true
  });

  return b.bundle()
    .pipe(source('./js/main.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({loadMaps: true}))
        // Add transformation tasks to the pipeline here.
        .pipe(uglify())
        .on('error', gutil.log)
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./js/'));
});


gulp.task('autoprefixer', function () {
  return gulp.src('./css/*.css')
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(gulp.dest('./css'));
});



function errorLog(error) {
  console.error.bind(error);
  this.emit('end');
}



gulp.task('sass', function () {
  return sass('./css/assets/main.sass')
    .on('error', sass.logError)
    .pipe(gulp.dest('./css'));
});



gulp.task('watch', function () {
  gulp.watch('css/assets/*/*.sass', ['sass']);
  gulp.watch('css/assets/*.sass', ['sass']);
  gulp.watch('css/*.css', ['autoprefixer']);
  gulp.watch('js/assets/*.js', ['babel']);
  // gulp.watch('js/*.js', ['bundle']);
});


gulp.task('default', ['sass', 'autoprefixer', 'babel', 'watch']);
