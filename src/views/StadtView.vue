<template>
  <h1> Favoritenliste </h1>
    <div class="container-fluid">
    <div class="row row-cols-1 row-cols-md-4 g-4">
      <div class="col" v-for="city in citys" :key="city.id">
        <div class="card h-100">
          <img :src= "`https://openweathermap.org/img/wn/${city.icon}@4x.png`"  style="max-height: 300px; max-width: 300px;" class="mx-auto d-block" :alt="city.name">
          <div class="card-body">
            <h5 class="card-title">{{ city.name }}</h5>
            <p class="card-text">
              <b> Temperatur:</b> <br>🌡️ {{city.temp}}° Celsius <br>
              <b> Wetterkondition:</b> <br> {{city.weather}}<br>
              <b> Windgeschwindigkeit:</b> <br> 💨 {{city.windspeed}} m/s <br>
              <b> Beschreibung:</b> <br> {{getTemp(city)}} {{city.name}}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StadtView',
  data () {
    return {
      citys: []
    }
  },
  methods: {
    addCity (cityLocation) {
      const endpoint = process.env.VUE_APP_BACKEND_BASE_URL + cityLocation
      const requestOptions = {
        method: 'GET',
        redirect: 'follow'
      }

      fetch(endpoint, requestOptions)
        .then(response => response.json())
        .then(city => this.citys.push(city))
        .catch(error => console.log('error', error))
    },
    getTemp (city) {
      if (city.temp <= 22) {
        return ('Brrr, heute ist es eher kühl in ')
      } else if (city.temp > 22) {
        return ('Yay, heute ist es recht warm in ')
      }
    }
  },
  mounted: async function () { // code wird immer beim neuladen der seite ausgeführt:
    console.log('Hello World!')
    const endpoint = process.env.VUE_APP_BACKEND_BASE_URL + '/api/v1/weatherofcity'
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    }
    fetch(endpoint, requestOptions)
      .then(response => response.json())
      .then(result => result.forEach(city => {
        this.citys.push(city)
      }))
      .then(citys => {
        return this.citys.forEach(city => {
          (fetch(`https://api.openweathermap.org/data/2.5/weather?appid=8f72af7c99ac2ff422253044302e41c7&q=${city.name}&units=metric&lang=de`, requestOptions)
            .then(async response => await response.json())
            .then(result => {
              // obj = result
              console.log('jetzt kommt temp, id, city name usw')
              console.log(result.main.temp)
              console.log(city.name)
              city.temp = result.main.temp
              city.weather = result.weather[0].description
              city.icon = result.weather[0].icon
              city.windspeed = result.wind.speed
            })
            .catch(error => console.log('error', error)))
        })
      })
  }
}
</script>

<style scoped>

</style>
