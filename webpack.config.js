var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        app: "./app/index.js",
        vendor: [
            "babel-polyfill",
            "react-hot-loader",
            "webpack-dev-server/client?http://localhost:8080",
            "webpack/hot/only-dev-server"
        ]
    },
    output: {
        filename: "/js/bundle-[hash].js",
        path: './dist',
    },
    performance: { hints: false },
    module: {
        loaders: [
            {
                test: /.jsx?$/,
                loaders:'babel-loader',
                include: path.join(__dirname, 'app'),
                exclude: /node_modules/,
            },
            {
                test: /\.json?$/,
                loader: 'json'
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract({
                    fallbackLoader: "style-loader",
                    loader: "css-loader!sass-loader"
                }),
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            },
            {
                test: /\.(png|jpg|woff)$/,
                loader: 'url-loader'
            },
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({ name: 'vendor', filename: '/js/vendor.bundle-[hash].js' }),
        new ExtractTextPlugin('/css/app-[hash].css'),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'app/index.tpl.html',
            inject: 'body'
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development')
        })
    ],
};