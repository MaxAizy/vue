import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);

import Parser from "./components/Parser";
import SaveUrl from "./components/SaveUrl";

const routes = [
  {
    path: "/",
    component: SaveUrl,
    name: "home"
  },

  {
    path: "/app",
    component: Parser,
    name: "parser"
  }
];

const router = new Router({
  mode: "history",
  routes
});

export default router;
