import { getCitys } from "@/services";
import { defineStore } from "pinia";

import { cityStoreTypes } from "./types";

const useCityStore = defineStore("city", {
  state: (): cityStoreTypes => ({
    allCitites: {},
    selectCity: {
      cityId: 48,
      cityName: "北京",
      gangAoTai: false,
      hot: false,
      latitude: "39.9108",
      longitude: "116.414",
      pinYin: "beijing",
    },
  }),

  actions: {
    async fetchAllCities() {
      const cityData = await getCitys();
      this.allCitites = cityData.data;
    },
  },
});

export default useCityStore;
