<script>
import { ref } from 'vue'
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'

// Import Swiper styles
import 'swiper/css'

import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'

// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules'
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const thumbsSwiper = ref(null)

    const setThumbsSwiper = swiper => {
      thumbsSwiper.value = swiper
    }

    return {
      thumbsSwiper,
      setThumbsSwiper,
      modules: [FreeMode, Navigation, Thumbs],
    }
  },
}
</script>

<template>
  <div>
    <section class="mt-3">
      <div class="container mb-5">
        <nav aria-label="breadcrumb" class="mb-4">
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <router-link to="/" class="text-decoration-none"
                >首頁</router-link
              >
            </li>
            <li class="breadcrumb-item">
              <router-link to="/shop/shop-products" class="text-decoration-none"
                >產品列表</router-link
              >
            </li>
            <li class="breadcrumb-item active" aria-current="page">
              C-C 60W 雙色編織充電線
            </li>
          </ol>
        </nav>
        <div class="row">
          <div class="col-md-6">
            <swiper
              :style="{
                '--swiper-navigation-color': '#fff',
                '--swiper-pagination-color': '#fff',
              }"
              :loop="true"
              :spaceBetween="10"
              :navigation="true"
              :thumbs="{ swiper: thumbsSwiper }"
              :modules="modules"
              class="mySwiper2"
            >
              <swiper-slide
                ><img
                  src="https://swiperjs.com/demos/images/nature-1.jpg" /></swiper-slide
              ><swiper-slide
                ><img
                  src="https://swiperjs.com/demos/images/nature-2.jpg" /></swiper-slide
              ><swiper-slide
                ><img
                  src="https://swiperjs.com/demos/images/nature-3.jpg" /></swiper-slide
              ><swiper-slide
                ><img
                  src="https://swiperjs.com/demos/images/nature-4.jpg" /></swiper-slide
              ><swiper-slide
                ><img
                  src="https://swiperjs.com/demos/images/nature-5.jpg" /></swiper-slide
              ><swiper-slide
                ><img
                  src="https://swiperjs.com/demos/images/nature-6.jpg" /></swiper-slide
              ><swiper-slide
                ><img
                  src="https://swiperjs.com/demos/images/nature-7.jpg" /></swiper-slide
              ><swiper-slide
                ><img
                  src="https://swiperjs.com/demos/images/nature-8.jpg" /></swiper-slide
              ><swiper-slide
                ><img
                  src="https://swiperjs.com/demos/images/nature-9.jpg" /></swiper-slide
              ><swiper-slide
                ><img src="https://swiperjs.com/demos/images/nature-10.jpg"
              /></swiper-slide>
            </swiper>
            <swiper
              @swiper="setThumbsSwiper"
              :loop="true"
              :spaceBetween="10"
              :slidesPerView="4"
              :freeMode="true"
              :watchSlidesProgress="true"
              :modules="modules"
              class="mySwiper"
            >
              <swiper-slide
                ><img
                  src="https://swiperjs.com/demos/images/nature-1.jpg" /></swiper-slide
              ><swiper-slide
                ><img
                  src="https://swiperjs.com/demos/images/nature-2.jpg" /></swiper-slide
              ><swiper-slide
                ><img
                  src="https://swiperjs.com/demos/images/nature-3.jpg" /></swiper-slide
              ><swiper-slide
                ><img
                  src="https://swiperjs.com/demos/images/nature-4.jpg" /></swiper-slide
              ><swiper-slide
                ><img
                  src="https://swiperjs.com/demos/images/nature-5.jpg" /></swiper-slide
              ><swiper-slide
                ><img
                  src="https://swiperjs.com/demos/images/nature-6.jpg" /></swiper-slide
              ><swiper-slide
                ><img
                  src="https://swiperjs.com/demos/images/nature-7.jpg" /></swiper-slide
              ><swiper-slide
                ><img
                  src="https://swiperjs.com/demos/images/nature-8.jpg" /></swiper-slide
              ><swiper-slide
                ><img
                  src="https://swiperjs.com/demos/images/nature-9.jpg" /></swiper-slide
              ><swiper-slide
                ><img src="https://swiperjs.com/demos/images/nature-10.jpg"
              /></swiper-slide>
            </swiper>
          </div>
          <div class="col-md-6">
            <router-link
              to="/shop/shop-products"
              class="mb-2 d-block text-decoration-none"
              >線材類</router-link
            >
            <h1>C-C 60W 雙色編織充電線(粉灰)</h1>
            <div class="fs-4">
              <span class="fw-bold text-dark">$144 </span>
              <span class="text-decoration-line-through text-muted">$24</span>
              <span><small class="fs-6 ms-2 text-danger">40% Off</small></span>
            </div>
            <hr class="my-4" />
            <div class="my-4 d-flex gap-1">
              <input
                type="radio"
                class="btn-check"
                name="options-outlined"
                id="success-outlined"
                autocomplete="off"
                checked
              />
              <label
                class="btn btn-outline-secondary btn-lg me-2"
                for="success-outlined"
                >1m</label
              >
              <input
                type="radio"
                class="btn-check"
                name="options-outlined"
                id="danger-outlined"
                autocomplete="off"
              />
              <label
                class="btn btn-outline-secondary btn-lg me-2"
                for="danger-outlined"
                >1.2m</label
              >
            </div>
            <input
              class="form-control form-control-lg"
              type="number"
              value="1"
              name="quantity"
            />
            <div class="mt-3 g-2 align-items-center row">
              <div class="d-grid col-xxl-4 col-lg-6 col-md-8 col-6">
                <button type="button" class="btn btn-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="me-2"
                  >
                    <path
                      d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"
                    ></path>
                    <line x1="3" y1="6" x2="21" y2="6"></line>
                    <path d="M16 10a4 4 0 0 1-8 0"></path></svg
                  >加入購物車
                </button>
              </div>
              <div class="col-2">
                <button type="button" class="btn btn-light">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path
                      d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
            <hr class="my-4" />
            <div>
              <table class="table table-borderless mb-0">
                <tbody>
                  <tr>
                    <td>傳輸速度:</td>
                    <td>480Mbps</td>
                  </tr>
                  <tr>
                    <td>材質:</td>
                    <td>尼龍編織</td>
                  </tr>
                  <tr>
                    <td>重量:</td>
                    <td>30g</td>
                  </tr>
                  <tr>
                    <td>保固:</td>
                    <td>6個月</td>
                  </tr>
                  <tr>
                    <td>外包裝尺寸:</td>
                    <td>11cm x 15cm x 2.5cm</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<style scoped>
.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

body {
  background: #000;
  color: #000;
}

.swiper {
  width: 100%;
  height: 300px;
  margin-left: auto;
  margin-right: auto;
}

.swiper-slide {
  background-size: cover;
  background-position: center;
}

.mySwiper2 {
  height: 80%;
  width: 100%;
}

.mySwiper {
  height: 20%;
  box-sizing: border-box;
  padding: 10px 0;
}

.mySwiper .swiper-slide {
  width: 25%;
  height: 100%;
  opacity: 0.4;
}

.mySwiper .swiper-slide-thumb-active {
  opacity: 1;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
