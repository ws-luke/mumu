<script setup>
import { onMounted, toRefs } from 'vue'
import { useProductsStore } from '@/stores/products'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/pagination'
import { Autoplay, Pagination } from 'swiper/modules'
import { useWholesaleStore } from '@/stores/wholesale'
const modules = [Autoplay, Pagination]
const productsStore = useProductsStore()
const { fetchProducts } = productsStore
const { categorizedProducts } = toRefs(productsStore)
// 顯示批發價
defineProps(['product'])
const wholesaleStore = useWholesaleStore()
onMounted(async () => {
  try {
    await fetchProducts() // 確保資料載入
  } catch (error) {
    console.error('載入商品資料失敗:', error)
  }
})
</script>

<template>
  <div>
    <!-- 輪播圖 -->
    <swiper
      :autoplay="{
        delay: 4000,
        disableOnInteraction: false,
      }"
      :pagination="{
        clickable: true,
      }"
      :loop="true"
      :modules="modules"
      class="homeSwiper mb-5"
    >
      <swiper-slide>
        <router-link :to="`/shop/shop-product/-OH8FQuu9psaf6Pf_Fjv`">
          <img
            src="https://storage.googleapis.com/mumu-865bc.firebasestorage.app/uploads/11c76073-6617-46b0-bb59-08b341910635.webp"
            class="d-none d-lg-block w-100"
            alt="65W 氮化鎵充電器"
          />
          <img
            src="https://storage.googleapis.com/mumu-865bc.firebasestorage.app/uploads/588952ac-454b-432f-a355-5729400fb964.webp"
            class="d-block d-lg-none w-100"
            alt="65W 氮化鎵充電器"
          />
        </router-link>
      </swiper-slide>
    </swiper>
    <div
      class="container mb-5"
      v-for="(products, category) in categorizedProducts"
      :key="category"
    >
      <div class="d-flex align-items-center justify-content-between mb-3">
        <h2 class="fw-bold text-center categoryTitle">{{ category }}</h2>
        <router-link
          :to="{
            name: 'shop-products',
            query: {
              category: category,
            },
          }"
          class="nav-link"
          >查看全部</router-link
        >
      </div>
      <div class="row row-cols-2 row-cols-md-3 row-cols-xl-4 g-3">
        <div
          class="col"
          v-for="product in products.slice(0, 4)"
          :key="product.id"
        >
          <router-link
            :to="`/shop/shop-product/${product.id}`"
            class="card h-100 text-decoration-none"
          >
            <div class="card-img-top overflow-hidden">
              <img
                :src="product.imageUrl"
                class="img-fluid"
                :alt="product.title"
              />
            </div>
            <div class="card-body">
              <p class="card-title text-center">{{ product.title }}</p>
              <p class="text-center price mb-0 fw-bold text-success">
                <span>建議售價：{{ product.retail_Price }}元</span>
              </p>
              <p
                v-if="wholesaleStore.isWholesale"
                class="text-center text-muted price mb-0 fw-bold"
              >
                <span>最低售價：{{ product.origin_price }}元</span>
              </p>
              <p
                v-if="wholesaleStore.isWholesale"
                class="text-center mb-0 fw-bold"
              >
                <span>寄售價：{{ product.price }}元</span>
              </p>
              <p
                v-if="wholesaleStore.isWholesale"
                class="text-center text-danger mb-0 fw-bold"
              >
                <span>買斷價：{{ product.buyout_price }}元</span>
              </p>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.categoryTitle {
  color: #474747;
}
</style>
