const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
module.exports = {
    entry: path.resolve(__dirname, '..', './src/index.js'),
    module: {
        rules: [
            {
                test: /\.(js)$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
        ],
    },
    resolve: {
        extensions: ['*', '.js'],
    },
    output: {
        path: path.resolve(__dirname, '..', './dist'),
        filename: 'bundle.js',
    },
    devServer: {
        static: path.resolve(__dirname, '..', './dist'),
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Hello HtmlWebpackPlugin2",
            template: path.resolve(__dirname, '..', "./src/index.html")
        }),
        new CleanWebpackPlugin()
    ]
};
