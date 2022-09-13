<template>
  <div class="home">
    <HomeNavBar></HomeNavBar>
    <div class="banner">
      <img src="@/assets/iamge/banner.png" />
    </div>
    <div class="city_box">
      <div class="city" @click="toSerchPage">{{ selectCity.cityName }}</div>
      <div class="location">
        <span class="text">我的位置</span>
        <img src="@/assets/iamge/location_city.png" />
      </div>
    </div>

    <!-- 日历 -->
    <div class="date" @click="openCalendar">
      <div class="startDate">
        <div class="item">入住</div>
        <div class="item">{{ nowDate }}</div>
      </div>
      <div class="time">共{{ dayCount }}晚</div>
      <div class="startDate">
        <div class="item">入住</div>
        <div class="item">{{ endDate }}</div>
      </div>
    </div>

    <!-- 日历组件 -->
    <van-calendar
      v-model:show="showCalendar"
      color="#ff9854"
      type="range"
      :show-confirm="false"
      @confirm="onConfirm"
      :formatter="formatter"
    />
  </div>
</template>

<script lang="ts" setup>
import HomeNavBar from "./cpns/home-nav-bar.vue";
import { useRouter } from "vue-router";
import useCityStore from "@/store/modules/city/citys";
import { storeToRefs } from "pinia";
import { formatDate, getDiffDays, _nextDate } from "@/utils/format_date";
import { ref } from "vue";
const router = useRouter();

const toSerchPage = () => {
  router.push("/city");
};

// 切换城市
const cityStore = useCityStore();
const { selectCity } = storeToRefs(cityStore);

let nowDate = ref(formatDate(new Date()));
let endDate = ref(formatDate(_nextDate(new Date())));
console.log(nowDate);
console.log(endDate);

// 相差多少天
const dayCount = ref<number>(1);

// 日历
const openCalendar = () => {
  showCalendar.value = true;
};

const showCalendar = ref<boolean>(false);
const onConfirm = (value: any) => {
  showCalendar.value = false;
  console.log(value);
  nowDate.value = formatDate(value[0]);
  endDate.value = formatDate(value[1]);
  console.log(nowDate);

  // 计算相差的时间
  dayCount.value = getDiffDays(value[0], value[1]);
  console.log(dayCount);
};

// 设置日期选中文案
const formatter = (day: any) => {
  if (day.type === "start") {
    day.bottomInfo = "入住";
  } else if (day.type === "end") {
    day.bottomInfo = "离店";
  }
  return day;
};
</script>

<style lang="less" scoped>
//
.home {
  .banner {
    img {
      height: 250px;
      width: 100vw;
    }
  }
  .city_box {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    padding: 0 20px;
    .city {
      flex: 1;
    }

    .location {
      width: 90px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .text {
        position: relative;
        top: 2px;
      }
      img {
        width: 25px;
        height: 25px;
      }
    }
  }

  .date {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
}
</style>
