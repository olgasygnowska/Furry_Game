module.exports={
    mode: "development",
    entry:"./js/app.js",
    watch: true,
    output: {
        filename: "../js/out.js"
    },
    module: {
        rules: [

            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.css/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ['env', {
                                targets: {
                                    browsers: [
                                        'Chrome 49'
                                    ]
                                }
                            }]
                        ]
                    }
                }
            }]
    }
};