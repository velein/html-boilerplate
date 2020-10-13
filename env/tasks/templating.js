import { src, dest } from 'gulp';
import nunjucks from 'gulp-nunjucks-render';
import plumber from 'gulp-plumber';

import { publicDirectory, sourceDirectory } from '../config';

export const templatingExtensions = '{nj,njk,nunjucks,html}';

export const templating = () =>
    src(`${sourceDirectory}/pages/*.${templatingExtensions}`)
        .pipe(plumber())
        /**
         * The `data` key in nunjucks config allows us to pass some additional
         * strings/functions to the nunjucks engine. This way we can easly
         * extend capabilities of the nunjucks. The data will be available
         * globally in nunjucks templates
         * 
         * @see https://www.npmjs.com/package/gulp-nunjucks-render
         */
        .pipe(nunjucks({ path: `${sourceDirectory}/template`, data: {} }))
        .pipe(dest(publicDirectory));
