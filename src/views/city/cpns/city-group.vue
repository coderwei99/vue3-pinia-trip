<template>
  <div class="city-group">
    <van-index-bar>
      <template v-for="item in props.groupData?.cities" :key="item.group">
        <van-index-anchor :index="item.group" />
        <template v-for="_item in item.cities" :key="_item.cityName">
          <van-cell :title="_item.cityName" />
        </template>
      </template>
    </van-index-bar>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  groupData: any;
}>();
</script>

<style lang="less" scoped>
//
.city-group {
  height: 100vh;
}
</style>
