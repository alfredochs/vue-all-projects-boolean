<template>
  <div class="container">
    <div class="row row-cols-6 g-4">
      <div class="col" v-for="pokemon, i in pokemons" :key="i">
        <div class="card h-100">
          <img :src="pokemon.image" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">{{ pokemon.name }}</h5>
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
            // axios.get(this.apiGeneral+pokemon.id).then((resp) =>{
            // const dreamImage = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`;
            // const defaultImage = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`;
            const officialArtwork = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`
            pokemon.image = officialArtwork;
            // })
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

<!-- // async getAllPokemonsNameAndUrl() {
    //   await axios.get(this.apiGenerations + this.generationID).then((resp) => {
    //     this.pokemons = resp.data.pokemon_species;
    //   });
    // },
    // async getIdsForAllPokemons() {
    //   this.pokemons.forEach((el) => {
    //     const arr = el.url.split("/");
    //     const id = arr[arr.length - 2];
    //     this.pokemonsIds.push(id);
    //   });
    //   return this.pokemonsIds.sort((a, b) => {
    //     return a - b;
    //   });
    // },
    // async getAllDataSinglePokemon() {
    //   return new Promise((resolve, reject) => {
    //     const endPoints = [];
    //     // const finalArr = [];
    //     this.pokemonsIds.forEach((id) => {
    //       const endPoint = this.apiGeneral + id;
    //       endPoints.push(endPoint);
    //     });

    //     axios.all(endPoints.map((endPoint) => {
    //       axios.get(endPoint).then(resp => {
    //         const pathImg = resp.data.sprites.other.dream_world.front_default;
    //         // const anotherPath = resp.data.sprites.other.official-artwork.front_default
    //         const customPokemonData = {
    //           'id': resp.data.id,
    //           'name': resp.data.name,
    //           'img': pathImg ? pathImg : 'anotherPath'
    //         };
    //         this.pokemonsAllInfo.push(customPokemonData);
    //       });
    //     }));
    //     resolve(this.pokemonsAllInfo);
    //     reject('err');
    //   });
    // },
    // async order() {
    //   return this.pokemonsAllInfo.sort((a, b) => {
    //     return a.id - b.id;
    //   });
    // }, -->