<template>
  <div class="col">
    <div class="card h-100">
      <img :src="pokemonObj.image" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">{{ pokemonObj.name }}</h5>
        <span class="badge bg-light text-dark">#{{ pokemonObj.order }}</span>
      </div>
      <div class="card-footer">
        <router-link type="button" class="btn btn-outline-primary" :to="{
                      name: 'SinglePokemon',
                      params: {
                        pokemonName : pokemonObj.name,
                        pokemonID: pokemonObj.id,
                      }
                    }">
          Mostra
        </router-link>
        <!-- <a name="" id="" class="badge rounded-pill bg-success" href="#" role="button">Show</a> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardPokemon",
  props: {
    pokemonObj: Object,
  },
};
</script>

<style>

</style>