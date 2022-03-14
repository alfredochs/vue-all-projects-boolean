<template>
  <div class="col">
    <div class="card h-100 border-0">
      <img
        :src="generaImage()"
        class="card-img-top h-100"
        :style="
          !this.movieOrSerie.poster_path
            ? 'object-fit:cover;object-position:center'
            : ''
        "
        alt="..."
      />
      <div class="card-body">
        <h5 class="card-title">
          {{ generaTitolo() }}
        </h5>
        <!-- <p>{{ movieOrSerie.id }}</p> -->
        <router-link
          :to="{ name: 'SingleMovie', params: { movieID: movieOrSerie.id } }"
          >Mostra Dettagli</router-link
        >
        <!-- <p class="card-text">
          {{ movieOrSerie.overview }}
        </p> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Search",
  data() {
    return {
      //ex url img -> https://image.tmdb.org/t/p/w500/kqjL17yufvn9OVLyXYpvtyrFfak.jpg
      urlImgBase: "https://image.tmdb.org/t/p/w342",
      // idSalvato: "",
    };
  },
  props: {
    //Movie or serie to print with a v-for
    movieOrSerie: Object,
  },
  methods: {
    generaTitolo() {
      return this.movieOrSerie.title
        ? this.movieOrSerie.title
        : this.movieOrSerie.name;
    },
    generaImage() {
      //movies -> poster_path && backdrop_path
      //series -> the same
      if (this.movieOrSerie.poster_path) {
        return this.urlImgBase + this.movieOrSerie.poster_path;
      }
      return require("../../assets/images/not-found.png");
    },
  },
  mounted() {
    this.idSalvato = this.movieOrSerie.id;
  },
};
</script>

<style></style>
