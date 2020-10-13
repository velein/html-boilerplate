import { watch } from 'gulp';
import browserSync from 'browser-sync';

import { copy } from './misc';
import { publicDirectory, sourceDirectory, staticDirectory } from '../config';
import { scripts } from './scripts';
import { styles } from './styles';
import { templating, templatingExtensions } from './templating';

export const serve = () => {
    browserSync.init({
        ui: false,
        /**  Controls whanever browser should open at BrowserSync init */
        open: false,
        watch: true,
        server: publicDirectory,
    });

    /**
     * These watches are used by `BrowserSync` to keep an eye on file changes
     * that happens in the project - most likely source files. When BrowserSync
     * detects file change (by file extension) it will run watcher's callback
     * script.
     */
    watch(`${sourceDirectory}/scss/**/*.{scss,css}`, styles);
    watch(`${sourceDirectory}/**/*.${templatingExtensions}`, templating);
    watch(`${sourceDirectory}/js/**/*.{js,ts}`, scripts);
    watch(`${staticDirectory}/**/*`, copy);
};
