import Vue from 'vue'
import Router from 'vue-router'
import Hello from '../components/Hello'
import List from '../components/list'
import Apple from '../components/Apple'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/List/:id',
      name: 'List',
      component: List
    },
    {
      path: '/apple/:color/detail/:type',
      component: Apple
    }
  ]
})
