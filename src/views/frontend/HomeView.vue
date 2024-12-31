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

// 取得所有商品
const fetchProducts = async () => {
  try {
    const { data } = await axios.get(`${api}/products/`);
    productsData.value = Object.values(data.data.products);
    console.log(`所有商品`,productsData.value);
  } catch (error) {
    console.error('API 請求失敗:', error);
  }
}
// 方法：取得分類資料
const fetchCategories = async () => {
  try {
    const { data: categories } = await axios.get(`${api}/categories/all`)
    menuData.value = Object.values(categories.data);
    console.log(`所有類別`,menuData.value);
  } catch (error) {
    console.error('取得分類資料失敗:', error)
  }
}
onMounted(async () => {
  try {
    await fetchProducts();
    await fetchCategories();
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
    <!-- 線材類 -->
    <div class="container mb-5">
      <div class="d-flex align-items-center justify-content-between mb-3">
        <h2 class="fw-bold text-center">線材類</h2>
        <router-link class="">查看全部</router-link>
      </div>
      <div class="row row-cols-2 row-cols-md-3 row-cols-xl-4 g-3">
        <div class="col">
          <div class="card">
            <img
              src="https://i3.momoshop.com.tw/1700643770/goodsimg/0012/126/928/12126928_R.webp"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">蘋果iPhone 15 雙Type-C編織充電線</h5>
              <p class="card-text">適用於蘋果15以上手機</p>
              <a href="#" class="btn btn-outline-secondary">查看商品</a>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img
              src="https://i3.momoshop.com.tw/1700643770/goodsimg/0012/126/928/12126928_R.webp"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">蘋果iPhone 15 雙Type-C編織充電線</h5>
              <p class="card-text">適用於蘋果15以上手機</p>
              <a href="#" class="btn btn-outline-secondary">查看商品</a>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img
              src="https://i3.momoshop.com.tw/1700643770/goodsimg/0012/126/928/12126928_R.webp"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">蘋果iPhone 15 雙Type-C編織充電線</h5>
              <p class="card-text">適用於蘋果15以上手機</p>
              <a href="#" class="btn btn-outline-secondary">查看商品</a>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img
              src="https://i3.momoshop.com.tw/1700643770/goodsimg/0012/126/928/12126928_R.webp"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">蘋果iPhone 15 雙Type-C編織充電線</h5>
              <p class="card-text">適用於蘋果15以上手機</p>
              <a href="#" class="btn btn-outline-secondary">查看商品</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 掛繩類 -->
    <div class="container mb-5">
      <h2 class="fw-bold text-center mb-5">掛繩類</h2>
      <div class="row row-cols-2 row-cols-md-3 row-cols-xl-4 g-3">
        <div class="col">
          <div class="card">
            <img
              src="https://i2.momoshop.com.tw/1692475354/goodsimg/0011/436/786/11436786_R.webp"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">多彩6mm快拆手機掛繩-手腕帶</h5>
              <p class="card-text">長度可調節，應使用需求自由調整</p>
              <a href="#" class="btn btn-outline-secondary">查看商品</a>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img
              src="https://i2.momoshop.com.tw/1692475354/goodsimg/0011/436/786/11436786_R.webp"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">多彩6mm快拆手機掛繩-手腕帶</h5>
              <p class="card-text">長度可調節，應使用需求自由調整</p>
              <a href="#" class="btn btn-outline-secondary">查看商品</a>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img
              src="https://i2.momoshop.com.tw/1692475354/goodsimg/0011/436/786/11436786_R.webp"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">多彩6mm快拆手機掛繩-手腕帶</h5>
              <p class="card-text">長度可調節，應使用需求自由調整</p>
              <a href="#" class="btn btn-outline-secondary">查看商品</a>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img
              src="https://i2.momoshop.com.tw/1692475354/goodsimg/0011/436/786/11436786_R.webp"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">多彩6mm快拆手機掛繩-手腕帶</h5>
              <p class="card-text">長度可調節，應使用需求自由調整</p>
              <a href="#" class="btn btn-outline-secondary">查看商品</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 手機殼 -->
    <div class="container mb-5">
      <h2 class="fw-bold text-center mb-5">手機殼</h2>
      <div class="row row-cols-2 row-cols-md-3 row-cols-xl-4 g-3">
        <div class="col">
          <div class="card">
            <img
              src="https://i2.momoshop.com.tw/1726290379/goodsimg/0013/103/013/13103013_R.webp"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">
                iPhone 16 Pro Max 防撞手機保護殼 透明 霧透
              </h5>
              <p class="card-text">PC硬質背蓋+TPU軟質邊框</p>
              <a href="#" class="btn btn-outline-secondary">查看商品</a>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img
              src="https://i2.momoshop.com.tw/1726290379/goodsimg/0013/103/013/13103013_R.webp"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">
                iPhone 16 Pro Max 防撞手機保護殼 透明 霧透
              </h5>
              <p class="card-text">PC硬質背蓋+TPU軟質邊框</p>
              <a href="#" class="btn btn-outline-secondary">查看商品</a>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img
              src="https://i2.momoshop.com.tw/1726290379/goodsimg/0013/103/013/13103013_R.webp"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">
                iPhone 16 Pro Max 防撞手機保護殼 透明 霧透
              </h5>
              <p class="card-text">PC硬質背蓋+TPU軟質邊框</p>
              <a href="#" class="btn btn-outline-secondary">查看商品</a>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img
              src="https://i2.momoshop.com.tw/1726290379/goodsimg/0013/103/013/13103013_R.webp"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">
                iPhone 16 Pro Max 防撞手機保護殼 透明 霧透
              </h5>
              <p class="card-text">PC硬質背蓋+TPU軟質邊框</p>
              <a href="#" class="btn btn-outline-secondary">查看商品</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
