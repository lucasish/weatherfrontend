<template>
  <h1>Home</h1>
  <div class=".bg-info.bg-gradient bg-opacity-25"></div>
  <div class="container-fluid">
    <div class="row row-cols-1 row-cols-md-4 g-4">
      <div class="col-6 mx-auto" >
        <div class="card border-primary mb-3 h-100 justify-content-center">
            <img :src= "`https://openweathermap.org/img/w/${this.citys[1].icon}.png`"  class="card-img-top" :alt="citys[1].name">
            <div id="title" class="card-body">
              <h5 id="temp" class="card-title"> {{citys[1].name}}</h5>
              <p id="location" class="card-text">
               Temperatur: {{citys[1].temp}} Grad Celsius. <br>
                Wetter : {{citys[1].weather}}
              </p>
            </div>
          </div>
        </div>
      <div class="col-6 mx-auto"  >
        <div class="card border-primary mb-3 h-100 justify-content-center" >
          <img :src= "`https://openweathermap.org/img/w/${this.citys[0].icon}.png`"  class="card-img-top" :alt="citys[0].name">
          <div  class="card-body">
            <h5  class="card-title"> {{citys[0].name}}</h5>
            <p  class="card-text">
               Temperatur: {{citys[0].temp}} Grad Celsius.<br>
               Wetter : {{citys[0].weather}}
            </p>
          </div>
        </div>
      </div>
      <div class="col-6 mx-auto" >
        <div class="card border-primary mb-3 h-100 justify-content-center">
          <img :src= "`https://openweathermap.org/img/w/${this.citys[2].icon}.png`"  class="card-img-top" :alt="citys[2].name">
          <div  class="card-body">
            <h5  class="card-title"> {{citys[2].name}}</h5>
            <p  class="card-text">
              Temperatur: {{citys[2].temp}} Grad Celsius. <br>
              Wetter : {{citys[2].weather}}
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
        icon: ' '
      },
        {
          id: 2,
          name: 'Miami',
          temp: ' ',
          weather: ' ',
          icon: ' '
        },
        {
          id: 3,
          name: 'Paris',
          temp: ' ',
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
    fetch(`https://api.openweathermap.org/data/2.5/weather?appid=8f72af7c99ac2ff422253044302e41c7&q=${this.citys[1].name}&units=metric`, requestOptions)
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
        console.log(obj.weather[0].icon)
        console.log(this.citys[1].icon)
      })
      .catch(error => console.log('error', error))

    let obj2
    fetch(`https://api.openweathermap.org/data/2.5/weather?appid=8f72af7c99ac2ff422253044302e41c7&q=${this.citys[0].name}&units=metric`, requestOptions)
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
        console.log(obj2.weather[0].icon)
        console.log(this.citys[0].icon)
      })
      .catch(error => console.log('error', error))

    let obj3
    fetch(`https://api.openweathermap.org/data/2.5/weather?appid=8f72af7c99ac2ff422253044302e41c7&q=${this.citys[2].name}&units=metric`, requestOptions)
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
        console.log(obj3.weather[0].icon)
        console.log(this.citys[2].icon)
      })
      .catch(error => console.log('error', error))
}

}
</script>
<style>

</style>
