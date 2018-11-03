var gulp   = require('gulp');
var bs     = require('browser-sync');
var reload = bs.reload;
var sass   = require('gulp-sass');

gulp.task('serve', function () {
    bs.init({
		proxy: 'localhost'
    }); 

	gulp.watch("./styles/*.scss", ['sass']);
	//gulp.watch("./scripts/*.js").on('change', reload);
	//gulp.watch("./*.php").on('change', reload);
});

gulp.task('sass', function () {
      gulp.src('./styles/*.scss')
	  .pipe(sass().on('error', sass.logError))
	  .pipe(gulp.dest('./styles'))
	  .pipe(bs.stream());
});

gulp.task('default', ['serve']);
