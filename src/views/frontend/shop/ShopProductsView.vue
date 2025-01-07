<script setup>
import { ref, onMounted, watch, computed } from 'vue'
import { useRoute } from 'vue-router'
import axios from 'axios'

// 獲取路由資訊
const route = useRoute()
const category = ref('')
const subcategory = ref('')
const categories = ref([]) // 儲存分類資料
const api = import.meta.env.VITE_API_URL // API URL
const productData = ref([]) // 儲存商品資料
const pagination = ref({}) // 儲存分頁資料
const totalPages = ref(0) // 儲存總頁數
const loadedImages = ref({}) // 用於追蹤每個圖片是否載入完成

// 方法：取得商品資料
const fetchProducts = async (page, category, subcategory) => {
  try {
    const res = await axios.get(`${api}/products/all`, {
      params: { page, category, subcategory },
    });

    // 更新商品資料
    productData.value = res.data.data.products || [];
    pagination.value = res.data.data.pagination;
    totalPages.value = pagination.value.totalPages;
  } catch (error) {
    console.error('取得商品資料失敗:', error);
  }
}
// 篩選有效的主類別：只顯示 is_enabled === 1 的類別
const menuData = computed(() => {
  return categories.value.filter((item) => item.is_enabled === 1);
});

// 方法：取得分類資料
const fetchCategories = async () => {
  try {
    const response = await axios.get(`${api}/categories/all`);
    if (response.data && response.data.data) {
      categories.value = Object.values(response.data.data);
    }
  } catch (error) {
    console.error('API 請求失敗:', error);
  }
}

// 切換頁面
const changePage = async page => {
  await fetchProducts(page, category.value, subcategory.value);
}

// 當圖片成功載入後，更新 `loadedImages` 狀態
const onImageLoad = productId => {
  loadedImages.value[productId] = true;
}

// 初始化：取得分類和商品資料
onMounted(async () => {
  // 解碼參數（將 `+` 還原為空格）
  category.value = route.query.category?.replace(/\+/g, ' ') || '';
  subcategory.value = route.query.subcategory?.replace(/\+/g, ' ') || '';

  // 取得分類和商品資料
  await fetchCategories();
  await fetchProducts(1, category.value, subcategory.value);
})

// 監聽路由參數變化
watch(
  () => [route.query.category, route.query.subcategory], // 同時監聽 category 和 subcategory
  ([newCategory, newSubcategory]) => {
    // 更新分類參數
    category.value = newCategory?.replace(/\+/g, ' ') || ''
    subcategory.value = newSubcategory?.replace(/\+/g, ' ') || ''

    if (
      category.value !== '' ||
      subcategory.value !== '' ||
      category.value === ''
    ) {
      fetchProducts(1, category.value, subcategory.value) // 預設回到第一頁
    }
  },
)
</script>

<template>
  <div>
    <div class="container-fluid mt-4">
      <nav aria-label="breadcrumb" class="mb-4">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <router-link to="/" class="text-decoration-none">首頁</router-link>
          </li>
          <li class="breadcrumb-item active">產品列表</li>
        </ol>
      </nav>
      <div class="row">
        <aside class="mb-6 mb-md-0 col-lg-3 col-xl-2 col-md-4 d-none d-lg-block">
          <div class="accordion" id="accordionProductsPage">
            <h2 class="accordion-header">
              <router-link :to="{ name: 'shop-products', query: { category: '' } }" class="nav-link accordion-button fw-bold border-0 shadow-none allProduct">所有商品</router-link>
            </h2>
            <div
              v-for="item in menuData"
              :key="item.id"
              class="accordion-item border-0"
            >
              <h2 class="accordion-header" :id="`productList${item.id}`">
                <button
                  class="accordion-button collapsed fw-bold border-0 shadow-none"
                  type="button"
                  data-bs-toggle="collapse"
                  :data-bs-target="`#collapse${item.id}`"
                  aria-expanded="false"
                  :aria-controls="`collapse${item.id}`"
                >
                  {{ item.name }}
                </button>
              </h2>
              <div
                :id="`collapse${item.id}`"
                class="accordion-collapse collapse"
                :aria-labelledby="`productList${item.id}`"
                data-bs-parent="#accordionProductsPage"
              >
                <div class="accordion-body p-0">
                  <ul class="navbar-nav px-3">
                    <li
                      v-for="subcategory in Object.values(item.subcategories)"
                      :key="subcategory.id"
                      class="nav-item"
                    >
                      <router-link
                        :to="{
                          name: 'shop-products',
                          query: {
                            category: item.name,
                            subcategory: subcategory.name,
                          },
                        }"
                        class="nav-link ps-3"
                      >
                        {{ subcategory.name }}
                      </router-link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </aside>
        <section class="col-lg-9 col-xl-10 col-md-12">
          <div class="row justify-content-between mb-4">
            <h4 class="col">{{ category ? category : '所有商品' }}</h4>
            <!-- <div class="col-2">
              <select class="form-select select-sort">
                <option selected>商品排序</option>
                <option value="newest">上架時間: 由新到舊</option>
                <option value="oldest">上架時間: 由舊到新</option>
                <option value="highPrice">價格: 由高至低</option>
                <option value="lowPrice">價格: 由低至高</option>
              </select>
            </div> -->
          </div>
          <div v-if="productData.length > 0" class="row row-cols-2 row-cols-lg-3 row-cols-xl-4 g-4 mb-4">
            <div  class="col" v-for="product in productData" :key="product.id">
              <router-link
                class="card h-100 text-decoration-none"
                :to="`/shop/shop-product/${product.id}`"
              >
                <div
                  v-if="!loadedImages[product.id]"
                  class="card-img-top bg-light placeholder-glow h-100"
                >
                  <span class="placeholder w-100 h-100"></span>
                </div>
                <div class="card-img-top overflow-hidden">
                  <img
                    :src="product.imageUrl"
                    class=" img-fluid"
                    :alt="product.title"
                    @load="onImageLoad(product.id)"
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
          <p v-else class="text-center">暫時沒有商品</p>
          <nav v-if="totalPages > 1" aria-label="Page navigation example">
            <ul class="pagination justify-content-center my-5">
              <li
                class="page-item mx-1"
                :class="{ disabled: pagination.currentPage === 1 }"
              >
                <button
                  class="page-link"
                  @click="changePage(pagination.currentPage - 1)"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-chevron-left"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"
                    />
                  </svg>
                </button>
              </li>
              <li
                v-for="page in totalPages"
                :key="page"
                class="page-item mx-1"
                :class="{ active: page === pagination.currentPage }"
              >
                <button class="page-link rounded-1" @click="changePage(page)">
                  {{ page }}
                </button>
              </li>
              <li
                class="page-item mx-1"
                :class="{ disabled: pagination.currentPage === totalPages }"
              >
                <button
                  class="page-link"
                  @click="changePage(pagination.currentPage + 1)"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-chevron-right"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"
                    />
                  </svg>
                </button>
              </li>
            </ul>
          </nav>
        </section>
      </div>
    </div>
  </div>
</template>
<style scoped>
.price {
  color: #1c7637;
}
.allProduct::after{display: none;}
</style>
