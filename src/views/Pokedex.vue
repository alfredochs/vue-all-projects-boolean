<template>
  <div class="container">
    <div class="row row-cols-1 row-cols-md-2 g-4 my-auto">
      <div v-for="generation, i in generationsData" :key="i" class="col">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">{{ generation.name.toUpperCase() }}</h5>
            <p>Quantity Of Pokemons Founded: <span class="badge bg-info">{{ generation.countSpecies }}</span></p>
            <router-link type="button" class="btn btn-outline-primary" :to="{
              name: 'Pokemons',
              params: {
                generationID: generation.id,
                generationName: generation.name,
                generationPokemonSpecies: generation.countSpecies
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
  components: {},
  data() {
    return {
      // apiGeneral: "https://pokeapi.co/api/v2/pokemon/",
      apiGenerations: "https://pokeapi.co/api/v2/generation",
      generationsData: []
    };
  },
  methods: {
    /**
     ** Fetch just neccesary data
     */
    fetchGenerationData() {
      return new Promise((resolve, reject) => {
        axios.get(this.apiGenerations).then((resp) => {
          resp.data.results.forEach(generation => {
            generation.id = generation.url.split("/").filter((el) => { return !!el; }).pop();
            axios.get(generation.url).then((resp) => {
              generation.name = resp.data.main_region.name;
              generation.countSpecies = resp.data.pokemon_species.length;
            });
            this.generationsData.push(generation);
          });
        });
        resolve(this.generationsData);
        reject('err in promise');
      });
    },
  },
  created() {
    this.fetchGenerationData();
  },
  mounted() {
  },
};
</script>

<style>

</style>