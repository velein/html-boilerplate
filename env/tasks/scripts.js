import { src, dest } from 'gulp';
import webpackStream from 'webpack-stream';

import { publicDirectory, sourceDirectory } from '../config';

/** @type {import('webpack').Configuration} */
const config = {
    output: {
        filename: 'bundle.js',
    },
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
            },
        ],
    },
};

export const scripts = () =>
    src(`${sourceDirectory}/js/main.js`)
        .pipe(webpackStream(config))
        .pipe(dest(`${publicDirectory}/assets/js`));
