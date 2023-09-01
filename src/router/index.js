import Vue from "vue";
import VueRouter from "vue-router";
import App from "../App.vue";
import Home from "../Home.vue";
Vue.use(VueRouter);

export const rout = new VueRouter({
  mode: "history",
  router: [
    { path: "/todo", component: App },
    { path: "/", component: Home },
  ],
});
