import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/add-subract',
      name: 'add-subract',
      component: () => import('@/views/AddSubtaract.vue')
    },
    {
      path: '/startof-endof',
      name: 'startof-endof',
      component: () => import('@/views/StartOfEndOf.vue')
    },
    {
      path: '/diff',
      name: 'diff',
      component: () => import('@/views/Diff.vue')
    },
    {
      path: '/after-before-between',
      name: 'after-before-between',
      component: () => import('@/views/AfterBeforeBetween.vue')
    },
    {
      path: '/locale',
      name: 'locale',
      component: () => import('@/views/Locale.vue')
    },
    {
      path: '/time-zone',
      name: 'time-zone',
      component: () => import('@/views/TimeZone.vue')
    }
  ]
})

export default router
