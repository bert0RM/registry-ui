import 'webpack-dev-server';

import HTMLWebpackPlugin from 'html-webpack-plugin';
import path from 'path';
import webpack from 'webpack';

const config: webpack.Configuration = {
  entry: './src/index.tsx',
  mode: 'development',
  devServer: {
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          { loader: 'css-loader', options: { importLoaders: 1 } },
          'postcss-loader',
        ],
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpg|jpeg|gif|ico|json)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.svg/,
        type: 'asset/inline',
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    sourceMapFilename: '[name].js.map',
  },
  devtool: 'inline-source-map',
  plugins: [
    new HTMLWebpackPlugin({
      template: path.join(__dirname, 'public', 'index.html'),
    }),
  ],
};

export default config;