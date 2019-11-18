module.exports = {
    output: {
        filename: "bundle.js",
    },
    mode: "production",
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules)/,
                loader: "babel-loader",
            },
        ],
    },
};
