var path = require('path');

module.exports = {
    entry: "./app/assets/frontend/main.jsx",
    output: {
        path: __dirname + "/app/assets/javascripts",
        filename: "bundle.js"
    },
    resolve:{
        alias: {
            'react': path.join(__dirname, 'node_modules', 'react')
        },
        extensions: ['','.js','.jsx']
    },
    module: {
        loaders: [
            { test: /\.jsx$/,
              loader: "babel-loader",
              query:{
                  presets:['react','es2015']
              }
            },
            {
                test: /\.(png|jpg)$/,
                loader: 'url-loader?limit=500000000000'
            },
            { test: /\.json$/,
              loader: 'json-loader'
            },
            {
                test: /\.woff(2)?(\?v=\d+\.\d+\.\d+)?$/,
                loader: "file?name=[path][name].[ext]"
            },
            {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                loader: "file?name=[path][name].[ext]"
            },
            {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                loader: "file?name=[path][hash].[ext]"
            },
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                loader: "file?name=[path][name].[ext]"
            }
        ]
    },
    node: {
        fs: 'empty',
        net: 'empty',
        tls: 'empty',
        dns: 'empty'
    }
};