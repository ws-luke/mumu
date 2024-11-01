<template>
  <div>
    <div class="container mx-auto mt-3">
      <h1 class="fw-bold mb-4">註冊會員</h1>
      <div class="form-floating mb-3">
        <input
          type="number"
          class="form-control border-bottom rounded-0"
          id="floatingInput"
          placeholder="請輸統編"
        />
        <label for="floatingInput">統編</label>
      </div>
      <div class="form-floating mb-3">
        <input
          type="text"
          class="form-control border-bottom rounded-0"
          id="floatingInput"
          placeholder="請輸姓名"
        />
        <label for="floatingInput">姓名</label>
      </div>
      <div class="form-floating mb-3">
        <input
          type="text"
          class="form-control border-bottom rounded-0"
          id="floatingInput"
          placeholder="請輸店名"
        />
        <label for="floatingInput">店名</label>
      </div>
      <div class="form-floating mb-3">
        <input
          type="text"
          class="form-control border-bottom rounded-0"
          id="floatingInput"
          placeholder="請輸地址"
        />
        <label for="floatingInput">地址</label>
      </div>
      <div class="form-floating mb-3">
        <input
          type="email"
          class="form-control border-bottom rounded-0"
          id="floatingInput"
          placeholder="請輸入電子郵件"
        />
        <label for="floatingInput">電子郵件</label>
      </div>
      <div class="form-floating mb-3">
        <input
          type="password"
          class="form-control border-bottom rounded-0"
          id="floatingInput"
          placeholder="請輸入密碼"
        />
        <label for="floatingInput">密碼</label>
      </div>
      <div class="form-floating mb-3">
        <input
          type="password"
          class="form-control border-bottom rounded-0"
          id="floatingInput"
          placeholder="請輸入密碼"
        />
        <label for="floatingInput">確認密碼</label>
      </div>
      <button type="button" class="btn btn-secondary w-100 mb-4">註冊</button>
      <p class="mb-3">已經有帳號？</p>
      <router-link
        to="/users/signIn"
        class="btn btn-outline-secondary w-100 mb-5"
      >
        登入
      </router-link>
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
input {
  border: none;
}
</style>
