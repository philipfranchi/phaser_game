module.exports = {
    entry: "./js/sketch.js",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    devtool: '#source-map',
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: "style!css"
            },
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env']
                    }
                }
            }
        ]
    }
};
