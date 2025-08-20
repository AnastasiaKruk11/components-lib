import { fileURLToPath } from 'url';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const {TypedCssModulesPlugin} = require('typed-css-modules-webpack-plugin');

export default {
    mode: 'production',
    entry: './src/index.ts',
    output: {
        filename: 'index.js',
        path: fileURLToPath(new URL('./dist', import.meta.url)),
        libraryTarget: "umd",
        clean: true
    },
    resolve: {
        extensions: ['.ts', '.tsx']
    },
    externals: {
        react: 'react'
    },
    plugins: [
        new MiniCssExtractPlugin({filename: 'bundle.css'}),
        new TypedCssModulesPlugin({
            globPattern: 'src/**/*.css',
        }),
    ],
    module: {
        rules: [
            {
                test: /\.stories\.tsx?$/,
                use: [
                {
                    loader: require.resolve('@storybook/source-loader'),
                    options: { parser: 'typescript' },
                },
                ],
                enforce: 'pre',
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(ts|tsx)?$/,
                use: ['ts-loader'],
                exclude: /node_modules/
            },
        ]
    }
}