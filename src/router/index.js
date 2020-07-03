import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

  const router = new Router({
    mode:'history',
    scrollBehavior: function(to) {
      if (to.hash) {
        return {selector: to.hash}
      } else {
        return {x: 0, y: 0}
      }
    },
    routes: [
      { 
        path: '/', 
        name: 'Homepage',
        component: () => import("@/views/Homepage") 
      },
      { 
        path: '/detail/', 
        name: 'DetailPage',
        component: () => import("@/views/DetailPage")
      },
      { 
        path: '/result/', 
        name: 'ResultPage',
        component: () => import("@/views/ResultPage")
      },
      { 
        path: '/calculator/', 
        name: 'Calculator',
        component: () => import("@/components/Calculator")
      }
      
    ],
    
  })

export default router