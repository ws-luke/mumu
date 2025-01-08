import { defineStore } from 'pinia';
import { useApiStore } from './api';
import { API_ROUTES } from './apiRoutes';

export const useCategoriesStore = defineStore('categories', {
  state: () => ({
    menuData: [], 
  }),
  actions: {
    async fetchCategories() {
      const apiStore = useApiStore();
      try {
        const data = await apiStore.fetchData(API_ROUTES.CATEGORIES);
        const enabledMenuData = Object.values(data.data);
        this.menuData = enabledMenuData.filter((item) => item.is_enabled === 1);
      } catch (error) {
        console.error('取得分類資料失敗:', error);
      }
    },
  },
});
