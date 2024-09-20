const gulp = require('gulp'); // Gulp
const cssnano = require('gulp-cssnano'); // Gulp Cssnano
const sass = require('gulp-sass'); // Gulp Cssnano
const uglify = require('gulp-uglify'); // Gulp Uglify


// TODO: Write a task that will use cssnano

// TODO: Write a task that will use uglify

// TODO: Write a task that will watch .scss and script tags (changes)

// TODO: Write a task that will be a default task that will run all 3 tasks together


gulp.task('cssnano', () => {
    return gulp.src('styles/*.css')
.pipe(cssnano())
.pipe(gulp.dest('dist/css'));
});

gulp.task('sass', () => {
    return gulp.src('styles/*.css')
.pipe(sass())
.pipe(gulp.dest('dist/css'));
});

gulp.task('uglify', () =>{
    return gulp.src('js/**/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'));
});




