<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import Loading from '@/components/LoadingComponent.vue';
import AdminLayout from '@/layouts/AdminLayout.vue'
import FrontendLayout from '@/layouts/FrontendLayout.vue'
// 使用 Vue Router 提供的 useRoute 取得當前路由
const route = useRoute()

// 根據路由判斷當前是否為後台路由
const isAdminRoute = computed(() => route.path.startsWith('/admin'))

// 動態設定要使用的佈局組件
const layoutComponent = computed(() =>
  isAdminRoute.value ? AdminLayout : FrontendLayout,
)
</script>

<template>
  <Loading />
  <component :is="layoutComponent" />
</template>
