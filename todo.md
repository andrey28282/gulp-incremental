# gulp-incremental

--


- игноры системных папок
- игнор на папку public/assets/
- gulp v4
- рендер sass
	- из resources/sass/*.scss - в public/assets/css/
	- только измененные файлы
	- перименовывать c приставой `bundle-` (common.scss -> bundle-common.css)

режимы сборки  
dev (инкременталдьная)

- уведемоления при ошибках,
- если ошибка - не падать
- не минифицироватьw
- использовать sourcemaps
- browser-sync
	- работаем с папкой public
	- она должна быть корневой.

продакшн (build)

- перед сборкой `assets/` очистить ее полностью
- уведемоления при ошибках,
- если ошибка - ПАДАТЬ
- минифицировать!
- без sourcemaps


npm скрипты

- `npm run dev`
- `npm run build`
