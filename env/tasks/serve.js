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

    watch(`${sourceDirectory}/scss/**/*.scss`, styles);
    watch(`${sourceDirectory}/**/*.${templatingExtensions}`, templating);
    watch(`${sourceDirectory}/js/**/*.js`, scripts);
    watch(`${staticDirectory}/**/*`, copy);
};
