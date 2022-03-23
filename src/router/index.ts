import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import WatcherView from "../views/WatcherView.vue";
import EventsView from "../views/EventsView.vue";
import SlotView from "../views/SlotView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/watcher",
    name: "watcher",
    component: WatcherView,
  },
  {
    path: "/events",
    name: "events",
    component: EventsView,
  },
  {
    path: "/slot",
    name: "slot",
    component: SlotView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
