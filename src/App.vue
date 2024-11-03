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
    class="offcanvas offcanvas-end"
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
        <li class="nav-item d-flex justify-content-between border-bottom pb-3">
          <div class="d-flex">
            <a href="#">
              <img
                data-v-f5c716f9=""
                src="https://i3.momoshop.com.tw/1700643770/goodsimg/0012/126/928/12126928_R.webp"
                alt=""
                class="img-fluid cartProductImg me-3"
              />
            </a>
            <div class="">
              <router-link to="/" class="text-decoration-none d-block mb-2">
                <h6>C-C 60W 雙色編織充電線(粉灰)</h6>
              </router-link>
              <div class="productNum d-flex align-items-center">
                <div class="quantity">
                  <input
                    type="number"
                    class="form-control"
                    id="quantity"
                    value="500"
                  />
                </div>
                <span class="mx-3">×</span>
                <span>300,020</span>
              </div>
            </div>
          </div>
          <button class="btn">
            <svg class="ct-icon" width="20" height="20" viewBox="0 0 24 24">
              <path
                d="M9.6,0l0,1.2H1.2v2.4h21.6V1.2h-8.4l0-1.2H9.6z M2.8,6l1.8,15.9C4.8,23.1,5.9,24,7.1,24h9.9c1.2,0,2.2-0.9,2.4-2.1L21.2,6H2.8z"
              ></path>
            </svg>
          </button>
        </li>
      </ul>
      <div class="d-flex justify-content-between mt-4">
        <router-link
          to="/shop/shop-products"
          type="button"
          class="btn btn-primary"
          >繼續購物</router-link
        >
        <router-link to="/shop/shop-checkout" type="button" class="btn btn-dark"
          >結帳</router-link
        >
      </div>
    </div>
  </div>
</template>

<style scoped>
.productNum .quantity {
  width: 80px;
}
.offcanvas {
  width: 560px;
}
.cartProductImg {
  width: 64px;
  height: 64px;
}
</style>
