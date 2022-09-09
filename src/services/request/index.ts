import axios from "axios";

import { BASEURL, TIMEOUT } from "./config";

class TripRequest {
  instance;
  constructor(baseURL: any, timeout = 10000) {
    this.instance = axios.create({
      baseURL,
      timeout,
    });
  }
  request(config: any) {
    return new Promise((resolve, reject) => {
      this.instance
        .request(config)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }
  get(config: any) {
    return this.request({ ...config, methods: "get" });
  }
  post(config: any) {
    return this.request({ ...config, methods: "post" });
  }
}

export default new TripRequest(BASEURL, TIMEOUT);
