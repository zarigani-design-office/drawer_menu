/*===初期設定====*/
var folders = {
	scss : 'scss',//scssフォルダ
	css : 'css',//出力するcssフォルダ
	js : 'js',//jsフォルダ
	image_src : 'src',//圧縮前の画像フォルダ
	image_dist : 'img',//圧縮後の画像フォルダ
	sync: false,//BrowserSyncを使用するか。真偽値
	proxy : '',//BrowserSyncのプロキシ使わない場合は空。PHPなど動かす時。localhost:8888/project/など
};
/*===初期設定ここまで====*/


/*+++gulpプラグインの読み込み+++*/
var gulp = require('gulp');
// エラーで止めない
var plumber = require('gulp-plumber');
// Sassをコンパイルするプラグインの読み込み
var sass = require('gulp-sass');
// 変更されたファイルだけを処理させるプラグインの読み込み
var changed  = require('gulp-changed');
var header = require('gulp-header');
var replace = require('gulp-replace');
/*+++gulpプラグインの読み込みここまで+++*/




/*+++監視+++*/
gulp.task('default', function () {
	//scss監視
	gulp.watch(folders.scss + '/*', function(){
		gulp.src(folders.scss + '/*' + '.scss')
			.pipe(plumber())
			.pipe(sass({
			outputStyle : 'expanded'
		}))
			.pipe(replace(/@charset "UTF-8";/g, ''))
			.pipe(header('@charset "UTF-8";\n\n'))
			.pipe(gulp.dest(folders.css));
	});
});