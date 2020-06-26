import Vue from 'vue'
import Router from 'vue-router'
import Homepage from '../views/Homepage.vue'
import DetailPage from '../views/DetailPage.vue'

Vue.use(Router)


const routes = [
    { 
      path: '/home', 
      name: 'Homepage',
      component: Homepage 
    },
    { 
      path: '/detail/', 
      name: 'DetailPage',
      component: DetailPage }
     
  ]

  const router = new Router({
    routes // short for `routes: routes`
  })

export default router