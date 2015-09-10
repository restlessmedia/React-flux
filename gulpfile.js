process.env.NODE_ENV = 'production';

var source = require('vinyl-source-stream');
var gulp = require('gulp');
var gutil = require('gulp-util');
var browserify = require('browserify');
var watchify = require('watchify');
var notify = require('gulp-notify');
var uglify = require('gulp-uglify');
var buffer = require('vinyl-buffer');
var sass = require('gulp-sass');

var scriptsDir = './app';
var buildDir = './dist';
var production = process.env.NODE_ENV === 'production';

function handleErrors() {
    var args = Array.prototype.slice.call(arguments);
    notify.onError({
        title: 'Compile Error',
        message: '<%= error.message %>'
    }).apply(this, args);
    this.emit('end'); // Keep gulp from hanging on this task
}

// Based on: http://blog.avisi.nl/2014/04/25/how-to-keep-a-fast-build-with-browserify-and-reactjs/
function buildScript(file, watch) {
    var props = {entries: [scriptsDir + '/' + file], debug: !production, cache: {}, packageCache: {}};
    var bundler = browserify(props);
    if (watch) {
        bundler = watchify(bundler);
    }
    function rebundle() {
        var stream = bundler.bundle();
        return stream.on('error', handleErrors)
            .pipe(source(file))
            .pipe(buffer())
            .pipe(uglify())
            .pipe(gulp.dest(buildDir + '/'));
    }

    bundler.on('update', function () {
        rebundle();
        gutil.log('Rebundle...');
    });
    return rebundle();
}

gulp.task('sass', function () {
    return gulp.src('./sass/**/*.scss')
        .pipe(sass({outputStyle: 'compressed'}).on('error', handleErrors))
        .pipe(gulp.dest(buildDir + '/css'));
});

gulp.task('sass:watch', function () {
    gulp.watch('./sass/**/*.scss', ['sass']);
});

gulp.task('build', function () {
    return buildScript('Main.js', false);
});

gulp.task('default', ['sass:watch'], function () {
    return buildScript('Main.js', true);
});