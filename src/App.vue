<script setup>
 // import NavigationComponent from './components/partials/NavigationComponent.vue';
  import HeaderComponent from './components/partials/HeaderComponent.vue';
  import MainComponent from './components/MainComponent.vue';
  import SidebarComponent from './components/partials/SidebarComponent.vue'
</script>

<template>
  
  <div class="main__container">
    
    <HeaderComponent headerTitle="Applications Manager" />

    <!-- 
      <NavigationComponent />
    -->

    <SidebarComponent />


    <MainComponent />
    
  </div>
  
</template>

<style scoped>

.main__container {
  position: relative;
  width: 100%;
}
</style>
