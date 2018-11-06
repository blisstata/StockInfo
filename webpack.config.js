const path = require('path');
const entryPoint = './index.js';

module.exports = {
    mode: 'development',
    entry: entryPoint,
    target: 'node',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js'
    },
    module: {
        rules: [
        {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader"
            }
        }
        ]
    }
};