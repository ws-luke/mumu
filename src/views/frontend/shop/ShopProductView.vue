<script setup>
import { ref, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import axios from 'axios'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'
import { FreeMode, Navigation, Thumbs } from 'swiper/modules'
import { useWholesaleStore } from '@/stores/wholesale';
// 定義 refs
const thumbsSwiper = ref(null)
const api = import.meta.env.VITE_API_URL // API URL
const { id } = useRoute().params
const route = useRoute()
const product = ref({}) // 商品資訊
const productVariants = ref()
const loadedImages = ref({}) // 用於追蹤每個圖片是否載入完成
const modules = [FreeMode, Navigation, Thumbs]
const category = ref('')
const subcategory = ref('')
const currentModel = ref(null) //當前型號
const currentQuantity = ref(null) // 當前數量



// 取得商品
const getProduct = async () => {
  try {
    const { data } = await axios.get(`${api}/products/${id}`)
    product.value = data.data
    productVariants.value = data.data.productVariants
    currentModel.value = productVariants.value[0].model
  } catch (error) {
    console.error('取得商品失敗', error)
  }
}

// 更換商品型號 價格 數量
const changeProductModel = (model) => {
  currentModel.value = model.model
  currentQuantity.value = model.quantity
}
// 設定輪播圖片
const setThumbsSwiper = swiper => {
  thumbsSwiper.value = swiper
}
// 當圖片成功載入後，更新 `loadedImages` 狀態
const onImageLoad = productId => {
  loadedImages.value[productId] = true
}
// 顯示批發價
defineProps(['product']);
const wholesaleStore = useWholesaleStore();

onMounted(async () => {
  try {
    await getProduct()
  } catch (error) {
    console.error('取得商品失敗', error)
  }
})
// 監聽路由參數變化
watch(
  () => [route.query.category, route.query.subcategory], // 同時監聽 category 和 subcategory
  ([newCategory, newSubcategory]) => {
    // 更新分類參數
    category.value = newCategory?.replace(/\+/g, ' ') || ''
    subcategory.value = newSubcategory?.replace(/\+/g, ' ') || ''
  },
)
</script>

<template>
  <section class="mt-3">
    <div class="container mb-5">
      <nav aria-label="breadcrumb" class="mb-4">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <router-link to="/" class="text-decoration-none">首頁</router-link>
          </li>
          <li class="breadcrumb-item">
            <router-link to="/shop/shop-products" class="text-decoration-none"
              >產品列表</router-link
            >
          </li>
          <li class="breadcrumb-item">
            <router-link
              :to="`/shop/shop-products?category=${product.category}`"
              class="text-decoration-none"
              >{{ product.category }}</router-link
            >
          </li>
          <li class="breadcrumb-item active" aria-current="page">
            {{ product.title }}
          </li>
        </ol>
      </nav>
      <div class="row">
        <div class="col-md-6 mb-3">
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
            class="mySwiper2 mb-3"
          >
            <swiper-slide v-for="url in product.imagesUrl" :key="url">
              <div
                v-if="!loadedImages[product.id]"
                class="bg-light placeholder-glow"
              >
                <span class="placeholder w-100 h-100"></span>
              </div>
              <img @load="onImageLoad(product.id)" :src="url" />
            </swiper-slide>
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
            <swiper-slide v-for="url in product.imagesUrl" :key="url">
              <div
                v-if="!loadedImages[product.id]"
                class="bg-light placeholder-glow"
              >
                <span class="placeholder w-100 h-100"></span>
              </div>
              <img @load="onImageLoad(product.id)" :src="url" />
            </swiper-slide>
          </swiper>
        </div>
        <div class="col-md-6">
          <p class="d-flex">
            <router-link
              :to="`/shop/shop-products?category=${product.category}`"
              class="mb-2 d-block text-decoration-none"
              >{{ product.category }}</router-link
            >
            <span class="mx-2">/</span>
            <router-link
              :to="{
                name: 'shop-products',
                query: {
                  category: product.category,
                  subcategory: product.subcategory,
                },
              }"
              class="mb-2 d-block text-decoration-none"
              >{{ product.subcategory }}</router-link
            >
          </p>
          <h1>{{ product.title }}</h1>
          <p class="text-muted">{{ currentModel }}</p>
          <div class="fs-4">
            <span v-if="wholesaleStore.isWholesale" class="fw-bold fs-3 text-danger">NT$ {{ product.price }}</span>
            <span v-else class="fw-bold fs-3 text-danger">$ {{product.retail_Price}}</span>
          </div>
          <hr class="my-4" />
          <div v-html="product.description"></div>
          <hr class="my-4" />
          <p>顏色</p>
          <button v-for="item in productVariants" :key="item" class="btn btn-outline-dark me-2 mb-2" @click="changeProductModel(item)">{{ item.color }}</button>
          <hr class="my-4" />
          <div>
            <table class="table table-borderless mb-0">
              <tbody>
                <tr>
                  <td>材質:</td>
                  <td>{{ product.material }}</td>
                </tr>
                <tr>
                  <td>重量:</td>
                  <td>{{ product.weight }}g</td>
                </tr>
                <tr>
                  <td>保固:</td>
                  <td>{{ product.warranty }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </section>
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
td:first-child {
    width: 80px;
    white-space: nowrap;
  }
.table > :not(caption) > * > *{padding: .5rem;}
</style>
