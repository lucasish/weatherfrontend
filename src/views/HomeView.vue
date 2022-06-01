<template>
  <h1>Cities</h1>
  <div class=".bg-info.bg-gradient bg-opacity-10"></div>
  <div class="container-fluid">
    <div class="row row-cols-1 row-cols-md-4 g-4">
      <div class="col" v-for="city in citys" :key="city.id">
        <div class="card h-100">
            <img :src= "'https://openweathermap.org/img/w/03d.png'"  class="card-img-top" :alt="city.name">
            <div id="title" class="card-body">
              <h5 id="temp" class="card-title"> {{city.name}}</h5>
              <p id="location" class="card-text">
               In {{ city.name }}:
                Temperatur {{city.temp}} Grad Celsius.
                Wetter : {{city.weather.main}}
                Hinweis: {{city.weather.description}}
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
  data: function () {
    return {
      citys: [{
        id: 1,
        name: 'Berlin',
        temp: 0,
        main: ' ',
        weather: ' ',
        icon: ' '
      },
        {
          id: 2,
          name: 'London',
          temp: 0,
          main: ' ',
          weather: ' ',
          icon: ' '
        },
        {
          id: 3,
          name: 'Paris',
          temp: 0,
          main: ' ',
          weather: ' ',
          icon: ' '
        }]
    }
  },
  methods: {
    getPicture (city) {
      if (city.name === 'Berlin') {
        return require('../assets/logo.png')
      } else if (city.name !== 'Berlin') {
        return require('../assets/cloudy.png')
      }
    }
  },
  mounted () {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    }
    let obj
    let i = 0
    for(i; i < this.citys.length; i++){
    fetch(`https://api.openweathermap.org/data/2.5/weather?appid=8f72af7c99ac2ff422253044302e41c7&q=${this.citys[i].name}&units=metric`, requestOptions)
      .then(res => {
        if (res.ok) { return res.json() } else {
          throw new Error('Error')
        }
      })
      .then(data => {
        obj = data
        this.citys[i].main = obj.main
        this.citys[i].temp = obj.main.temp
        this.citys[i].weather = obj.weather
        this.citys[i].icon = obj.weather.icon
      })
      .catch(error => console.log('error', error))
}
  }
}
</script>
