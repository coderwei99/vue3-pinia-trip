<template>
  <div id="home">
    <div class="banner">
      <img src="@/assets/iamge/banner.png" />
    </div>
    <div class="city_box">
      <div class="city">广州</div>
      <div class="location">
        <span class="text">我的位置</span>
        <img src="@/assets/iamge/location_city.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="less" scoped>
//
#home {
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
}
</style>
