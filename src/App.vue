<script setup>
import { RouterView } from 'vue-router'
import HeaderView from '@/components/HeaderView.vue'
import FooterView from '@/components/FooterView.vue'
import PhoneMenuView from '@/components/PhoneMenuView.vue'
</script>

<template>
  <HeaderView></HeaderView>
  <RouterView />
  <FooterView></FooterView>
  <!-- 手機板選單 -->
  <PhoneMenuView></PhoneMenuView>
  <div
    class="offcanvas offcanvas-end cartOffcanvas"
    tabindex="-1"
    id="offcanvasCart"
    aria-labelledby="offcanvasCartLabel"
  >
    <div class="offcanvas-header border-bottom">
      <h5 id="offcanvasCartLabel" class="m-0 fw-bold">購物車</h5>
      <button
        type="button"
        class="btn-close text-reset"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      ></button>
    </div>
    <div class="offcanvas-body">
      <ul class="navbar-nav">
        <li class="py-3 ps-0 border-bottom">
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
                          <line
                            x1="14"
                            y1="11"
                            x2="14"
                            y2="17"
                          ></line></svg></span
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
        <li class="py-3 ps-0 border-bottom">
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
                          <line
                            x1="14"
                            y1="11"
                            x2="14"
                            y2="17"
                          ></line></svg></span
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
        <li class="py-3 ps-0 border-bottom">
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
                          <line
                            x1="14"
                            y1="11"
                            x2="14"
                            y2="17"
                          ></line></svg></span
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
      <div class="d-flex justify-content-between mt-4">
        <router-link
          to="/shop/shop-products"
          type="button"
          class="btn btn-primary"
          >繼續購物</router-link
        >
        <router-link to="/shop/shop-cart" type="button" class="btn btn-dark"
          >前往購物車</router-link
        >
      </div>
    </div>
  </div>
</template>

<style scoped>
.productNum .quantity {
  width: 80px;
}
.cartOffcanvas {
  width: 650px;
}
.cartProductImg {
  width: 64px;
  height: 64px;
}
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
