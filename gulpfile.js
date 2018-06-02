var gulp = require('gulp');
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var requireDir = require('require-dir');



//Import file
requireDir('./gulp');


// watch files for changes and reload
gulp.task('serve', function () {
    browserSync({
        server: {
            baseDir: './'
        }
    });
});

gulp.task('watch', function() {
    gulp.watch(['./**/*.html', 'css/**/*.css', 'js/**/*.js'], {cwd: './'}, reload);
    gulp.watch(['./**/*.ts'], {cwd: './'}, ['typescript']);

});





gulp.task('default', ['serve', 'watch', 'typescript']);