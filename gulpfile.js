function swallowError (error) {
    //If you want details of the error in the console
    console.log(error.toString());
    this.emit('end');
}

var gulp = require('gulp'),
    less = require('gulp-less'),
    autoprefixer = require('gulp-autoprefixer'),
    notify = require('gulp-notify'),
    concat = require('gulp-concat'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify'),
    sourcemaps = require('gulp-sourcemaps'),
    livereload = require('gulp-livereload'),
    del = require('del');

gulp.task('styles', function() {
  return gulp.src('less/style.less')
    .pipe(less())
    .on('error', swallowError)
    .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
    .pipe(gulp.dest('./css/'))
    .pipe(notify({ message: 'Styles task complete' }));
});

gulp.task('default', function() {
    gulp.start('styles');
});

gulp.task('watch', function() {

  // Watch .scss files
  gulp.watch(['style.less','less/**/*.less'], ['styles']);

  livereload.listen();
  gulp.watch(['style.css', 'js/**/*.js']).on('change', livereload.changed);
});
