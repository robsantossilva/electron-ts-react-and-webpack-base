const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = [
  {
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
    },
    devtool: 'source-map',
    mode: 'development',
    entry: './src/electron.ts',
    target: 'electron-main',
    module: {
      rules: [{
        test: /\.(js|ts|tsx)$/,
        include: /src/,
        use: [{ loader: 'babel-loader' }]
      }]
    },
    output: {
      path: __dirname + '/dist',
      filename: 'electron.js'
    }
  },

  {
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
      mainFields: ['main', 'module', 'browser'],
    },
    mode: 'development',
    entry: './src/react.tsx',
    target: 'electron-renderer',
    devtool: 'source-map',
    module: { rules: [{
      test: /\.(js|ts|tsx)$/,
      include: /src/,
      use: [{ loader: 'babel-loader' }]
    }] },
    output: {
      path: __dirname + '/dist',
      filename: 'react.js'
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.html'
      })
    ]
  }
];