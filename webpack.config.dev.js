const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    context: path.resolve(__dirname, 'src'),
    entry: './ts/index.ts',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    module: {
        rules: [
        {
            test: /\.html?$/,
            exclude: /node_modules/,
            use: 'html-loader'
            },
        {
            test: /\.ts$/,
            exclude: /node_modules/,
            use: 'ts-loader',
        },
        ],
    },
    resolve: {
        extensions: [
        '.ts', '.js',
        ],
    },
    devtool: 'source-map',
    devServer: {
        inline: true,
        contentBase: path.resolve(__dirname, 'dist'),
        watchContentBase: true,
        hot: true,
        port: 1111
    },
    plugins: [
        new HtmlWebpackPlugin({
        template: './index.html',
        filename: 'index.html'
        })
    ]
    };
