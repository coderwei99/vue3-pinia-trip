<script setup lang="ts">
import tabBar from "@/components/tabbar/index.vue";
</script>

<template>
  <div class="app">
    <router-view />
    <tabBar />
  </div>
</template>

<style lang="less" scoped>
.app {
  height: 100%;
  overflow: auto;
}
</style>
