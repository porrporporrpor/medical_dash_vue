import Vue from 'vue'
import Router from 'vue-router'
// import TheFooter from '../components/TheFooter.vue'

Vue.use(Router)

const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }

const routes = [
    { path: '/foo', component: Foo },
    { path: '/bar', component: Bar }
  ]

  const router = new Router({
    routes // short for `routes: routes`
  })

export default router