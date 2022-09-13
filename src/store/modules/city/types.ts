export interface allCititesTypes {
  title?: string;
  hotCities?: any;
  cities?: any;
}

export interface selectCityTypes {
  cityId: string;
  cityName: string;
  gangAoTai: boolean;
  hot: boolean;
  latitude: string;
  longitude: string;
  pinYin: string;
}

export interface cityStoreTypes {
  allCitites: allCititesTypes;
  selectCity: any;
}
