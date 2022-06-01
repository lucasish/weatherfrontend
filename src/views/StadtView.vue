<template>
  <h1> Favoritenliste </h1>
  <div class="container-fluid">
    <div class="row row-cols-1 row-cols-md-4 g-4">
      <div class="col" v-for="city in citys" :key="city.id">
        <div class="card h-100">
          <img :src="getPicture(city)" class="card-img-top" :alt="city.name">
          <div class="card-body">
            <h5 class="card-title">{{ city.name }}</h5>
            <p class="card-text">
              In {{ city.name }} ist es so warm: {{city.temp}} {{ city.unit }}
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
    getPicture (city) {
      if (city.name === 'Berlin') {
        return require('../assets/logo.png')
      } else if (city.name !== 'Berlin') {
        return require('../assets/cloudy.png')
      }
    }
  },
  mounted () { // code wird immer beim neuladen der seite ausgeführt:
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
      .catch(error => console.log('error', error))
  }
}
</script>

<style scoped>

</style>
