<template>
  <div>
    <div class="container mx-auto mt-5">
      <h1 class="mb-5 text-center fw-bold pt-5">後台管理中心註冊</h1>
      <from class="row">
        <div class="col-12">
          <div class="mb-4">
            <label class="form-label fw-bold fs-5" for="floatingInput"
              >Email</label
            >
            <input
              type="email"
              class="form-control"
              id="floatingInput"
            />
          </div>
        </div>
        <div class="col-12">
          <div class="mb-4">
            <label class="form-label fw-bold fs-5" for="floatingInput"
              >姓名</label
            >
            <input
              type="text"
              class="form-control"
              id="floatingInput"
            />
          </div>
        </div>
        <div class="col-12">
          <div class="mb-4">
            <label class="form-label fw-bold fs-5" for="floatingInput"
              >密碼</label
            >
            <input
              type="password"
              class="form-control"
              id="floatingInput"
            />
          </div>
        </div>
        <div class="col-12">
          <div class="mb-4">
            <label class="form-label fw-bold fs-5" for="floatingInput"
              >確認密碼</label
            >
            <input type="password" class="form-control" id="floatingInput" />
          </div>
        </div>
        <div class="col-12 align-content-end">
          <button
            type="button"
            class="btn btn-primary w-100 mb-4"
          >
            註冊
          </button>
        </div>
      </from>
      <p class="mb-4">
        已經有帳號？
        <router-link to="/admin/signIn" > 登入 </router-link>
      </p>
    </div>
  </div>
</template>
<style scoped>
  .container {
    max-width: 460px;
  }
</style>
