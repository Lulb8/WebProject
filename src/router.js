import Vue from 'vue'
import Router from 'vue-router'
import Grid from './components/Grid.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Grid
    },
    {
      path: '/detail',
      name: 'detail',
      component: () => import('./components/Detail.vue'),
      props: true
    },
    {
      path: '/favorites',
      name: 'favorites',
      component: () => import('./components/Favorites.vue'),
      props: true
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./components/Login.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('./components/Register.vue')
    }
  ]
})
