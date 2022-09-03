<script setup lang="ts">
import tabBar from "@/components/tabbar/index.vue";
import HomeNavBar from "@/components/navbar/home-nav-bar.vue";
</script>

<template>
  <div>
    <HomeNavBar></HomeNavBar>
    <router-view />
    <tabBar />
  </div>
</template>

<style lang="less" scoped></style>
