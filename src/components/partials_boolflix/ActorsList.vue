<template>
  <div>
    <h3>Cast</h3>
    <ul class="list-unstyled">
      <!--Slice applicated for truncate the list of characters -->
      <li v-for="actor in castArray.slice(0, 10)" :key="actor.cast_id">
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
  methods: {},
  mounted() {},
};
</script>

<style></style>
