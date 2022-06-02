<template>
  <h1>Home</h1>
  <div class=".bg-info.bg-gradient bg-opacity-25"></div>
  <div class="container-fluid">
    <div class="row row-cols-1 row-cols-md-4 g-4">
      <div class="col-6 mx-auto" >
        <div class="card border-primary mb-3 w-50 h-100 justify-content-center">
            <img :src= "`https://openweathermap.org/img/wn/${this.citys[1].icon}@4x.png`"  class="card-img-top" :alt="citys[1].name">
            <div id="title" class="card-body">
              <h3 id="temp" class="card-title"> {{citys[1].name}}</h3>
              <p id="location" class="card-text">
                <b> Temperatur:</b> <br>🌡️ {{citys[1].temp}}° Celsius <br>
                <b> Wetterkondition:</b> <br> {{citys[1].weather}}
                <b> Windgeschwindigkeit:</b> <br> 💨 {{citys[1].windspeed}} m/s
              </p>
            </div>
          </div>
        </div>
      <div class="col-6 mx-auto"  >
        <div class="card border-primary mb-3 w-50 h-100 justify-content-center" >
          <img :src= "`https://openweathermap.org/img/wn/${this.citys[0].icon}@4x.png`"  class="card-img-top" :alt="citys[0].name">
          <div  class="card-body">
            <h3  class="card-title"> {{citys[0].name}}</h3>
            <p  class="card-text">
              <b> Temperatur:</b> <br>🌡️ {{citys[0].temp}}° Celsius<br>
              <b> Wetterkondition:</b> <br> {{citys[0].weather}}
              <b> Windgeschwindigkeit:</b> <br> 💨 {{citys[0].windspeed}} m/s
            </p>
          </div>
        </div>
      </div>
      <div class="col-6 mx-auto" >
        <div class="card border-primary mb-3 w-50 h-100 justify-content-center">
          <img :src= "`https://openweathermap.org/img/wn/${this.citys[2].icon}@4x.png`"  class="card-img-top" :alt="citys[2].name">
          <div  class="card-body">
            <h3  class="card-title"> {{citys[2].name}}</h3>
            <p  class="card-text">
              <b> Temperatur:</b> <br>🌡️ {{citys[2].temp}}° Celsius <br>
              <b> Wetterkondition:</b> <br>{{citys[2].weather}}
              <b> Windgeschwindigkeit:</b> <br> 💨 {{citys[2].windspeed}} m/s
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
        temp: ' ',
        weather: ' ',
        icon: ' ',
        windspeed: ''
      },
        {
          id: 2,
          name: 'Miami',
          temp: ' ',
          weather: ' ',
          icon: ' ',
          windspeed: ''
        },
        {
          id: 3,
          name: 'Paris',
          temp: ' ',
          weather: ' ',
          icon: ' ',
          windspeed: ''
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
    fetch(`https://api.openweathermap.org/data/2.5/weather?appid=8f72af7c99ac2ff422253044302e41c7&q=${this.citys[1].name}&units=metric&lang=de`, requestOptions)
      .then(res => {
        if (res.ok) {
          return res.json()
        } else {
          throw new Error('Error')
        }
      })
      .then(data => {
        obj = data
        console.log(obj.main.temp)
        console.log(this.citys[1].name)
        this.citys[1].temp = obj.main.temp
        this.citys[1].weather = obj.weather[0].description
        this.citys[1].icon = obj.weather[0].icon
        this.citys[1].windspeed = obj.wind.speed
        console.log(obj.weather[0].icon)
        console.log(this.citys[1].icon)
      })
      .catch(error => console.log('error', error))

    let obj2
    fetch(`https://api.openweathermap.org/data/2.5/weather?appid=8f72af7c99ac2ff422253044302e41c7&q=${this.citys[0].name}&units=metric&lang=de`, requestOptions)
      .then(res => {
        if (res.ok) {
          return res.json()
        } else {
          throw new Error('Error')
        }
      })
      .then(data => {
        obj2 = data
        console.log(obj2.main.temp)
        console.log(this.citys[0].name)
        this.citys[0].temp = obj2.main.temp
        this.citys[0].weather = obj2.weather[0].description
        this.citys[0].icon = obj2.weather[0].icon
        this.citys[0].windspeed = obj2.wind.speed
        console.log(obj2.weather[0].icon)
        console.log(this.citys[0].icon)
      })
      .catch(error => console.log('error', error))

    let obj3
    fetch(`https://api.openweathermap.org/data/2.5/weather?appid=8f72af7c99ac2ff422253044302e41c7&q=${this.citys[2].name}&units=metric&lang=de`, requestOptions)
      .then(res => {
        if (res.ok) {
          return res.json()
        } else {
          throw new Error('Error')
        }
      })
      .then(data => {
        obj3 = data
        console.log(obj3.main.temp)
        console.log(this.citys[2].name)
        this.citys[2].temp = obj3.main.temp
        this.citys[2].weather = obj3.weather[0].description
        this.citys[2].icon = obj3.weather[0].icon
        this.citys[2].windspeed = obj3.wind.speed
        console.log(obj3.weather[0].icon)
        console.log(this.citys[2].icon)
      })
      .catch(error => console.log('error', error))
}

}
</script>
<style>

</style>
