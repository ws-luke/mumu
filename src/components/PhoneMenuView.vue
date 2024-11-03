<template>
  <div
    class="offcanvas offcanvas-end"
    tabindex="-1"
    id="offcanvasRight"
    aria-labelledby="offcanvasRightLabel"
  >
    <div class="offcanvas-header">
      <h5 id="offcanvasRightLabel" class="m-0">MUMU</h5>
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
              <router-link to="/shop/shop-products" class="nav-link"
                >65W</router-link
              >
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
              <router-link to="/shop/shop-products" class="nav-link"
                >10000mAh</router-link
              >
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
        </li>
        <!-- 觸控筆 -->
        <li class="nav-item">
          <router-link
            to="/shop/shop-products"
            class="nav-link d-flex justify-content-between"
            >觸控筆</router-link
          >
        </li>
        <li class="nav-item">
          <router-link to="/users/account-orders" class="nav-link"
            >訂單</router-link
          >
        </li>
        <li class="nav-item">
          <router-link to="/users/account-settings" class="nav-link"
            >資訊</router-link
          >
        </li>
      </ul>
    </div>
  </div>
</template>
