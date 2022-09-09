<template>
  <div class="city-group">
    <van-index-bar :index-list="indexList">
      <van-index-anchor index="热门" />
      <div class="hotCity">
        <template v-for="item in hotCity" :key="item.cityId">
          <div class="city_item">
            {{ item.cityName }}
          </div>
        </template>
      </div>
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
import { computed, ref } from "vue";

const props = defineProps<{
  groupData: any;
}>();

let indexList: any = [];
indexList = computed((): string[] => {
  const temp = props.groupData.cities.map((item: any) => item.group);
  temp.unshift("#");
  return temp;
});

// 热门城市数据处理

const hotCity = ref(props.groupData.hotCities);
console.log(hotCity);
</script>

<style lang="less" scoped>
//
.city-group {
  height: 100vh;
  .hotCity {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 10px;
    padding-right: 25px;
    .city_item {
      width: 70px;
      height: 28px;
      border-radius: 14px;
      font-size: 12px;
      color: #000;
      text-align: center;
      line-height: 28px;
      background-color: #fff4ec;
      margin: 6px 0;
    }
  }
}
</style>
