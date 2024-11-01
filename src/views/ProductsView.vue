<template>
  <div>
    <div class="container mt-4">
      <nav aria-label="breadcrumb" class="mb-4">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="#">首頁</a></li>
          <li class="breadcrumb-item active" aria-current="page">產品列表</li>
        </ol>
      </nav>
      <div class="row">
        <aside class="mb-6 mb-md-0 col-lg-3 col-md-4 d-none d-lg-block">
          <ul class="navbar-nav">
            <!-- 線材類 -->
            <li class="nav-item">
              <a
                class="nav-link d-flex justify-content-between"
                data-bs-toggle="collapse"
                href="#collapseCable"
                role="button"
                aria-expanded="false"
                aria-controls="collapseCable"
              >
                <span>線材類</span>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-chevron-down"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
                    />
                  </svg> </span
              ></a>
              <ul class="navbar-nav collapse px-3" id="collapseCable">
                <li class="nav-item">
                  <router-link to="/products" class="nav-link"
                    >USB A – Type C</router-link
                  >
                </li>
                <li class="nav-item">
                  <router-link to="/products" class="nav-link"
                    >USB C – Type C</router-link
                  >
                </li>
                <li class="nav-item">
                  <router-link to="/products" class="nav-link"
                    >USB A – Lightning</router-link
                  >
                </li>
                <li class="nav-item">
                  <router-link to="/products" class="nav-link"
                    >USB C - Lightning</router-link
                  >
                </li>
              </ul>
            </li>
            <!-- 掛繩類 -->
            <li class="nav-item">
              <a
                class="nav-link d-flex justify-content-between"
                data-bs-toggle="collapse"
                href="#collapseLanyard"
                role="button"
                aria-expanded="false"
                aria-controls="collapseLanyard"
              >
                <span>掛繩類</span>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-chevron-down"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
                    />
                  </svg> </span
              ></a>
              <ul class="navbar-nav collapse px-3" id="collapseLanyard">
                <li class="nav-item">
                  <a class="nav-link" href="#">充電掛繩</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">一般掛繩</a>
                </li>
              </ul>
            </li>
            <!-- 手機殼 -->
            <li class="nav-item">
              <a
                class="nav-link d-flex justify-content-between"
                data-bs-toggle="collapse"
                href="#collapseMobileCase"
                role="button"
                aria-expanded="false"
                aria-controls="collapseMobileCase"
              >
                <span>手機殼</span>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-chevron-down"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
                    />
                  </svg> </span
              ></a>
              <ul class="navbar-nav collapse px-3" id="collapseMobileCase">
                <li class="nav-item">
                  <a class="nav-link" href="#">Iphone 14</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Iphone 15</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Iphone 16</a>
                </li>
              </ul>
            </li>
            <!-- 充電頭 -->
            <li class="nav-item">
              <a
                class="nav-link d-flex justify-content-between"
                data-bs-toggle="collapse"
                href="#collapseCharg"
                role="button"
                aria-expanded="false"
                aria-controls="collapseCharg"
              >
                <span>充電頭</span>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-chevron-down"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
                    />
                  </svg> </span
              ></a>
              <ul class="navbar-nav collapse px-3" id="collapseCharg">
                <li class="nav-item">
                  <a class="nav-link" href="#">65W</a>
                </li>
              </ul>
            </li>
            <!-- 螢幕保護貼 -->
            <li class="nav-item">
              <a
                class="nav-link d-flex justify-content-between"
                data-bs-toggle="collapse"
                href="#collapseScreenProtector"
                role="button"
                aria-expanded="false"
                aria-controls="collapseScreenProtector"
              >
                <span>螢幕保護貼</span>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-chevron-down"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
                    />
                  </svg> </span
              ></a>
              <ul class="navbar-nav collapse px-3" id="collapseScreenProtector">
                <li class="nav-item">
                  <a class="nav-link" href="#">Iphone 14</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Iphone 15</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Iphone 16</a>
                </li>
              </ul>
            </li>
            <!-- 行動電源 -->
            <li class="nav-item">
              <a
                class="nav-link d-flex justify-content-between"
                data-bs-toggle="collapse"
                href="#collapsePowerBank"
                role="button"
                aria-expanded="false"
                aria-controls="collapsePowerBank"
              >
                <span>行動電源</span>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-chevron-down"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
                    />
                  </svg> </span
              ></a>
              <ul class="navbar-nav collapse px-3" id="collapsePowerBank">
                <li class="nav-item">
                  <a class="nav-link" href="#">10000mAh</a>
                </li>
              </ul>
            </li>
            <!-- 藍芽耳機 -->
            <li class="nav-item">
              <a
                class="nav-link d-flex justify-content-between"
                data-bs-toggle="collapse"
                href="#collapseBluetoothHeadset"
                role="button"
                aria-expanded="false"
                aria-controls="collapseBluetoothHeadset"
              >
                <span>藍芽耳機</span>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-chevron-down"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
                    />
                  </svg> </span
              ></a>
              <ul
                class="navbar-nav collapse px-3"
                id="collapseBluetoothHeadset"
              >
                <li class="nav-item">
                  <a class="nav-link" href="#">入耳式</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">耳罩式</a>
                </li>
              </ul>
            </li>
            <!-- 觸控筆 -->
            <li class="nav-item">
              <a
                class="nav-link d-flex justify-content-between"
                data-bs-toggle="collapse"
                role="button"
                aria-expanded="false"
              >
                <span>觸控筆</span></a
              >
            </li>
          </ul>
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
