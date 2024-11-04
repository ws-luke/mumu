<template>
  <div>
    <div class="container mx-auto mt-3">
      <h1 class="fw-bold mb-4">登入</h1>
      <div class="form-floating mb-3">
        <input
          type="email"
          class="form-control"
          id="floatingInput"
          placeholder="電子郵件"
        />
        <label for="floatingInput">電子郵件</label>
      </div>
      <div class="form-floating mb-3">
        <input
          type="password"
          class="form-control"
          id="floatingPassword"
          placeholder="密碼"
        />
        <label for="floatingPassword">密碼</label>
      </div>
      <p>
        <router-link to="/users/forgot-password">忘記密碼？</router-link>
      </p>
      <button type="button" class="btn btn-primary w-100 mb-4">登入</button>
      <p class="text-center">
        還不是會員？ <router-link to="/users/signUp">註冊會員</router-link>
      </p>
    </div>
  </div>
</template>
<style scoped>
.container {
  max-width: 460px;
}
.icon {
  width: 40px;
  margin: 0 10px;
}
</style>
