const gulp = require("gulp");
const browserSync = require("browser-sync").create();
gulp.task("serve", () => {
  browserSync.init({
    server: {
      baseDir: "./", // Путь к папке с вашим проектом
    },
  });

  // Прослушивание изменений в файлах и перезагрузка страницы
  gulp.watch("./*.html").on("change", browserSync.reload);
  // Здесь вы можете добавить другие типы файлов, которые нужно отслеживать
});

// Задача по умолчанию
gulp.task("default", gulp.series("serve"));
