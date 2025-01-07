<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
const api = import.meta.env.VITE_API_URL;

// const cableData = ref([]) //充電線
// const generalLanyardData = ref([]) //一般掛繩
// const chargingCableLanyardData = ref([]) // 充電掛繩
// const magneticAccessoriesData = ref([]) //磁吸配件
// const mobilePhoneCaseData = ref([]) //手機殼
const productsData = ref();
const menuData = ref([]) // 儲存分類資料
const categorizedProducts = ref({});
// 取得所有商品
const fetchProducts = async () => {
  try {
    const { data } = await axios.get(`${api}/products/`);
    productsData.value = Object.values(data.data.products);
    const products = Object.values(data.data.products);
    products.forEach(product => {
      const category = product.category;
      if (!categorizedProducts.value[category]) {
        categorizedProducts.value[category] = []; // 若分類不存在，初始化為空陣列
      }
      categorizedProducts.value[category].push(product); // 將商品加入對應分類的陣列
    });
    // 確保在分類結束後再打印
    // console.log('分類後的商品:', categorizedProducts.value);ㄋ
  } catch (error) {
    console.error('API 請求失敗:', error);
  }
}

// 方法：取得分類資料
const fetchCategories = async () => {
  try {
    const { data: categories } = await axios.get(`${api}/categories/all`)
    menuData.value = Object.values(categories.data);
    // console.log(`所有類別`,menuData.value);
  } catch (error) {
    console.error('取得分類資料失敗:', error)
  }
}




onMounted(async () => {
  try {
    await Promise.all([fetchProducts(), fetchCategories()]);
  } catch (error) {
    console.error('API 請求失敗:', error);
  }
})


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
            <a href="shop/shop-product/-OEySYm86pLYtZcaT9PK">
              <img
              src="https://storage.googleapis.com/mumu-865bc.firebasestorage.app/uploads/9dbaa990-2e9b-4761-b43f-91e0d1d38912.png"
              class="d-none d-lg-block w-100"
              alt="真空磁吸手機支架"/>
            <img
              src="https://storage.googleapis.com/mumu-865bc.firebasestorage.app/uploads/a8ea680e-396c-409e-b627-413bf21f4f04.png"
              class="d-block d-lg-none w-100"
              alt="真空磁吸手機支架"/>
            </a>
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
