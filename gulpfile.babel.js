'use strict';

import gulp from 'gulp';
import del from 'del';
import runSequence from 'run-sequence';
const $ = require('gulp-load-plugins')();


gulp.task('start', (done) => {
  runSequence('clean', 'babel', 'watch', 'nodemon', () => done());
});

gulp.task('babel', () => {
  return gulp.src('src/**/*.js')
   .pipe($.changed('lib'))
   .pipe($.babel())
   .pipe(gulp.dest('lib'));
})

gulp.task('watch', () => {
  gulp.watch('src/**/*.js', ['babel']);
})

gulp.task('nodemon', () => {
  $.nodemon({
    script: 'lib/app.js',
    ext: 'js',
    watch: 'lib',
    env: {'NODE_ENV': 'development'}
  });
})

gulp.task('clean', () => {
  return del.sync(['lib']);
})
