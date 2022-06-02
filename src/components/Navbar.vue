<template>
  <nav class="navbar navbar-light navbar-dark bg-primary bg-opacity-50">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Wetter</a>
      <form class="d-flex needs-validation" id="citys-create-form" novalidate>
        <input class="form-control me-2" id="myInput" type="search" placeholder="Search" aria-label="Search" v-model="cityname" required>
        <div class="invalid-feedback">
          Please choose a city name.
        </div>
        <button class="btn btn-light" type="submit" >Search</button> &nbsp;
        <button class="btn btn-info" rounded="true" type="submit" @click.prevent="saveCity">Save</button>
      </form>
      <button class="navbar-toggler" id="collapse" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div v-if="this.serverValidationMessages">
        <ul>
          <li v-for="(message, index) in serverValidationMessages" :key="index" style="color: red">
            {{ message }}
          </li>
        </ul>
      </div>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
         <router-link class="nav-link" to="/home">Home</router-link>
          <router-link class="nav-link" to="/about">About</router-link>
          <router-link classs="nav-link" to="/stadt1">Cities</router-link>
        </ul>
      </div>
    </div>
      <AboutView :cityname="cityname"> </AboutView>
  </nav>
</template>

<script>

//import AboutView from './view/AboutView'


export default {
  name: 'NavBar',
  //components: {AboutView},
  data () {
    return {
      cityname: ' ',
      serverValidationMessages: []
    }
  },
  emits: ['created'],
  methods: {
    async saveCity () {
      if (this.validate()) {
        const endpoint = process.env.VUE_APP_BACKEND_BASE_URL + '/api/v1/weatherofcity'

        const headers = new Headers()
        headers.append('Content-Type', 'application/json')

        const city = JSON.stringify({
          name: this.name
        })

        const requestOptions = {
          method: 'POST',
          headers: headers,
          body: city,
          redirect: 'follow'
        }

        const response = await fetch(endpoint, requestOptions)
        await this.handleResponse(response)
      }
    },
    async handleResponse (response) {
      if (response.ok) {
        this.$emit('created', response.headers.get('location'))
        document.getElementById('collapse').click()
      } else if (response.status === 400) {
        response = await response.json()
        response.errors.forEach(error => {
          this.serverValidationMessages.push(error.defaultMessage)
        })
      } else {
        this.serverValidationMessages.push('Unknown error occurred')
      }
    },
    validate () {
      const form = document.getElementById('citys-create-form')
      form.classList.add('was-validated')
      return form.checkValidity()
    }
  }
}
</script>

<style scoped>

</style>
