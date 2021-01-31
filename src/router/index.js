import { createRouter, createWebHashHistory } from 'vue-router'
import AddUser from '../views/AddUser.vue'

const routes = [
  {
    path: '/',
    name: 'AddUser',
    component: AddUser
  },
  {
    path: '/ListUsers',
    name: 'ListUsers',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/ListUsers.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
