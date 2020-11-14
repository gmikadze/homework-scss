'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
 
sass.compiler = require('node-sass');
 
gulp.task('sass', function () {
  return gulp.src('styles/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('style'));
});
 
gulp.task('watch', function () {
  gulp.watch('styles/main.scss', gulp.parallel('sass'));
});