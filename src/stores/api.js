// stores/api.js
import { defineStore } from 'pinia';
import axios from 'axios';
import { useLoadingStore } from './loading';

export const useApiStore = defineStore('api', {
  actions: {
    async fetchData(url) {
      const loadingStore = useLoadingStore();

      loadingStore.showLoading();
      try {
        const { data } = await axios.get(url);
        return data; // 返回結果
      } catch (error) {
        console.error('API 請求失敗:', error);
        throw error; // 讓調用者處理錯誤
      } finally {
        loadingStore.hideLoading();
      }
    },
  },
});
