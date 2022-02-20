import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import conv from '../views/Conv.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
  },
  {
    path: '/conv',
    name: 'Conv',
    component: conv
  }
]

const router = new VueRouter({
  routes
})

export default router
