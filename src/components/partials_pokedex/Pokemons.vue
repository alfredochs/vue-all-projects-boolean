<template>
  <div class="container">
    <button @click="getDataForAllPokemons()">btn</button>
    <ul class="list-group">
      <li class="list-group-item" v-for="(pokemon, i) in pokemons" :key="i">
        {{ pokemon.name }}
      </li>
    </ul>
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
      pokemonsAllInfo: [],
    };
  },
  props: {
    generationID: String,
    generationCount: Number,
  },
  methods: {
    async getAllPokemonsNameAndUrl() {
      await axios.get(this.apiGenerations + this.generationID).then((resp) => {
        this.pokemons = resp.data.pokemon_species;
      });
        this.pokemons.forEach((el, index) => {
          console.log(el, index);
        })
    },

    async getAll() {
      await this.getAllPokemonsNameAndUrl();
      // await this.getDataForAllPokemons();
    },
  },
  computed: {},
  mounted() {
    this.getAll();
  },
};
</script>

<style>
</style>