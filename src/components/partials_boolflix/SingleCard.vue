<template>
  <div class="container">
    <div class="card mb-3">
      <div>
        <img :src="generaImage()" class="card-img-top w-25" alt="..." />
        <!-- Valuta img se è da mostrare -->
        <img :src="generaImageB()" class="card-img-top w-25" alt="..." />
      </div>
      <div class="card-body">
        <h5 class="card-title">{{ ObjectToShow.original_title }}</h5>
        <p class="card-text">{{ ObjectToShow.overview }}</p>
        <p class="card-text">
          <small class="text-muted">{{ ObjectToShow.original_language }}</small>
        </p>

        <div class="d-flex justify-content-between">
          <div>
            <h3>Genres</h3>
            <ul class="list-unstyled">
              <li v-for="(genre, i) in ObjectToShow.genres" :key="i">
                {{ genre.name }}
              </li>
            </ul>
          </div>
          <div>
            <h3>production_companies</h3>
            <ul class="list-unstyled">
              <li
                v-for="(companies, i) in ObjectToShow.production_companies"
                :key="i"
              >
                {{ companies.name }}
              </li>
            </ul>
          </div>
          <div>
            <h3>production_countries</h3>
            <ul class="list-unstyled">
              <li
                v-for="(countries, i) in ObjectToShow.production_countries"
                :key="i"
              >
                {{ countries.name }}
              </li>
            </ul>
          </div>
          <div>
            Media Voti
            <p>{{ ObjectToShow.vote_average }}</p>
          </div>
          <div>
            Vote Count
            <p>{{ ObjectToShow.vote_count }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/**
 * ?Questo fa riferiemento alle informazioni utili che ci passa la prop, da mostrare a schermo
 * "original_title":"Dr. Strange",
 * "overview":"A psychiatrist becomes the new Sorcerer Supreme of the Earth in order to battle an evil Sorceress from the past.",
 * "original_language":"en",
 * "backdrop_path":"/kw4GhCZP5NeMVsfPol6HcX9JEeQ.jpg",
 * "poster_path":"/uMoUh0cgZmAfbVF1aF9WGRfXKoh.jpg",
 * "genres":[{"id":10770,"name":"TV Movie"},{"id":28,"name":"Action"},{"id":12,"name":"Adventure"},{"id":14,"name":"Fantasy"},{"id":878,"name":"Science Fiction"}],
 * "popularity":43.799,
 * "production_companies":[{"id":26727,"logo_path":"/jeTxdjXhzgKZyLr3l9MllkTn3fy.png","name":"Universal Television","origin_country":"US"}],
 * "production_countries":[{"iso_3166_1":"US","name":"United States of America"}],
 * "release_date":"1978-09-06",
 * "spoken_languages":[{"english_name":"English","iso_639_1":"en","name":"English"}],
 * "status":"Released",
 * "title":"Dr. Strange",
 * "vote_average":6.4,
 * "vote_count":64}
 */
export default {
  name: "SingleCard",
  data() {
    return {
      urlImgBase: "https://image.tmdb.org/t/p/w342",
    };
  },
  props: {
    ObjectToShow: Object,
  },
  methods: {
    generaImage() {
      return this.urlImgBase + this.ObjectToShow.poster_path;
    },
    generaImageB() {
      return this.urlImgBase + this.ObjectToShow.backdrop_path;
    },
  },
};
</script>

<style></style>
