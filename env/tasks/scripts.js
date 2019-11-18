// Gulp Task: Scripts
// Description:
// Dependencies: [webpack, webpackStream, @babel/core, @babel/preset-env, babel-loader]

const { src, dest } = require("gulp");
const webpack = require("webpack");
const webpackStream = require("webpack-stream");
const webpackConfig = require("../config/webpack.config");

module.exports = scripts = () => {
    return src("src/js/main.js")
        .pipe(
            webpackStream(webpackConfig),
            webpack
        )
        .pipe(dest("web/assets/js"));
};
