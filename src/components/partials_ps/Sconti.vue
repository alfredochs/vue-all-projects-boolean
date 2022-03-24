<template>
  <div class="container py-5">
    <h3>Nuovi Sconti sul Playstation Store</h3>
    <p>
      Sconti pazzeschi, collezione curate e saldi stagionali su PS5, PS4 e PS
      VR, tutti in un unico posto.
    </p>
<div class="d-flex justify-content-center gap-4">
    <!-- <div v-for="(sconto, i) in sconti" :key="i"> -->
      <img v-for="(sconto, i) in sconti" :key="i" :src="sconto.img" alt="" class="w-25"/>

</div>
  </div>
</template>

<script>
export default {
  name: "Sconti",
  data() {
    return {
      sconti: [
        {
          img: require("../../assets/img-ps/playstation-store-games-under-20-spotlight.jpg"),
        },
        {
          img: require("../../assets/img-ps/playstation-store-golden-week-sale-spotlight.jpg"),
        },
        {
          img: require("../../assets/img-ps/playstation-store-free-to-play-spotlight.png"),
        },
      ],
    };
  },
};
</script>

<style>
</style>