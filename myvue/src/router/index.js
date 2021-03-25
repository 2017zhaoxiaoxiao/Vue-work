import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import Login from '@/components/Login'
import Default from '@/components/Default'
import Set from '@/components/Set'
import User from '@/components/User'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      children: [
        {
          path: '/home/default',
          component: Default
        },
        {
          path: '/home/set',
          component: Set
        },
        {
          path: '/home/user',
          component: User
        }
      ]
    },
    {
      path: '/todo',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
