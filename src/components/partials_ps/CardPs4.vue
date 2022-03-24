<template>
      <div class="card d-flex align-items-center justify-content-center border-0 h-100">
        <img :src="item.img" class="card-img-top w-75" alt="..." />
        <div class="card-body text-start h-100">
          <h3 class="card-title">{{item.title}}</h3>
          <p class="card-text">
            {{item.subtitle}}
          </p>
          <div class="h-100">
          <button class="my-btn-blu btn btn-primary">Scopri di più</button>
          </div>
        </div>
      </div>
</template>

<script>
export default {
    name:"CardPs4",
    props:{
        item: Object
    }
};
</script>

<style>
</style>