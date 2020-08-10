const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

const HtmlCriticalWebpackPlugin = require('html-critical-webpack-plugin');

module.exports = merge(common, {
    mode: 'production',

    plugins: [
        // Create additional instances of `HtmlCriticalWebpackPlugin`
        // to extract different critical files from different sources.
        new HtmlCriticalWebpackPlugin({
            base: path.resolve(__dirname, 'dist'),
            // Local files work, too:  'about.html',
            src: 'http://127.0.0.1:7777/dist/',
            dest: 'styles/critical.css',
            inline: false,
            minify: true,
            extract: false,
            width: 1440,
            height: 900,
            penthouse: {
                blockJSRequests: false,
            }
        }),
    ],
});
