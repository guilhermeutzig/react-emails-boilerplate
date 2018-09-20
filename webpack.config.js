const { resolve } = require('path');
import path from 'path';
import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

const devRules = [
  'style-loader',
  {
    loader: 'css-loader'
  },
  {
    loader: 'sass-loader'
  }
];

const prodRules = ExtractTextPlugin.extract({
  use: [
    {
      loader: 'css-loader'
    },
    {
      loader: 'sass-loader'
    }
  ]
});

module.exports = () => ({
  entry: {
    'phenomic.main': [
      process.env.PHENOMIC_ENV !== 'static' &&
        require.resolve('webpack-hot-middleware/client'),
      process.env.PHENOMIC_ENV !== 'static' &&
        require.resolve('react-hot-loader/patch'),
      './App.js'
    ].filter(item => item)
  },
  output: {
    publicPath: '/',
    path: path.join(process.cwd(), 'dist'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: require.resolve('babel-loader'),
        options: {
          babelrc: false,
          presets: [require.resolve('@phenomic/babel-preset')],
          plugins: [require.resolve('react-hot-loader/babel')]
        }
      },
      {
        test: /\.scss$/,
        use: process.env.NODE_ENV == 'development' ? devRules : prodRules,
        include: resolve(__dirname, 'src/styles')
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('styles.css'),
    process.env.PHENOMIC_ENV !== 'static' &&
      new webpack.HotModuleReplacementPlugin(),
    process.env.NODE_ENV === 'production' &&
      new webpack.optimize.UglifyJsPlugin()
  ].filter(item => item),

  resolve: {
    extensions: [
      '.js',
      '.jsx',
      '.json',
      '.scss',
      '.css',
      '.svg',
      '.pdf',
      '.zip',
      'mp4',
      'jpg',
      'png'
    ],
    alias: {
      js: resolve(__dirname, 'src/js'),
      components: resolve(__dirname, 'src/js/components'),
      emails: resolve(__dirname, 'src/js/emails'),
      styles: resolve(__dirname, 'src/styles'),
      constants: resolve(__dirname, 'src/js/constants')
    }
  }
});
