import { createRouter, createWebHistory } from 'vue-router'
import LiaiGroupHome from '../views/LiaiGroupHome.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'liaiGroupHome',
      component: LiaiGroupHome
    },
    {
      path: '/tanuki',
      name: 'tanuki',
      component: () => import('../views/Tanuki.vue')
    }
  ]
})

export default router
