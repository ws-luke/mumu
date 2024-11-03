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
    {
      path: '/shop/shop-products',
      name: 'shop-products',
      component: () => import('../views/shop/ShopProductsView.vue'),
    },
    {
      path: '/shop/shop-product',
      name: 'shop-product',
      component: () => import('../views/shop/ShopProductView.vue'),
    },
    {
      path: '/shop/shop-checkout',
      name: 'shop-checkout',
      component: () => import('../views/shop/ShopCheckoutView.vue'),
    },
  ],
})

export default router
