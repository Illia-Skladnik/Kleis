// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '/',
        name: 'Home',
        component: () => import('@/views/Home.vue'),
      },
      {
        path: '/privacy',
        name: 'Privacy',
        component: () => import('@/views/Privacy.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  // history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
