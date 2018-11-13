import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import Movie from '../pages/movie/Movie'
import Cinema from '../pages/cinema/Cinema'
import Mine from '../pages/mine/Mine'

export default new Router({
  routes: [
    {
      path: '/movie',
      component: Movie
    },
    {
      path: '/cinema',
      component: Cinema
    },
    {
      path: '/mine',
      component: Mine
    },
    {
      path: '**',
      redirect: '/movie'
    }
  ]
})
