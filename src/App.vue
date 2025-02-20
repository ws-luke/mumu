<script setup>
  import { useWholesaleStore } from '@/stores/wholesale';
  import { watch } from 'vue';
  import { useRoute } from 'vue-router';
  const wholesaleStore = useWholesaleStore();
  const route = useRoute();
  import Loading from '@/components/LoadingComponent.vue';
  import FrontendLayout from '@/layouts/FrontendLayout.vue'
  // 監聽網址變化，自動更新批發狀態
  watch(() => route.query.wholesale, () => {
    wholesaleStore.updateWholesaleStatus();
  });
</script>
<template>
  <Loading />
  <FrontendLayout></FrontendLayout>
</template>
