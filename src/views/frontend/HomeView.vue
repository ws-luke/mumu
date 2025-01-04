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
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src="https://img2.momoshop.com.tw/ecm/img/online/19/011/00/000/bt_2_095_02/bt_2_095_02_e8.jpg?t=1727349419527"
              class="d-block w-100"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src="https://img2.momoshop.com.tw/ecm/img/online/19/011/00/000/bt_2_095_02/bt_2_095_02_e10.jpg?t=1728383120485"
              class="d-block w-100"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src="https://img2.momoshop.com.tw/ecm/img/online/19/011/00/000/bt_2_095_02/bt_2_095_02_e12.jpg?t=1727492564082"
              class="d-block w-100"
              alt="..."
            />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </section>
    <div class="container mb-5" v-for="(products, category) in categorizedProducts" :key="category">
    <div class="d-flex align-items-center justify-content-between mb-3">
      <h2 class="fw-bold text-center">{{ category }}</h2>
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
            <img
              :src="product.imageUrl"
              class="card-img-top"
              :alt="product.title"
            />
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
.price {
  color: #1c7637;
}
</style>
