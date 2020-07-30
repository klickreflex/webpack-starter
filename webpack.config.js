const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const devMode = process.env.NODE_ENV !== 'production';



module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'scripts/bundle.js',
        // Important make the outputPath config in file-loaders work as expected:
        publicPath: '../',
        path: path.resolve(__dirname, 'dist'),
    },

    plugins: [new MiniCssExtractPlugin({
        filename: 'styles/bundle.css',
    })],

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
