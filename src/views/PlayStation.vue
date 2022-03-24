<template>
<div>
    <navbar-ps></navbar-ps>
    <slider-ps></slider-ps>
    <psproducts></psproducts>
    <jumbotron></jumbotron>
    <nuove-uscite></nuove-uscite>
    <esploraps-4></esploraps-4>
    <ps-plus></ps-plus>
    <sconti></sconti>
    <ps-now></ps-now>
    <social></social>
    <footer-ps></footer-ps>
</div>
</template>

<script>
import Esploraps4 from '../components/partials_ps/Esploraps4.vue'
import FooterPs from '../components/partials_ps/footer-ps.vue'
import Jumbotron from '../components/partials_ps/Jumbotron.vue'
import NavbarPs from '../components/partials_ps/NavbarPs.vue'
import NuoveUscite from '../components/partials_ps/NuoveUscite.vue'
import PsNow from '../components/partials_ps/ps-now.vue'
import PsPlus from '../components/partials_ps/ps-plus.vue'
import Psproducts from '../components/partials_ps/psproducts.vue'
import Sconti from '../components/partials_ps/Sconti.vue'
import SliderPs from '../components/partials_ps/SliderPs.vue'
import Social from '../components/partials_ps/Social.vue'

export default {
  components: { NavbarPs,
    SliderPs,
    Psproducts,
    Jumbotron,
    NuoveUscite,
    Esploraps4,
    PsPlus,
    Sconti,
    PsNow,
    Social,
    FooterPs },
    name:"Playstation"
}
</script>

<style>
</style>