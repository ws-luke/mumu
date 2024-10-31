<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container">
        <a class="navbar-brand" href="#">MUMU</a>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link to="/products" class="nav-link">線材類</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/products" class="nav-link">掛繩類</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/products" class="nav-link">手機殼</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/products" class="nav-link">充電頭</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/products" class="nav-link"
                >螢幕保護貼</router-link
              >
            </li>
            <li class="nav-item">
              <router-link to="/products" class="nav-link"
                >行動電源</router-link
              >
            </li>
            <li class="nav-item">
              <router-link to="/products" class="nav-link"
                >藍芽耳機</router-link
              >
            </li>
            <li class="nav-item">
              <router-link to="/products" class="nav-link">觸控筆</router-link>
            </li>
          </ul>
          <div class="d-flex">
            <!-- 個人 -->
            <router-link to="/login" class="nav-link me-2">
              <svg
                class="header__individual-icon"
                height="50px"
                viewBox="0 0 50 50"
              >
                <g
                  id="Icon_Account"
                  stroke="none"
                  stroke-width="1"
                  fill="none"
                  fill-rule="evenodd"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <g id="user" stroke="#292929" stroke-width="1.6">
                    <path
                      d="M34,34 L34,32 C34,29.790861 31.9852814,28 29.5,28 L20.5,28 C18.0147186,28 16,29.790861 16,32 L16,34"
                      id="Shape"
                    ></path>
                    <circle id="Oval" cx="25" cy="20" r="4"></circle>
                  </g>
                </g>
              </svg>
            </router-link>
            <!-- 購物車 -->
            <router-link to="cart" class="nav-link">
              <svg
                class="header__individual-icon"
                height="50px"
                viewBox="0 0 50 50"
              >
                <g
                  id="Icon_Cart"
                  stroke="none"
                  stroke-width="1"
                  fill="none"
                  fill-rule="evenodd"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <g id="shopping-cart" stroke="#292929" stroke-width="1.55">
                    <circle
                      id="Oval"
                      cx="19.3636364"
                      cy="33.1818182"
                      r="1.81818182"
                    ></circle>
                    <circle
                      id="Oval"
                      cx="30.2727273"
                      cy="33.1818182"
                      r="1.81818182"
                    ></circle>
                    <path
                      d="M17.2454545,19.5454545 L33,19.5454545 L31.4727273,27.1727273 C31.3011482,28.0365741 30.5351055,28.6532385 29.6545455,28.6363636 L20.0454545,28.6363636 C19.1268013,28.6441553 18.3466689,27.9654401 18.2272727,27.0545455 L16.8454545,16.5818182 C16.7269293,15.6778144 15.9571942,15.0013805 15.0454545,15 L13,15"
                      id="Shape"
                    ></path>
                  </g>
                </g>
              </svg>
            </router-link>
          </div>
        </div>
        <button
          class="btn d-flex d-lg-none"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasRight"
          aria-controls="offcanvasRight"
        >
          <svg width="50px" height="50px" viewBox="0 0 50 50">
            <g
              id="Icon_Hamburger"
              stroke="none"
              stroke-width="1"
              fill="none"
              fill-rule="evenodd"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <g
                id="align-justify"
                transform="translate(16.000000, 17.000000)"
                stroke="#292929"
                stroke-width="1.6"
              >
                <line x1="18" y1="10" x2="0" y2="10" id="Shape"></line>
                <line x1="18" y1="15" x2="0" y2="15" id="Shape"></line>
                <line x1="18" y1="0" x2="0" y2="0" id="Shape"></line>
                <line x1="18" y1="5" x2="0" y2="5" id="Shape"></line>
              </g>
            </g>
          </svg>
        </button>
      </div>
    </nav>
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
      <h2 class="fw-bold text-center mb-5">線材類</h2>
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
    <footer>
      <div class="container">© 2024 MUMU</div>
    </footer>
    <!-- 手機板選單 -->
    <div
      class="offcanvas offcanvas-end"
      tabindex="-1"
      id="offcanvasRight"
      aria-labelledby="offcanvasRightLabel"
    >
      <div class="offcanvas-header">
        <h5 id="offcanvasRightLabel">MENU</h5>
        <button
          type="button"
          class="btn-close text-reset"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>
      <div class="offcanvas-body">
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
            <ul class="navbar-nav collapse px-3" id="collapseBluetoothHeadset">
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
      </div>
    </div>
  </div>
</template>
<style>
footer {
  background-color: #292929;
  color: #fff;
  padding: 25px 0;
}
</style>
