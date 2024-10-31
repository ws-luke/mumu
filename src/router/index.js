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
      path: '/',
      name: 'cart',
      component: () => import('../views/CartView.vue'),
    },
    {
      path: '/',
      name: 'products',
      component: () => import('../views/ProductsView.vue'),
    },
    {
      path: '/',
      name: 'product',
      component: () => import('../views/ProductView.vue'),
    },
    {
      path: '/',
      name: 'login',
      component: () => import('../views/LoginView.vue'),
    },
  ],
})

export default router
