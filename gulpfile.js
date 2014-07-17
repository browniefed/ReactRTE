var gulp = require('gulp');
var browserify = require('gulp-browserify');
var concat = require('gulp-concat');

gulp.task('browserify', function() {
	gulp.src('js/src/ReactRTE.js')
		.pipe(browserify({transform: 'reactify'}))
		.pipe(concat('ReactRTE.js'))
		.pipe(gulp.dest('js'));
});

gulp.task('default', ['browserify']);

gulp.task('watch', function() {
	gulp.watch('js/src/**/*.*', ['default']);
});