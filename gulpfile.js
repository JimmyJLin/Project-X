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
// gulp.task('script:build', ['js'], function(){
//   return gulp.src('./dist/script.js')
//              .pipe($.rev())
//              .pipe(gulp.dest('./dist'))
//              .pipe($.rev.manifest())
//              .pipe(gulp.dest('./dist'));
// })

// gulp.task('copy', function(){
//   gulp.src([
//     '*app/js/**/*'
//   ], {
//     dot: true
//   }).pipe(gulp.dest('./dist/script.js'))
//     .pipe($.size({title: 'copy'}))
// })

// gulp.task('lint', () =>
//   gulp.src('app/js/**/*.js')
//     .pipe($.eslint())
//     .pipe($.eslint.format())
//     .pipe($.if(!browserSync.active, $.eslint.failOnError()))
// )

// gulp.task('images', () =>
//   gulp.src('app/images/**/*')
//     .pipe($.cache($.imagemin({
//       progressive: true,
//       interlaced: true
//     })))
//     .pipe(gulp.dest('dist/images'))
//     .pipe($.size({title: 'images'}))
// )

// glp.task('script', () =
//   gulp.src([
//     './app/js/script.js'
//   ])
//   .pipe($.newer('.tmp/scripts'))
//   .pipe($.sourcemaps.init())
//   .pipe($.babel())
//   .pipe($.sourcemaps.write())
//   .pipe(gulp.dest('.tmp/scripts'))
//   .pipe($.concat('main.min.js'))
//   .pipe($.uglify({preserveComments: 'some'}))
//   // Output files
//   .pipe($.size({title: 'scripts'}))
//   .pipe($.sourcemaps.write('.'))
//   .pipe(gulp.dest('dist/js'))
// )
