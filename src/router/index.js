import { createRouter, createWebHistory } from 'vue-router'
import LoginForm from '@/components/LoginForm.vue'
import Rgister from '@/components/Rgister.vue'
import Home from '@/components/Home.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: LoginForm
    },
    {
      path: '/Rgister',
      name: 'Rgister',
      component: Rgister
    },
    {
      path:'/home',
      name:'home',
      component:Home
    },

  ]
})

export default router
