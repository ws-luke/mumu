<script setup>
import LogoComponent from '@/components/LogoComponent.vue'
</script>
<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container">
        <router-link to="/" class="navbar-brand m-0"
          ><LogoComponent></LogoComponent
        ></router-link>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link to="/shop/shop-products" class="nav-link"
                >線材類</router-link
              >
            </li>
            <li class="nav-item">
              <router-link to="/shop/shop-products" class="nav-link"
                >掛繩類</router-link
              >
            </li>
            <li class="nav-item">
              <router-link to="/shop/shop-products" class="nav-link"
                >手機殼</router-link
              >
            </li>
            <li class="nav-item">
              <router-link to="/shop/shop-products" class="nav-link"
                >充電頭</router-link
              >
            </li>
            <li class="nav-item">
              <router-link to="/shop/shop-products" class="nav-link"
                >螢幕保護貼</router-link
              >
            </li>
            <li class="nav-item">
              <router-link to="/shop/shop-products" class="nav-link"
                >行動電源</router-link
              >
            </li>
            <li class="nav-item">
              <router-link to="/shop/shop-products" class="nav-link"
                >藍芽耳機</router-link
              >
            </li>
            <li class="nav-item">
              <router-link to="/shop/shop-products" class="nav-link"
                >觸控筆</router-link
              >
            </li>
            <li class="nav-item">
              <router-link to="/users/account-orders" class="nav-link"
                >訂單</router-link
              >
            </li>
            <li class="nav-item">
              <router-link to="/users/account-settings" class="nav-link"
                >資訊</router-link
              >
            </li>
          </ul>
        </div>
        <div class="d-flex">
          <!-- 個人 -->
          <router-link to="/users/signIn" class="nav-link">
            <svg
              class="header__individual-icon"
              height="50px"
              viewBox="0 0 50 50"
            >
              <g
                id="Icon_Account"
                stroke="none"
                stroke-width="1"
                fill="none"
                fill-rule="evenodd"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <g id="user" stroke="#292929" stroke-width="1.6">
                  <path
                    d="M34,34 L34,32 C34,29.790861 31.9852814,28 29.5,28 L20.5,28 C18.0147186,28 16,29.790861 16,32 L16,34"
                    id="Shape"
                  ></path>
                  <circle id="Oval" cx="25" cy="20" r="4"></circle>
                </g>
              </g>
            </svg>
          </router-link>
          <!-- 購物車 -->
          <router-link
            to=""
            class="nav-link"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasCart"
            aria-controls="offcanvasCart"
          >
            <svg
              class="header__individual-icon"
              height="50px"
              viewBox="0 0 50 50"
            >
              <g
                id="Icon_Cart"
                stroke="none"
                stroke-width="1"
                fill="none"
                fill-rule="evenodd"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <g id="shopping-cart" stroke="#292929" stroke-width="1.55">
                  <circle
                    id="Oval"
                    cx="19.3636364"
                    cy="33.1818182"
                    r="1.81818182"
                  ></circle>
                  <circle
                    id="Oval"
                    cx="30.2727273"
                    cy="33.1818182"
                    r="1.81818182"
                  ></circle>
                  <path
                    d="M17.2454545,19.5454545 L33,19.5454545 L31.4727273,27.1727273 C31.3011482,28.0365741 30.5351055,28.6532385 29.6545455,28.6363636 L20.0454545,28.6363636 C19.1268013,28.6441553 18.3466689,27.9654401 18.2272727,27.0545455 L16.8454545,16.5818182 C16.7269293,15.6778144 15.9571942,15.0013805 15.0454545,15 L13,15"
                    id="Shape"
                  ></path>
                </g>
              </g>
            </svg>
          </router-link>
        </div>
        <button
          class="btn d-flex d-lg-none order-first p-0"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasRight"
          aria-controls="offcanvasRight"
        >
          <svg width="50px" height="50px" viewBox="0 0 50 50">
            <g
              id="Icon_Hamburger"
              stroke="none"
              stroke-width="1"
              fill="none"
              fill-rule="evenodd"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <g
                id="align-justify"
                transform="translate(16.000000, 17.000000)"
                stroke="#292929"
                stroke-width="1.6"
              >
                <line x1="18" y1="10" x2="0" y2="10" id="Shape"></line>
                <line x1="18" y1="15" x2="0" y2="15" id="Shape"></line>
                <line x1="18" y1="0" x2="0" y2="0" id="Shape"></line>
                <line x1="18" y1="5" x2="0" y2="5" id="Shape"></line>
              </g>
            </g>
          </svg>
        </button>
      </div>
    </nav>
  </div>
</template>
