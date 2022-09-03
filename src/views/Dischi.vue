<template>
  <div>
    <div>
      <select name="filtro-dischi" id="" v-model="genereScelto">
        <option :value="genere" v-for="(genere, i) in selectGenres" :key="i">
          {{ genere }}
        </option>
      </select>
      <input type="button" class="btn btn-primary m-2" @click="cleanSelect" value="Clean Select" />
    </div>
    <div class="container m-auto w-75">
      <div class="row row-cols-4 g-4">
        <div class="col" v-for="(disco, i) in filtro_generi" :key="i">
          <div class="card h-100">
            <img :src="disco.poster" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">{{ disco.title }}</h5>
              <p class="card-text">{{ disco.author }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Dischi",
  data() {
    return {
      listaDischi: [],
      genereScelto: "",
    };
  },
  methods: {
    cleanSelect() {
      this.genereScelto = "";
    },
  },
  mounted() {
    axios
      .get("https://flynn.boolean.careers/exercises/api/array/music")
      .then((resp) => {
        this.listaDischi = resp.data.response;
      });
  },
  computed: {
    selectGenres() {
      const genres = this.listaDischi.map((disco) => {
        return disco.genre;
      });
      console.log(genres);
      const uniquesGenres = [];
      genres.forEach((el) => {
        if (!uniquesGenres.includes(el)) {
          uniquesGenres.push(el);
        }
      });
      console.log(uniquesGenres);
      return uniquesGenres;
    },
    filtro_generi() {
      if (!this.genereScelto) {
        return this.listaDischi;
      }
      return this.listaDischi.filter((disco) => {
        return disco.genre === this.genereScelto;
      });
    },
  },
};
</script>

<style>
</style>
