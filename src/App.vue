<script setup>
  import NavigationComponent from './components/partials/NavigationComponent.vue'
  import HeaderComponent from './components/partials/HeaderComponent.vue';
</script>

<template>
  
  <div class="main__container">
    
    <HeaderComponent />
    <NavigationComponent />
    
  </div>
  
</template>

<style scoped>

.main__container {
  position: relative;
  width: 100%;
}
</style>
