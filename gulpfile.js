var gulp = require('gulp'),
  $ = require('gulp-load-plugins')();

gulp.task('css', function() {
  return gulp.src('app/styles/main.scss')
           .pipe($.sourcemaps.init())
           .pipe($.sass().on('error', $.sass.logError))
           .pipe($.autoprefixer({
             browsers: ['last 2 versions'],
             cascade: false
           }))
           .pipe($.sourcemaps.write())
           .pipe(gulp.dest('./dist'));
})

gulp.task('css:watch', function() {
  gulp.watch('app/styles/**/*.scss', ['css']);
});

gulp.task('css:build', ['css'], function() {
  return gulp.src('./dist/main.css')
             .pipe($.rev())
             .pipe(gulp.dest('./dist'))
             .pipe($.rev.manifest())
             .pipe(gulp.dest('./dist'));
})
gulp.task('scripts', function(){
  gulp.src([
    './app/js/script.js'
  ])
    .pipe(gulp.dest('./dist/js'))
})

gulp.task('scripts:watch', function() {
  gulp.watch('app/js/**/*.js', ['scripts']);
});

gulp.task('scripts:build', ['scripts'], function() {
  return gulp.src('./dist/script.js')
             .pipe($.rev())
             .pipe(gulp.dest('./dist/js'))
             .pipe($.rev.manifest())
             .pipe(gulp.dest('./dist/js'));
})

gulp.task('images', function() {
  gulp.src([
    './app/images/**/*'
  ])
  .pipe(gulp.dest('./dist/images'))
})

gulp.task('images:watch', function() {
  gulp.watch('app/images/**/*', ['images']);
});

gulp.task('images:build', ['images'], function() {
  return gulp.src('./dist/images/**/*')
             .pipe($.rev())
             .pipe(gulp.dest('./dist/images'))
             .pipe($.rev.manifest())
             .pipe(gulp.dest('./dist/images'));
})

gulp.task('semantic', function() {
  gulp.src([
    './app/semantic/**/*'
  ])
  .pipe(gulp.dest('./dist/semantic'))
})

gulp.task('semantic:build', ['semantic'], function() {
  return gulp.src('./dist/semantic/**/*')
             .pipe($.rev())
             .pipe(gulp.dest('./dist/semantic'))
             .pipe($.rev.manifest())
             .pipe(gulp.dest('./dist/semantic'));
})
