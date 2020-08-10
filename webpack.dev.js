
const WriteFilePlugin = require('write-file-webpack-plugin');

const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'development',
    watch: true,
    watchOptions: {
        ignored: /node_modules/,
    },
    plugins: [
        new WriteFilePlugin()
    ],
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
    },
});
