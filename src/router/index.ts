import { createRouter, createWebHistory, RouteRecordRaw, RouteRecordRedirectOption } from "vue-router";
import { MainLayout } from "../shared";

const routes= [
  {
    path: "",
    name: "layout",
    component: MainLayout,
    children: [
      {
        path: "",
        name: "home",
        component: () => import("@/pages/home.vue"),
      },
      {
        path: "/gioithieu",
        children: [
          {
            path: "",
            name: "overview",
            component: () => import("@/pages/overview.vue"),
          },
          {
            path: "lichsu",
            name: "history",
            component: () => import("@/pages/history.vue"),
          },
          {
            path: "quytrinh",
            name: "steps",
            component: () => import("@/pages/steps.vue"),
          },
          {
            path: "giatri",
            name: "value",
            component: () => import("@/pages/value.vue"),
          }
        ]
      },
      {
        path: '/sukien',
        name: "event",
        component: () => import("@/pages/event.vue"),
      },
      {
        path: '/vodien',
        name: "vo-dien",
        component: () => import("@/pages/plays.vue"),
      },
      {
        path: '/lichchieu',
        name: "lich-chieu",
        component: () => import("@/pages/schedule.vue"),
      }
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
