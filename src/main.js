import Vue from "vue";
import App from "./App.vue";
import Meta from "vue-meta";
import axios from "axios";
import { library } from "@fortawesome/fontawesome-svg-core";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import { faUserSecret } from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-free/js/all.js";
Vue.component("font-awesome-icon", FontAwesomeIcon);
library.add(faUserSecret);
Vue.prototype.$http = axios;
Vue.config.productionTip = false;
Vue.use(Meta, {
  attribute: "data-vue-meta",
});
new Vue({
  render: (h) => h(App),
}).$mount("#app");
