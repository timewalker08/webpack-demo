const path = require('path');

module.exports = {
  entry: ['./src/index2.js', './src/index1.js'],
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'umd',
  },
};