var gulp 				= require('gulp');
var concat  		= require('gulp-concat');
var uglify 			= require('gulp-uglifyjs');
var saveLicense = require('uglify-save-license');
var	minifyCSS		= require('gulp-minify-css');
var	clean 			= require('gulp-clean');
var sass 				= require('gulp-sass');

var paths = {
	npm: 			"node_modules/"
}

var resource_path = "../_WWW/resource/";
var web_path = {
	scripts : resource_path + 'scripts/',
	styles : resource_path + 'css/',
	fonts : resource_path + 'fonts/'
}

gulp.task('default',function(){
});

gulp.task('sass', function(){
	gulp.src(paths.npm + '@fortawesome/fontawesome-free/scss/**/*.scss')    // 指定要處理的 Scss 檔案目錄
	.pipe(sass())         // 編譯 Scss
	.pipe(gulp.dest(web_path.styles));  // 指定編譯後的 css 檔案目錄
});

gulp.task('scripts', function(){

	gulp.src([
		paths.npm + "jquery/dist/jquery.slim.min.js",									// jQuery
		paths.npm + "bootstrap/dist/js/bootstrap.bundle.min.js", 			// bootstrap
		paths.npm + "vue/dist/vue.js",													 			// vue
		paths.npm + "vue/dist/vue.min.js",													 	// vue
		paths.npm + "vue-w3c-valid/dist/simple.js",										// vue w3c valid
		paths.npm + "vue-lazyload/vue-lazyload.js",										// vue lazyload
	])
	.pipe(gulp.dest(web_path.scripts))		// 為了知道 plugin.js 有哪些保留至 dist 資料夾

});

gulp.task('styles', function(){

	gulp.src([
		paths.npm + "bootstrap/dist/css/bootstrap.min.css",					// bootstrap
	])
	.pipe(gulp.dest(web_path.styles))

});

gulp.task('fonts', function(){

	gulp.src([
		paths.npm + '@fortawesome/fontawesome-free/webfonts/*.*',		// font awesome
	])
	.pipe(gulp.dest(web_path.fonts));
});

gulp.task('default',['scripts','sass','styles','fonts']);