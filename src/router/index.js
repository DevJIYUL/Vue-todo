import Vue from "vue";
import VueRouter from "vue-router";
import App from "../App.vue";
import Home from "";
Vue.use(VueRouter);

export default new VueRouter({
  mode: "history",
  router: [
    { path: "/todo", component: App },
    { path: "/home", component: Home },
  ],
});
