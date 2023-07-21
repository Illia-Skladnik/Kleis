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
        path: '/privacy-policy',
        name: 'PrivacyPolicy',
        component: () => import('@/views/PrivacyPolicy.vue'),
      },

      {
        path: '/cookie-policy',
        name: 'CookiePolicy',
        component: () => import('@/views/CookiePolicy.vue'),
      },

      {
        path: '/legal-notice',
        name: 'LegalNotice',
        component: () => import('@/views/LegalNotice.vue'),
      },

      {
        path: '/terms-of-services',
        name: 'TermsOfServices',
        component: () => import('@/views/TermsOfServices.vue'),
      },
    ],
  },
]

const router = createRouter({
  // history: createWebHistory(process.env.BASE_URL),
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
