var gulp = require('gulp');
var browserify = require('browserify');
var reactify = require('reactify');
var source = require('vinyl-source-stream');

// bundle the react stuff
gulp.task('browserify', function(){
  browserify('./src/js/main.js')
    .transform('reactify')
    .bundle()
    .pipe(source('main.js'))
    .pipe(gulp.dest('dist/js'));
});

// copy all the html, css and vendors libraries
gulp.task('copy', function(){
  gulp.src('src/index.html')
    .pipe(gulp.dest('dist'));
  gulp.src('src/css/*.*')
    .pipe(gulp.dest('dist/css'));
  gulp.src('src/js/vendors/*.*')
    .pipe(gulp.dest('dist/js'));
})

// keep track of the changes and run the tasks 
gulp.task('default', ['browserify', 'copy'], function() {
  return gulp.watch('src/**/*.*', ['browserify', 'copy']);
});
