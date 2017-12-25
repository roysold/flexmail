var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('styles', function(){
    gulp.src('stylesheet.css')
    .pipe(autoprefixer)
    .pipe(gulp.dest('build'));
})

gulp.task('watch', function() {
    gulp.watch('stylesheet.css', ['styles']);
})