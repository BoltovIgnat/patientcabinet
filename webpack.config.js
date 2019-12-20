const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

const development = 'development';

module.exports = env => {
  const NODE_ENV = env ? env.NODE_ENV : 'development';
  const config = {
    entry: {
      main: path.resolve(__dirname, 'src/index.js'),
      common: ['react', 'react-dom']
    },
    output: {
      // filename: NODE_ENV === development ? 'src/js/[name].bundle.js' : 'src/react/[name].[hash].bundle.js',
      filename: NODE_ENV === development ? 'src/js/[name].bundle.js' : `src/react/[name].bundle.js`,
      path: path.resolve(__dirname, 'public')
    },
    mode: NODE_ENV,
    // watch
    // to add js and jsx
    optimization: {
      splitChunks: {
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/](react|react-dom|redux)/,
            name: 'vendor',
            // priority: -10,
            chunks: 'all'
          },
        }
      },
      minimize: NODE_ENV === development ? false : true
    },
    devtool: 'eval-source-map',
    resolve: {
      extensions: ['.js', '.jsx', '.sass']
    },
    module: {
      rules: [
        // {
        //   test: /\.json$/,
        //   loader: 'json-loader'
        // },
        {
          test: /\.css$/,
          use: ['style-loader', 'postcss-loader'],
        },
        {
          test: /\.(m?js|jsx)$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['env', 'react', 'es2015'],
              plugins: [
                "transform-object-rest-spread",
                "transform-runtime",
                "syntax-dynamic-import",
                "transform-es2015-arrow-functions",
                "transform-class-properties"
              ]
            }
          }
        },
        // {
        //   test: /\.jsx?$/,
        //   use: ['astroturf/loader'],
        // },

        // {
        //   test: /\.(sass|scss|css)$/,
        //   use: [
        //     'style-loader',
        //     'css-loader',
        //     'sass-loader'
        //   ]
        // },
        {
          test: /\.(png|svg|jpg|gif)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name(file) {
                  if(NODE_ENV === development) {
                    return '[path][name].[ext]';
                  } else {
                    return '[path][name].[ext]';
                  }

                  return '[hash].[ext]';
                }
              }
            }
          ]
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/,
          use: [
            'file-loader'
          ]
        },

        {
          test: /\.(csv|tsv)$/,
          use: [
            'csv-loader'
          ]
        },
        {
          test: /\.xml$/,
          use: [
            'xml-loader'
          ]
        }
      ]
    },
    // ProvidePlugin
    plugins: [
      new HtmlWebpackPlugin({
        title: 'MEDMAP',
        meta: {
          'viewport': 'width=device-width, initial-scale=1, shrink-to-fit=no',
          // Will generate: <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
          'theme-color': '#4285f4'
          // Will generate: <meta name="theme-color" content="#4285f4">
        },
        // template: NODE_ENV === development ? "src/assets/dev-index.html" : 'src/assets/index.html',
        filename: 'index.html',
        // favicon: 'assets/favicon.ico'
      }),
      new MiniCssExtractPlugin({
        filename: "assets/css/[name].css"
      }),
      new CleanWebpackPlugin(['public']),
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify(NODE_ENV)
        }
      }),
      new webpack.ProvidePlugin({
        React: 'react',
        ReactDOM: 'react-dom'
      })
    ]
  };

  if(NODE_ENV === development) {
    config.devServer = {
      before: function(app, server) {
        // anything code
        // console.log('before-app', app);
        // console.log('before-server', server);
      },
      after: function(app, server) {
        // anything code
        // console.log('after-app', app);
        // console.log('after-server', server);
      },
      contentBase: path.join(__dirname, 'public'),
      compress: true,
      host: '0.0.0.0',
      port: 8082,
      historyApiFallback: true
    }
  }

  return config;
};
