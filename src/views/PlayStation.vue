<template>
<div>
    <navbar-ps></navbar-ps>
    <!-- <jumbotron></jumbotron> -->
    <slider-ps></slider-ps>
</div>
</template>

<script>
// import Jumbotron from '../components/partials_ps/Jumbotron.vue'
import NavbarPs from '../components/partials_ps/NavbarPs.vue'
import SliderPs from '../components/partials_ps/SliderPs.vue'

export default {
  components: { NavbarPs,
//    Jumbotron,
    SliderPs },
    name:"Playstation"
}
</script>

<style>
</style>