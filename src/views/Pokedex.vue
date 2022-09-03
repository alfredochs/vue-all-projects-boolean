<template>
  <div class="container">
    <div class="row row-cols-1 row-cols-md-2 g-4 my-auto">
      <div v-for="generation, i in generationsData" :key="i" class="col">
        <div class="card">
          <!-- <img src="..." class="card-img-top" alt="..." /> -->
          <div class="card-body">
            <h5 class="card-title">{{ generation.name.toUpperCase() }}</h5>
            <p>Quantity Of Pokemons Founded: <span class="badge bg-info">{{ generation.count }}</span></p>
            <!-- <a class="btn btn-primary" :href="generation.url">Take data from this generation.</a> -->
            <router-link type="button" class="btn btn-outline-primary" :to="{
              name: 'Pokemons',
              params: {
                generationID: generation.id,
              }
            }">
              Mostra
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Pokedex",
  data() {
    return {
      apiGeneral: "https://pokeapi.co/api/v2/pokemon/",
      apiGenerations: "https://pokeapi.co/api/v2/generation/",
      generationsData: [],
    };
  },
  methods: {
    /**
     * Return objects with the name(ex:generation-i),url endpoint and id.
     * @param {String} url 
     */
    fetchGenerations(url) {
      return new Promise((resolve, reject) => {
        axios.get(url).then((resp) => {
          this.generationsData = resp.data.results;
        }).then(() => {
          this.generationsData.forEach((generation) => {
            generation.id = generation.url.split("/").filter((el) => { return !!el; }).pop();
            axios.get(generation.url).then((resp) => {
              generation.count = resp.data.pokemon_species.length;
              generation.name = resp.data.main_region.name;
            });
          });
          resolve();
          reject("Error in fetchGenerations");
        });
      });
    },
  },
  created() {
    this.fetchGenerations(this.apiGenerations);
  },
  mounted() {
  },
};
</script>

<style>
</style>