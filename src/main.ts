import { createApp } from "vue";
import App from "./App.vue";

// 导入自己的样式
import "normalize.css";
import "./assets/css/index.css";

// 导入路由
import router from "./router";

// 导入pinia
import pinia from "./store";

// 导入unocss
import "uno.css";

createApp(App).use(router).use(pinia).mount("#app");
