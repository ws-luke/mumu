<template>
  <div>
    <div class="container">
      <nav aria-label="breadcrumb" class="mt-3 mb-4">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <router-link to="/" class="text-decoration-none">首頁</router-link>
          </li>
          <li class="breadcrumb-item">
            <router-link to="/shop/shop-products" class="text-decoration-none"
              >產品列表</router-link
            >
          </li>
          <li class="breadcrumb-item active" aria-current="page">購物車</li>
        </ol>
      </nav>
      <h1 class="fw-bold h2 mb-4">購物車</h1>
      <div class="row">
        <div class="col-lg-8 col-md-7">
          <ul class="list-group list-group-flush mb-4">
            <li class="py-3 ps-0 border-top list-group-item">
              <div class="align-items-center row">
                <div class="col-lg-7 col-12 mb-3 mb-lg-0">
                  <div class="d-flex">
                    <img
                      src="https://i3.momoshop.com.tw/1700643770/goodsimg/0012/126/928/12126928_R.webp"
                      class="img-fluid productImg"
                    />
                    <div class="ms-3">
                      <a class="text-decoration-none" href=""
                        ><h6 class="mb-0">C-C 60W 雙色編織充電線(粉灰)</h6></a
                      ><span><small class="text-muted">1m</small></span>
                      <div class="mt-2 small lh-1">
                        <a class="text-decoration-none" href="#!"
                          ><span class="me-1 align-text-bottom"
                            ><svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="14"
                              height="14"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              class="text-success"
                            >
                              <polyline points="3 6 5 6 21 6"></polyline>
                              <path
                                d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"
                              ></path>
                              <line x1="10" y1="11" x2="10" y2="17"></line>
                              <line x1="14" y1="11" x2="14" y2="17"></line></svg></span
                          ><span class="text-muted">刪除商品</span></a
                        >
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-6">
                  <div class="productNumInput">
                    <input class="btn button-minus" type="button" value="-" /><input
                      class="form-input quantity"
                      type="number"
                      value="1"
                      name="quantity"
                    />
                    <input class="btn button-plus" type="button" value="+" />
                  </div>
                </div>
                <div class="text-center col-lg-2 col-6">
                  <span class="fw-bold">$4,000,000</span>
                </div>
              </div>
            </li>
            <li class="py-3 ps-0 list-group-item">
              <div class="align-items-center row">
                <div class="col-lg-7 col-12 mb-3 mb-lg-0">
                  <div class="d-flex">
                    <img
                      src="https://i3.momoshop.com.tw/1700643770/goodsimg/0012/126/928/12126928_R.webp"
                      class="img-fluid productImg"
                    />
                    <div class="ms-3">
                      <a class="text-decoration-none" href=""
                        ><h6 class="mb-0">C-C 60W 雙色編織充電線(粉灰)</h6></a
                      ><span><small class="text-muted">1m</small></span>
                      <div class="mt-2 small lh-1">
                        <a class="text-decoration-none" href="#!"
                          ><span class="me-1 align-text-bottom"
                            ><svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="14"
                              height="14"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              class="text-success"
                            >
                              <polyline points="3 6 5 6 21 6"></polyline>
                              <path
                                d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"
                              ></path>
                              <line x1="10" y1="11" x2="10" y2="17"></line>
                              <line x1="14" y1="11" x2="14" y2="17"></line></svg></span
                          ><span class="text-muted">刪除商品</span></a
                        >
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-6">
                  <div class="productNumInput">
                    <input class="btn button-minus" type="button" value="-" /><input
                      class="form-input quantity"
                      type="number"
                      value="1"
                      name="quantity"
                    />
                    <input class="btn button-plus" type="button" value="+" />
                  </div>
                </div>
                <div class="text-center col-lg-2 col-6">
                  <span class="fw-bold">$4,000,000</span>
                </div>
              </div>
            </li>
            <li class="py-3 ps-0 border-bottom list-group-item">
              <div class="align-items-center row">
                <div class="col-lg-7 col-12 mb-3 mb-lg-0">
                  <div class="d-flex">
                    <img
                      src="https://i3.momoshop.com.tw/1700643770/goodsimg/0012/126/928/12126928_R.webp"
                      class="img-fluid productImg"
                    />
                    <div class="ms-3">
                      <a class="text-decoration-none" href=""
                        ><h6 class="mb-0">C-C 60W 雙色編織充電線(粉灰)</h6></a
                      ><span><small class="text-muted">1m</small></span>
                      <div class="mt-2 small lh-1">
                        <a class="text-decoration-none" href="#!"
                          ><span class="me-1 align-text-bottom"
                            ><svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="14"
                              height="14"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              class="text-success"
                            >
                              <polyline points="3 6 5 6 21 6"></polyline>
                              <path
                                d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"
                              ></path>
                              <line x1="10" y1="11" x2="10" y2="17"></line>
                              <line x1="14" y1="11" x2="14" y2="17"></line></svg></span
                          ><span class="text-muted">刪除商品</span></a
                        >
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-6">
                  <div class="productNumInput">
                    <input class="btn button-minus" type="button" value="-" /><input
                      class="form-input quantity"
                      type="number"
                      value="1"
                      name="quantity"
                    />
                    <input class="btn button-plus" type="button" value="+" />
                  </div>
                </div>
                <div class="text-center col-lg-2 col-6">
                  <span class="fw-bold">$4,000,000</span>
                </div>
              </div>
            </li>
          </ul>
          <div class="d-flex justify-content-between mb-4">
            <router-link to="/shop/shop-products" type="button" class="btn btn-primary"
              >繼續購物</router-link
            >
            <router-link to="/shop/shop-checkout" class="btn btn-dark"
              >前往結帳</router-link
            >
          </div>
        </div>
        <div class="col-lg-4 col-md-5 col-12 mb-5">
          <div class="card">
            <div class="card-body">
              <div class="alert alert-danger" role="alert">警告區域</div>
              <h5 class="card-title fw-bold mb-3">訂單明細</h5>
              <div class="card mb-3">
                <ul class="list-group list-group-flush">
                  <li class="list-group-item d-flex">
                    <div class="me-auto">訂單小計</div>
                    <span>$4,000,000</span>
                  </li>
                  <li class="list-group-item d-flex">
                    <div class="me-auto">運費</div>
                    <span>$3,000</span>
                  </li>
                  <li class="list-group-item d-flex">
                    <div class="me-auto">稅金 5%</div>
                    <span>$200,000</span>
                  </li>
                  <li class="list-group-item d-flex">
                    <div class="me-auto">小計</div>
                    <span>$4,203,000</span>
                  </li>
                </ul>
              </div>
              <router-link to="/shop/shop-checkout" class="btn btn-primary w-100 d-flex">
                <font class="me-auto">前往結帳</font>
                <span>$4,203,000</span>
              </router-link>
              <div class="mt-4">
                <h5 class="card-title fw-bold mb-3">折扣碼</h5>
                <label for="discountCode" class="form-label visually-hidden"></label>
                <input
                  type="text"
                  class="form-control mb-3"
                  id="discountCode"
                  placeholder="請輸入折扣碼"
                />
                <button class="btn btn-outline-dark w-100">移除折扣碼</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.productImg {
  width: 4rem;
  height: 4rem;
}
.productNumInput {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
}
.productNumInput .form-input {
  width: 4rem !important;
  min-height: 2rem;
  text-align: center;
  border: 1px solid #ecf0ef;
  background: 0 0;
}

.button-minus,
.button-plus {
  padding: 0.25rem 0.5rem;
  width: 1.8rem;
  height: 100%;
  min-height: 2rem;
  text-align: center;
  border: 1px solid #ecf0ef;
  background: 0 0;
}
.button-minus {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
.button-plus {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}
</style>
