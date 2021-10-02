const { src, dest, watch } = require("gulp");
const plumber = require("gulp-plumber")

const { staticDirectory, sourceDirectory, publicDirectory } = require('./config');

module.exports = {
    /**
     *
     */
    copy: function copy() {
        return src(`${staticDirectory}/**/*`)
            .pipe(plumber())
            .pipe(dest(publicDirectory));
    },
    /**
     *
     */
    scripts: function scripts() {
        const webpackStream = require('webpack-stream');
        const webpackConfig = require('../webpack.config');

        return src(webpackConfig.entry)
            .pipe(plumber())
            .pipe(webpackStream(webpackConfig))
            .pipe(dest(webpackConfig.output.path));
    },
    /**
     *
     */
    serve: function serve() {
        const browserSync = require('browser-sync');

        browserSync.init({
            ui: false,
            /**  Controls whanever browser should open at BrowserSync init */
            open: true,
            watch: true,
            server: publicDirectory,
        });

        /**
         * These watches are used by `BrowserSync` to keep an eye on file changes
         * that happens in the project - most likely source files. When BrowserSync
         * detects file change (by file extension) it will run watcher's callback
         * script.
         */
        watch(`${sourceDirectory}/scss/**/*.{scss,css}`, this.styles);
        watch(
            `${sourceDirectory}/**/*.${this.templatingExtensions}`,
            this.templating,
        );
        watch(`${sourceDirectory}/js/**/*.{js,ts}`, this.scripts);
        watch(`${staticDirectory}/**/*`, this.copy);
    },
    /**
     *
     */
    styles: function styles() {
        const sass = require('gulp-sass')(require('sass'));
        const autoprefixer = require('gulp-autoprefixer');
        const sourcemaps = require('gulp-sourcemaps');

        return src(`${sourceDirectory}/scss/style.scss`)
            .pipe(plumber())
            .pipe(sourcemaps.init())
            .pipe(
                sass({
                    includePaths: ['node_modules'],
                }),
            )
            .pipe(
                autoprefixer({
                    cascade: false,
                }),
            )
            .pipe(sourcemaps.write())
            .pipe(dest(`${publicDirectory}/assets/css/`));
    },
    /**
     *
     */
    templatingExtensions: `{nj,njk,nunjucks,html}`,
    /**
     *
     */
    templating: function templating() {
        const nunjucks = require('gulp-nunjucks-render');
        const beautify = require('gulp-beautify');

        return (
            src(`${sourceDirectory}/templates/*.${this.templatingExtensions}`)
                .pipe(plumber())
                /**
                 * The `data` key in nunjucks config allows us to pass some additional
                 * strings/functions to the nunjucks engine. This way we can easly
                 * extend capabilities of the nunjucks. The data will be available
                 * globally in nunjucks templates
                 *
                 * @see https://www.npmjs.com/package/gulp-nunjucks-render
                 */
                .pipe(
                    nunjucks({
                        path: `${sourceDirectory}/templates`,
                        data: {},
                    }),
                )
                .pipe(
                    beautify.html({
                        indentSize: 4,
                        max_preserve_newlines: 0,
                    }),
                )
                .pipe(dest(publicDirectory))
        );
    },
};
