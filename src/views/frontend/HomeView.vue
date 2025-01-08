<script setup>
import { onMounted, toRefs } from 'vue';
import { useProductsStore } from '@/stores/products';
const productsStore = useProductsStore();
const { fetchProducts } = productsStore;
const { categorizedProducts } = toRefs(productsStore);
onMounted(async () => {
  try {
    await fetchProducts(); // 確保資料載入    
  } catch (error) {
    console.error('載入商品資料失敗:', error);
  }
});
</script>

<template>
  <div>
    <!-- 輪播圖 -->
    <section class="mb-5">
      <div
        id="carouselExampleIndicators"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <router-link :to="`shop/shop-product/-OEySYm86pLYtZcaT9PK`">
              <img
              src="https://storage.googleapis.com/mumu-865bc.firebasestorage.app/uploads/9dbaa990-2e9b-4761-b43f-91e0d1d38912.png"
              class="d-none d-lg-block w-100"
              alt="真空磁吸手機支架"/>
            <img
              src="https://storage.googleapis.com/mumu-865bc.firebasestorage.app/uploads/a8ea680e-396c-409e-b627-413bf21f4f04.png"
              class="d-block d-lg-none w-100"
              alt="真空磁吸手機支架"/>
            </router-link>
          </div>
        </div>
      </div>
    </section>
    <div class="container mb-5" v-for="(products, category) in categorizedProducts" :key="category">
      <div class="d-flex align-items-center justify-content-between mb-3">
        <h2 class="fw-bold text-center categoryTitle">{{ category }}</h2>
        <router-link
        :to="{
          name: 'shop-products',
          query: {
            category: category,
          },
        }"
        class="nav-link">查看全部</router-link>
      </div>
      <div class="row row-cols-2 row-cols-md-3 row-cols-xl-4 g-3">
        <div class="col" v-for="product in products.slice(0, 4)" :key="product.id">
            <router-link
              :to="`/shop/shop-product/${product.id}`"
              class="card h-100 text-decoration-none">
              <div class="card-img-top overflow-hidden">
                <img
                  :src="product.imageUrl"
                  class="img-fluid"
                  :alt="product.title"
                />
              </div>
              <div class="card-body">
                <p class="card-title text-center">{{ product.title }}</p>
                <p class="text-center price mb-0 fw-bold">
                  NT$ {{ product.retail_Price }}
                </p>
              </div>
            </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
  .categoryTitle{
    color: #474747;
  }
  .price {
    color: #1c7637;
  }
</style>
