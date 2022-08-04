<template>
  <div class="container">
    <div class="row row-cols-6 g-4">
      <div class="col" v-for="pokemon, i in pokemons" :key="i">
        <div class="card h-100">
          <img :src="pokemon.image" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">{{ pokemon.name }}</h5>
          </div>
          <ul class="list-group">
            <li class="list-group-item" v-for="type, j in pokemon.types" :key="j">
              <button class="btn">
                <span class="badge bg-primary">{{ type.slot }}</span>
                <span class="badge bg-dark">{{ type.type.name }}</span>
              </button>
              <span></span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      apiGenerations: "https://pokeapi.co/api/v2/generation/",
      apiGeneral: "https://pokeapi.co/api/v2/pokemon/",
      pokemons: [],
      endPoints: []
    };
  },
  props: {
    generationID: [String, Number],
  },
  methods: {
    fetchData() {
      return new Promise((resolve, reject) => {
        axios.get(this.apiGenerations + this.generationID).then((resp) => {
          this.pokemons = resp.data.pokemon_species;
        }).then(() => {
          this.pokemons.forEach(pokemon => {
            pokemon.id = pokemon.url.split("/").filter((el) => { return !!el; }).pop();
            const officialArtwork = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`;
            pokemon.image = officialArtwork;
            axios.get(this.apiGeneral + pokemon.id).then((resp) => {
              pokemon.types = resp.data.types;
            });
          });
          this.pokemons.sort((a, b) => {
            return a.id - b.id;
          });
        });
        resolve();
        reject('error');
      });
    },
  },
  created() {
    this.fetchData();
  },
  mounted() {
    // this.order();
  },
};
</script>

<style>
</style>