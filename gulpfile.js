var source = require('vinyl-source-stream');
var gulp = require('gulp');
var gutil = require('gulp-util');
var browserify = require('browserify');
var reactify = require('reactify');
var watchify = require('watchify');
var notify = require('gulp-notify');
var uglify = require('gulp-uglify');
var buffer = require('vinyl-buffer');

var scriptsDir = './app';
var buildDir = './dist';

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
    var props = {entries: [scriptsDir + '/' + file], debug: true, cache: {}, packageCache: {}};
    var bundler = browserify(props);
    if (watch) {
        bundler = watchify(bundler);
    }
    bundler.transform(reactify);
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

gulp.task('build', function () {
    return buildScript('App.js', false);
});

gulp.task('default', ['build'], function () {
    return buildScript('App.js', true);
});