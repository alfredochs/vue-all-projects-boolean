<template>
<div class="col">
  <div class="card border-0 bg-dark">
    <img :src="item.img" class="card-img-top" alt="..." />
    <div class="card-body">
      <p class="card-text">
        {{item.titolo}}
      </p>
    </div>
  </div>
</div>

</template>

<script>
export default {
    name:"Card",
    props:{
        item: Object
    }
};
</script>

<style>
</style>