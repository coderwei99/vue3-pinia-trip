<template>
  <div class="city top_page">
    <van-search
      v-model="searchValue"
      placeholder="请输入搜索关键词"
      show-action
      @search="onSearch"
      @cancel="onCancel"
    />

    <van-tabs v-model:active="activeIndex">
      <template v-for="(item, key, index) in allCitites">
        <van-tab :title="item.title" :name="key"> </van-tab>
      </template>
    </van-tabs>
    <div class="content">
      <template v-for="item in currentData?.cities">
        <CityGroup :group-data="item" />
      </template>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref } from "vue";
import { useRouter } from "vue-router";

import useCityStore from "@/store/modules/city/citys";
import { storeToRefs } from "pinia";

// 组件
import CityGroup from "./cpns/city-group-item.vue";

const router = useRouter();

//搜索框
let searchValue = ref("");
const onSearch = () => {
  console.log("onSearch");
};
const onCancel = () => {
  console.log("onCancel");
  router.back();
};

// tab切换
const activeIndex = ref<string>("");

const cityStore = useCityStore();
cityStore.fetchAllCities();
const { allCitites } = storeToRefs(cityStore);

const currentData = computed(() => allCitites.value[activeIndex.value]);

// 获取城市数据
</script>

<style lang="less" scoped>
.city {
  .content {
    height: calc(100vh - 9px);
    overflow-y: auto;
  }
}
</style>
