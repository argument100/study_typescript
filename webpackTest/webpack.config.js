const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  // モード値を production に設定すると最適化された状態で、
  // development に設定するとソースマップ有効でJSファイルが出力される
  mode: 'development',

  // メインとなるJavaScriptファイル（エントリーポイント）
  entry: './src/js/main.ts',

  devtool: 'source-map',

  output: {
    path: `${__dirname}/build`,
    filename: './js/main.js'
  },

  plugins: [
    new ExtractTextPlugin({
      filename: './css/style.css'
    }),
  ],

  // import 文で .ts ファイルを解決するため
  resolve: {
    extensions: [
      '.ts', '.js', '.json'
    ]
  },

  devServer: {
    contentBase: './build'
  },

  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            // CSSバンドル
            {
              loader: 'css-loader',
              options: {
                url: false,
                sourceMap: true,
                minimize: true,
                importLoaders: 2
              }
            },
            // PostCss
            {
              loader: 'postcss-loader',
              options: {
                sourceMap: true,
                // plugins: [
                //   require('autoprefixer')({grid: true})
                // ]
              }
            },
            // Sassバンドル
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true
              }
            }
          ]
        })
      },

      // Typescript
      {
        // 拡張子 .ts の場合
        test: /\.ts$/,
        // TypeScript をコンパイルする
        use: 'ts-loader'
      }
    ]
  },
};

