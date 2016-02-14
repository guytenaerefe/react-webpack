var path = require('path');
var config = {
  entry: path.resolve(__dirname, 'app/components/Main.js'),
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/, // A regexp to test the require path. accepts either js or jsx
        loader: 'babel', // The module to load. "babel" is short for "babel-loader"
        query:
        {
          presets:['es2015', 'react']
        }
      },
      {
        test: /\.js?$/, // A regexp to test the require path. accepts either js or jsx
        loader: 'babel', // The module to load. "babel" is short for "babel-loader"
        query:
        {
          presets:['es2015', 'react']
        }
      }
    ]
  }
};

module.exports = config;
