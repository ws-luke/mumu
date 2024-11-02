<template>
  <div>
    <h2 class="fw-bold mb-4">帳戶設定</h2>
    <h5 class="mb-4 fw-bold">我的帳號</h5>
    <div class="row">
      <div class="col-lg-5">
        <form method="post">
          <div class="mb-3">
            <label class="form-label">電子郵件</label
            ><input placeholder="電子郵件" class="form-control" type="email" />
          </div>
          <div class="mb-4">
            <label class="form-label">手機號碼</label
            ><input placeholder="手機號碼" class="form-control" type="text" />
          </div>
          <div class="mb-3">
            <button type="button" class="btn btn-primary">儲存資訊</button>
          </div>
        </form>
      </div>
    </div>
    <hr class="my-4" />
    <h5 class="mb-4 fw-bold">密碼</h5>
    <div class="row row-cols-lg-2 row-cols-1">
      <form class="">
        <div class="mb-3 col">
          <label class="form-label">新密碼</label
          ><input
            placeholder="**********"
            class="form-control"
            type="password"
          />
        </div>
        <div class="mb-3 col">
          <label class="form-label">目前密碼</label
          ><input
            placeholder="**********"
            class="form-control"
            type="password"
          />
        </div>
        <div class="col-12">
          <p class="mb-4">忘記了您目前的密碼？<a href="#">重置您的密碼。</a></p>
          <a href="#" class="btn btn-primary mb-3">儲存密碼</a>
        </div>
      </form>
    </div>
    <hr class="my-4" />
    <h5 class="mb-4 fw-bold">公司資訊</h5>
    <div class="row row-cols-1 mb-5">
      <div class="mb-3 col d-flex">
        <p class="me-4">姓名</p>
        <p>張吉男</p>
      </div>
      <div class="mb-3 col d-flex">
        <p class="me-4">名稱</p>
        <p>台陞科技有限公司</p>
      </div>
      <div class="mb-3 col d-flex">
        <p class="me-4">統編</p>
        <p>83396788</p>
      </div>
      <div class="mb-3 col d-flex">
        <p class="me-4">地址</p>
        <p>台中市西區台灣大道二段2號4樓之6</p>
      </div>
    </div>
  </div>
</template>
