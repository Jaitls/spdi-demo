var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var flatten = require('gulp-flatten');
var ngAnnotate = require('gulp-ng-annotate');
var minifyCSS = require('gulp-minify-css');
var mainBowerFiles = require('main-bower-files');
var del = require('del');


gulp.task('bower-main', function() {
    return gulp.src(mainBowerFiles(), {
            base: 'bower_components'
        })
        .pipe(gulp.dest('src/main_bower_components'));
});

gulp.task('copy-fonts', ['bower-main'], function() { 
    gulp.src('src/**/*.{ttf,woff,woff2,eof,svg,otf}') 
        .pipe(flatten())
        .pipe(gulp.dest('dist/fonts')); 
});

gulp.task('copy-maps', ['bower-main'], function() { 
    gulp.src('src/**/*.map') 
        .pipe(flatten())
        .pipe(gulp.dest('dist/js')); 
});

// minify and compress javascript files
gulp.task('build-js', ['bower-main'], function() {
    return gulp.src(['src/main_bower_components/**/*.js', 'src/module.js', 'src/controllers/**/*.js'])
        .pipe(concat('app.js'))
        .pipe(ngAnnotate())
        .pipe(gulp.dest('dist/js'))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
});

gulp.task('build-css', ['bower-main'], function() {
    return gulp.src(['src/**/*.css'])
        .pipe(concat('app.css'))
        .pipe(gulp.dest('dist/css'))
        .pipe(minifyCSS())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('dist/css'));
});


// watch files for changes
gulp.task('watch', function() {
    gulp.watch('src/**/*.js', ['build-js']);
});

// default task
gulp.task('default', ['bower-main', 'copy-fonts', 'copy-maps', 'build-js', 'build-css']);

// cleanup dist folders
gulp.task('clean', function() {
    del(['dist/js/*', 'dist/css/*', 'dist/fonts/*', 'src/main_bower_components/*']);
});