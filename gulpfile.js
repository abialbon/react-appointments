const
    gulp        = require('gulp'),
    browserify  = require('gulp-browserify'),
    browserSync = require('browser-sync');

const
    src     = './src/',
    build   = './build/';

gulp.task('browser-sync', () => {
   browserSync.init({
       server: {
           baseDir: build
       }
   });
});

gulp.task('js', () => {
   return gulp.src( src + 'js/app.js')
       .pipe(browserify({
           transform: 'reactify',
           debug: true
       }))
       .on('error', (err) => {
           console.log('Error: ' + err.message )
       })
       .pipe(gulp.dest(build + 'js'));
});

gulp.task('css', () => {
   return gulp.src(src + 'css/**/*.css')
       .pipe(gulp.dest(build + 'css'))
       .pipe(browserSync.stream())
});

gulp.task('html', () => {
    return gulp.src(src + '**/*.html')
        .pipe(gulp.dest(build));
});

// Reload the browser
gulp.task('reload', () => {
    browserSync.reload();
});

gulp.task('watch', () => {
   gulp.watch( src + 'js/**/*', ['js', 'reload']);
   gulp.watch( src + 'css/**/*.css', ['css']);
   gulp.watch( src + '*.html', ['html', 'reload']);
});


gulp.task('serve', ['browser-sync', 'watch', 'html', 'css', 'js']);