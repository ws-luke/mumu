// stores/products.js
import { defineStore } from 'pinia';
import { useApiStore } from './api';
import { API_ROUTES } from './apiRoutes';
export const useProductsStore = defineStore('products', {
  state: () => ({
    productsData: [], // 所有商品資料
    categorizedProducts: {}, // 按分類整理的商品
  }),
  actions: {
    async fetchProducts() {
      const apiStore = useApiStore();
      try {
        const data = await apiStore.fetchData(API_ROUTES.PRODUCTS);
        this.productsData = Object.values(data.data.products);        
        // 按分類整理商品
        this.productsData.forEach(product => {
          const category = product.category;
          if (!this.categorizedProducts[category]) {
            this.categorizedProducts[category] = [];
          }
          this.categorizedProducts[category].push(product);
        });
      } catch (error) {
        console.error('取得商品資料失敗:', error);
      }
    },
  },
});
