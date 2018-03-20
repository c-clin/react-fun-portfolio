// dependencies

var gulp = require('gulp');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var changed = require('gulp-changed');



var SCSS_SRC = './src/assets/scss/**/*.scss';
var SCSS_DEST = './src/assets/css';


// compile SCSS
gulp.task('compile_scss', function() {

	gulp.src(SCSS_SRC)
	.pipe(sass().on('error', sass.logError))
	.pipe(changed(SCSS_DEST))
	.pipe(gulp.dest(SCSS_DEST));



});

// watch scss
gulp.task('watch_scss', function() {
	gulp.watch(SCSS_SRC, ['compile_scss']);
});

// set watch scss to default task
gulp.task('default', ['watch_scss']);