import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'add-subtract',
      component: () => import('@/views/AddSubtract.vue'),
      meta: { title: 'Add/Subract', description: 'dayjs add or subtract sample' }
    },
    {
      path: '/startof-endof',
      name: 'startof-endof',
      component: () => import('@/views/StartOfEndOf.vue'),
      meta: { title: 'Startof/Endof', description: 'dayjs startof or endof sample' }
    },
    {
      path: '/diff',
      name: 'diff',
      component: () => import('@/views/Diff.vue'),
      meta: { title: 'Diff', description: 'dayjs diff sample' }
    },
    {
      path: '/after-before-between',
      name: 'after-before-between',
      component: () => import('@/views/AfterBeforeBetween.vue'),
      meta: { title: 'After/Before/Between', description: 'dayjs after or before or between sample' }
    },
    {
      path: '/locale',
      name: 'locale',
      component: () => import('@/views/Locale.vue'),
      meta: { title: 'Locale', description: 'dayjs locale sample' }
    },
    {
      path: '/time-zone',
      name: 'time-zone',
      component: () => import('@/views/TimeZone.vue'),
      meta: { title: 'Timezone', description: 'dayjs timezone sample' }
    }
  ]
})

const DEFAULT_TITLE = 'Dayjs Samples';
router.afterEach((to, from) => {
  // @ts-ignore
  document.title = to.meta.title ?? DEFAULT_TITLE;
  // @ts-ignore
  document.querySelector("meta[name='description']").setAttribute('content', to.meta.description ?? 'Dayjs sample');
})

export default router
