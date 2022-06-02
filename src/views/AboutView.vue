<template>
  <div class="about">
    <h1>This is an Search page</h1>
    <div class=".bg-info.bg-gradient bg-opacity-25"></div>
    <div class="container-fluid">
      <div class="row row-cols-1 row-cols-md-4 g-4">
        <div class="col-6 mx-auto" >
          <div class="card border-primary mb-3 h-100 justify-content-center">
            <img :src= "`https://openweathermap.org/img/w/${this.citys[1].icon}.png`"  class="card-img-top" :alt="{cityname}">
            <div id="title" class="card-body">
              <h5 id="temp" class="card-title"> {{this.cityname}}</h5>
              <p id="location" class="card-text">
                Temperatur: {{citys[1].temp}} Grad Celsius. <br>
                Wetter : {{citys[1].weather}}
              </p>
            </div>
          </div>
        </div>
      </div>
  </div>
  </div>
</template>

<script>

export default {
  name: 'AboutView',
  props: ["cityname"],
  data () {
    return {
      citys: [{
        id: 1,
        name: ' ',
        temp: ' ',
        weather: ' ',
        icon: ' '
      }]
    }
  },
  methods: {
  },
  mounted () {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    }

    let obj
    fetch(`https://api.openweathermap.org/data/2.5/weather?appid=8f72af7c99ac2ff422253044302e41c7&q=${this.cityname}&units=metric`, requestOptions)
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

  }

}
</script>
