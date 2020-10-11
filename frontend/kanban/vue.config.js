module.exports = {
  devServer: {
    public: '0.0.0.0:8080',
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000,
    },
    contentBase: ['./src', './public'], 
    inline: true,
    hot: true
  }
}