<template>
  <div class="container">
    <div class="py-3 d-flex justify-content-center">
      <div class="border">
        <ul class="list-group">
          <li
            v-for="(generation, i) in infoFromGenerations"
            :key="i"
            class="list-group-item"
          >
            <a :href="generation.url">
              {{ generation.name }}
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "cardItem",
  data() {
    return {
      apiGeneral: "https://pokeapi.co/api/v2/pokemon/",
      apiGenerations: "https://pokeapi.co/api/v2/generation/",
      info: [],
      customInfo: [],
      generationsData: [],
      generationsIds: [],
      infoFromGenerations: [],
    };
  },
  methods: {
    getGenerations(url) {
      return new Promise((resolve, reject) => {
        axios.get(url).then((resp) => {
          this.generationsData = resp.data.results;
          resolve();
          reject("Error");
        });
      });
    },

    getIdsGenerations() {
      return new Promise((resolve, reject) => {
        this.generationsData.forEach((generation) => {
          const urlArr = generation.url.split("/");
          const index = urlArr[urlArr.length - 2];
          this.generationsIds.push(index);
          resolve();
          reject("Error getIdsGenerations()");
        });
      });
    },

    getInfoFromGenerations() {
      return new Promise((resolve, reject) => {
        this.generationsIds.forEach((id) => {
          const objSingleGeneration = {}
          axios.get(this.apiGenerations + id).then((resp) => {
            objSingleGeneration.id = resp.data.id;
            objSingleGeneration.name = resp.data.main_region.name;
            objSingleGeneration.pokemon_species = resp.data.pokemon_species;
            this.infoFromGenerations.push(objSingleGeneration);
          });
        });
        resolve("Done");
        reject("error on loop getInfoFromGenerations");
      });
    },

    async TakeAll() {
      await this.getGenerations(this.apiGenerations);
      await this.getIdsGenerations();
      await this.getInfoFromGenerations();
    },

    /**
     **return just name & url of every single pokemon
     */
    getAllPokemon() {
      axios.get(this.apiGeneral).then((resp) => {
        this.info = resp.data.results;
      });
    },
    customPokemonData() {
      this.info.map((data) => {
        const urlSplited = data.url.split("/");
        const index = urlSplited[urlSplited.length - 2];
        const obj = {
          name: data.name,
          id: index,
          url: this.apiGeneral + index,
          img: "",
        };
        axios.get(obj.url).then((resp) => {
          obj.img = resp.data.sprites.other.dream_world.front_default;
        });
        return this.customInfo.push(obj);
      });
    },
  },
  beforeMount() {
    this.getAllPokemon();
  },
  created() {},
  mounted() {
    this.customPokemonData();
    // this.getGenerations(this.apiGenerations);
    this.TakeAll();
  },
};
</script>

<style>
</style>