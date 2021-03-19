
const path = require('path')
const webpack = require('webpack')
const CURRENT_WORKING_DIR = process.cwd()

// require===import ~ find this module across the entire workspace, determine what it is, wrap it and load it, also cache it

const config = {
    name: "browser",
    mode: "development",
    devtool: 'cheap-module-source-map',
    //devtool: 'eval-source-map',
    entry: [
        'webpack-hot-middleware/client?reload=true',
        path.join(CURRENT_WORKING_DIR, 'client/main.js')
    ],
    output: {
        path: path.join(CURRENT_WORKING_DIR, '/dist/'),
        filename:"bundle.js",
        publicPath:"/dist",
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.(ttf|eot|svg|gif|jpg|png)(\?[\s\S]+)?$/,
                use: 'file-loader'
            }
        ]
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    ],
    resolve: {
        alias:{
            'react-dom': '@hot-loader/react-dom'
        }
    }
}

module.exports = config
