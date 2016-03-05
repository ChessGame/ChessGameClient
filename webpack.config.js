var webpack = require('webpack');
var path = require('path');
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');
var hotModuleReplacementPlugin = new webpack.HotModuleReplacementPlugin();
var noErrorsPlugin = new webpack.NoErrorsPlugin();
module.exports = {
    entry: "./index.js",
    output: {
        path: path.join(__dirname, '/build/'),
        filename: 'bundle.js',
        publicPath: "/build/"
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                }
            },

            {test: /\.less$/, loader: 'style-loader!css-loader!less-loader'},

            {test: /\.css$/, loader: 'style-loader!css-loader'},

            {test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'}
        ]
    },
    plugins: [
        commonsPlugin,
        hotModuleReplacementPlugin,
        noErrorsPlugin
    ]
};