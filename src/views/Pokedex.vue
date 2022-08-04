<template>
  <div class="container">
    <!-- <div class="py-3 d-flex justify-content-center">
      <div class="border">
        <ul>
          <li v-for="(generation, i) in infoFromGenerations" :key="i">
            {{ generation.name }}
          </li>
        </ul>
      </div>
    </div> -->
    <div class="row row-cols-1 row-cols-md-2 g-4 my-auto">
      <div v-for="generation, i in infoFromGenerations" :key="i" class="col">
        <div class="card">
          <!-- <img src="..." class="card-img-top" alt="..." /> -->
          <div class="card-body">
            <h5 class="card-title">{{ generation.name.toUpperCase() }}</h5>
            <p>Quantity Of Pokemons Founded: <span class="badge bg-info">{{ generation.pokemon_quantity }}</span></p>
            <a class="btn btn-primary" :href="generation.url">Take data from this generation.</a>
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
      generationsIds: [],
      infoFromGenerations: [],
    };
  },
  methods: {
    /**
     * Return objects with the name(ex:generation-i) and url endpoint.
     * @param {String} url 
     */
    getGenerations(url) {
      return new Promise((resolve, reject) => {
        axios.get(url).then((resp) => {
          this.generationsData = resp.data.results;
          resolve();
          reject("Error");
        });
      });
    },
    /**
     * Loop for the generationsData and take the ids for every single 
     * generation and create a new Array.
     * In this case the ids are form 1 to 9 at the last of endpoints
     * But if the ids were differents numbers ? 
     */
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
    /**
     * Return custom object with useful information about that specific
     * generation. 
     */
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
              pokemon_quantity: respObj.data.pokemon_species.length,
            };
            this.infoFromGenerations.push(usefulInfo);
          });
        });
    },
    /**
     * execute all async function ordered
     */
    async TakeAll() {
      await this.getGenerations(this.apiGenerations);
      await this.getIdsGenerations();
      await this.getInfoByGenerations();
    },
  },
  created() {
    this.TakeAll();

  },
  mounted() {
  },
};
</script>

<style>
</style>