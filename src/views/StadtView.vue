<template>
  <h1>Buh</h1>
  <div class="container-fluid">
    <div class="row row-cols-1 row-cols-md-4 g-4">
      <div class="col" v-for="city in citys" :key="city.id">
        <div class="card h-100">
          <img src="../assets/logo.png" class="card-img-top" :alt="city.name">
          <div class="card-body">
            <h5 class="card-title">{{ city.firstName }} {{ city.lastName }}</h5>
            <p class="card-text">
              {{ city.name }} {{ city.unit }} ist {{ city.temp }} und
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
      citys: [
        {
          id: 1,
          name: 'Potsdam',
          unit: 'imperial',
          temp: 30
        },
        {
          id: 2,
          name: 'Berlin',
          unit: 'imperial',
          temp: 19
        }
      ]
    }
  },
  methods: {
    mounted () {
      const requestOptions = {
        method: 'GET',
        redirect: 'follow'
      }
      fetch('http://localhost:8080/api/v1/weatherofcity', requestOptions)
        .then(response => response.json())
        .then(result => result.forEach(city => {
          this.citys.push(city)
        }))
        .catch(error => console.log('error', error))
    }
  }
}
</script>

<style scoped>

</style>
