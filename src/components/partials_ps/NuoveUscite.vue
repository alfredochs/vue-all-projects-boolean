<template>
<div class="bg-dark text-white">
  <div class="container text-start py-4">
    <h4>Nuove Uscite</h4>
    <p>Giochi incredibili per PS4 e PS5 disponibili ora</p>

    <div class="row row-cols-2 row-cols-sm-3 row-cols-md-6  g-4">
      <card-games
        v-for="(game, i) in giochi"
        :key="i"
        :item="game"
      ></card-games>
    </div>
  </div>
</div>

</template>

<script>
import CardGames from "./CardGames.vue";
export default {
  name: "NuoveUscite",
  components: { CardGames },
  data() {
    return {
      giochi: [
        {
          img: require("../../assets/img-ps/tony-hawks-pro-skater-1-2-store-art.jpg"),
          titolo: "Tony Hawks Pro Skater 1 + 2",
        },
        {
          img: require("../../assets/img-ps/crash-bandicoot-4-its-about-time-store-art.jpg"),
          titolo: "Crash Bandicoot 4: It's about time",
        },
        {
          img: require("../../assets/img-ps/tony-hawks-pro-skater-1-2-store-art.jpg"),
          titolo: "Tony Hawks Pro Skater 1 + 2",
        },
        {
          img: require("../../assets/img-ps/crash-bandicoot-4-its-about-time-store-art.jpg"),
          titolo: "Crash Bandicoot 4: It's about time",
        },
        {
          img: require("../../assets/img-ps/tony-hawks-pro-skater-1-2-store-art.jpg"),
          titolo: "Tony Hawks Pro Skater 1 + 2",
        },
        {
          img: require("../../assets/img-ps/crash-bandicoot-4-its-about-time-store-art.jpg"),
          titolo: "Crash Bandicoot 4: It's about time",
        },
        {
          img: require("../../assets/img-ps/tony-hawks-pro-skater-1-2-store-art.jpg"),
          titolo: "Tony Hawks Pro Skater 1 + 2",
        },
        {
          img: require("../../assets/img-ps/crash-bandicoot-4-its-about-time-store-art.jpg"),
          titolo: "Crash Bandicoot 4: It's about time",
        },
        {
          img: require("../../assets/img-ps/tony-hawks-pro-skater-1-2-store-art.jpg"),
          titolo: "Tony Hawks Pro Skater 1 + 2",
        },
        {
          img: require("../../assets/img-ps/crash-bandicoot-4-its-about-time-store-art.jpg"),
          titolo: "Crash Bandicoot 4: It's about time",
        },
        {
          img: require("../../assets/img-ps/tony-hawks-pro-skater-1-2-store-art.jpg"),
          titolo: "Tony Hawks Pro Skater 1 + 2",
        },
        {
          img: require("../../assets/img-ps/crash-bandicoot-4-its-about-time-store-art.jpg"),
          titolo: "Crash Bandicoot 4: It's about time",
        },
      ],
    };
  },
};
</script>

<style>
</style>