import { createRouter, createWebHistory } from 'vue-router'
import HomeComp from '../components/HomeComp.vue'
import AboutComp from '../components/AboutComp.vue'
import JobsComp from '../components/jobs/JobsComp'
import JobDetails from '../components/jobs/JobDetails'
import NotFound from '../components/NotFound'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeComp
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: AboutComp
  },
  {
      path:'/jobs',
      name:'Jobs',
      component:JobsComp
  },
  {
      path:'/jobs/:id',
      name:'JobDetails',
      component:JobDetails,
      props:true
  },
  //To redirect
  {
      path:'/all-jobs',
      redirect:'jobs'
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