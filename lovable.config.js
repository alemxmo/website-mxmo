// lovable.config.js
module.exports = {
  entry: './src/index.js',        // ou o seu entrypoint correto
  output: {
    filename: 'bundle.js',
    path: __dirname + '/build'
  }
};