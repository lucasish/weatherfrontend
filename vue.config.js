
module.exports = {
  devServer: {
    port: '3000',
    proxy: 'https://htwweatherapp.herokuapp.com/api' // wg cors fehler hinzugefügt
  }
}
