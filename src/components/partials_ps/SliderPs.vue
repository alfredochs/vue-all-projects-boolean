<template>
 <div>
    <div class="container-generale">
      <div
        v-for="(image, i) in imgList"
        :key="i"
        class="container-slide"
        :class="i === currentImg ? 'active' : ''"
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
        <img :src="image.img" class="rounded-3" />
        <div class="text-container">
          <p class="">{{ image.titolo }}</p>
          <p>{{ image.sottotitolo }}</p>
        </div>
      </div>
    </div>
    <!-- small-cards -->
    <div class="container-small-cards">
      <div v-for="(card, i) in imgList" :key="i" class="my-small-card" @click="imgCurr(i)">
        <img :src="card.img" alt="" />
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
            img: require("../../assets/Playstation/it-takes-two-hero-banner-desktop.jpg"),
            titolo: "It Takes Two",
            sottotitolo: "It takes Two Description"
          },
          {
            img: require("../../assets/Playstation/ratchet-and-clank-rift-apart-keyart.jpg"),
            titolo: "Ratchet and Clank",
            sottotitolo: "Ratchet and Clank Description"
          },
          {
            img: require("../../assets/Playstation/returnal-listing-thumb-01-ps5.jpg"),
            titolo: "Returnal",
            sottotitolo: "Returnal Description"
          },
          {
            img: require("../../assets/Playstation/gow-jumbo.jpeg"),
            titolo: "God Of War",
            sottotitolo: "GoW"
          }
        ],
        currentImg: 0
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
      imgCurr(key){
        return (this.currentImg = key);
      }
    },
    mounted() {
      // setInterval(() => {
      //   this.imgSuccessiva();
      // }, 1500);
    }
  };
</script>

<style lang="scss">
.container-generale {
  width: 100%;
  min-height: 550px;
  //   border-radius: 30%;
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
      width: 30px;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      align-self: center;
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
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

.container-small-cards {
  display: flex;
  justify-content: center;
  gap: 10px;
  .my-small-card {
    width: 200px;
    transition: all 0.2s ease-in;
    position: relative;
    img {
      border-radius: 10px;
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
      border-radius: 20px;
    }
  }
  :hover {
    transform: translateY(-8px);
  }
  ::after {
    content: "";
    width: calc(100% + 10px);
    height: calc(100% + 10px);
    top: -5px;
    left: -5px;
    border: 2px solid #0072ce;
    position: absolute;
    border-radius: 20px;
    display: none;
  }
}
.my-small-card:hover::after {
  display: block;
}

</style>
