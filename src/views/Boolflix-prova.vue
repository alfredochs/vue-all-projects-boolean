<template>
  <div class="container-fluid">
    <div class="container">
      <!-- Search -->
      <div class="m-auto w-50 d-flex justify-content-around">
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
        <!-- filtro genres -->
        <div>
          <!-- <select name="genres" id="" v-model="idScelto">
            <option v-for="(genre, i) in takeGenresId" :key="i" :value="genre">
              {{ genre }}
            </option>
          </select> -->
        </div>
        <!-- Btn per pulire la ricerca -->
        <div>
          <button class="btn" @click="cleanFilter">Clear</button>
        </div>
        <!-- Select con nomi dei generi -->
        <div class="d-flex flex-column bg-danger">
          <div>
            select generi Movies
            <select v-model="idScelto">
              <option :value="genre.id" v-for="(genre, i) in genres" :key="i">
                {{ genre.name }}
              </option>
            </select>
          </div>
          <div>
            select generi Series
            <select v-model="idScelto">
              <option :value="genre.id" v-for="(genre, i) in genres2" :key="i">
                {{ genre.name }}
              </option>
            </select>
          </div>
        </div>
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
            v-for="(movie, i) in filterGenres"
            :key="i"
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
      idScelto: "",
      movies: [],
      series: [],
      genres: [],
      genres2: [],
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
    },
    cleanFilter() {
      return (this.idScelto = "");
    },
    /**
     * !controllare l'array mda fare il merge oppure se nella function getAllGenresNamess i puo già fare il controllo
     */
    mergeGenresArrays() {
      const arrMerged = this.genres.concat(this.genres2);
      return arrMerged;
    },
    /**
     * TODO manca farlo per la serie
     ** Ottengo tutti i generi da Stampare per il Select
     */
    //https://api.themoviedb.org/3/genre/movie/list?api_key=<<api_key>>&language=en-US
    getAllGenresNames(movieOrSerie) {
      axios
        .get(this.apiUrlActor + "genre/" + movieOrSerie + "/list", {
          params: {
            api_key: this.apiKey,
          },
        })
        .then((resp) => {
          if (movieOrSerie == "movie") {
            this.genres = resp.data.genres;
          } else if (movieOrSerie == "tv") {
            this.genres2 = resp.data.genres;
          }
        });
    },
  },
  computed: {
    /**
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
     * TODO Manca aggiungere anche il filtro alle serie,  per il momento funziona solo con i film
     ** Questa funzione filtra i risultati
     */
    filterGenres() {
      if (!this.idScelto) {
        return this.movies;
      }
      return this.movies.filter((movie) => {
        if (movie.genre_ids.includes(this.idScelto)) {
          return movie;
        }
      });
    },
    // merge() {
    //   return this.mergeGenresArrays();
    // },
  },
  mounted() {
    this.getAllGenresNames("movie");
    this.getAllGenresNames("tv");
  },
};
</script>

<style lang="scss" scoped>
body {
  background-color: black;
}
</style>
