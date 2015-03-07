var gulp = require('gulp'); 
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
//var rename = require('gulp-rename');
var ngAnnotate = require('gulp-ng-annotate')
var mainBowerFiles = require('main-bower-files');
var del = require('del');


gulp.task('bower-main', function() {
  return gulp.src(mainBowerFiles(), {
      base: 'bower_components'
    })
    .pipe(gulp.dest('src/main_bower_components'));
});


// minify and compress javascript files
gulp.task('build-js', function() {
	return gulp.src(['src/**/module.js','src/**/*.js'])
        .pipe(concat('app.js'))
        .pipe(ngAnnotate())
//        .pipe(rename('all.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
});

// watch files for changes
gulp.task('watch', function() {
    gulp.watch('src/**/*.js', ['build-js']);
});

// default task
gulp.task('default', ['build-js']);

// cleanup build folder
gulp.task('clean', function () {  
	del(['dist/js/*.js', 'src/main_bower_components']);
});