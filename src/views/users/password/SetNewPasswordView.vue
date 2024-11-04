<template>
  <div class="container mt-3">
    <div class="justify-content-center align-items-center row">
      <div class="col-lg-4 col-md-6 col-12 order-lg-1 order-2"></div>
      <div class="col-lg-4 col-md-6 col-12 order-lg-1 order-2">
        <h1 class="mb-4 h2 fw-bold">設定新密碼</h1>
        <label class="form-label" for="inputPassword1">請輸入新密碼</label>
        <input
          type="password"
          class="form-control mb-4"
          id="inputPassword1"
          placeholder=""
        />
        <label class="form-label" for="inputPassword2">再次輸入新密碼</label>
        <input
          type="password"
          class="form-control mb-4"
          id="inputPassword2"
          placeholder=""
        />
        <router-link
          to="/users/finish-password"
          class="btn btn-primary mb-3 w-100"
          type="submit"
          >重設密碼</router-link
        >
      </div>
    </div>
  </div>
</template>
