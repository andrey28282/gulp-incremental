
const gulp = require("gulp-v4"),
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
gulp_changed = require("gulp-changed");


//======================Dev=========================================
//настройки browser-sync
var config = {
    server: {
        baseDir: "./public"
    }
};

//очищаю assets
gulp.task('clean-assets', function () {
    return gulp.src('public/assets/*', { read: false })
        .pipe(cleanDir())
        .pipe(notify('Очистка assets завершена'));
});

//работаю с css 
gulp.task('css-dev', function () {
    return gulp.src('resources/sass/*.scss')
        .pipe(gulp_changed('public/assets/css/', { hasChanged: changed.compareContents }))
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(sass({ includePaths: require('node-normalize-scss').includePaths }).on('error', notify.onError({ message: "<%= error.message %>", title: "Ошибка Sass" })))
        .pipe(sourcemaps.write())
        .pipe(rename({ prefix: "bundle-" }))
        .pipe(gulp.dest('public/assets/css/'))
        .pipe(notify('Обработка css завершена'))
        .pipe(browserSync.stream());
});




//работаю с js
gulp.task('js-dev', function () {
    return gulp.src('resources/js/*.js')
        .pipe(gulp_changed('public/assets/js/', { hasChanged: changed.compareContents }))
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(sourcemaps.write())
        .pipe(rename({ prefix: "bundle-" }))
        .pipe(gulp.dest('public/assets/js/'))
        .pipe(notify('Обработка js завершена'));
});

//Вспомогательная функция которая обновляет страницу при изменении js
gulp.task('js-watch',function(){
    browserSync.reload();
})

//Отслеживаю изменении
gulp.task('watch',function(){
    browserSync.init(config);
    gulp.watch('resources/sass/*.scss', gulp.series('css-dev'));
    gulp.watch('resources/js/*.js', gulp.series('js-dev', 'js-watch'));
})
//====================================================================




//======================Build=========================================
//работаю с css 
gulp.task('css-build', function () {
    return gulp.src('resources/sass/*.scss')
        .pipe(sass({ includePaths: require('node-normalize-scss').includePaths }).on('error', notify.onError({ message: "<%= error.message %>", title: "Ошибка Sass" })))
        .pipe(concat_css("bundle.min.css"))
        .pipe(clean_css())
        .pipe(gulp.dest('public/assets/css/'))
        .pipe(notify('Обработка css завершена'));
});

//работаю с js
gulp.task('js-build', function () {
    return gulp.src('resources/js/*.js')
        .pipe(concat('bundle.js'))
        .pipe(uglify())
        .pipe(gulp.dest('public/assets/js/'))
        .pipe(notify('Обработка js завершена'));
});
//====================================================================








//=====================================================================
// gulp.task('html-dev', function () {  // создано для теста
    // return gulp.src('resources/*.html')
    //     .pipe(newer('public/'))
    //     .pipe(gulp.dest('public/'))
// });

// gulp.task('html-build', function () {   // создано для теста
    // return gulp.src('resources/*.html')
    //     .pipe(gulp.dest('public/'))
// });
//=====================================================================