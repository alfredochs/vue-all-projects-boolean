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
              <li v-for="(companies, i) in ObjectToShow.production_companies" :key="i">
                {{ companies.name }}
              </li>
            </ul>
          </div>
          <div>
            <h3>production_countries</h3>
            <ul class="list-unstyled">
              <li v-for="(countries, i) in ObjectToShow.production_countries" :key="i">
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

<style>
</style>
