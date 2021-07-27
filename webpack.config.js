const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
  mode: 'development',
  entry: {
    main: path.resolve(__dirname, './src/index.ts')
  },
  output: {
    publicPath: `/demo`,
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [
          'babel-loader',
          'ts-loader'
        ],
        exclude: /node_modules/
      },
      {
        test: /\.jsx?$/,
        use: [
          'babel-loader'
        ] ,
        exclude: /node_modules/
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/template/index.html'),
      appMountId: 'app'
    })
  ],
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.vue', '.json']
  },
  devServer: {
    hot: true,
    port: 8083
  },
}