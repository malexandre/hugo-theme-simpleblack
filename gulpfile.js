const gulp = require('gulp')
const plugins = require('gulp-load-plugins')()

const scss = () => {
    gulp.src('static/scss/styles.scss')
        .pipe(plugins.plumber())
        .pipe(plugins.sass())
        .pipe(plugins.csso({ comments: false }))
        .pipe(plugins.rename('styles.min.css'))
        .pipe(gulp.dest('static/css/'))
}

gulp.task('scss', scss)
gulp.task('watchers', ['scss'], () => {
    gulp.watch('static/scss/**/*.scss', ['scss'])
})

gulp.task('default', ['watchers'])
