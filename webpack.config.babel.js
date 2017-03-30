import path from 'path';

export default {
  entry: [
    path.resolve(__dirname, './public/app.jsx')
  ],
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  resolve: {
    alias: {
      Greeter: path.resolve(__dirname, 'public/components/Greeter.jsx'),
      GreeterMessage: path.resolve(__dirname, 'public/components/GreeterMessage.jsx'),
      GreeterForm: path.resolve(__dirname, 'public/components/GreeterForm.jsx')
    },
    extensions: ['.js', '.jsx']
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      }
    ]
  }
};
