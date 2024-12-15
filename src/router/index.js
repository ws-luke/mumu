import { createRouter, createWebHistory } from 'vue-router'
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
      path: '/shop/shop-products/:category', // 商品主類別列表
      name: 'shop-products-category',
      component: () => import('@/views/frontend/shop/ShopProductsView.vue'),
    },
    {
      path: '/shop/shop-products/:category/:subCategory', // 商品子類別列表
      name: 'shop-products-category-subCategory',
      component: () => import('@/views/frontend/shop/ShopProductsView.vue'),
    },
    {
      path: '/shop/shop-product', // 商品介紹頁
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
    //後台
    {
      path: '/admin',
      name: 'admin',
      component: () => import('@/views/admin/LayoutView.vue'),
      children: [
        {
          path: '/admin/dashboard', // 儀錶版
          name: 'dashboard',
          component: () => import('@/views/admin/DashboardView.vue'),
        },
        {
          path: '/admin/categories', // 產品類別
          name: 'categories',
          component: () =>
            import('@/views/admin/categories/CategoriesView.vue'),
        },
        {
          path: '/admin/products', // 產品列表
          name: 'products',
          component: () => import('@/views/admin/products/ProductsView.vue'),
        },
        {
          path: '/admin/product/:id?', // 新增產品 + 編輯產品
          name: 'product-form',
          component: () => import('@/views/admin/products/ProductView.vue'),
          props: true, // 自動將路由參數傳給組件
        },
        {
          path: '/admin/orders', // 訂單列表
          name: 'orders',
          component: () => import('@/views/admin/orders/OrdersView.vue'),
        },
        {
          path: '/admin/order', // 訂單
          name: 'order',
          component: () => import('@/views/admin/orders/OrderView.vue'),
        },
        {
          path: '/admin/customers', // 會員
          name: 'customers',
          component: () => import('@/views/admin/customers/CustomersView.vue'),
        },
        {
          path: '/admin/customer', // 會員
          name: 'customer',
          component: () => import('@/views/admin/customers/CustomerView.vue'),
        },
        {
          path: '/admin/dashboard', // 管理者
          name: 'dashboard',
          component: () => import('@/views/admin/DashboardView.vue'),
        },
      ],
    },
    {
      path: '/admin/signup', // 註冊
      name: 'adminSignup',
      component: () => import('@/views/admin/SignUpView.vue'),
    },
    {
      path: '/admin/signin', // 登入
      name: 'adminSignin',
      component: () => import('@/views/admin/SignInView.vue'),
    },
  ],
})

export default router
