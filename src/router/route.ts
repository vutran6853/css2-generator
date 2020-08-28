import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import BoxShadow from '../components/css/BoxShadow.vue'
// import BoxShadow from '../components/css/BoxShadow'

import TextShadow from '../components/css/textShadow/TextShadow'
import Gradient from '../components/css/Gradient.vue'
import Border from '../components/css/Border.vue'
import BorderRadius from '../components/css/BorderRadius.vue'
import Transform from '../components/css/Transform.vue'


const routes: Array<RouteRecordRaw> = [
  {
    path: '/css/boxShadow',
    name: 'BoxShadow',
    component: BoxShadow
  },
  {
    path: '/css/textShadow',
    name: 'TextShadow',
    component: TextShadow
  },
  {
    path: '/css/gradient',
    name: 'Gradient',
    component: Gradient
  },
  // {
  //   path: '/css/cssCursor',
  //   name: 'BoxShadow',
  //   component: BoxShadow
  // },
  {
    path: '/css/border',
    name: 'Border',
    component: Border
  },
  {
    path: '/css/borderRadius',
    name: 'BorderRadius',
    component: BorderRadius
  },
  {
    path: '/css/transform',
    name: 'Transform',
    component: Transform
  },
  // {
  //   path: '/css/rgbaHexColor',
  //   name: 'BoxShadow',
  //   component: BoxShadow
  // },
  // {
  //   path: '/css/filter',
  //   name: 'BoxShadow',
  //   component: BoxShadow
  // },
  // {
  //   path: '/css/multipletColumns',
  //   name: 'BoxShadow',
  //   component: BoxShadow
  // },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})


export default router
