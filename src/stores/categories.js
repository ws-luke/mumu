import { defineStore } from 'pinia';
import { useApiStore } from './api';
import { API_ROUTES } from './apiRoutes';

export const useCategoriesStore = defineStore('categories', {
  state: () => ({
    menuData: [], // 原始分類資料
  }),
  getters: {
    // 過濾出啟用的分類資料
    enabledMenuData: (state) => {
      return state.menuData.filter((item) => item.is_enabled === 1);
    },
  },
  actions: {
    async fetchCategories() {
      const apiStore = useApiStore();
      try {
        const data = await apiStore.fetchData(API_ROUTES.CATEGORIES);
        this.menuData = Object.values(data.data); // 保存原始分類資料
      } catch (error) {
        console.error('取得分類資料失敗:', error);
      }
    },
  },
  persist: true, // 啟用持久化
});
