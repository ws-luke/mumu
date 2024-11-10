<template>
  <div class="container mt-3">
    <div class="justify-content-center align-items-center row">
      <div class="col-lg-4 col-md-6 col-12 order-lg-1 order-2"></div>
      <div class="col-lg-4 col-md-6 col-12 order-lg-1 order-2">
        <h1 class="mb-4 h2 fw-bold">忘記密碼了嗎？</h1>
        <p>請輸入您的電子郵件，我們會發送重設密碼的連結。</p>
        <label class="form-label visually-hidden" for="inputEmail"></label>
        <input
          type="email"
          class="form-control mb-4"
          id="inputEmail"
          placeholder="電子郵件"
        />
        <router-link
          to="/users/set-new-password"
          class="btn btn-primary mb-3 w-100"
          >重設密碼</router-link
        >
        <router-link class="btn bg-light mb-4 w-100" to="/users/signIn"
          >回登入頁面</router-link
        >
      </div>
    </div>
  </div>
</template>
