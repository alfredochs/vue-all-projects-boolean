<template>

  <div class="container-fluid jumbo-section">
    <div class="container">
      <div class="col-12 text-white text-start container-text-section">
        <div class="col-7">

        <img
          src="../../assets/img-ps/it-takes-two-logo.png"
          class="w-100"
          alt=""
        />
        </div>
        <div class="mt-5">
          <h3>Rompi il cerchio</h3>
          <p>
            Rialzati dopo ogni sconfitta e affronta una nuova sfida con ogni
            rinascita in questo esplosivo thriller fantascientifico, disponibile
            in esclusiva su PS5.
          </p>
          <button class="btn btn-danger rounded-pill">Acquista Ora</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Jumbotron",
};
</script>

<style lang="scss" scoped>
.jumbo-section {
  background-image: url("../../assets/img-ps/it-takes-two-hero-banner-desktop.jpg");
  min-height: 550px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  // background-position-y: center;
  .container-text-section{
    padding: 80px 0 100px 0;
  }
}
</style>