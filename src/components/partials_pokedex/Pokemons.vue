<template>
  <div class="container">
    <ul class="list-group">
      <li v-for="pokemon,i in pokemonsData" :key="i" class="list-group-item">{{pokemon.name}}</li>
    </ul>
  </div>
</template>

<script>
export default {
    props: {
        pokemonsData : Array
    }
};
</script>

<style>
</style>