const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: ['babel-polyfill', path.join(__dirname, "index.js")],
    output: {
        path: path.resolve(__dirname, "dist")
    },
    mode: "development",
    module: {
        rules: [
            {
                test: /\.(js|jsx|ts|tsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(png|jp(e*)g|svg|gif)$/,
                use: ['file-loader'],
            },
        ]
    },
    resolve: {
        extensions: [".js", ".jsx", ".ts", ".tsx", ".css"]
    },

    devServer: {
        hot: true,
        historyApiFallback: true,
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "public", "index.html"),
        }),
    ],
}