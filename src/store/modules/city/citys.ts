import { getCitys } from "@/services";
import { defineStore } from "pinia";

import { cityStoreTypes } from "./types";

const useCityStore = defineStore("city", {
  state: (): cityStoreTypes => ({
    allCitites: {},
  }),

  actions: {
    async fetchAllCities() {
      const cityData = await getCitys();
      this.allCitites = cityData.data;
    },
  },
});

export default useCityStore;
