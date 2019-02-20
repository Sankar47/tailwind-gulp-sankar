const gulp = require("gulp");

class TailwindExtractor {
  static extract(content) {
    return content.match(/[A-z0-9-:\/]+/g);
  }
}

gulp.task('css', function () {
    var postcss = require('gulp-postcss');
    var tailwindcss = require('tailwindcss');
    var purgecss = require('gulp-purgecss');
  
    return gulp.src('src/styles.css')
      // ...
      .pipe(postcss([
        // ...
        tailwindcss('./tailwind.js'),
        require('autoprefixer'),
        // ...
      ]))
      // ...

      //...
      .pipe(purgecss({
        content: ['*.html'],
        extractors: [
          {
            extractor: TailwindExtractor,
            extensions: ["html"]
          }
        ]
      }))
      //...
      .pipe(gulp.dest('./'));
});