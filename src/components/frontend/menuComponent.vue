<script setup>
    import { ref, onMounted } from 'vue';
    import axios from 'axios';

    const menuData = ref([]);
    const api = `${import.meta.env.VITE_API_URL}categories/all`;

    onMounted (async () => {
        try {
            const { data: categories } = await axios.get(api);
            menuData.value = Object.values(categories.data);
            console.log(menuData.value);
        } catch (error) {
            console.error('API 請求失敗:', error);
        }
    })
</script>

<template>
    <li class="nav-item">
        <router-link :to="{ name: 'shop-products', query: { category: '' } }" class="nav-link">全部商品</router-link>
    </li>
    <li v-for="item in menuData" :key="item.id" class="nav-item">
        <router-link :to="`/shop/shop-products/${item.id}`" class="nav-link"
        >{{ item.name }}</router-link
        >
    </li>
</template>