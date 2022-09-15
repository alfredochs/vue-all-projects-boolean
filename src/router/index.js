import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/boolflix',
    name: 'boolflix',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Boolflix.vue')
  },
  {
    path: "/slider",
    name: "Slider",
    component: () => import("../views/Slider.vue")
  },
  {
    path: "/dischi",
    name: "Dischi",
    component: () => import("../views/Dischi.vue"),
  },
  {
    path: "/singleMovie/:movieID",
    // props: true,
    name: "SingleMovie",
    component: () => import("../components/partials_boolflix/SingleMovie.vue"),
  },
  {
    path: "/playstation",
    // props: true,
    name: "PlayStation",
    component: () => import("../views/PlayStation.vue"),
  },
  {
    path: "/Pokedex",
    // props: true,
    name: "Pokedex",
    component: () => import("../views/Pokedex.vue"),
  },
  {
    path: "/Pokedex/Generation/:generationID",
    props: true,
    name: "Pokemons",
    component: () => import("../components/partials_pokedex/Pokemons.vue"),
  },
  {
    path: "/Pokedex/Generation/Pokemon/:pokemonName",
    props: true,
    name: "SinglePokemon",
    component: () => import("../components/partials_pokedex/SinglePokemon.vue"),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
