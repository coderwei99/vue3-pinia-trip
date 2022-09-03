<template>
  <div id="tabbar">
    <van-tabbar v-model="currIndex" active-color="#ee0a24">
      <template v-for="(item, index) in tabbarData" :key="item.id">
        <van-tabbar-item :to="item.path">
          <span>{{ item.title }}</span>
          <template #icon>
            <img
              :src="
                currIndex == index
                  ? reload_vite_iamgeUrl(item.activeImageUrl)
                  : reload_vite_iamgeUrl(item.imageUrl)
              "
            />
          </template>
        </van-tabbar-item>
      </template>
    </van-tabbar>
  </div>
</template>

<script lang="ts" setup>
import tabbarData from "./tabbarData.ts";
import { reload_vite_iamgeUrl } from "@/utils";
import { ref } from "vue";

const currIndex = ref(0);
</script>

<style lang="less" scoped>
#tabbar {
  height: 50px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-around;

  img {
    width: 26px;
  }
  .active {
    color: red;
  }
}
</style>
