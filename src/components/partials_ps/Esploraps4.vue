<template>
  <div class="container py-4">
    <h3>Esplora PS4</h3>
    <p>
      Giochi incredibili e intrattenimento senza fine.<br />
      Non c'è mai stato un momento migliore per giocare sulla tua PS4.
    </p>
    <div class="row row-cols-1 row-cols-md-3">
      <card-ps-4 v-for="(prodotto, i) in prodotti" :key="i" :item="prodotto"></card-ps-4>
    </div>
  </div>
</template>

<script>
import CardPs4 from "./CardPs4.vue";
export default {
  name: "EsploraPs4",
  components: { CardPs4 },
  data() {
    return {
      prodotti: [
        {
          img: require("../../assets/img-ps/ps4-slim-homepage-image-block.jpg"),
          title: "Playstation 4",
          subtitle:
            "Giochi incredibili live su PS4 ,con 1TB di spazio di archiviazione.",
        },
        {
          img: require("../../assets/img-ps/double11-202010-tw-psvr.jpg"),
          title: "Playstation VR",
          subtitle: "Oltre 500 titoli d esperienze di gioco. Scoprili tutti.",
        },
        {
          img: require("../../assets/img-ps/dualshock-4-listing-thumb.jpg"),
          title: "Accessori",
          subtitle:
            "Migliora la tua esperienza Ps4 con una gamma dia ccessori ufficiali.",
        },
      ],
    };
  },
};
</script>

<style>
</style>