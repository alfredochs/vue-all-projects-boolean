<template>
  <div class="container-fluid">
    <!-- Search -->
    <nav class="navbar navbar-dark p-0 pt-3">
      <!-- search input btn & clear -->
      <div class="d-flex justify-content-center">
        <input class="form-control me-2" placeholder="Search" type="text" v-model="testoDaRicercare"
          @keydown.enter="stampaRisultatiDellaRicerca" />
        <button class="btn btn-danger" @click="stampaRisultatiDellaRicerca">
          Cerca
        </button>
        <!-- Btn per pulire la ricerca -->
      </div>
      <!-- Select con nomi di tutti i generi mischiati -->
      <div v-if="this.movies.length > 0" class="d-flex justify-content-center align-items-center">
        <div class="d-flex flex-shrink-0">
          <h6 class="m-2">Genres List</h6>
        </div>
        <select v-model="idScelto" class="form-select form-select-sm" aria-label=".form-select-sm example">
          <option :value="genre.id" v-for="(genre, i) in mergeArray" :key="i">
            {{ genre.name }}
          </option>
        </select>
        <button class="btn btn-success ms-2" @click="cleanFilter">Clear</button>
      </div>

      <!-- List for show how many genres are repeated in both lists -->
      <!-- <div class="d-flex">
            <div>
              <ul class="list-unstyled">
                <li class="border" v-for="(genre, i) in movie_genres" :key="i">
                  {{ genre.name }}
                </li>
              </ul>
            </div>
            <div>
              <ul class="list-unstyled">
                <li class="border" v-for="(genre, i) in series_genres" :key="i">
                  {{ genre.name }}
                </li>
              </ul>
            </div>
          </div> -->
      <!-- </div> -->
    </nav>

    <!-- Latest Movies -->
    <popular-movies v-if="movies.length == 0 && series.length == 0"></popular-movies>
    <!-- Movies -->
    <div v-if="movies.length > 0">
      <div class="" v-if="filterGenres(this.movies).length > 0">
        <h3>Movies</h3>
        <div class="row row-cols-4 flex-nowrap overflow-auto g-0">
          <!-- v-for="(movie, i) in filterGenres" -->
          <card class="" v-for="(movie, i) in filterGenres(this.movies)" :key="i" :movieOrSerie="movie"></card>
        </div>
      </div>
      <h6 v-else>Non ci sono Films di questo Genere</h6>
    </div>
    <!-- Series -->
    <div v-if="series.length > 0">
      <div v-if="filterGenres(this.series).length > 0">
        <h3>Series</h3>
        <div class="row row-cols-4 flex-nowrap overflow-auto g-0">
          <card v-for="serie in filterGenres(this.series)" :key="serie.id" :movieOrSerie="serie"></card>
        </div>
      </div>
      <h6 v-else>Non ci sono serie con questo genere</h6>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Card from "../components/partials_boolflix/Card.vue";
import PopularMovies from "../components/partials_boolflix/PopularMovies.vue";
// import About from "./About.vue";
export default {
  components: { Card, PopularMovies },
  name: "Boolflix",
  data() {
    return {
      apiKey: "f8519d76cebb62a56eaee41d2d683f32",
      apiUrl: "https://api.themoviedb.org/3/search/",
      apiUrlActor: "https://api.themoviedb.org/3/",
      testoDaRicercare: "",
      idScelto: "",
      movies: [],
      series: [],
      movie_genres: [],
      series_genres: [],
    };
  },
  methods: {
    /**
     ** Take the results and save those in specific array -> movies[], series[]
     * @param {string} movieOrSerie - Choose between "movie" or "tv"
     * @param {string} input - take the v-model of the search (where did you save it ?)
     * @param {string} whereWillBeSaved - choose like a string the name of the array where you will save the data of the resp.
     */
    takeResultsOfSearchInput(movieOrSerie, input, whereWillBeSaved) {
      axios
        .get(this.apiUrl + movieOrSerie, {
          params: {
            api_key: this.apiKey,
            query: input,
          },
        })
        .then((resp) => {
          this[whereWillBeSaved] = resp.data.results;
        });
    },
    /**
     ** Call the takeResultsOfSearchInput() and invoke the results with differents parameters
     */
    stampaRisultatiDellaRicerca() {
      this.takeResultsOfSearchInput("movie", this.testoDaRicercare, "movies");
      this.takeResultsOfSearchInput("tv", this.testoDaRicercare, "series");
    },
    /**
     ** Like his name says, will clean the results of the research input.
     */
    cleanFilter() {
      return (this.idScelto = "");
    },
    /**
     ** With a API call, will take all the genres (movies_genres and series_genres)
     *@param {string} movieOrSerie - choose from string "movie" or "tv"
     *@param {string} whereWillBeSaved - choose the name of the array, where you will save the genres (is an array but in this case we need the name of the array, and for that the value of this param is a strign)
     */
    getAllGenres(movieOrSerie, whereWillBeSaved) {
      axios
        .get(this.apiUrlActor + "genre/" + movieOrSerie + "/list", {
          params: {
            api_key: this.apiKey,
          },
        })
        .then((resp) => {
          this[whereWillBeSaved] = resp.data.genres;
        });
    },
    /**
     **Filter applicated to the template, will show series and movies just changing the param
     *@param {array} arrToFilter - Indicate wich will be the array to filter
     */
    filterGenres(arrToFilter) {
      if (!this.idScelto) {
        return arrToFilter;
      }
      return arrToFilter.filter((el) => {
        if (el.genre_ids.includes(this.idScelto)) {
          return el;
        }
      });
    },
  },
  computed: {
    /**
     * ? AL MOMENTO NON LO SI STA UTILIZZANDO
     ** Take all the genres_id from the movies[] or series [] for make an option on the select
     ** in questa funzione ho fatto un ciclo dentro un ciclo, avevo un array grande (arrOfarrGenres) con dentro
     ** gli altri array che contengono i singoli id di ogni film. foreach per prendere i singoli array all'interno
     ** dell'array grande e un forOf per prendere i valori dei singoli array.
     */
    takeGenresId() {
      const arrOfarrGenres = this.movies.map((movieArr) => {
        return movieArr.genre_ids;
      });
      const valori = [];
      arrOfarrGenres.forEach((arrSingolo) => {
        for (const value of arrSingolo) {
          if (!valori.includes(value)) {
            return valori.push(value);
          }
        }
        return valori;
      });
      valori.sort((a, b) => {
        return a - b;
      });
      // console.log(valori);
      return valori;
    },
    /**
     ** merge the array of genres to both_genres
     */
    mergeArray() {
      var both_genres = this.movie_genres.concat(this.series_genres);
      // console.log(both_genres);
      both_genres = both_genres.filter(
        (value, index, self) =>
          index ===
          self.findIndex(
            (t) => t.place === value.place && t.name === value.name
          )
      );
      // console.log(both_genres);
      both_genres.sort((a, b) =>
        a.name > b.name ? 1 : b.name > a.name ? -1 : 0
      );
      return both_genres;
    },
  },
  /**
   ** Mounted works from the begining of the page, execute the function at the refresh
   */
  mounted() {
    this.getAllGenres("movie", "movie_genres");
    this.getAllGenres("tv", "series_genres");
  },
};
</script>

<style lang="scss" scoped>
//Din't work jet, useful for hide the scrollbar but still scroll
.parent-hide-scrollbar {
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.child-hide-scrollbar {
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  padding-right: 17px;
  /* Increase/decrease this value for cross-browser compatibility */
  box-sizing: content-box;
  /* So the width will be 100% + 17px */
}
</style>
