import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'add-subract',
      component: () => import('@/views/AddSubtaract.vue'),
      meta: { title: 'add-subract', }
    },
    {
      path: '/startof-endof',
      name: 'startof-endof',
      component: () => import('@/views/StartOfEndOf.vue'),
      meta: { title: 'startof-endof', }
    },
    {
      path: '/diff',
      name: 'diff',
      component: () => import('@/views/Diff.vue'),
      meta: { title: 'diff', }
    },
    {
      path: '/after-before-between',
      name: 'after-before-between',
      component: () => import('@/views/AfterBeforeBetween.vue'),
      meta: { title: 'after-before-between', }
    },
    {
      path: '/locale',
      name: 'locale',
      component: () => import('@/views/Locale.vue'),
      meta: { title: 'locale', }
    },
    {
      path: '/time-zone',
      name: 'time-zone',
      component: () => import('@/views/TimeZone.vue'),
      meta: { title: 'time-zone', }
    }
  ]
})

export default router
