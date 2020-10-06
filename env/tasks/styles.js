import { src, dest } from 'gulp';
import sass from 'gulp-sass';
import plumber from 'gulp-plumber';

import { publicDirectory, sourceDirectory } from '../config';

export const styles = () =>
    src(`${sourceDirectory}/scss/style.scss`)
        .pipe(plumber())
        .pipe(
            sass({
                outputStyle: 'compact',
                includePaths: ['node_modules'],
            }),
        )
        .pipe(dest(`${publicDirectory}/assets/css/`));
