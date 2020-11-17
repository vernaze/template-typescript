const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

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
        {
            test: /\.css$/,
            use: [
                { loader: MiniCssExtractPlugin.loader, options: {} },
                'css-loader'
            ]       
        }
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
        new MiniCssExtractPlugin({}),
        new HtmlWebpackPlugin({
        template: './index.html',
        filename: 'index.html'
        })
    ]
    };
