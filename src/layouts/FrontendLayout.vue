<script setup>
import { RouterView } from 'vue-router'
import HeaderView from '@/components/HeaderView.vue'
import FooterView from '@/components/FooterView.vue'
import PhoneMenuView from '@/components/PhoneMenuView.vue'
import CartOffcanvasView from '@/components/CartOffcanvasView.vue'
</script>

<template>
    <HeaderView></HeaderView>
    <RouterView />
    <FooterView></FooterView>
    <!-- 手機板選單 -->
    <PhoneMenuView></PhoneMenuView>
    <!-- 購物車選單 -->
    <CartOffcanvasView></CartOffcanvasView>
</template>