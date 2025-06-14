import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/auth-view/LoginView.vue'),
    },
    {
      path: '/terms_of_service',
      name: 'terms_of_service',
      component: () => import('@/views/general/TermsOfServiceView.vue'),
    },
    {
      path: '/privacy_policy',
      name: 'privacy_policy',
      component: () => import('@/views/general/PrivacyPolicyView.vue'),
    },
    {
      path: '/',
      name: ':w',
      component: () => import('@/layouts/AppLayout.vue'),
      children: [
        {
          path: 'appointments',
          name: 'appointments',
          component: () => import('@/views/app-view/workspace-view/AppointmentsView.vue'),
        },
        {
          path: 'services',
          name: 'services',
          component: () => import('@/views/app-view/workspace-view/ServicesView.vue'),
        },
        {
          path: 'bookings_page',
          name: 'bookings_page',
          component: () => import('@/views/app-view/workspace-view/BookingsPageView.vue'),
        },
        {
          path: 'availability',
          name: 'availability',
          component: () => import('@/views/app-view/workspace-view/AvailabilityView.vue'),
        },
      ],
    },
  ],
})

export default router
