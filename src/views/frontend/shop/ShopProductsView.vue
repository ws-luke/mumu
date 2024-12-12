<script setup>
  import { ref, onMounted } from 'vue';
  import axios from 'axios';

  const menuData = ref([]);
  const api = import.meta.env.VITE_API_URL;
  const productData = ref([]);
  onMounted (async () => {
      try {
          const { data: categories } = await axios.get(`${api}/categories/all`);
          menuData.value = Object.values(categories.data);

          const { data: products } = await axios.get(`${api}/products/all`);
          productData.value = Object.values(products.data);
          

      } catch (error) {
          console.error('API 請求失敗:', error);
      }
  })


  // /products/all


</script>

<template>
  <div>
    <div class="container mt-4">
      <nav aria-label="breadcrumb" class="mb-4">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <router-link to="/" class="text-decoration-none">首頁</router-link>
          </li>
          <li class="breadcrumb-item active">產品列表</li>
        </ol>
      </nav>
      <div class="row">
        <aside class="mb-6 mb-md-0 col-lg-3 col-md-4 d-none d-lg-block">
          <div class="accordion" id="accordionProductsPage">
            <div v-for="item in menuData" :key="item.id" class="accordion-item border-0">
              <h2 class="accordion-header border-bottom" :id="`productList${item.id}`">
                <button
                  class="accordion-button px-0 collapsed"
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
                    <li v-for="subcategory in Object.values(item.subcategories)" :key="subcategory.id" class="nav-item">
                      <router-link :to="`/shop/shop-products/${item.id}/${subcategory.id}`" class="nav-link"
                        >{{ subcategory.name }}</router-link
                      >
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </aside>
        <section class="col-lg-9 col-md-12">
          <div class="row row-cols-2 row-cols-xl-4 row-cols-lg-3 g-3 mb-4">
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
                  <router-link
                    to="/shop/shop-product"
                    class="btn btn-outline-secondary"
                    >查看商品</router-link
                  >
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
                  <router-link
                    to="/shop/shop-product"
                    class="btn btn-outline-secondary"
                    >查看商品</router-link
                  >
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
                  <router-link
                    to="/shop/shop-product"
                    class="btn btn-outline-secondary"
                    >查看商品</router-link
                  >
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
                  <router-link
                    to="/shop/shop-product"
                    class="btn btn-outline-secondary"
                    >查看商品</router-link
                  >
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
                  <router-link
                    to="/shop/shop-product"
                    class="btn btn-outline-secondary"
                    >查看商品</router-link
                  >
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
                  <router-link
                    to="/shop/shop-product"
                    class="btn btn-outline-secondary"
                    >查看商品</router-link
                  >
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
                  <router-link
                    to="/shop/shop-product"
                    class="btn btn-outline-secondary"
                    >查看商品</router-link
                  >
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
                  <router-link
                    to="/shop/shop-product"
                    class="btn btn-outline-secondary"
                    >查看商品</router-link
                  >
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
                  <router-link
                    to="/shop/shop-product"
                    class="btn btn-outline-secondary"
                    >查看商品</router-link
                  >
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
                  <router-link
                    to="/shop/shop-product"
                    class="btn btn-outline-secondary"
                    >查看商品</router-link
                  >
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
                  <router-link
                    to="/shop/shop-product"
                    class="btn btn-outline-secondary"
                    >查看商品</router-link
                  >
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
                  <router-link
                    to="/shop/shop-product"
                    class="btn btn-outline-secondary"
                    >查看商品</router-link
                  >
                </div>
              </div>
            </div>
          </div>
          <nav aria-label="Page navigation example">
            <ul class="pagination justify-content-center">
              <li class="page-item disabled">
                <a class="page-link">
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
                </a>
              </li>
              <li class="page-item"><a class="page-link" href="#">1</a></li>
              <li class="page-item"><a class="page-link" href="#">2</a></li>
              <li class="page-item"><a class="page-link" href="#">3</a></li>
              <li class="page-item">
                <a class="page-link" href="#">
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
                </a>
              </li>
            </ul>
          </nav>
        </section>
      </div>
    </div>
  </div>
</template>
