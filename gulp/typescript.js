'use strict';
var gulp = require('gulp');
var ts = require('gulp-typescript');
var sourcemaps = require('gulp-sourcemaps');
var browserSync = require('browser-sync');
// const changed = require('gulp-changed');
var changedInPlace = require('gulp-changed-in-place');

var SRC = ['typescript/**/*.ts'];
var DESTINATION = 'js';


var tsProject = ts.createProject(
    './tsconfig.json',
    {
        noImplicitAny: true
    });

gulp.task('typescript', function() {
    return gulp.src(SRC)
        .pipe(changedInPlace())
        .pipe(sourcemaps.init()) // This means sourcemaps will be generated
        .pipe(tsProject())
        // .pipe(...) // You can use other plugins that also support gulp-sourcemaps
        .pipe(sourcemaps.write('./')) // Now the sourcemaps are added to the .js file
        .pipe(gulp.dest(DESTINATION));
        // .pipe(browserSync.stream());
});

gulp.task('typescript_all', function () {
    return gulp.src(SRC)
        .pipe(sourcemaps.init()) // This means sourcemaps will be generated
        .pipe(tsProject())
        // .pipe(...) // You can use other plugins that also support gulp-sourcemaps
        .pipe(sourcemaps.write('./')) // Now the sourcemaps are added to the .js file
        .pipe(gulp.dest(DESTINATION));
    // .pipe(browserSync.stream());
});