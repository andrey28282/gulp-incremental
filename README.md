# GulpJs Build
*Готовый шаблон сборки frond-end проекта.*

### Содержание
##### Плагины:
- [gulp](https://www.npmjs.com/package/gulp "NPM - документация") 
- [gulp-sass](https://www.npmjs.com/package/gulp-sass "NPM - документация") 
- [browser-sync](https://browsersync.io/docs/gulp " Документация") 
- [gulp-clean](https://www.npmjs.com/package/gulp-clean " Документация") 
- [gulp-clean-css](https://www.npmjs.com/package/gulp-clean-css "NPM - документация") 
- [gulp-concat](https://www.npmjs.com/package/gulp-concat "NPM - документация") 
- [gulp-concat-css](https://www.npmjs.com/package/gulp-concat-css "NPM - документация") 
- [gulp-sourcemaps](https://www.npmjs.com/package/gulp-sourcemaps "NPM - документация") 
- [gulp-uglify](https://www.npmjs.com/package/gulp-uglify "NPM - документация") 
- [gulp-rename](https://www.npmjs.com/package/gulp-rename "NPM - документация") 
- [gulp-notify](https://www.npmjs.com/package/gulp-notify "NPM - документация") 
- [gulp-plumber](https://www.npmjs.com/package/gulp-plumber "NPM - документация") 
- [gulp-changed](https://www.npmjs.com/package/gulp-changed "NPM - документация") 
- [gulp-postcss](https://www.npmjs.com/package/gulp-postcss "NPM - документация") 
- [autoprefixer](https://www.npmjs.com/package/autoprefixer "NPM - документация") 
- [css-mqpacker](https://www.npmjs.com/package/css-mqpacker "NPM - документация") 
- [sort-css-media-queries](https://www.npmjs.com/package/sort-css-media-queries "NPM - документация") 
- [postcss-import](https://www.npmjs.com/package/postcss-import "NPM - документация") 
- [babel 7](https://babeljs.io/setup#installation " Документация") 

##### Структура  каталогов
- *resources/* - содержит  файлы которые будут обработаны Gulp.
- *resources/js* - cодержит  js файлы которые будут обработаны Gulp.
- *resources/sass* - содержит  scss файлы которые будут обработаны Gulp.


- *public/assets* - cодержит файлы которые обработал (собрал) Gulp.
- *public/static* - содержит файлы которые не нужно обрабатывать.


### Установка
1. Установить NodeJs
2. Установить пакеты: `$ npm  install`
3. Разместить свои файлы


### Как использовать?
- для разработки  использовать: `$ npm run dev`
- для сборки проекта использовать: `$ npm run build`


#### dev (основные операции)::

| css | js |
| ------ | ------ |
|рендеринг sass| babel 7|
|autoprefixer| создание sourcemaps |
|css_mqpacker|rename файлов|
|postcss_import (normalize.css)|browser-sync|
|создание sourcemaps||
|rename файлов ||
|browser-sync||


#### build (основные операции):

| css | js |
| ------ | ------ |
|рендеринг sass| babel 7|
|autoprefixer|concat js|
|css_mqpacker|uglify|
|postcss_import (normalize.css)||
|concat css||
|clean css||



# License
*Универсальная - бесплатная)*
