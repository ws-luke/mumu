<script setup>
import { ref } from 'vue'
import { RouterLink, useRouter } from 'vue-router'
import axios from 'axios'
import { toast } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'
const router = useRouter()
const api_path = 'http://127.0.0.1:3000/api/user'
const userDate = ref({
  email: '', //信箱
  password: '', //密碼
  userName: '', //姓名
  companyName: '', //公司名稱
  phoneNumber: '', //手機號碼
  address: '', //地址
  salesChannels: '', // 賣場通路
  ubn: '', //統編
  businessLiaison: '', //對接業務
})
const signUpInfo = async () => {
  try {
    const res = await axios.post(`${api_path}/sign_up`, userDate.value)
    if (res.data.status === true) {
      router.push({ name: 'SignIn' })
      toast.success('註冊成功，請至登入頁登入', {
        theme: 'auto',
        type: 'default',
        autoClose: 2000,
        dangerouslyHTMLString: true,
      })
    }
    console.log(res)
  } catch (error) {
    toast.error(error.response.data.message, {
      theme: 'auto',
      type: 'default',
      dangerouslyHTMLString: true,
    })
  }
}
</script>

<template>
  <div>
    <div class="container mx-auto mt-3">
      <h1 class="mb-3 h2 fw-bold">註冊會員</h1>
      <from class="row row-cols-1 row-cols-md-2">
        <div class="col">
          <div class="row mb-4">
            <div class="col-12 col-md-7 col-xl-9 mb-3 mb-md-0">
              <label class="form-label fw-bold fs-5" for="floatingInput"
                >Email</label
              >
              <input
                v-model="userDate.email"
                type="email"
                class="form-control"
                id="floatingInput"
              />
            </div>
            <div class="col-12 col-md-5 col-xl-3 align-content-end">
              <button type="button" class="btn btn-secondary">Email認證</button>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="mb-4">
            <label class="form-label fw-bold fs-5" for="floatingInput"
              >姓名</label
            >
            <input
              v-model="userDate.userName"
              type="text"
              class="form-control"
              id="floatingInput"
            />
          </div>
        </div>
        <div class="col">
          <div class="mb-4">
            <label class="form-label fw-bold fs-5" for="floatingInput"
              >統編</label
            >
            <input
              v-model="userDate.ubn"
              type="number"
              class="form-control"
              id="floatingInput"
            />
          </div>
        </div>
        <div class="col">
          <div class="mb-4">
            <label class="form-label fw-bold fs-5" for="floatingInput"
              >公司名稱 / 賣場名稱</label
            >
            <input
              v-model="userDate.companyName"
              type="text"
              class="form-control"
              id="floatingInput"
            />
          </div>
        </div>
        <div class="col">
          <div class="mb-4">
            <label class="form-label fw-bold fs-5" for="floatingInput"
              >賣場通路(例：IG、蝦皮、臉書、LINE群)</label
            >
            <input
              v-model="userDate.salesChannels"
              type="text"
              class="form-control"
              id="floatingInput"
            />
          </div>
        </div>
        <div class="col">
          <div class="mb-4">
            <label class="form-label fw-bold fs-5" for="floatingInput"
              >地址</label
            >
            <input
              v-model="userDate.address"
              type="text"
              class="form-control"
              id="floatingInput"
            />
          </div>
        </div>
        <div class="col">
          <div class="mb-4">
            <label class="form-label fw-bold fs-5" for="floatingInput"
              >手機號碼</label
            >
            <input
              v-model="userDate.phoneNumber"
              type="number"
              class="form-control"
              id="floatingInput"
            />
          </div>
        </div>
        <div class="col">
          <div class="mb-4">
            <label class="form-label fw-bold fs-5" for="floatingInput"
              >密碼</label
            >
            <input
              v-model="userDate.password"
              type="password"
              class="form-control"
              id="floatingInput"
            />
          </div>
        </div>
        <div class="col">
          <div class="mb-4">
            <label class="form-label fw-bold fs-5" for="floatingInput"
              >確認密碼</label
            >
            <input type="password" class="form-control" id="floatingInput" />
          </div>
        </div>
        <div class="col">
          <div class="mb-4">
            <label class="form-label fw-bold fs-5" for="floatingInput"
              >對接業務</label
            >
            <select
              v-model="userDate.businessLiaison"
              class="form-select"
              aria-label="Default select "
            >
              <option selected>業務</option>
              <option value="1">Sherry</option>
              <option value="2">Eileen</option>
              <option value="3">Billy</option>
              <option value="4">Luke</option>
            </select>
          </div>
        </div>
        <div class="col-12 align-content-end">
          <button
            type="button"
            @click="signUpInfo"
            class="btn btn-primary w-100 mb-4"
          >
            註冊
          </button>
        </div>
      </from>
      <p class="mb-4">
        已經有帳號？
        <router-link to="/users/signIn" class=""> 登入 </router-link>
      </p>
    </div>
  </div>
</template>
<style scoped>
.icon {
  width: 40px;
  margin: 0 10px;
}
</style>
