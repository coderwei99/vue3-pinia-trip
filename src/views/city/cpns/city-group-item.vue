<template>
  <div class="city-group">
    <h2>{{ props.groupData.group }}</h2>
    <template v-for="_item in props.groupData.cities">
      <div>
        {{ _item.cityName }}
      </div>
    </template>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  groupData: any;
}>();
</script>

<style lang="less" scoped>
//
</style>
