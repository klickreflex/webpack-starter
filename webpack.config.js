const path = require('path');
const devMode = process.env.NODE_ENV !== 'production';
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const NunjucksWebpackPlugin = require('nunjucks-webpack-plugin');
const SVGSpritemapPlugin = require('svg-spritemap-webpack-plugin');
const HtmlCriticalWebpackPlugin = require('html-critical-webpack-plugin');


module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'scripts/bundle.js',
        // Important make the outputPath config in file-loaders work as expected:
        publicPath: '../',
        path: path.resolve(__dirname, 'dist'),
    },

    plugins: [
        new MiniCssExtractPlugin({
            filename: 'styles/bundle.css',
        }),

        new SVGSpritemapPlugin('./src/svg/**/*.svg', {
            output: {
                filename: 'svg/sprite.svg',
                svgo: true,
            },
            sprite: {
                prefix: 'icon-',
                generate: {
                    title: false,
                },
            },
        }),


        new NunjucksWebpackPlugin({
            templates: [
                {
                    from: "./src/templates/index.njk",
                    to: "index.html"
                },
            ]
        }),

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

    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            hmr: process.env.NODE_ENV === 'development',
                        },
                    },
                    'css-loader',
                    'postcss-loader',
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                loader: 'file-loader',
                options: {
                    outputPath: 'images',
                },
            },
            {
                test: /\.(woff|woff2)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    outputPath: 'fonts'
                },
            }
        ],
    },
};
