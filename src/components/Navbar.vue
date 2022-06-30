<template>
  <nav class="navbar navbar-light navbar-dark bg-primary bg-opacity-50">
    <div class="container-fluid">
      <a class="navbar-brand" href="/home">Wetter</a>
      <form class="d-flex needs-validation" id="citys-create-form" novalidate>

      </form>
      <button class="navbar-toggler" id="collapse" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
         <router-link class="nav-link" to="/home">Home</router-link>
          <router-link class="nav-link" to="/about">Über uns</router-link>
          <router-link classs="nav-link" to="/stadt1">Wetter</router-link>
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
