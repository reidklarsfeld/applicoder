// const path = require('path');

// module.exports = {
//   entry: './client/index.js',
//   output: {
//     path: path.resolve(__dirname, 'build'),
//     publicPath: 'http://localhost:8080',
//     filename: 'bundle.js'
//   },
//   mode: process.env.NODE_ENV,
//   devServer: {
//     publicPath: "/",
//     hot: true,
//     proxy: {
//       '*': 'http://localhost:3000'
//     }
//   },
//   module: {
//     rules: [
//       {
//         test: /\.jsx?/,
//         exclude: /node_modules/,
//         use: {
//           loader: 'babel-loader',
//           options: {
//             presets: ['@babel/preset-env', '@babel/preset-react']
//           }
//         }
//       },
//       {
//         test: /(css|scss)$/,
//         exclude: /node_modules/,
//         use: ['style-loader', 'css-loader', 'sass-loader']
//       },
//       {
//         test: /\.(png|jpg|gif|woff|woff2|eot|ttf|svg|ico)$/,
//         use: [
//           {
//             // loads files as base64 encoded data url if image file is less than set limit
//             loader: 'url-loader',
//             options: {
//               // if file is greater than the limit (bytes), file-loader is used as fallback
//               limit: 8192
//             }
//           }
//         ]
//       }
//     ]
//   }
// };
const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'client/index.js'),
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  }, 
  devServer: {
    port:8080,
    publicPath: '/build',
    contentBase: path.join(__dirname, '/client'),
    proxy: {
      '/': 'http://localhost:3000/'
    }
  },
  mode: process.env.NODE_ENV,
  module: {
    rules: [
      { test: /\.jsx?/,
        loader: 'babel-loader',
        exclude: /(node_modules|bower_components)/,
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react']
        }
      },
      { test: /\.s?css/i,
        exclude: /(node_modules|bower_components)/, 
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  }
};