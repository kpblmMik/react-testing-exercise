module.exports = {
    mode: 'production',
    module: {
        rules: [
            { 
                test: /\.js$/, 
                use: ['babel-loader'] 
            },
            { 
                test: /\.css$/, 
                use: ['style-loader', 'css-loader'] 
            }
        ],
    },
}