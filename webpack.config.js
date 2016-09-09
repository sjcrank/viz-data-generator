const webpack = require('webpack');
const debug = (process.env.NODE_ENV !== 'production')

module.exports = {
    entry: ['babel-polyfill', './src/index.js'],
    output: {
        path: './bin',
        filename: 'app.js'
    },
    devtool: debug ? 'cheap-module-eval-source-map' : '',
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ['react', 'es2015'],
                plugins: ['transform-decorators-legacy', 'transform-async-to-generator']
            }
        }]
    },
    plugins: debug ? [] : [
        new webpack.optimize.UglifyJsPlugin({
            compress: { warnings: false, },
            output: { comments: false, },
        }),
    ],
    debug: debug
}