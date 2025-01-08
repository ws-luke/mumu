<script setup>
  import { ref, onMounted, onUnmounted } from 'vue';
  
  const isVisible = ref(false);
  
  const toggleVisibility = () => {
    isVisible.value = window.scrollY > 200; // 當滾動超過 200px 顯示按鈕
  };
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // 平滑滾動效果
    });
  };
  
  onMounted(() => {
    window.addEventListener('scroll', toggleVisibility); // 監聽滾動事件
  });
  
  onUnmounted(() => {
    window.removeEventListener('scroll', toggleVisibility); // 清除事件監聽器
  });
</script>

<template>
    <div
      v-show="isVisible"
      class="back-to-top"
      @click="scrollToTop"
    >
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-chevron-up" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708z"/>
    </svg>
    </div>
</template>
  

  
<style scoped>
  .back-to-top {
    position: fixed;
    bottom: 20px;
    right: 20px;
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    padding: 12px 12px;
    border-radius: 4px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: opacity 0.3s ease;
  }
  
  .back-to-top:hover {
    background-color: #1c7637;
  }
  
  .back-to-top[hidden] {
    display: none;
  }
  </style>
  