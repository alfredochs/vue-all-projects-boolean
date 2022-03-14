<template>
  <div>
    <single-card :ObjectToShow="singleMovieData"></single-card>
    <actors-list :castArray="cast"></actors-list>
  </div>
</template>

<script>
import axios from "axios";
import SingleCard from "./SingleCard.vue";
import ActorsList from "./ActorsList.vue";
export default {
  components: { SingleCard, ActorsList },
  name: "SingleMovie",
  data() {
    return {
      apiKey: "f8519d76cebb62a56eaee41d2d683f32",
      apiUrlActor: "https://api.themoviedb.org/3/",
      singleMovieData: {},
      urldaSpezzetare: "",
      movie_id: "",
      cast: [],
      // propDaUrl: this.movieID,
    };
  },
  props: {
    // elementToShow: Object,
    // movieID: Number,
  },
  methods: {
    getIDfromURL() {
      this.urldaSpezzetare = window.location.href;
      const arrayURL = this.urldaSpezzetare.split("/");
      let idPresoDaUrl = arrayURL[arrayURL.length - 1];
      return (this.movie_id = idPresoDaUrl);
    },
    /**
     **https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US
     */
    takeSingleMovie() {
      axios
        .get(this.apiUrlActor + "movie/" + this.movie_id, {
          params: {
            api_key: this.apiKey,
          },
        })
        .then((resp) => {
          this.singleMovieData = resp.data;
        });
    },
    /**
     ** Questa funzione ci prenderà gli attori che appartengono ad un film
     ** Esempio -> https://api.themoviedb.org/3/movie/{movie_id}/credits?api_key=<<api_key>>&language=en-US
     */
    prendiAttoriDiUnFilm(movieOrSerie, movie_id, doveSalvare) {
      //manca movie-id
      axios
        .get(this.apiUrlActor + movieOrSerie + movie_id + "/credits", {
          params: {
            api_key: this.apiKey,
            // query: input,
          },
        })
        .then((resp) => {
          this[doveSalvare] = resp.data.cast;
        });
    },
    stampaListaAttori() {
      this.prendiAttoriDiUnFilm("movie/", this.movie_id, "cast");
    },
  },

  mounted() {
    this.getIDfromURL();
    this.stampaListaAttori();
    this.takeSingleMovie();
  },
};
</script>

<style></style>
