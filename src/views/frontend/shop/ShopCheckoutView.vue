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
          <li class="breadcrumb-item active" aria-current="page">結帳</li>
        </ol>
      </nav>
      <h1 class="fw-bold h2 mb-4">結帳</h1>
      <div class="row mb-5">
        <div class="col-lg-8 col-md-7 col-12 mb-4">
          <div class="accordion accordion-flush" id="accordionFlushExample">
            <div class="accordion-item">
              <h2 class="accordion-header" id="flush-headingOne">
                <button
                  class="accordion-button collapsed ps-0"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseOne"
                  aria-expanded="false"
                  aria-controls="flush-collapseOne"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="me-2 text-muted"
                  >
                    <path
                      d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"
                    ></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  <div class="fs-5 fw-bold">地址</div>
                </button>
              </h2>
              <div
                id="flush-collapseOne"
                class="accordion-collapse collapse"
                aria-labelledby="flush-headingOne"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body">
                  台中市西區台灣大道二段2號4樓之6
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="flush-headingTwo">
                <button
                  class="accordion-button collapsed ps-0"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseTwo"
                  aria-expanded="false"
                  aria-controls="flush-collapseTwo"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="me-2 text-muted"
                  >
                    <rect
                      x="1"
                      y="4"
                      width="22"
                      height="16"
                      rx="2"
                      ry="2"
                    ></rect>
                    <line x1="1" y1="10" x2="23" y2="10"></line>
                  </svg>
                  <div class="fs-5 fw-bold">付款方式</div>
                </button>
              </h2>
              <div
                id="flush-collapseTwo"
                class="accordion-collapse collapse"
                aria-labelledby="flush-headingTwo"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body px-0">
                  <div class="mb-2 card">
                    <div class="p-6 card-body">
                      <div class="d-flex">
                        <div class="">
                          <input
                            id="cashonDelivery"
                            class="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                          /><label
                            class="ms-2 form-label"
                            for="cashonDelivery"
                          ></label>
                        </div>
                        <div>
                          <h5 class="mb-1 h6">轉帳付款</h5>
                          <p class="mb-0 small mb-3">
                            請和對接業務取得匯款資訊。
                          </p>
                          <div class="row align-items-center">
                            <div class="col-auto">
                              <label
                                for="transferMoneyNum"
                                class="col-form-label"
                                >轉帳後五碼</label
                              >
                            </div>
                            <div class="col-auto">
                              <input
                                type="number"
                                id="transferMoneyNum"
                                class="form-control"
                                placeholder=""
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="mb-2 card">
                    <div class="p-6 card-body">
                      <div class="d-flex">
                        <div class="">
                          <input
                            id="cashonDelivery"
                            class="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                          /><label
                            class="ms-2 form-label"
                            for="cashonDelivery"
                          ></label>
                        </div>
                        <div>
                          <h5 class="mb-1 h6">貨到付款</h5>
                          <p class="mb-0 small">
                            當您的訂單交付時，請用現金付款。
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="mt-3 d-flex justify-content-end">
                  <button type="button" class="ms-2 btn btn-primary">
                    完成訂單
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-5 col-12 mb-4">
          <div class="card">
            <h5 class="p-3 mb-0">訂單詳情</h5>
            <ul class="list-group list-group-flush">
              <li class="p-3 list-group-item">
                <div class="align-items-center row">
                  <div class="col-md-2 col-2">
                    <img
                      src="https://i3.momoshop.com.tw/1700643770/goodsimg/0012/126/928/12126928_R.webp"
                      alt=""
                      class="img-fluid"
                    />
                  </div>
                  <div class="col-md-5 col-5">
                    <h6 class="mb-0">C-C 60W 雙色編織充電線(粉灰)</h6>
                    <span><small class="text-muted"></small></span>
                  </div>
                  <div class="text-center text-muted col-md-2 col-2">
                    <span>500</span>
                  </div>
                  <div
                    class="text-lg-end text-start text-md-end col-md-3 col-3"
                  >
                    <span class="fw-bold">$4,000,000</span>
                  </div>
                </div>
              </li>
              <li class="p-3 list-group-item">
                <div class="align-items-center row">
                  <div class="col-md-2 col-2">
                    <img
                      src="https://i3.momoshop.com.tw/1700643770/goodsimg/0012/126/928/12126928_R.webp"
                      alt=""
                      class="img-fluid"
                    />
                  </div>
                  <div class="col-md-5 col-5">
                    <h6 class="mb-0">C-C 60W 雙色編織充電線(粉灰)</h6>
                    <span><small class="text-muted"></small></span>
                  </div>
                  <div class="text-center text-muted col-md-2 col-2">
                    <span>500</span>
                  </div>
                  <div
                    class="text-lg-end text-start text-md-end col-md-3 col-3"
                  >
                    <span class="fw-bold">$4,000,000</span>
                  </div>
                </div>
              </li>
              <li class="p-3 list-group-item">
                <div class="align-items-center row">
                  <div class="col-md-2 col-2">
                    <img
                      src="https://i3.momoshop.com.tw/1700643770/goodsimg/0012/126/928/12126928_R.webp"
                      alt=""
                      class="img-fluid"
                    />
                  </div>
                  <div class="col-md-5 col-5">
                    <h6 class="mb-0">C-C 60W 雙色編織充電線(粉灰)</h6>
                    <span><small class="text-muted"></small></span>
                  </div>
                  <div class="text-center text-muted col-md-2 col-2">
                    <span>500</span>
                  </div>
                  <div
                    class="text-lg-end text-start text-md-end col-md-3 col-3"
                  >
                    <span class="fw-bold">$4,000,000</span>
                  </div>
                </div>
              </li>
              <li class="p-3 list-group-item">
                <div class="align-items-center row">
                  <div class="col-md-2 col-2">
                    <img
                      src="https://i3.momoshop.com.tw/1700643770/goodsimg/0012/126/928/12126928_R.webp"
                      alt=""
                      class="img-fluid"
                    />
                  </div>
                  <div class="col-md-5 col-5">
                    <h6 class="mb-0">C-C 60W 雙色編織充電線(粉灰)</h6>
                    <span><small class="text-muted"></small></span>
                  </div>
                  <div class="text-center text-muted col-md-2 col-2">
                    <span>500</span>
                  </div>
                  <div
                    class="text-lg-end text-start text-md-end col-md-3 col-3"
                  >
                    <span class="fw-bold">$4,000,000</span>
                  </div>
                </div>
              </li>
              <li class="p-3 list-group-item">
                <div
                  class="d-flex align-items-center justify-content-between mb-2"
                >
                  <div>訂單小計</div>
                  <div class="fw-bold">$4,000,000</div>
                </div>
                <div
                  class="d-flex align-items-center justify-content-between mb-2"
                >
                  <div>運費</div>
                  <div class="fw-bold">$3,000</div>
                </div>
                <div
                  class="d-flex align-items-center justify-content-between mb-2"
                >
                  <div>稅金 5%</div>
                  <div class="fw-bold">$200,000</div>
                </div>
              </li>
              <div class="p-3 list-group-item">
                <div
                  class="d-flex align-items-center justify-content-between mb-2 fw-bold"
                >
                  <div>總金額</div>
                  <div>$4,203,000</div>
                </div>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
