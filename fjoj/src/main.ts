import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ArcoVue from "@arco-design/web-vue";
import "@arco-design/web-vue/dist/arco.css";
import "@/plugins/axios";
import "@/access";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

createApp(App)
  .use(ElementPlus)
  .use(ArcoVue)
  .use(store)
  .use(router)

  .mount("#app");
