<script setup>

  import { onMounted } from 'vue';
  import LogoComponent from '@/components/LogoComponent.vue';
  import { useCategoriesStore } from '@/stores/categories';
  import * as bootstrap from 'bootstrap';

  // 初始化分類 Store
  const categoriesStore = useCategoriesStore();
  const { fetchCategories, enabledMenuData } = categoriesStore;

  onMounted( async () => {
    await fetchCategories(); // 確保分類資料在頁面載入時獲取
  });


  //關閉手機版選單
  const closeOffcanvas = () => {
    const offcanvas = document.getElementById('offcanvasRight');
    const bsOffcanvas = bootstrap.Offcanvas.getInstance(offcanvas);
    if (bsOffcanvas) bsOffcanvas.hide();
  }
</script>
<template>
  <div
    class="offcanvas offcanvas-end"
    tabindex="-1"
    id="offcanvasRight"
    aria-labelledby="offcanvasRightLabel"
  >
    <div class="offcanvas-header">
      <h5 id="offcanvasRightLabel" class="m-0">
        <LogoComponent></LogoComponent>
      </h5>
      <button
        type="button"
        class="btn-close text-reset"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      ></button>
    </div>
    <div class="offcanvas-body">
      <div class="accordion" id="accordionPhoneMenuPage">
        <h2 class="accordion-header border-bottom">
          <button class="accordion-button px-0 collapsed allProduct">
            <router-link :to="{name: 'collaboration'}" class="nav-link" @click="closeOffcanvas">批發、採購合作</router-link>
          </button>
        </h2>
        <h2 class="accordion-header border-bottom">
          <button class="accordion-button px-0 collapsed allProduct">
            <router-link :to="{ name: 'shop-products', query: { category: '' } }" class="nav-link" @click="closeOffcanvas">所有商品</router-link>
          </button>
        </h2>
        <div v-for="item in enabledMenuData" :key="item.id" class="accordion-item border-0">
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
            data-bs-parent="#accordionPhoneMenuPage"
          >
            <div class="accordion-body p-0">
              <ul class="navbar-nav px-3">
                <li v-for="subcategory in Object.values(item.subcategories)"
                    :key="subcategory.id"
                    class="nav-item">
                  <router-link
                    :to="{
                      name: 'shop-products',
                      query: {
                        category: item.name,
                        subcategory: subcategory.name
                      }
                    }"
                    @click="closeOffcanvas"
                    class="nav-link">
                    {{ subcategory.name }}
                  </router-link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.allProduct::after{display: none;}
</style>
