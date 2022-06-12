<template>
  <br>
  <h1>Home</h1>
  <br>
  <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active" data-bs-interval="10000">
        <center>
        <img src="../assets/cloudy.png " style="max-height: 300px; max-width: 300px;" class="d-block w-100"  alt="...">
        </center>
        <br>
        <br>
        <br>
        <br>
        <div class="carousel-caption d-none d-md-block">
          <h5>Herzlich Willkommen zu unserer WetterApp</h5>
          <p>Wir zeigen dir nun wie du am besten unsere Website bedienen kannst.</p>
        </div>
      </div>
      <br>
      <br>
      <br>
      <br>
      <div class="carousel-item" data-bs-interval="2000">
        <center>
        <img src="../assets/menue.png " id="bild" style="max-height: 150px; max-width: 150px;"  class="d-block w-100"  alt="...">
          </center>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <div class="carousel-caption d-none d-md-block">
          <h5>Navigationsbar</h5>
          <p>Diese findest du rechts oben.
            <br>Hier kannst du zwischen den verschiedenen Seiten wechseln.</p>
        </div>
      </div>
      <div  class="carousel-item">
        <center>
          <img src="../assets/daumen.png " style="max-height: 300px; max-width: 300px;" class="d-block w-100"  alt="...">
        </center>
        <br>
        <br>
        <br>
        <br>
        <br>
        <div class="carousel-caption d-none d-md-block">
          <h5>Einführung beendet</h5>
          <p>Wir wünschen dir viel Spaß mit unserer Website.</p>
        </div>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>

<script>

export default {

}
</script>
<style>

</style>
