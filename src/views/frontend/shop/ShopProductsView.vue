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
            <div class="accordion-item border-0">
              <h2 class="accordion-header border-bottom" id="productList1">
                <button
                  class="accordion-button px-0 collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse1"
                  aria-expanded="true"
                  aria-controls="collapse1"
                >
                  線材類
                </button>
              </h2>
              <div
                id="collapse1"
                class="accordion-collapse collapse"
                aria-labelledby="productList1"
                data-bs-parent="#accordionProductsPage"
              >
                <div class="accordion-body p-0">
                  <ul class="navbar-nav px-3">
                    <li class="nav-item">
                      <router-link to="/shop/shop-products" class="nav-link"
                        >USB A – Type C</router-link
                      >
                    </li>
                    <li class="nav-item">
                      <router-link to="/shop/shop-products" class="nav-link"
                        >USB C – Type C</router-link
                      >
                    </li>
                    <li class="nav-item">
                      <router-link to="/shop/shop-products" class="nav-link"
                        >USB A – Lightning</router-link
                      >
                    </li>
                    <li class="nav-item">
                      <router-link to="/shop/shop-products" class="nav-link"
                        >USB C - Lightning</router-link
                      >
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="accordion-item border-0">
              <h2 class="accordion-header border-bottom" id="productList2">
                <button
                  class="accordion-button px-0 collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse2"
                  aria-expanded="false"
                  aria-controls="collapse2"
                >
                  掛繩類
                </button>
              </h2>
              <div
                id="collapse2"
                class="accordion-collapse collapse"
                aria-labelledby="productList2"
                data-bs-parent="#accordionProductsPage"
              >
                <div class="accordion-body p-0">
                  <ul class="navbar-nav px-3" id="collapseLanyard">
                    <li class="nav-item">
                      <router-link to="/shop/shop-products" class="nav-link"
                        >充電掛繩</router-link
                      >
                    </li>
                    <li class="nav-item">
                      <router-link to="/shop/shop-products" class="nav-link"
                        >一般掛繩</router-link
                      >
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="accordion-item border-0">
              <h2 class="accordion-header border-bottom" id="productList3">
                <button
                  class="accordion-button px-0 collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse3"
                  aria-expanded="false"
                  aria-controls="collapse3"
                >
                  手機殼
                </button>
              </h2>
              <div
                id="collapse3"
                class="accordion-collapse collapse"
                aria-labelledby="productList3"
                data-bs-parent="#accordionProductsPage"
              >
                <div class="accordion-body p-0">
                  <ul class="navbar-nav px-3">
                    <li class="nav-item">
                      <router-link to="/shop/shop-products" class="nav-link"
                        >Iphone 14</router-link
                      >
                    </li>
                    <li class="nav-item">
                      <router-link to="/shop/shop-products" class="nav-link"
                        >Iphone 15</router-link
                      >
                    </li>
                    <li class="nav-item">
                      <router-link to="/shop/shop-products" class="nav-link"
                        >Iphone 16</router-link
                      >
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="accordion-item border-0">
              <h2 class="accordion-header border-bottom" id="productList4">
                <button
                  class="accordion-button px-0 collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse4"
                  aria-expanded="false"
                  aria-controls="collapse4"
                >
                  充電頭
                </button>
              </h2>
              <div
                id="collapse4"
                class="accordion-collapse collapse"
                aria-labelledby="productList4"
                data-bs-parent="#accordionProductsPage"
              >
                <div class="accordion-body p-0">
                  <ul class="navbar-nav px-3">
                    <li class="nav-item">
                      <router-link to="/shop/shop-products" class="nav-link"
                        >65W</router-link
                      >
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="accordion-item border-0">
              <h2 class="accordion-header border-bottom" id="productList5">
                <button
                  class="accordion-button px-0 collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse5"
                  aria-expanded="false"
                  aria-controls="collapse5"
                >
                  螢幕保護貼
                </button>
              </h2>
              <div
                id="collapse5"
                class="accordion-collapse collapse"
                aria-labelledby="productList5"
                data-bs-parent="#accordionProductsPage"
              >
                <div class="accordion-body p-0">
                  <ul class="navbar-nav px-3">
                    <li class="nav-item">
                      <router-link to="/shop/shop-products" class="nav-link"
                        >Iphone 14</router-link
                      >
                    </li>
                    <li class="nav-item">
                      <router-link to="/shop/shop-products" class="nav-link"
                        >Iphone 15</router-link
                      >
                    </li>
                    <li class="nav-item">
                      <router-link to="/shop/shop-products" class="nav-link"
                        >Iphone 16</router-link
                      >
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="accordion-item border-0">
              <h2 class="accordion-header border-bottom" id="productList6">
                <button
                  class="accordion-button px-0 collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse6"
                  aria-expanded="false"
                  aria-controls="collapse6"
                >
                  行動電源
                </button>
              </h2>
              <div
                id="collapse6"
                class="accordion-collapse collapse"
                aria-labelledby="productList6"
                data-bs-parent="#accordionProductsPage"
              >
                <div class="accordion-body p-0">
                  <ul class="navbar-nav px-3">
                    <li class="nav-item">
                      <router-link to="/shop/shop-products" class="nav-link"
                        >10000mAh</router-link
                      >
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="accordion-item border-0">
              <h2 class="accordion-header border-bottom" id="productList7">
                <button
                  class="accordion-button px-0 collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse7"
                  aria-expanded="false"
                  aria-controls="collapse7"
                >
                  藍芽耳機
                </button>
              </h2>
              <div
                id="collapse7"
                class="accordion-collapse collapse"
                aria-labelledby="productList7"
                data-bs-parent="#accordionProductsPage"
              >
                <div class="accordion-body p-0">
                  <ul class="navbar-nav px-3">
                    <li class="nav-item">
                      <router-link to="/shop/shop-products" class="nav-link"
                        >入耳式</router-link
                      >
                    </li>
                    <li class="nav-item">
                      <router-link to="/shop/shop-products" class="nav-link"
                        >耳罩式</router-link
                      >
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="accordion-item border-0">
              <h2 class="accordion-header border-bottom" id="productList8">
                <button
                  class="accordion-button px-0 collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse8"
                  aria-expanded="false"
                  aria-controls="collapse8"
                >
                  觸控筆
                </button>
              </h2>
              <div
                id="collapse8"
                class="accordion-collapse collapse"
                aria-labelledby="productList8"
                data-bs-parent="#accordionProductsPage"
              >
                <div class="accordion-body p-0">
                  <ul class="navbar-nav px-3">
                    <li class="nav-item">
                      <router-link to="/shop/shop-products" class="nav-link"
                        >IOS</router-link
                      >
                    </li>
                    <li class="nav-item">
                      <router-link to="/shop/shop-products" class="nav-link"
                        >Android</router-link
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
