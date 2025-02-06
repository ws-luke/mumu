import { defineStore } from 'pinia';
import { ref } from 'vue';
import { useRoute } from 'vue-router';

export const useWholesaleStore = defineStore('wholesale', () => {
  const route = useRoute();
  const isWholesale = ref(route.query.wholesale === 'true'); // 依據 URL 參數設定

  // 當 URL 變更時，更新批發狀態
  function updateWholesaleStatus() {
    isWholesale.value = route.query.wholesale === 'true';
  }

  return { isWholesale, updateWholesaleStatus };
});