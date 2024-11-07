<template>
  <nav class="leftMenu border-end d-none d-xl-flex">
    <div class="position-fixed navbarVertical">
      <div class="px-4 py-3 w-100">
        <a href="/admin/dashboard">MUMU</a>
      </div>
      <div class="flex-grow-1">
        <ul class="nav nav-pills flex-column w-100 px-4">
          <li class="nav-item">
            <router-link
              to="/admin/dashboard"
              class="nav-link active d-flex align-items-center gap-3 mb-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-house"
                viewBox="0 0 16 16"
              >
                <path
                  d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z"
                />
              </svg>
              <span>首頁</span>
            </router-link>
          </li>
          <h5 class="fs-6 fw-bold mt-4 listTitle">商品管理</h5>
          <li class="nav-item">
            <router-link
              to="/admin/categories"
              class="nav-link d-flex align-items-center gap-3 mb-2"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-list-ul"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m-3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2m0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2m0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
                /></svg
              ><span>類別</span></router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              to="/admin/products"
              class="nav-link d-flex align-items-center gap-3 mb-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-cart2"
                viewBox="0 0 16 16"
              >
                <path
                  d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l1.25 5h8.22l1.25-5zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0"
                /></svg
              ><span>產品</span></router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              to="/admin/orders"
              class="nav-link d-flex align-items-center gap-3 mb-2"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-bag"
                viewBox="0 0 16 16"
              >
                <path
                  d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z"
                /></svg
              ><span>訂單</span></router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              to="/admin/customers"
              class="nav-link d-flex align-items-center gap-3 mb-2"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-people"
                viewBox="0 0 16 16"
              >
                <path
                  d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1zm-7.978-1L7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002-.014.002zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4m3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0M6.936 9.28a6 6 0 0 0-1.23-.247A7 7 0 0 0 5 9c-4 0-5 3-5 4q0 1 1 1h4.216A2.24 2.24 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816M4.92 10A5.5 5.5 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0m3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4"
                /></svg
              ><span>會員</span></router-link
            >
          </li>
          <h5 class="fs-6 fw-bold mt-4 listTitle">後台管理者</h5>
          <li class="nav-item">
            <a class="nav-link d-flex align-items-center gap-3 mb-2"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-person"
                viewBox="0 0 16 16"
              >
                <path
                  d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"
                /></svg
              ><span>管理者</span></a
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<style scoped>
.leftMenu {
  width: 280px;
  flex-direction: column;
  height: 100vh;
}
.navbarVertical {
  width: 280px;
  height: 100%;
  top: 0;
  left: 0;
}
.listTitle {
  font-size: 12px;
  text-transform: capitalize;
  color: var(--bs-gray-500);
}
.nav-pills .nav-link {
  color: var(--bs-gray-600);
  font-weight: bold;
  margin: 0 0 4px;
  height: 48px;
  min-width: 0;
  transition: 0.3s;
  padding: 8px 12px 8px 16px;
}
.nav-pills .nav-link:hover {
  background-color: var(--bs-gray-100);
  color: var(--bs-gray-800);
}
.nav-pills .nav-link.active,
.nav-pills .show > .nav-link {
  color: var(--bs-white);
  background-color: var(--bs-nav-pills-link-active-bg);
}
</style>
