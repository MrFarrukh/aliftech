import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Dashbord.vue'
import Employee from '../views/Employee.vue'
import Workers from '../views/Workers.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/employee',
    name: 'Employee',
    component:Employee
  },
  {
    path: '/workers',
    name: 'Workers',
    component:Workers
  }
]

const router = new VueRouter({
  routes
})

export default router
