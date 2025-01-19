import { createRouter, createWebHistory } from 'vue-router'
// import { auth } from './firebase'; // Firebase 初始化
import HomeView from '@/views/frontend/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    //前台
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/collaboration', // 合作
      name: 'collaboration',
      component: () => import('@/views/frontend/CollaborationView.vue'),
    },
    {
      path: '/cart', // 購物車
      name: 'cart',
      component: () => import('@/views/frontend/CartView.vue'),
    },
    {
      path: '/users/signIn', // 會員登入
      name: 'SignIn',
      component: () => import('@/views/frontend/users/SignInView.vue'),
    },
    {
      path: '/users/signUp', // 會員註冊
      name: 'SignUp',
      component: () => import('@/views/frontend/users/SignUpView.vue'),
    },
    {
      path: '/users/forgot-password', // 會員忘記密碼
      name: 'forgot-password',
      component: () =>
        import('@/views/frontend/users/password/ForgotPasswordView.vue'),
    },
    {
      path: '/users/set-new-password', // 設定新密碼
      name: 'set-new-password',
      component: () =>
        import('@/views/frontend/users/password/SetNewPasswordView.vue'),
    },
    {
      path: '/users/finish-password', // 新密碼設定完成
      name: 'finish-password',
      component: () =>
        import('@/views/frontend/users/password/FinishNewPasswordView.vue'),
    },
    {
      path: '/users/account', // 會員
      name: 'account',
      component: () => import('@/views/frontend/users/account/AccountView.vue'),
      children: [
        {
          path: '/users/account-orders', // 會員訂單
          name: 'account-orders',
          component: () =>
            import('@/views/frontend/users/account/AccountOrdersView.vue'),
        },
        {
          path: '/users/account-settings', // 會員資訊
          name: 'account-settings',
          component: () =>
            import('@/views/frontend/users/account/AccountSettingsView.vue'),
        },
      ],
    },
    {
      path: '/shop/shop-products', // 商品列表
      name: 'shop-products',
      component: () => import('@/views/frontend/shop/ShopProductsView.vue'),
    },
    {
      path: '/shop/shop-product/:id', // 商品介紹頁
      name: 'shop-product',
      component: () => import('@/views/frontend/shop/ShopProductView.vue'),
    },
    {
      path: '/shop/shop-cart', // 購物車
      name: 'shop-cart',
      component: () => import('@/views/frontend/shop/ShopCartView.vue'),
    },
    {
      path: '/shop/shop-checkout', // 結帳
      name: 'shop-checkout',
      component: () => import('@/views/frontend/shop/ShopCheckoutView.vue'),
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      // 如果有儲存的滾動位置（如瀏覽器的前進/後退），則滾動到該位置
      return savedPosition;
    } else {
      // 預設回到頂部
      return { top: 0 };
    }
  },
})
export default router
