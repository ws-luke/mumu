import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import '@/assets/all.scss'
import './assets/main.css'
import 'vue3-toastify/dist/index.css';
import 'aos/dist/aos.css'
import AOS from 'aos'
import { registerSW } from 'virtual:pwa-register'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Vue3Toastify from 'vue3-toastify';
import App from './App.vue'
import router from './router'
const updateSW = registerSW({
    onNeedRefresh() {
      if (confirm('有新版本可用，是否立即更新？')) {
        updateSW(true)
      }
    },
    onOfflineReady() {
      console.log('PWA 已準備好，可以離線使用')
    }
  })
const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(Vue3Toastify);

app.mount('#app')

AOS.init({
  once: true,             // 動畫只執行一次（滾動回來時不會重複）
  duration: 800,          // 動畫持續時間（毫秒）
  easing: 'ease-in-out',  // 動畫效果
})