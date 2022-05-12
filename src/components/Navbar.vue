<template>
  <nav class="navbar navbar-light navbar-dark bg-primary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Wetter</a>
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
         <router-link class="nav-link" to="/home">Home</router-link>
          <router-link class="nav-link" to="/about">Stadt1</router-link>
          <router-link class="nav-link" to="/stadt1">Stadt1</router-link>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>

<style scoped>

</style>
