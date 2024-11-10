<script setup>
import LogoComponent from '@/components/LogoComponent.vue'
</script>
<template>
  <div
    class="offcanvas offcanvas-end"
    tabindex="-1"
    id="offcanvasRight"
    aria-labelledby="offcanvasRightLabel"
  >
    <div class="offcanvas-header">
      <h5 id="offcanvasRightLabel" class="m-0">
        <LogoComponent></LogoComponent>
      </h5>
      <button
        type="button"
        class="btn-close text-reset"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      ></button>
    </div>
    <div class="offcanvas-body">
      <div class="accordion" id="accordionPhoneMenuPage">
        <div class="accordion-item border-0">
          <h2 class="accordion-header border-bottom" id="productList1">
            <button
              class="accordion-button px-0 collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapse1"
              aria-expanded="true"
              aria-controls="collapse1"
            >
              線材類
            </button>
          </h2>
          <div
            id="collapse1"
            class="accordion-collapse collapse"
            aria-labelledby="productList1"
            data-bs-parent="#accordionPhoneMenuPage"
          >
            <div class="accordion-body p-0">
              <ul class="navbar-nav px-3">
                <li class="nav-item">
                  <router-link to="/shop/shop-products" class="nav-link"
                    >USB A – Type C</router-link
                  >
                </li>
                <li class="nav-item">
                  <router-link to="/shop/shop-products" class="nav-link"
                    >USB C – Type C</router-link
                  >
                </li>
                <li class="nav-item">
                  <router-link to="/shop/shop-products" class="nav-link"
                    >USB A – Lightning</router-link
                  >
                </li>
                <li class="nav-item">
                  <router-link to="/shop/shop-products" class="nav-link"
                    >USB C - Lightning</router-link
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="accordion-item border-0">
          <h2 class="accordion-header border-bottom" id="productList2">
            <button
              class="accordion-button px-0 collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapse2"
              aria-expanded="false"
              aria-controls="collapse2"
            >
              掛繩類
            </button>
          </h2>
          <div
            id="collapse2"
            class="accordion-collapse collapse"
            aria-labelledby="productList2"
            data-bs-parent="#accordionPhoneMenuPage"
          >
            <div class="accordion-body p-0">
              <ul class="navbar-nav px-3" id="collapseLanyard">
                <li class="nav-item">
                  <router-link to="/shop/shop-products" class="nav-link"
                    >充電掛繩</router-link
                  >
                </li>
                <li class="nav-item">
                  <router-link to="/shop/shop-products" class="nav-link"
                    >一般掛繩</router-link
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="accordion-item border-0">
          <h2 class="accordion-header border-bottom" id="productList3">
            <button
              class="accordion-button px-0 collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapse3"
              aria-expanded="false"
              aria-controls="collapse3"
            >
              手機殼
            </button>
          </h2>
          <div
            id="collapse3"
            class="accordion-collapse collapse"
            aria-labelledby="productList3"
            data-bs-parent="#accordionPhoneMenuPage"
          >
            <div class="accordion-body p-0">
              <ul class="navbar-nav px-3">
                <li class="nav-item">
                  <router-link to="/shop/shop-products" class="nav-link"
                    >Iphone 14</router-link
                  >
                </li>
                <li class="nav-item">
                  <router-link to="/shop/shop-products" class="nav-link"
                    >Iphone 15</router-link
                  >
                </li>
                <li class="nav-item">
                  <router-link to="/shop/shop-products" class="nav-link"
                    >Iphone 16</router-link
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="accordion-item border-0">
          <h2 class="accordion-header border-bottom" id="productList4">
            <button
              class="accordion-button px-0 collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapse4"
              aria-expanded="false"
              aria-controls="collapse4"
            >
              充電頭
            </button>
          </h2>
          <div
            id="collapse4"
            class="accordion-collapse collapse"
            aria-labelledby="productList4"
            data-bs-parent="#accordionPhoneMenuPage"
          >
            <div class="accordion-body p-0">
              <ul class="navbar-nav px-3">
                <li class="nav-item">
                  <router-link to="/shop/shop-products" class="nav-link"
                    >65W</router-link
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="accordion-item border-0">
          <h2 class="accordion-header border-bottom" id="productList5">
            <button
              class="accordion-button px-0 collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapse5"
              aria-expanded="false"
              aria-controls="collapse5"
            >
              螢幕保護貼
            </button>
          </h2>
          <div
            id="collapse5"
            class="accordion-collapse collapse"
            aria-labelledby="productList5"
            data-bs-parent="#accordionPhoneMenuPage"
          >
            <div class="accordion-body p-0">
              <ul class="navbar-nav px-3">
                <li class="nav-item">
                  <router-link to="/shop/shop-products" class="nav-link"
                    >Iphone 14</router-link
                  >
                </li>
                <li class="nav-item">
                  <router-link to="/shop/shop-products" class="nav-link"
                    >Iphone 15</router-link
                  >
                </li>
                <li class="nav-item">
                  <router-link to="/shop/shop-products" class="nav-link"
                    >Iphone 16</router-link
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="accordion-item border-0">
          <h2 class="accordion-header border-bottom" id="productList6">
            <button
              class="accordion-button px-0 collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapse6"
              aria-expanded="false"
              aria-controls="collapse6"
            >
              行動電源
            </button>
          </h2>
          <div
            id="collapse6"
            class="accordion-collapse collapse"
            aria-labelledby="productList6"
            data-bs-parent="#accordionPhoneMenuPage"
          >
            <div class="accordion-body p-0">
              <ul class="navbar-nav px-3">
                <li class="nav-item">
                  <router-link to="/shop/shop-products" class="nav-link"
                    >10000mAh</router-link
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="accordion-item border-0">
          <h2 class="accordion-header border-bottom" id="productList7">
            <button
              class="accordion-button px-0 collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapse7"
              aria-expanded="false"
              aria-controls="collapse7"
            >
              藍芽耳機
            </button>
          </h2>
          <div
            id="collapse7"
            class="accordion-collapse collapse"
            aria-labelledby="productList7"
            data-bs-parent="#accordionPhoneMenuPage"
          >
            <div class="accordion-body p-0">
              <ul class="navbar-nav px-3">
                <li class="nav-item">
                  <router-link to="/shop/shop-products" class="nav-link"
                    >入耳式</router-link
                  >
                </li>
                <li class="nav-item">
                  <router-link to="/shop/shop-products" class="nav-link"
                    >耳罩式</router-link
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="accordion-item border-0">
          <h2 class="accordion-header border-bottom" id="productList8">
            <button
              class="accordion-button px-0 collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapse8"
              aria-expanded="false"
              aria-controls="collapse8"
            >
              觸控筆
            </button>
          </h2>
          <div
            id="collapse8"
            class="accordion-collapse collapse"
            aria-labelledby="productList8"
            data-bs-parent="#accordionPhoneMenuPage"
          >
            <div class="accordion-body p-0">
              <ul class="navbar-nav px-3">
                <li class="nav-item">
                  <router-link to="/shop/shop-products" class="nav-link"
                    >IOS</router-link
                  >
                </li>
                <li class="nav-item">
                  <router-link to="/shop/shop-products" class="nav-link"
                    >Android</router-link
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
