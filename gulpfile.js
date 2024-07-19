
const {src, dest, watch,parallel, series} = require('gulp');

const scss   = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat');//сжимате один файл в один file.
const uglify = require('gulp-uglify-es').default;
const browserSync = require('browser-sync').create();
const autoprefixer = require('gulp-autoprefixer');
const clean = require('gulp-clean');
const gulppug = require('gulp-pug')




function pug(){
    return src([
        'app/index.pug'
    ])
    .pipe(gulppug())
    .pipe(dest('dist'))
}


function scripts(){
    return src([
        'app/js/crausel-Us.js',

    ])
    .pipe(concat('crausel-Us.min.js'))
    .pipe(uglify())
    .pipe(dest('app/js'))
    .pipe(browserSync.stream())
}

function styles(){
    return src('app/scss/header-section.scss')
    .pipe(autoprefixer({overrideBrowserslist:['last 10 version']}))
    .pipe(concat('header-section.min.css'))
    .pipe(scss())
    .pipe(dest('app/css'))
    .pipe(browserSync.stream())
}

function watching(){
    watch(['app/scss/style.scss'], styles)
    watch(['app/scss/header-section.scss'], styles)
    watch(['app/js/crausel-Us.js'], scripts)
    watch(['app/*.pug']).on('change', browserSync.reload);

}

function browsersync(){
    browserSync.init({
        server: {
            baseDir: "app/"
        }
    });
}

function cleanDist(){
    return src('dist')
    .pipe(clean())
}


function building(){ //билд проекта(готовка проекта)
    return src([
        'app/css/header-section.min.css',
        'app/js/main.min.js',
        'app/js/crausel.min.js',
        'app/js/crausel-Us.min.js',
        'app/index.html'
    ],{base: 'app'})
    .pipe(dest('dist'))
}




exports.styles = styles;
exports.scripts = scripts;
exports.pug = pug;
exports.watching = watching;
exports.browsersync = browsersync;



// exports.App = parallel(styles, scripts, pugApp, browsersync, watching);
exports.build = series(cleanDist , building);
exports.default = parallel(styles, scripts, browsersync, watching);
