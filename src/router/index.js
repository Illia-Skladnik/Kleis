// Composables
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Default from '@/layouts/default/Default.vue';

const routes = [
  {
    path: '/',
    component: () => Default,
    children: [
      {
        path: '/',
        name: 'Home',
        component: () => Home,
      },
      {
        path: '/privacy',
        name: 'Privacy',
        component: () => import(/* webpackChunkName: "home" */ '@/views/Privacy.vue'),
        // component: () => Home,
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
