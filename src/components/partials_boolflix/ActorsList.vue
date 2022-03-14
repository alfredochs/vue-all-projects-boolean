<template>
  <div>
    <h3>Cast</h3>
    <ul class="list-unstyled">
      <li v-for="actor in castArray" :key="actor.cast_id">
        {{ actor.name }} as {{ actor.character }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ActorsList",
  props: {
    castArray: Array,
  },
};
</script>

<style></style>
