var HtmlWebpackPlugin = require('html-webpack-plugin');
// const ExtractTextPlugin = require("extract-text-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
var webpack = require('webpack');
var path = require('path');
// var Promise = require('es6-promise').Promise;

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: 'app.bundle.js'
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.css$/,
               use: [
                 {
                   loader: MiniCssExtractPlugin.loader,
                 },
                 "css-loader"
               ]
              },
            // {
            //     test: /\.(scss|css)$/,
            //     use: ["style-loader", "css-loader", "sass-loader"]
            // },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: "babel-loader"
            },  
            {
                test: /\.(png|jpg|gif)$/,
                loader: 'file-loader' 
            }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        hot: true,
        open: true
    },
    plugins: [new HtmlWebpackPlugin({
        title: "Project webpack",
        template: "./public/index.html",
        minify: {
            collapseWhitespace: true
        }
    }),
    new MiniCssExtractPlugin({
        filename: "main.css"
    }),

    // new ExtractTextPlugin({
    //     filename: "Styles/main.css",
    //     disable: true,
    //     allChunks: true
    // }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin()
    // new webpack.ProvidePlugin({ 
    //     React: 'react', 
    //     Promise: 'es6-promise-promise'             
    //   })

    ]
}