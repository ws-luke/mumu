<script setup>
import { RouterView } from 'vue-router'
import HeaderView from '@/components/frontend/HeaderView.vue'
import FooterView from '@/components/frontend/FooterView.vue'
import PhoneMenuView from '@/components/frontend/PhoneMenuView.vue'
import CartOffcanvasView from '@/components/frontend/CartOffcanvasView.vue'
import BackToTop from '@/components/BackToTop.vue';
</script>

<template>
  <HeaderView></HeaderView>
  <RouterView />
  <FooterView></FooterView>
  <!-- 手機板選單 -->
  <PhoneMenuView></PhoneMenuView>
  <!-- 購物車選單 -->
  <CartOffcanvasView></CartOffcanvasView>
  <BackToTop />
</template>
