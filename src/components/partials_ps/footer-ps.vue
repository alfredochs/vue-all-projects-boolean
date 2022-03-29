<template>
  <div class="container-fluid bg-color text-white py-5">
    <div class="container">
      <div class="row row-cols-lg-2">
        <div class="col-lg-5">
          <div class="d-flex flex-column text-start">
            <img
              src="../../assets/img-ps/ps-footer.svg"
              alt=""
              class="logo-footer-ps"
            />
            <p>Country/Region:Italy</p>
          </div>
        </div>
        <!-- <div class="col-12 d-flex text-start flex-column d-flex-md"> -->
        <div class="row row-cols-1 row-cols-md-3 text-start">
          <ul class="col list-unstyled">
            <li>link footer</li>
            <li>link footer</li>
            <li>link footer</li>
            <li>link footer</li>
            <li>link footer</li>
          </ul>
          <ul class="col list-unstyled">
            <li>link footer</li>
            <li>link footer</li>
            <li>link footer</li>
            <li>link footer</li>
            <li>link footer</li>
          </ul>
          <ul class="col list-unstyled">
            <li>link footer</li>
            <li>link footer</li>
            <li>link footer</li>
            <li>link footer</li>
            <li>link footer</li>
          </ul>
        </div>
      </div>

      <div class="col-12">
        <div class="d-flex flex-column text-start">
          <img src="../../assets/img-ps/sie-logo.svg" alt="" class="w-25" />
          <p>
            Website 2021 Sony Interactive Entertainment Europe Limited. Tutti i
            contenuti, nomi dei giochi, nomi commerciali e/o di abbigliamento,
            marchi registrati e/o materiale protetto da copyright dei rispettivi
            proprietari. Tutti i diritti riservati. <span>Maggiori info</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FooterPs",
};
</script>

<style lang="scss">
.bg-color {
  background-color: #194296;
}
.logo-footer-ps {
  width: 10%;
}
</style>