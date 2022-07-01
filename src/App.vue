<template>
  <navbar></navbar>
  <router-view/>
</template>

<script>
import Navbar from './components/Navbar'


export default {
  name: 'App',
  // eslint-disable-next-line vue/no-unused-components
  components: { Navbar}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #061321;
}

body{
  background: linear-gradient(to right, #88b5e3, #FFFFFF)
}

nav {
  padding: 40px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
