const path = require('path');
const config = require('./gulpfile.js/config');

/** @type {import('webpack').Configuration} */
module.exports = {
    entry: path.resolve(__dirname, `${config.sourceDirectory}/js/index.ts`),
    output: {
        path: path.resolve(__dirname, `${config.publicDirectory}/assets/js`),
        filename: 'bundle.js',
    },
    context: __dirname,
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
            },
            {
                test: /\.(ts)$/,
                loader: 'ts-loader',
            },
        ],
    },
    resolve: {
        extensions: ['.ts', '.js', '.json'],
    },
};
