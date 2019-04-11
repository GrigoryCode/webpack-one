const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const pug = require('./webpack/pug');
const devserver = require('./webpack/devserver');
const sass = require('./webpack/sass');

const PATHS = {
    source: path.join(__dirname, 'src'),
    build: path.join(__dirname, 'dist')
};

const common = merge([
    {
        entry: PATHS.source + '/index.js',
        output: {
            path: PATHS.dist,
            filename: '[name].js'
        },
        plugins: [
            new HtmlWebpackPlugin({
                filename: 'index.html',
                chucks: ['index'],
                template: PATHS.source + '/index.pug'
            })
        ],
    },
    pug()
]);

module.exports = function(env) {
    if (env === 'production'){
        return common;
    }
    if (env === 'development'){
        return merge([
            {},
            common,
            devserver(),
            sass()
        ])
    }
};