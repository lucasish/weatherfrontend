<template>
  <br>
  <h1>Über uns:</h1>
  <br>
<div class="container-fluid">
  <div class="row row-cols-1 row-cols-md-4 g-4">
    <div class="col justify-content-center">
      <div class="col-8 mx-auto">
        <img id="female" src="../assets/female.png" class="card-img-top" alt="Milena Kalo">
        <div class="card-body">
          <h5 class="card-title">Milena Kalo</h5>
          <p class="card-text">
            Wirtschaftsnformatik Bachelorstudent 🎓
          </p>
        </div>
      </div>
    </div>
    <div class="col justify-content-center">
      <div class="col-8 mx-auto" >
        <img id="male" src="../assets/male.png" class="card-img-top"  alt="Lucas Schneider">
        <div class="card-body">
          <h5 class="card-title">Lucas Schneider</h5>
          <p class="card-text">
            Wirtschaftsinformatik Masterstudent 🎓
          </p>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>

export default {
  name: 'AboutView'

}
</script>
<style scoped>
#male{ border-radius: 75px;}
#female{ border-radius: 75px;}
</style>
