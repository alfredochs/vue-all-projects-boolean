<template>
  <div class="container-generale">
    <div
      v-for="(image, i) in imgList"
      :key="i"
      class="container-slide"
      :class="i === currentImg ? 'active' : ''"
    >
      <!-- Freccia sx -->
      <button class="freccia freccia-sx" @click="imgPrecedente()">-</button>
      <!-- Freccia dx -->
      <button class="freccia freccia-dx" @click="imgSuccessiva()">+</button>
      <img :src="image.img" />
      <div class="text-container">
        <p>{{ image.titolo }}</p>
        <p>{{ image.sottotitolo }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Slider",
  data() {
    return {
      imgList: [
        {
          img: require("../assets/images/01.jpg"),
          titolo: "titolo1",
          sottotitolo: "sottotitolo1",
        },
        {
          img: require("../assets/images/02.jpg"),
          titolo: "titolo2",
          sottotitolo: "sottotitolo2",
        },
        {
          img: require("../assets/images/03.jpg"),
          titolo: "titolo3",
          sottotitolo: "sottotitolo3",
        },
        {
          img: require("../assets/images/04.jpg"),
          titolo: "titolo4",
          sottotitolo: "sottotitolo4",
        },
        {
          img: require("../assets/images/05.jpg"),
          titolo: "titolo5",
          sottotitolo: "sottotitolo5",
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
  },
  mounted() {
    setInterval(() => {
      this.imgSuccessiva();
    }, 1500);
  },
};
</script>

<style lang="scss">
.container-generale {
  width: 70%;
  min-height: 300px;
  border: 1px solid black;
  margin: 50px auto;
  position: relative;
  .container-slide {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0;
    &.active {
      opacity: 1;
    }
    display: flex;
    .freccia {
      position: absolute;
      background-color: white;
      width: 30px;
      height: 30px;
      display: flex;
      justify-content: center;
      align-items: center;
      align-self: center;
    }
    .freccia-dx {
      right: 0;
    }
    img {
      width: 100%;
      max-height: 300px;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }
    .text-container {
      position: absolute;
      right: 20px;
      bottom: 0;
      color: white;
    }
  }
}
</style>
