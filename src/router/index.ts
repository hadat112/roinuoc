import { createRouter, createWebHistory } from "vue-router";
import { MainLayout } from "../shared";

const routes = [
  {
    path: "",
    name: "layout",
    meta: { layout: "default" },
    component: MainLayout,
    children: [
      {
        path: "/:id?",
        name: "chat",
        component: () => import("@/pages/chat.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  next();
});

export default router;
