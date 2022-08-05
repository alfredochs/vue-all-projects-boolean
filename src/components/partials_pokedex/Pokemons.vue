<template>
  <div class="container py-4">
    <SearchBarPokemon :types="pokemonTypes" @filter="filterByTypes"></SearchBarPokemon>
    <div class="row row-cols-6 g-4">
      <CardPokemon v-for="pokemon, i in filteredPokemons" :key="i" :pokemonObj="pokemon"></CardPokemon>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import CardPokemon from "./CardPokemon.vue";
import SearchBarPokemon from "./SearchBarPokemon.vue";
export default {
  components: { CardPokemon, SearchBarPokemon },
  data() {
    return {
      apiGenerations: "https://pokeapi.co/api/v2/generation/",
      apiGeneral: "https://pokeapi.co/api/v2/pokemon/",
      apiTypes: "https://pokeapi.co/api/v2/type/",
      pokemons: [],
      filteredPokemons: [],
      pokemonTypes: []
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
              // pokemon.image = resp.data.sprites.other.dream_world.front_default
              const typesArr = resp.data.types;
              const types = [];
              typesArr.forEach(element => {
                types.push(element.type.name);
              });
              pokemon.type = types;
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
    allTypes() {
      axios.get(this.apiTypes).then((resp) => {
        return resp.data.results;
      }).then((data) => {
        data.forEach(type => {
          this.pokemonTypes.push(type.name);
        });
      });
    },
    /**
    * The param was received from $emit on SearchBarPokemon
    * @param {String} selectedType 
    */
    filterByTypes(selectedType) {
      if (selectedType == undefined) {
        return this.pokemons;
      }
      this.filteredPokemons = [];
      const filtered = this.pokemons.map((pokemon) => {
        if (pokemon.type.includes(selectedType)) {
          this.filteredPokemons.push(pokemon);
          return this.filteredPokemons;
        } else {
          return this.filteredPokemons;
        }
      });
      return filtered;
    },

  },

  computed: {

  },
  created() {
    this.fetchData();
    this.allTypes();
  },
  mounted() {
  },
};
</script>

<style>
</style>