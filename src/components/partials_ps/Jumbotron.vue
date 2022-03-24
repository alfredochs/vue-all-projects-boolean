<template>

  <div class="container-fluid jumbo-returnal">
    <div class="container">
      <div class="col-4 text-white text-start container-text-returnal">
        <img
          src="../../assets/img-ps/it-takes-two-logo.png"
          class="w-75"
          alt=""
        />
        <div class="">
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
.jumbo-returnal {
  background-image: url("../../assets/img-ps/it-takes-two-hero-banner-desktop.jpg");
  min-height: 550px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  // background-position-y: center;
  .container-text-returnal{
    padding: 120px 0 100px 0;
  }
}
</style>