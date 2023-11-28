import { createRouter, createWebHistory } from 'vue-router';
import LiaiGroupHome from '@/views/pages/LiaiGroup/LiaiGroupHome.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'liai Group',
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
      name: 'Imogami Home',
      component: () => import('@/views/pages/Imogami/ImogamiHome.vue')
    },
    {
      path: '/kotanuki-park',
      name: 'Kotanuki Park',
      component: () => import('@/views/pages/KotanukiPark/KotanukiParkHome.vue')
    },
    {
      path: '/tanukatt-hotel',
      name: 'Tanukatt Hotel',
      component: () => import('@/views/pages/TanukattHotel/TanukattHotelHome.vue')
    },
    {
      path: '/raccoon-dog-association',
      name: 'Raccoon Dog Association',
      component: () => import('@/views/pages/RaccoonDogAssociation/RaccoonDogAssociationHome.vue')
    },
    {
      path: '/tanuki-stage',
      name: 'Tanuki Stage',
      component: () => import('@/views/pages/TanukiStage/TanukiStageHome.vue')
    }
  ]
})

export default router
