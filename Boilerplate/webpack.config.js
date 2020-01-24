const PATH = require('path')

module.exports = {
    entry: './src/index.js',
    output: {
        path: PATH.resolve(__dirname, 'public/scripts'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['env']
                }
            }
        }]
    },
    devServer: {
        contentBase: PATH.resolve(__dirname, 'public'),
        publicPath: '/scripts/',
    },
    devtool: 'source-map'
}
