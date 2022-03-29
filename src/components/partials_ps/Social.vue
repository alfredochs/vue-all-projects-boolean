<template>
  <div class="container py-4">
    <h3>Seguici sui social media</h3>
    <div class="row row-cols-2 row-cols-sm-4">
      <div class="col p-2" v-for="(social, i) in socials" :key="i">
        <img :src="social.img" alt="" class="logo-social w-100"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Social",
  data() {
    return {
      socials: [
        {
          img: require("../../assets/img-ps/facebook.jpg"),
        },
        {
          img: require("../../assets/img-ps/instagram.jpg"),
        },
        {
          img: require("../../assets/img-ps/twitter.jpg"),
        },
        {
          img: require("../../assets/img-ps/youtube.png"),
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.logo-social {
  width: 10%;
}
</style>