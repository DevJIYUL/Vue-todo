import Vue from "vue";
import VueRouter from "vue-router";
// import App from "../App.vue";
// import Home from "../Home.vue";
// import Hello from "../components/HelloWorld.vue";
Vue.use(VueRouter);
export const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      redirect: "/login",
    },
    {
      path: "/login",
      name: "LoginView",
      component: () => import("../components/home/Login.vue"),
    },
    {
      path: "/todo",
      name: "TodoView",
      component: () => import("../components/TodoView.vue"),
    },
  ],
});
