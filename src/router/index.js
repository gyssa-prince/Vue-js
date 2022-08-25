import { createRouter, createWebHistory } from 'vue-router'
import HomeComp from '../components/HomeComp.vue'
import DetailsComp from '../components/DetailsComp.vue'
import NotFound from '../components/NotFound'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeComp
  },
  {
    path: '/details/:id',
    props:true,
    name: 'Details',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: DetailsComp
  },
  //To catch all
  {
      path:'/:catchAll(.*)',
      name:'NotFound',
      component:NotFound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router