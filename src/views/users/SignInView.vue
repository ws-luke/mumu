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
        <router-link to="/password">忘記密碼？</router-link>
      </p>
      <button type="button" class="btn btn-secondary w-100 mb-4">登入</button>
      <!-- <p class="text-center">或使用社群帳號登入</p>
      <div class="d-flex justify-content-center">
        <router-link to="/" class="icon">
          <img src="../../../public/images/fb_icon.svg" alt="" />
        </router-link>
        <router-link to="/" class="icon">
          <img src="../../../public/images/line_icon.svg" alt="" />
        </router-link>
      </div> -->
      <p>還不是會員？</p>
      <router-link
        to="/users/signUp"
        class="btn btn-outline-secondary w-100 mb-5"
        >註冊會員</router-link
      >
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
