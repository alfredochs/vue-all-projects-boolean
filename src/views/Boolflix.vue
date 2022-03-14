<template>
  <div class="container-fluid">
    <div class="container">
      <!-- Search -->
      <div class="d-flex">
        <input
          class="form-control me-2"
          placeholder="Search"
          type="text"
          v-model="testoDaRicercare"
          @keydown.enter="stampaRisultati"
        />
        <button class="btn btn-outline-dark" @click="stampaRisultati">
          Cerca
        </button>
      </div>
      <!-- Latest Movies -->
      <popular-movies
        v-if="movies.length == 0 && series.length == 0"
      ></popular-movies>
      <!-- Movies -->
      <div v-if="movies.length > 0">
        <h3>Movies</h3>
        <div class="row row-cols-4 flex-nowrap overflow-auto g-0">
          <card
            v-for="movie in movies"
            :key="movie.id"
            :movieOrSerie="movie"
          ></card>
        </div>
      </div>
      <!-- Series -->
      <div v-if="series.length > 0">
        <h3>Series</h3>
        <div class="row row-cols-4 flex-nowrap overflow-auto g-0">
          <card
            v-for="serie in series"
            :key="serie.id"
            :movieOrSerie="serie"
          ></card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Card from "../components/partials_boolflix/Card.vue";
import PopularMovies from "../components/partials_boolflix/PopularMovies.vue";
export default {
  components: { Card, PopularMovies },
  name: "Boolflix",
  data() {
    return {
      apiKey: "f8519d76cebb62a56eaee41d2d683f32",
      apiUrl: "https://api.themoviedb.org/3/search/",
      apiUrlActor: "https://api.themoviedb.org/3/",
      testoDaRicercare: "",
      movies: [],
      // movie_id: 527774,
      series: [],
      singleMovieData: [],
      /**
       * TODO Prendere l'id dinamico al posto di movie_id non deve rimanere fisso
       */
      // movie_id: this.movie.id,
      //https://api.themoviedb.org/3/movie/550?api_key=f8519d76cebb62a56eaee41d2d683f32
    };
  },
  methods: {
    //https://api.themoviedb.org/3/search/movie?api_key=<<api_key>>&language=en-US&page=1&include_adult=false
    //https://api.themoviedb.org/3/search/movie?api_key=e99307154c6dfb0b4750f6603256716d&query=ritorno+al+futuro

    prendiRisultati(movieOrSerie, input, doveSalvare) {
      axios
        .get(this.apiUrl + movieOrSerie, {
          params: {
            api_key: this.apiKey,
            query: input,
          },
        })
        .then((resp) => {
          this[doveSalvare] = resp.data.results;
        });
    },
    /**
     **Stampa i risultati della chiamata API
     */
    stampaRisultati() {
      this.prendiRisultati("movie", this.testoDaRicercare, "movies");
      this.prendiRisultati("tv", this.testoDaRicercare, "series");
      // this.takeSingleMovie();
    },
  },
};
</script>

<style lang="scss" scoped>
body {
  background-color: black;
}
</style>
