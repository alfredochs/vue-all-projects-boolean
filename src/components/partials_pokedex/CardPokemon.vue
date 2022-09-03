<template>
  <div class="col">
    <div class="card h-100">
      <img :src="pokemonObj.image" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">{{ pokemonObj.name }}</h5>
      </div>
      <ul class="list-group">
        <li class="list-group-item" v-for="(value, i) in pokemonObj.type" :key="i">
          <button class="btn">
            <span class="badge bg-primary">{{ i }}</span>
            <span class="badge bg-dark">{{ value }}</span>
          </button>
          <span></span>
        </li>
      </ul>
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