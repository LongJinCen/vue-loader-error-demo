const { VueLoaderPlugin } = require('vue-loader')
// const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
  mode: 'production',
  entry: {
    main: path.resolve(__dirname, './src/index.ts')
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
              transpileOnly: true
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
              transpileOnly: true
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
      {
        test: /\.(png|jpg|gif|svg)$/i,
        type: 'asset'
      },
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    // new ForkTsCheckerWebpackPlugin({
    //   typescript: {
    //     extensions: {
    //       vue: true
    //     }
    //   }
    // }),
    new HtmlWebpackPlugin({
      title: '组件发布工程',
      template: path.resolve(__dirname, './src/template/index.html'),
      appMountId: 'app'
    })
  ],
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.vue', '.json']
  },
}