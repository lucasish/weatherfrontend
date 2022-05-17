
module.exports = {
  devServer: {
    port: '3000',
    proxy: 'https://htwweatherapp.herokuapp.com/' // wg cors fehler hinzugefügt
  }
}
