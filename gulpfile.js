var Promise = require('es6-promise').polyfill();
var gulp = require('gulp');
var watch = require('gulp-watch');
var shell = require('gulp-shell')
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');
var browserSync = require('browser-sync').create();
var concat = require('gulp-concat');

var paths = {
	'src':['./models/**/*.js','./routes/**/*.js', 'keystone.js', 'package.json'],
	'style': {
		all: './public/styles/**/*.scss',
		output: './public/styles/'
	},
	'js': {
		all: './public/js/components/**/*.js',
		output: './public/js/'
	}
};

gulp.task('watch:sass', function () {
	gulp.watch(paths.style.all, ['sass']);
});

gulp.task('sass', function(){
	gulp.src(paths.style.all)
		.pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(sourcemaps.init({ loadMaps: true }))
        .pipe(autoprefixer({ browsers: ['last 2 version'] }))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(paths.style.output))
        .pipe(browserSync.stream());
});

// Watch for only scripts
gulp.task('watch:js', () => {
  gulp.watch(paths.js.all, ['js-build']);
});

// Task for minifying and concatenating only scripts (non-dependencies)
gulp.task('js-build', () => {
  return gulp.src(['./public/js/components/main.js', './public/js/components/app.js', './public/js/components/slide-out.js'])
    .pipe(concat('main.js'))
    .pipe(gulp.dest(paths.js.output));
});

gulp.task('browser-sync', function(){
	browserSync.init({
		proxy: 'http://localhost:3000',
		port: '4000'
	});
});

gulp.task('runKeystone', shell.task('node keystone.js'));

gulp.task('watch', [
	'watch:sass',
	'watch:js'
]);

gulp.task('serve', [
	'watch', 
	'browser-sync'
]);

gulp.task('default', ['watch', 'runKeystone', 'browser-sync']);
