module.exports = {
    entry: [
        "./typescript/app.ts",
        "./typescript/developement.ts",
        "./typescript/production.ts"
    ],
    output: {
        filename: "bundle.js"
    },
    devtool: 'source-map',
    devServer: {
        contentBase: './'
    },
    module: {
        rules: [
            // all
            // files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
            {test: /\.ts?$/, loader: "ts-loader"},
            {
                test: require.resolve('jquery'),
                use: [{
                    loader: 'expose-loader',
                    options: 'jQuery'
                }, {
                    loader: 'expose-loader',
                    options: '$'
                }]
            }
        ]
    },
    stats: "errors-only"
}