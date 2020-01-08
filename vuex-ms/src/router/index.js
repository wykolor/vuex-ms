import Vue from "vue";
import Router from "vue-router";

// 页面模块
import login from "@/pages/login";
import index from "@/pages/index";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "login",
      component: login
    },
    {
      path: "/index",
      name: index,
      component: index
    }
  ]
});
