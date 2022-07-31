<template>
  <div class="container">
    <button class="btn">Order</button>
    <div class="py-3 d-flex justify-content-center">
      <div class="border">
        <ul>
          <li v-for="(obj, i) in usefulInformation" :key="i">
            {{ obj.name }}
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

    async getInfoByGenerations() {
      const endPoints = [];
      this.generationsIds.forEach((id) => {
        const call = this.apiGenerations + id;
        endPoints.push(call);
      });
      return axios
        .all(endPoints.map((endPoint) => axios.get(endPoint)))
        .then((resp) => {
          resp.map((respObj) => {
            const usefulInfo = {
              id: respObj.data.id,
              name: respObj.data.main_region.name,
              url: respObj.data.main_region.url,
            };
            this.infoFromGenerations.push(usefulInfo);
          });
        });
    },

    async TakeAll() {
      await this.getGenerations(this.apiGenerations);
      await this.getIdsGenerations();
      await this.getInfoByGenerations();
    },
    /**
     **return just name & url of every single pokemon
     */
    getAllPokemon() {
      axios.get(this.apiGeneral).then((resp) => {
        this.info = resp.data.results;
      });
    },
    /**
     *!Din't use
     */
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
    this.TakeAll();
  },
};
</script>

<style>
</style>