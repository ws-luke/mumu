import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/cart',
      name: 'cart',
      component: () => import('../views/CartView.vue'),
    },
    {
      path: '/products',
      name: 'products',
      component: () => import('../views/ProductsView.vue'),
    },
    {
      path: '/product',
      name: 'product',
      component: () => import('../views/ProductView.vue'),
    },
    {
      path: '/users/signIn',
      name: 'SignIn',
      component: () => import('../views/users/SignInView.vue'),
    },
    {
      path: '/users/signUp',
      name: 'SignUp',
      component: () => import('../views/users/SignUpView.vue'),
    },
    {
      path: '/users/account',
      name: 'account',
      component: () => import('../views/users/AccountView.vue'),
      children: [
        {
          path: '/users/account-orders',
          name: 'account-orders',
          component: () => import('../views/users/AccountOrdersView.vue'),
        },
        {
          path: '/users/account-settings',
          name: 'account-settings',
          component: () => import('../views/users/AccountSettingsView.vue'),
        },
      ],
    },
  ],
})

export default router
