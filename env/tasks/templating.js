import { src, dest } from 'gulp';
import nunjucks from 'gulp-nunjucks-render';
import plumber from 'gulp-plumber';

import { publicDirectory, sourceDirectory } from '../config';

export const templatingExtensions = '{nj,njk,nunjucks,html}';

export const templating = () =>
    src(`${sourceDirectory}/pages/*.${templatingExtensions}`)
        .pipe(plumber())
        .pipe(nunjucks({ path: `${sourceDirectory}/template`, data: {} }))
        .pipe(dest(publicDirectory));
