<template>
  <div>
  <div class="container mx-auto">
    <h1>登入</h1>
    <div class="form-floating mb-3">
      <input type="email" class="form-control" id="floatingInput" placeholder="電郵或手機號碼">
      <label for="floatingInput">電郵或手機號碼</label>
    </div>
    <div class="form-floating mb-3">
      <input type="password" class="form-control" id="floatingPassword" placeholder="密碼">
      <label for="floatingPassword">密碼</label>
    </div>
    <p>
      <router-link to="/password">忘記密碼？</router-link>
    </p>
  </div>

  </div>
</template>
