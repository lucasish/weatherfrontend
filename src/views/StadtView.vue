<template>
  <br>
  <h1> Wetter </h1>
  <br>
  <button class="btn btn-primary" id="button" title="neue Stadt hinzufügen" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling">Neue Stadt hinzufügen</button>
  <button id="button3" class="btn btn-primary" title="löscht alle benutzerdefinierten Städte" type="submit" @click.prevent="deleteCities()">Alle Städte löschen</button>

  <div class="offcanvas offcanvas-end" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
    <div class="offcanvas-header">
      <h5 class="offcanvas-title" id="offcanvasScrollingLabel">Wetterabfrage</h5>
      <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body">
      <p>Hier kannst du eine neue Stadt zur Wetterabfrage hinzufügen und speichern.</p>
      <form class="row g-3 needs-validation" id="city-create-form"  novalidate>
        <div class="col-md-12">
          <label for="validationCustom03" class="form-label">Bitte Stadt eingeben:</label>
          <input type="text" class="form-control" id="validationCustom03"  v-model="name" required>
          <div class="invalid-feedback">
            Please provide a valid city.
          </div>
        </div>
        <div v-if="this.serverValidationMessages">
          <ul>
            <li v-for="(message, index) in serverValidationMessages" :key="index" style="color: red">
              {{ message }}
            </li>
          </ul>
        </div>
        <div class="col-12">
          <button id="button2" class="btn btn-primary" type="submit" @click.prevent="createCity()">Stadt hinzufügen</button>
          <br>
          <br>
           <button  id="button6" class="btn btn-primary" type="reset">Reset</button>
        </div>
      </form>
    </div>
  </div>


  <br>
  <br>



    <div class="container-fluid">
    <div class="row row-cols-1 row-cols-md-4 g-4">
      <div class="col" v-for="city in citys" :key="city.id">
        <div id="karte" class="card border-primary mb-3 w-75 h-auto justify-content-center">
          <img :src= "`https://openweathermap.org/img/wn/${city.icon}@4x.png`"  style="max-height: 300px; max-width: 300px;" class="mx-auto d-block" :alt="city.name">
          <div class="card-body">
            <h5 class="card-title">
              {{ city.name }}</h5>
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
import axios from 'axios'
export default {
  name: 'StadtView',
  data () {
    return {
      name: "",
      serverValidationMessages: [],
      citys: []
    }
  },
  emits: ['created'],
  methods: {
    getTemp (city) {
      if (city.temp <= 22) {
        return ('Brrr, heute ist es eher kühl in ')
      } else if (city.temp > 22) {
        return ('Yay, heute ist es recht warm in ')
      }
    },
  async createCity () {

    console.log("Eingabe erhalten")
    if (this.validate()) {
      console.log("validate start")
      const endpoint = process.env.VUE_APP_BACKEND_BASE_URL + '/api/v1/weatherofcity'

      const headers = new Headers()
      headers.append('Content-Type', 'application/json')
      console.log("append ok")

      const city = JSON.stringify({
        name: this.name
      })
      console.log("stringfy ok")

      const requestOptions = {
        method: 'POST',
        headers: headers,
        body: city,
        redirect: 'follow'
      }
      console.log("reqOp ok")

      const response = await fetch(endpoint, requestOptions)
      console.log("await fetch ok")

      await this.handleResponse(response)
      console.log("await handle response ok")

    }
    console.log("validate vorbei")
  },
  async handleResponse (response) {
      if (await response.status === 201 || response.status === 200) {
      this.$emit('created', response.headers.get('location'))
        console.log("200")
      } else if (response.status === 404 || response.status === 400) {
      response = await response.json()
        console.log("400")
        response.errors.forEach(error => {
        this.serverValidationMessages.push(error.defaultMessage)
      })
    } else {
      this.serverValidationMessages.push('Unknown error occurred')
    }
  },
    async deleteCities () {

      const requestOptions = {
        method: 'DELETE',
        redirect: 'follow'
      }
      console.log('moin moin')

      var n = [3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
      n.forEach(i=>{
        const id = i
        const endpoint = process.env.VUE_APP_BACKEND_BASE_URL + '/api/v1/weatherofcity/' + id
        console.log(endpoint)
        axios.delete(endpoint, requestOptions)
          .then(function (response) {
            console.log(response)
          })
          .catch(function (error) {
            console.log(error)
          })
      })
    },
  validate () {
    const form = document.getElementById('city-create-form')
    form.classList.add('was-validated')
    return form.checkValidity()
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
#button {border-radius: 50px; margin: 10px; }
#button2 {border-radius: 50px;}
#button6 {border-radius: 50px}
#button3 {border-radius: 50px}
</style>
