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
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
