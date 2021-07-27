const { VueLoaderPlugin } = require('vue-loader')
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
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.(scss|css)$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.ts$/,
        use: [
          'babel-loader',
          {
            loader: 'ts-loader',
            options: {
              appendTsSuffixTo: [/\.vue$/], // 识别.vue单文件
            }
          }
        ],
        exclude: /node_modules/
      },
      {
        test: /\.tsx$/,
        use: [
          'babel-loader',
          {
            loader: 'ts-loader',
            options: {
              appendTsxSuffixTo: [/\.vue$/], // 识别.vue单文件
            }
          }
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
    new VueLoaderPlugin(),
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