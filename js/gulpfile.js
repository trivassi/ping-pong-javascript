var browserify = require('browserify');
var source = require('vinyl-source-stream');

var gulp = require('gulp');
//because we need to load the gulp package into a gulp variable so that we can use it in our code

var concat = require('gulp-concat');


gulp.task('myTask', function() {
  //calling the task method defined in the gulp package to create a task
  //first is a string representing the name of the task, so we can refer to it later
  //second is the function to run when we tell gulp to run this task
  console.log('hello gulp');
});

gulp.task('jsBrowserify', ['concatInterface'], function() {
  return browserify({ entries: ['./tmp/allConcat.js'] })
    .bundle()
    .pipe(source('app.js'))
    .pipe(gulp.dest('./build/js'));
});

gulp.task('concatInterface', function() {
  return gulp.src(['./js/pingpong-interface.js', './js/signup-interface.js'])
    .pipe(concat('allConcat.js'))
    .pipe(gulp.dest('./tmp'));
});
