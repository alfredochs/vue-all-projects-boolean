<template>
  <div class="py-5">
    <section class="container-fluid d-flex flex-column">
      <h6>PLAY HAS NO LIMITS</h6>
      <h3 class="title-h3">Ecco la Playstation 5</h3>
      <p>Tuffati in nuove possibilità di gioco completamente inaspettate</p>
    </section>

    <section class="container">
      <div class="d-flex align-items-center row">
        <div class="col-12 col-md-6">
          <div class="text-start">
            <h3 class="title-h3">Console Playstation 5</h3>
            <span
              >Sperimenta la nuova generazione di incredibili giochi
              Playstation.</span
            >
            <button class="my-btn-blu btn btn-primary rounded-pill mt-3">
              Maggiori Informazioni
            </button>
          </div>
        </div>
        <div class="col-12 col-md-6">
          <img
            src="../../assets/img-ps/playstation-5-thumb.png"
            alt=""
            class="w-100"
          />
        </div>
      </div>
    </section>

    <section class="container">
      <div class="row row-cols-3 row-cols-md-5 m-0">
        <div class="col" v-for="(product, i) in products" :key="i">
          <div
            class="
              card
              w-100
              border-0
              d-flex
              flex-column
              align-items-center
              my-card
            "
          >
            <img :src="product.img" alt="" class="card-img-top w-75" />
            <div class="card-body d-none d-md-block">
              <p class="card-text">
                {{ product.titolo }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "PsProducts",
  data() {
    return {
      products: [
        {
          img: require("../../assets/img-ps/playstation-5-thumb.png"),
          titolo: "Console PS5",
        },
        {
          img: require("../../assets/img-ps/joypad-thumb.png"),
          titolo: "Controller Wireless Dualsense TM(logo)",
        },
        {
          img: require("../../assets/img-ps/headset-thumb.png"),
          titolo: "Cuffie Wireless con microfono PULSE 3tm",
        },
        {
          img: require("../../assets/img-ps/remote-thumb.png"),
          titolo: "Telecomando Media",
        },
        {
          img: require("../../assets/img-ps/camera-thumb.jpg"),
          titolo: "Telecamera HD",
        },
      ],
    };
  },
};
</script>

<style lang="scss" >
</style>