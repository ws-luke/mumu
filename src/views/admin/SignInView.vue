<template>
    <div>
      <div class="container mx-auto mt-5">
        <h1 class="fw-bold text-center mb-5 pt-5">後台管理中心</h1>
        <div class="form-floating mb-4">
          <input
            type="email"
            class="form-control"
            id="floatingInput"
            placeholder="電子郵件"
          />
          <label for="floatingInput">電子郵件</label>
        </div>
        <div class="form-floating mb-4">
          <input
            type="password"
            class="form-control"
            id="floatingPassword"
            placeholder="密碼"
          />
          <label for="floatingPassword">密碼</label>
        </div>
        <button type="button" class="btn btn-primary w-100 mb-4">
          登入
        </button>
        <p class="text-center">
          <router-link to="/admin/signUp">註冊</router-link>
        </p>
      </div>
    </div>
  </template>
  <style scoped>
  .container {
    max-width: 460px;
  }
  </style>