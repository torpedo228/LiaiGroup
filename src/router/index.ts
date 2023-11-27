import { createRouter, createWebHistory } from 'vue-router';
import LiaiGroupHome from '@/views/pages/LiaiGroup/LiaiGroupHome.vue';

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
      component: () => import('@/views/Tanuki.vue')
    }
    ,
    {
      path: '/imogami',
      name: 'Imogami',
      component: () => import('@/views/Imogami/ImogamiHome.vue')
    },
    {
      path: '/kotanukiPark',
      name: 'KotanukiPark',
      component: () => import('@/views/KotanukiPark/KotanukiParkHome.vue')
    },
    {
      path: '/tanukattHotel',
      name: 'TanukattHotel',
      component: () => import('@/views/TanukattHotel/TanukattHotelHome.vue')
    },
    {
      path: '/raccoonDogAssociation',
      name: 'RaccoonDogAssociation',
      component: () => import('@/views/RaccoonDogAssociation/RaccoonDogAssociationHome.vue')
    },
    {
      path: '/tanukiStage',
      name: 'TanukiStage',
      component: () => import('@/views/TanukiStage/TanukiStageHome.vue')
    }
  ]
})

export default router
