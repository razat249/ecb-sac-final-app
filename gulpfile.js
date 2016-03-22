var gulp = require('gulp');
var uglify = require('gulp-uglify');
var uglifycss = require('gulp-uglifycss');

gulp.task('mincss', function() {
	return gulp.src('public/stylesheets/*.css')
		.pipe(uglifycss())
		.pipe(gulp.dest('public/dists'));
});

gulp.task('minjs', function() {
	return gulp.src('public/javascripts/controllers/*.js')
		.pipe(uglify({
			mangle: false
		}))
		.pipe(gulp.dest('public/dists'));
});

gulp.task('watch', function() {
	gulp.watch('public/stylesheets/*.css', ['mincss']);
	gulp.watch('public/javascripts/controllers/*.js', ['minjs']);
});

gulp.task('default', ['mincss', 'minjs', 'watch']);