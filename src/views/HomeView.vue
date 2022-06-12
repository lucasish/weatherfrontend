<template>
  <h1>Home</h1>
  <br>
  <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling">Neue Stadt hinzufügen</button>

  <div class="offcanvas offcanvas-end" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
    <div class="offcanvas-header">
      <h5 class="offcanvas-title" id="offcanvasScrollingLabel">Wetterabfrage</h5>
      <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body">
      <p>Hier kannst du eine neue Stadt zur Wetterabfrage hinzufügen und ggf. speichern.</p>
      <form class="row g-3 needs-validation" novalidate>
        <div class="col-md-12">
          <label for="validationCustom03" class="form-label">Bitte Stadt eingeben:</label>
          <input type="text" class="form-control" id="validationCustom03" required>
          <div class="invalid-feedback">
            Please provide a valid city.
          </div>
        </div>
        <div class="col-12">
          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required>
            <label class="form-check-label" for="invalidCheck">
              Stadt speichern?
            </label>
          </div>
        </div>
        <div class="col-12">
          <button class="btn btn-primary" type="submit"> {{message}} Stadt hinzufügen</button>
        </div>
      </form>
    </div>

  </div>
  <br>
  <br>
  <br>
  <div class=".bg-info.bg-gradient bg-opacity-25"></div>
  <div class="container-fluid">
    <div class="row row-cols-1 row-cols-md-4 g-4">
      <div class="col-6 mx-auto" >
        <div class="card border-primary mb-3 w-75 h-auto justify-content-center">
            <img :src= "`https://openweathermap.org/img/wn/${this.citys[0].icon}@4x.png`"  style="max-height: 300px; max-width: 300px;" class="mx-auto d-block" :alt="citys[0].name">
            <div id="title" class="card-body">
              <h3 id="temp" class="card-title"> {{citys[0].name}}</h3>
              <p id="location" class="card-text">
                <b> Temperatur:</b> <br>🌡️ {{citys[0].temp}}° Celsius <br>
                <b> Wetterkondition:</b> <br> {{citys[0].weather}}<br>
                <b> Windgeschwindigkeit:</b> <br> 💨 {{citys[0].windspeed}} m/s <br>
                <b> Beschreibung:</b> <br> {{getTemp(citys[0])}} {{citys[0].name}}
              </p>
            </div>
          </div>
        </div>
      <div class="col-6 mx-auto"  >
        <div class="card border-primary mb-3 w-75 h-auto justify-content-center" >
          <img :src= "`https://openweathermap.org/img/wn/${this.citys[1].icon}@4x.png`"  style="max-height: 300px; max-width: 300px;" class="mx-auto d-block" :alt="citys[1].name">
          <div  class="card-body">
            <h3  class="card-title"> {{citys[1].name}}</h3>
            <p  class="card-text">
              <b> Temperatur:</b> <br>🌡️ {{citys[1].temp}}° Celsius<br>
              <b> Wetterkondition:</b> <br> {{citys[1].weather}}<br>
              <b> Windgeschwindigkeit:</b> <br> 💨 {{citys[1].windspeed}} m/s <br>
              <b> Beschreibung:</b> <br> {{getTemp(citys[1])}} {{citys[1].name}}
            </p>
          </div>
        </div>
      </div>
      <div class="col-6 mx-auto" >
        <div class="card border-primary mb-3 w-75 h-auto justify-content-center">
          <img :src= "`https://openweathermap.org/img/wn/${this.citys[2].icon}@4x.png`"  style="max-height: 300px; max-width: 300px;" class="mx-auto d-block" :alt="citys[2].name">
          <div  class="card-body">
            <h3  class="card-title"> {{citys[2].name}}</h3>
            <p  class="card-text">
              <b> Temperatur:</b> <br>🌡️ {{citys[2].temp}}° Celsius <br>
              <b> Wetterkondition:</b> <br>{{citys[2].weather}}<br>
              <b> Windgeschwindigkeit:</b> <br> 💨 {{citys[2].windspeed}} m/s <br>
              <b> Beschreibung:</b> <br> {{getTemp(citys[2])}} {{citys[2].name}}
            </p>
          </div>
        </div>
      </div>
      <div class="col-6 mx-auto" >
        <div class="card border-primary mb-3 w-75 h-auto justify-content-center">
          <img :src= "`https://openweathermap.org/img/wn/${this.citys[3].icon}@4x.png`" style="max-height: 300px; max-width: 300px;" class="mx-auto d-block" :alt="citys[3].name">
          <div  class="card-body">
            <h3  class="card-title"> {{citys[3].name}}</h3>
            <p  class="card-text">
              <b> Temperatur:</b> <br>🌡️ {{citys[3].temp}}° Celsius <br>
              <b> Wetterkondition:</b> <br>{{citys[3].weather}}<br>
              <b> Windgeschwindigkeit:</b> <br> 💨 {{citys[3].windspeed}} m/s <br>
              <b> Beschreibung:</b> <br> {{getTemp(citys[3])}} {{citys[3].name}}
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
          name: 'Istanbul',
          temp: ' ',
          weather: ' ',
          icon: ' ',
          windspeed: ''
        },
        {
          id: 4,
          name: 'Moskau',
          temp: ' ',
          weather: ' ',
          icon: ' ',
          windspeed: ''
        }]
    }
  },
  methods: {
    getTemp (city) {
      if (city.temp <= 22) {
        return ('Brrr, heute ist es eher kühl in ')
      } else if (city.temp > 22) {
        return ('Yay, heute ist es recht warm in ')
      }
    }
  },
  async mounted () {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    }
    // let obj
    let i = 0
    for (i; i < 4; i++) {
      console.log('For schleife start: ID+Name')
      console.log(i)
      console.log(this.citys[i].name)
      await fetch(`https://api.openweathermap.org/data/2.5/weather?appid=8f72af7c99ac2ff422253044302e41c7&q=${this.citys[i].name}&units=metric&lang=de`, requestOptions)
        .then(async response => await response.json())
        .then(result => {
          // obj = result
          console.log('jetzt kommt temp, id, city name usw')
          console.log(result.main.temp)
          console.log(i)
          console.log(this.citys[i].name)
          this.citys[i].temp = result.main.temp
          this.citys[i].weather = result.weather[0].description
          this.citys[i].icon = result.weather[0].icon
          this.citys[i].windspeed = result.wind.speed
        })
        .catch(error => console.log('error', error))
      console.log('For schleife durchgang fertig')
    }
    console.log('For schleife ende')
  }
}
</script>
<style>

</style>
