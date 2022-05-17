
module.exports = {
  devServer: {
    port: '3000',
    proxy: 'https://htwweatherapp.herokuapp.com/api/v1/weatherofcity' // wg cors fehler hinzugefügt
  }
}
