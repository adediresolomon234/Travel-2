
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
     },
     loaders: [
      { test: /\.css$/, loader: 'style!css' },
      { test: /\.jsx?$/, loader: 'babel?stage=0', exclude: /node_modules/ },
    ]
}
