const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const path = require('path');
const webpack = require('webpack');
const normalize = require('node-normalize-scss').includePaths;
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const MomentLocalesPlugin = require('moment-locales-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
//   .BundleAnalyzerPlugin;
const CopyWebpackPlugin = require('copy-webpack-plugin');

const sourcePath = path.join(__dirname, 'src');
const buildPath = path.join(__dirname, 'dist');

module.exports = env => {
    const NODE_ENV = env && env.NODE_ENV ? env.NODE_ENV : 'production';

    const config = {
        context: sourcePath,
        devtool: NODE_ENV === 'production' ? false : 'eval-source-map',
        entry: {
            app: path.resolve(sourcePath, 'entrypoint.js'),
            common: ['react', 'react-dom']
        },
        output: {
            path: buildPath,
            filename: 'app-[chunkhash:7].js',
            chunkFilename: '[name]-[chunkhash:7].js',
            publicPath: '/'
        },
        module: {
            rules: [
                {
                    test: /\.(sass|scss|css)$/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        'css-loader',
                        'postcss-loader',
                        `sass-loader?includePaths[]=${normalize}`
                    ]
                },
                {
                    test: /\.html$/,
                    exclude: /(node_modules)/,
                    use: [{ loader: 'html-loader', options: { minimize: true } }]
                },
                {
                    test: /\.(js)$/,
                    exclude: /(node_modules|assets)/,
                    use: ['babel-loader']
                },
                {
                    test: /\.(png|jpe?g|gif|svg)$/i,
                    use: ['file-loader?limit=5000&name=assets/images/[name].[ext]']
                },
                {
                    test: /\.(woff|woff2|ttf|eot)$/,
                    use: ['file-loader?name=fonts/[name].[ext]']
                }
            ]
        },
        resolve: {
            alias: {
                moment: path.resolve(__dirname, 'node_modules/moment/min/moment.min.js')
            }
        },
        plugins: [
            new webpack.ProvidePlugin({
                $: 'jquery/dist/jquery.min',
                jQuery: 'jquery/dist/jquery.min'
            }),
            new MomentLocalesPlugin({
                localesToKeep: ['ru']
            }),
            new HtmlWebpackPlugin({
                template:
                    NODE_ENV === 'production'
                        ? 'assets/index.html'
                        : 'assets/dev-index.html',
                filename: 'index.html',
                favicon: 'assets/favicon.ico'
            }),
            new MiniCssExtractPlugin({
                filename: '[name]-[chunkhash:7].css',
                chunkFilename: '[id]-[chunkhash:7].css'
            }),
            new webpack.DefinePlugin({
                'process.env': {
                    NODE_ENV: JSON.stringify(NODE_ENV)
                }
            }),
            new CopyWebpackPlugin([
                {
                    from: './assets/robots.txt',
                    to: './'
                }
            ])
        ]
    };
    if (NODE_ENV === 'development') {
        config.devServer = {
            contentBase: false,
            host: '0.0.0.0',
            historyApiFallback: true,
            compress: true,
            port: 3006
        };
        config.watchOptions = {
            poll: 1000
        };
    }
    if (NODE_ENV === 'production') {
        config.optimization = {
            splitChunks: { chunks: 'all' },
            minimizer: [
                new UglifyJsPlugin({
                    cache: true,
                    parallel: true,
                    sourceMap: true,
                    //   uglifyOptions: {
                    //     compress: {
                    //       drop_console: true
                    //     }
                    //   }
                }),
                new OptimizeCSSAssetsPlugin({})
            ]
        };
    }
    // config.plugins.push(
    //   new BundleAnalyzerPlugin({
    //     analyzerHost: '0.0.0.0',
    //     analyzerPort: 8222
    //   })
    // );
    return config;
};
