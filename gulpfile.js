var gulp = require('gulp');
var rename = require('gulp-rename');
var sass = require('gulp-sass');


function css_style(done) {
    gulp.src('./scss/**/*.scss')
    .pipe(sass({
        errLogToConsole: true,
        outputStyle: 'compressed'
    }))
    .on('error', console.error.bind(console))
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('./css/'));

    done();
}

function watchSass() {
    gulp.watch('./scss/**/*', css_style);

}

gulp.task('default', watchSass);