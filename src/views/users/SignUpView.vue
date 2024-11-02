<template>
  <div>
    <div class="container mx-auto mt-3">
      <h1 class="fw-bold mb-4">註冊會員</h1>
      <from class="row row-cols-1 row-cols-md-2">
        <div class="col">
          <div class="row mb-4">
            <div class="col-12 col-md-9 mb-3 mb-md-0">
              <label class="form-label fw-bold fs-5" for="floatingInput"
                >Email</label
              >
              <input
                type="email"
                class="form-control form-control-lg"
                id="floatingInput"
              />
            </div>
            <div class="col-12 col-md-3 align-content-end">
              <button type="button" class="btn btn-secondary btn-lg">
                Email認證
              </button>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="mb-4">
            <label class="form-label fw-bold fs-5" for="floatingInput"
              >姓名</label
            >
            <input
              type="text"
              class="form-control form-control-lg"
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
              type="number"
              class="form-control form-control-lg"
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
              type="text"
              class="form-control form-control-lg"
              id="floatingInput"
            />
          </div>
        </div>
        <div class="col">
          <div class="mb-4">
            <label class="form-label fw-bold fs-5" for="floatingInput"
              >轉帳帳號後五碼(付款查帳用)</label
            >
            <input
              type="text"
              class="form-control form-control-lg"
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
              type="text"
              class="form-control form-control-lg"
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
              type="text"
              class="form-control form-control-lg"
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
              type="number"
              class="form-control form-control-lg"
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
              type="password"
              class="form-control form-control-lg"
              id="floatingInput"
            />
          </div>
        </div>
        <div class="col">
          <div class="mb-4">
            <label class="form-label fw-bold fs-5" for="floatingInput"
              >確認密碼</label
            >
            <input
              type="password"
              class="form-control form-control-lg"
              id="floatingInput"
            />
          </div>
        </div>
        <div class="col">
          <div class="mb-4">
            <label class="form-label fw-bold fs-5" for="floatingInput"
              >對接業務</label
            >
            <select
              class="form-select form-select-lg"
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
          <button type="button" class="btn btn-secondary w-100 mb-4 btn-lg">
            註冊
          </button>
        </div>
      </from>
      <p class="mb-4">已經有帳號？</p>
      <router-link
        to="/users/signIn"
        class="btn btn-outline-secondary w-100 btn-lg mb-5"
      >
        登入
      </router-link>
    </div>
  </div>
</template>
<style scoped>
.container {
}
.icon {
  width: 40px;
  margin: 0 10px;
}
</style>
