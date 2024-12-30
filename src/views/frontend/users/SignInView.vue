<script setup>
import ToastNotification from '@/components/ToastNotification.vue'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios'
const toast = ref(null) // 彈窗訊息

// API 基本網址
const api = import.meta.env.VITE_API_URL
const router = useRouter()

// 登入資料
const signInData = ref({
  email: '',
  password: '',
})

// 驗證電子郵件格式
const validateEmail = email => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/ // 簡單電子郵件格式驗證
  return re.test(email)
}

// 登入方法
const signIn = async () => {
  try {
    // 驗證電子郵件格式
    if (!validateEmail(signInData.value.email)) {
      // toast.error('請輸入有效的電子郵件地址', { theme: 'auto' })
      toast.value.showErrorToast('請輸入有效的電子郵件地址')
      return
    }

    // 發送登入請求
    const res = await axios.post(`${api}/user/sign_in`, signInData.value)

    // 設置 JWT Token
    document.cookie = `tokenName=${res.data.token}`

    // 跳轉至首頁
    router.push({ name: 'home' })
  } catch (error) {
    // 顯示錯誤提示
    toast.value.showErrorToast(
      error.response?.data?.message || '登入失敗，請稍後再試',
    )
  }
}
</script>

<template>
  <div class="mx-auto mt-3 text-center container">
    <ToastNotification ref="toast"></ToastNotification>
    <h1 class="fw-bold mb-4">登入</h1>
    <form class="" @submit.prevent="signIn">
      <fieldset>
        <legend class="visually-hidden">登入表單</legend>
        <!-- 電子郵件欄位 -->
        <div class="form-floating mb-3">
          <input
            v-model="signInData.email"
            type="email"
            class="form-control"
            id="floatingInput"
            placeholder="電子郵件"
            aria-label="輸入電子郵件"
            required
            autocomplete="email"
          />
          <label for="floatingInput">電子郵件</label>
        </div>
        <!-- 密碼欄位 -->
        <div class="form-floating mb-3">
          <input
            v-model="signInData.password"
            type="password"
            class="form-control"
            id="floatingPassword"
            placeholder="密碼"
            aria-label="輸入密碼"
            required
            autocomplete="current-password"
          />
          <label for="floatingPassword">密碼</label>
        </div>
        <!-- 忘記密碼連結 -->
        <p>
          <router-link to="/users/forgot-password">忘記密碼？</router-link>
        </p>
        <!-- 提交按鈕 -->
        <button type="submit" class="btn btn-primary w-100 mb-4">登入</button>
      </fieldset>
    </form>
    <!-- 註冊連結 -->
    <p class="text-center">
      還不是會員？ <router-link to="/users/signUp">註冊會員</router-link>
    </p>
  </div>
</template>

<style scoped>
.container {
  max-width: 460px;
}
</style>
