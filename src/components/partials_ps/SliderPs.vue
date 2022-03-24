<template>
  <div>
    <div class="container-generale-ps">
      <div
        v-for="(image, i) in imgList"
        :key="i"
        class="container-slide-ps"
        :class="i === currentImg ? 'active' : ''"
        :style="{ backgroundImage: 'url(' + image.img + ')' }"
      >
        <!-- Freccia sx -->
        <button class="freccia carousel-control-prev" @click="imgPrecedente()">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <!-- Freccia dx -->
        <button class="freccia carousel-control-next" @click="imgSuccessiva()">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
        <!-- <div class="text-container-ps">
          <p class="">{{ image.titolo }}</p>
          <p>{{ image.sottotitolo }}</p>
        </div> -->
        <div class="container">
          <div class="col-4 text-white text-start container-text-slide-ps">
            <div class="">
              <h3>{{image.titolo}}</h3>
              <p>
                {{image.sottotitolo}}
              </p>
              <button class="btn btn-danger rounded-pill">Acquista Ora</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- small-cards -->
    <div class="container-small-cards-ps">
      <div
        v-for="(card, i) in imgList"
        :key="i"
        class="my-small-card"
        @click="imgCurr(i)"
      >
        <img :src="card.img" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  name: "Slider",
  data() {
    return {
      imgList: [
        {
          img: require("../../assets/Playstation/it-takes-two-hero-banner-desktop.jpg"),
          titolo: "It Takes Two",
          sottotitolo: "Play as the clashing couple Cody and May, two humans turned into dolls by a magic spell. Trapped in a fantastical world, they're reluctantly challenged with saving their fractured relationship by the suave love guru Dr. Hakim.",
        },
        {
          img: require("../../assets/Playstation/ratchet-and-clank-rift-apart-keyart.jpg"),
          titolo: "Ratchet and Clank - Rift Apart",
          sottotitolo: "Ratchet and Clank recover the Dimensional Map but are ambushed by Emperor Nefarious and banished through a rift. Kit transforms into her Warbot form to try and stop Emperor Nefarious, shocking Rivet, but Kit ends up being banished through a rift as well.",
        },
        {
          img: require("../../assets/Playstation/returnal-listing-thumb-01-ps5.jpg"),
          titolo: "Returnal",
          sottotitolo: "Third-person shooter, roguelike. Mode(s) Single-player, multiplayer. Returnal is a third-person shooter roguelike video game developed by Housemarque and published by Sony Interactive Entertainment. It was released for the PlayStation 5 on April 30, 2021.",
        },
        {
          img: require("../../assets/Playstation/gow-jumbo.jpeg"),
          titolo: "God Of War",
          sottotitolo: "God of War is the eighth installment in the franchise overall. Unlike previous installments, this game focuses on Norse mythology and follows an older and more seasoned Kratos and his new son Atreus in the years since God of War III. The game released on April 20, 2018, and is currently exclusive to the PlayStation 4.",
        },
      ],
      currentImg: 0,
    };
  },
  methods: {
    imgPrecedente() {
      let nuovoIndice = this.currentImg - 1;
      if (nuovoIndice < 0) {
        nuovoIndice = this.imgList.length - 1;
      }
      return (this.currentImg = nuovoIndice);
    },
    imgSuccessiva() {
      let nuovoIndice = this.currentImg + 1;
      if (nuovoIndice > this.imgList.length - 1) {
        nuovoIndice = 0;
      }
      return (this.currentImg = nuovoIndice);
    },
    imgCurr(key) {
      return (this.currentImg = key);
    },
  },
  mounted() {
    // setInterval(() => {
    //   this.imgSuccessiva();
    // }, 1500);
  },
};
</script>

<style lang="scss">
</style>
