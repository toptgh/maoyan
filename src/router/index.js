import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import Movie from '../pages/movie/Movie'
import Cinema from '../pages/cinema/Cinema'
import Mine from '../pages/mine/Mine'
import Search from '../pages/common/Search'
import Detail from '../pages/common/Detail'

export default new Router({
  routes: [{
      path: '/movie',
      component: Movie,
      children: [{
          name: 'MovieSearch',
          path: 'search',
          component: Search,
          props: {
            type: ['movie', 'cinema']
          }
        },
        {
          name: 'Detail',
          path: 'Detail/:id',
          component: Detail,
        }
      ]
    },
    {
      path: '/cinema',
      component: Cinema,
      children: [{
        name: 'cinemaSearch',
        path: 'search',
        component: Search,
        props: {
          type: ['cinema']
        }
      }]
    },
    {
      path: '/mine',
      component: Mine,
      beforeEnter: (to, from, next) => {
        let token = localStorage.getItem('token');
        if (token) {
          next();
        } else {
          next('/login');
        }
      }
    },
    {
      path: '/login',
      component: () => import('../components/mine/login')
    },
    {
      path: '**',
      redirect: '/movie'
    }
  ]
})