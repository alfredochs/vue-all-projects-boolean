<template>
  <div class="container">
    <div class="row row-cols-6 g-4">
      <div class="col" v-for="pokemon, i in pokemonsAllInfo" :key="i">
        <div class="card h-100">
          <img :src="pokemon.img" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">{{ pokemon.name }}</h5>
            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
          </div>
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
      pokemonsIds: [],
      pokemonsAllInfo: [],
    };
  },
  props: {
    generationID: [String, Number],
    generationCount: Number,
  },
  methods: {
    async getAllPokemonsNameAndUrl() {
      await axios.get(this.apiGenerations + this.generationID).then((resp) => {
        this.pokemons = resp.data.pokemon_species;
      });
    },
    async getIdsForAllPokemons() {
      this.pokemons.forEach((el) => {
        const arr = el.url.split("/");
        const id = arr[arr.length - 2];
        this.pokemonsIds.push(id);
      });
      return this.pokemonsIds.sort((a, b) => {
        return a - b;
      });
    },

    async getAllDataSinglePokemon() {
      const endPoints = [];
      this.pokemonsIds.forEach((id) => {
        const endPoint = this.apiGeneral + id;
        endPoints.push(endPoint);
      });
      axios.all(endPoints.map((endPoint) => {
        axios.get(endPoint).then(resp => {
          const pathImg = resp.data.sprites.other.dream_world.front_default;
          // const anotherPath = resp.data.sprites.other.official-artwork.front_default
          const customPokemonData = {
            'id': resp.data.id,
            'name': resp.data.name,
            'img': pathImg ? pathImg : 'anotherPath'
          };
          this.pokemonsAllInfo.push(customPokemonData);
          // this.pokemonsAllInfo = resp.data
        });
      }));
    },
    /**
     * Will order the passed array
     * @param {Array} arr 
     */
    orderById(arr) {
      return new Promise((resolve) => {
        arr.sort((a, b) => {
          return a.id - b.id;
        });
        resolve();
      });
    },

    async getAll() {
      await this.getAllPokemonsNameAndUrl();
      await this.getIdsForAllPokemons();
      await this.getAllDataSinglePokemon();
      await this.orderById(this.pokemonsAllInfo);
    },
  },
  computed: {},
  created() {
    this.getAll();
  },
  mounted() {
  },
};
</script>

<style>
</style>