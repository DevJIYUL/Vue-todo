import Vue from "vue";
import App from "./App.vue";
import Meta from "vue-meta";
import axios from "axios";
// import TodoView from "./components/TodoView.vue";
import { router } from "./router/index.js";
import { library } from "@fortawesome/fontawesome-svg-core";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faUserSecret } from "@fortawesome/free-solid-svg-icons";
import vuetify from './plugins/vuetify'
library.add(faUserSecret);
Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.prototype.$http = axios;
Vue.config.productionTip = false;
Vue.use(
  Meta,
  {
    attribute: "data-vue-meta",
  },
  router
);

new Vue({
  router,
  vuetify,
  render: (h) => h(App)
}).$mount("#app");
