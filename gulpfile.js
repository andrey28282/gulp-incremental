
const gulp = require("gulp"),
sass = require('gulp-sass'),
browserSync = require('browser-sync').create(), 
cleanDir = require('gulp-clean'),
clean_css = require('gulp-clean-css'),
concat = require('gulp-concat'),
concat_css = require('gulp-concat-css'),
sourcemaps = require('gulp-sourcemaps'),
uglify = require("gulp-uglify"),
rename = require("gulp-rename"),
notify = require("gulp-notify"),
plumber = require("gulp-plumber"),
changed = require("gulp-changed"),
postcss = require("gulp-postcss"),
autoprefixer = require('autoprefixer'),
css_mqpacker = require("css-mqpacker"),
sortCSSmq = require('sort-css-media-queries'),
postcss_import = require("postcss-import");



//======================Dev=========================================
//настройки browser-sync
var config = {
    server: {
        baseDir: "./public"
    }
};

//плагины postcss
var postcss_plugins = [
    autoprefixer({ browsers: ['> 2%','IE 11'] }),
    css_mqpacker({ sort: sortCSSmq}),
    postcss_import()
];


//очищаю assets
gulp.task('clean-assets', function () {
    return gulp.src('public/assets/*', { read: false })
        .pipe(cleanDir());
});

//работаю с css 
gulp.task('css-dev', function () {
    return gulp.src('resources/sass/*.scss')
        .pipe(changed('public/assets/css/', { hasChanged: changed.compareContents }))
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', notify.onError({ message: "<%= error.message %>", title: "Ошибка Sass" })))
        .pipe(postcss(postcss_plugins))
        .pipe(sourcemaps.write())
        .pipe(rename({ prefix: "bundle-" }))
        .pipe(gulp.dest('public/assets/css/'))
        .pipe(browserSync.stream());
});




//работаю с js
gulp.task('js-dev', function () {
    return gulp.src('resources/js/*.js')
        .pipe(changed('public/assets/js/', { hasChanged: changed.compareContents }))
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(sourcemaps.write())
        .pipe(rename({ prefix: "bundle-" }))
        .pipe(gulp.dest('public/assets/js/'))
});

//Вспомогательная функция которая обновляет страницу при изменении js
gulp.task('js-watch',function(){
    browserSync.reload();
})

//Отслеживаю изменения
gulp.task('watch',function(){
    browserSync.init(config);
    gulp.watch('resources/sass/**/*.scss', gulp.series('css-dev'));
    gulp.watch('resources/js/**/*.js', gulp.series('js-dev', 'js-watch'));
    gulp.watch('public/*.html').on('change', browserSync.reload);
})
//====================================================================




//======================Build=========================================
//работаю с css 
gulp.task('css-build', function () {
    return gulp.src('resources/sass/*.scss')
        .pipe(sass().on('error', notify.onError({ message: "<%= error.message %>", title: "Ошибка Sass" })))
        .pipe(postcss(postcss_plugins))
        .pipe(concat_css("bundle.min.css"))
        .pipe(clean_css())
        .pipe(gulp.dest('public/assets/css/'));
});

//работаю с js
gulp.task('js-build', function () {
    return gulp.src('resources/js/*.js')
        .pipe(concat('bundle.js'))
        .pipe(uglify())
        .pipe(gulp.dest('public/assets/js/'));
});
//====================================================================








//=====================================================================
// gulp.task('html-dev', function () {  // создано для теста
    // return gulp.src('resources/*.html')
    //     .pipe(gulp.dest('public/'))
// });

// gulp.task('html-build', function () {   // создано для теста
    // return gulp.src('resources/*.html')
    //     .pipe(gulp.dest('public/'))
// });
//=====================================================================