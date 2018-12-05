const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: { main: './src/index.jsx' },
    output: {
      filename: 'main.js',
      path: __dirname + '/dist',
      publicPath: '/'
    },
    module: {
        rules: [
            { test: /\.scss$/, 
                use: [ MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'] },
            { test: /\.(png|svg|jpg|gif)$/, use: ['file-loader'] },
            { test: /\.xml$/, use: ['xml-loader'] },
            { test: /\.(js|jsx)$/, exclude: /node_modules/, use: ['babel-loader'] }
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    optimization: {
        minimizer: [
          new UglifyJsPlugin({
            cache: true,
            parallel: true,
            sourceMap: true 
          }),
          new OptimizeCSSAssetsPlugin({})
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin( { template: './src/assets/index.html' } ),
        new MiniCssExtractPlugin({
            filename: '[name]_[hash].css',
            chunkFilename: '[id]_[hash].css'
        })
    ]
};