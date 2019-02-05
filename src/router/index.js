import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Time from '@/components/Time'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Time',
      component: Time
    },
    {
      path: '/time',
      name: 'Time',
      component: Time
    },
    {
      path: '/helloworld',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
