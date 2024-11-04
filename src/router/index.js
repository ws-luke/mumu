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
      path: '/cart', // 購物車
      name: 'cart',
      component: () => import('../views/CartView.vue'),
    },
    {
      path: '/users/signIn', // 會員登入
      name: 'SignIn',
      component: () => import('../views/users/SignInView.vue'),
    },
    {
      path: '/users/signUp', // 會員註冊
      name: 'SignUp',
      component: () => import('../views/users/SignUpView.vue'),
    },
    {
      path: '/users/forgot-password', // 會員忘記密碼
      name: 'forgot-password',
      component: () => import('../views/users/password/ForgotPasswordView.vue'),
    },
    {
      path: '/users/set-new-password', // 設定新密碼
      name: 'set-new-password',
      component: () => import('../views/users/password/SetNewPasswordView.vue'),
    },
    {
      path: '/users/finish-password', // 新密碼設定完成
      name: 'finish-password',
      component: () =>
        import('../views/users/password/FinishNewPasswordView.vue'),
    },
    {
      path: '/users/account', // 會員
      name: 'account',
      component: () => import('../views/users/account/AccountView.vue'),
      children: [
        {
          path: '/users/account-orders', // 會員訂單
          name: 'account-orders',
          component: () =>
            import('../views/users/account/AccountOrdersView.vue'),
        },
        {
          path: '/users/account-settings', // 會員資訊
          name: 'account-settings',
          component: () =>
            import('../views/users/account/AccountSettingsView.vue'),
        },
      ],
    },
    {
      path: '/shop/shop-products', // 商品列表
      name: 'shop-products',
      component: () => import('../views/shop/ShopProductsView.vue'),
    },
    {
      path: '/shop/shop-product', // 商品介紹頁
      name: 'shop-product',
      component: () => import('../views/shop/ShopProductView.vue'),
    },
    {
      path: '/shop/shop-cart', // 購物車
      name: 'shop-cart',
      component: () => import('../views/shop/ShopCartView.vue'),
    },
    {
      path: '/shop/shop-checkout', // 結帳
      name: 'shop-checkout',
      component: () => import('../views/shop/ShopCheckoutView.vue'),
    },
  ],
})

export default router
