<template>
  <div>
    <h1>Popular films</h1>
    <div class="row row-cols-4 flex-wrap flex-md-nowrap overflow-auto g-0">
      <card v-for="movie in latestMovies" :key="movie.id" :movieOrSerie="movie"></card>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Card from "./Card.vue";
export default {
  components: { Card },
  name: "Popular",
  data() {
    return {
      url1: "https://api.themoviedb.org/3/",
      apiKey: "f8519d76cebb62a56eaee41d2d683f32",
      latestMovies: {},
    };
  },
  methods: {
    /**
     * Take the last movies / series with an axios get
     * @param {String} movieOrSerie 
     */
    getLatestMovies(movieOrSerie) {
      axios
        .get(this.url1 + movieOrSerie + "popular", {
          params: {
            api_key: this.apiKey,
          },
        })
        .then((resp) => {
          this.latestMovies = resp.data.results;
        });
    },
  },
  mounted () {
    this.getLatestMovies("movie/");
  },
};
</script>

<style></style>
