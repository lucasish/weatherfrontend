
module.exports = {
  devServer: {
    port: '3000',
    proxy: 'https://localhost:8080' // wg cors fehler hinzugefügt
  }
}
