var path = require('path');
var webpack = require('webpack');
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');
var hotModuleReplacementPlugin = new webpack.HotModuleReplacementPlugin();
var noErrorsPlugin = new webpack.NoErrorsPlugin();
module.exports = {
    devtool: 'eval',
    entry: [
        'webpack-dev-server/client?http://localhost:3000',
        'webpack/hot/only-dev-server',
        './src/index'
    ],
    output: {
        path: path.join(__dirname, '/build/'),
        filename: 'bundle.js',
        publicPath: 'http://localhost:3000/build/'
    },
    plugins: [
        hotModuleReplacementPlugin,
        noErrorsPlugin,
        commonsPlugin
    ],
    resolve: {
        alias: {
            'redux-devtools': path.join(__dirname, 'src', 'ext'),
            'react': path.join(__dirname, 'node_modules', 'react')
        }
    },
    resolveLoader: {
        'fallback': path.join(__dirname, 'node_modules')
    },
    module: {
        loaders: [{
            test: /\.js$/,
            loaders: ['react-hot', 'babel'],
            exclude: /node_modules/,
            include: path.join(__dirname, 'src')
        }, {
            test: /\.js$/,
            loaders: ['react-hot', 'babel'],
            include: path.join(__dirname, 'src', 'ext')
        }, {
            test: /\.(gif|jpg|png|woff|woff2|svg|eot|ttf)$/,
            loaders: ['url-loader?limit=8192']
        },
            {test: /\.less$/, loader: 'style-loader!css-loader!less-loader'},

            {test: /\.css$/, loader: 'style-loader!css-loader'},

            {test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'}
        ]
    }
};
