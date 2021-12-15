import { createRouter, createWebHashHistory } from "vue-router"

const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/intro",
    name: "Intro",
    component: () => import("@/views/Intro.vue"),
  },
  {
    path: "/home",
    name: "Home",
    component: () => import("@/views/Home.vue"),
  },
  {
    path: "/service",
    name: "Service",
    component: () => import("@/views/Service.vue"),
    children: [
      {
        path: "/category&1",
        component: () => import("@/components/service/child/ProductPage1.vue"),
      },
      {
        path: "/category&2",
        component: () => import("@/components/service/child/ProductPage2.vue"),
      },
      {
        path: "/category&3",
        component: () => import("@/components/service/child/ProductPage3.vue"),
      },
      {
        path: "/news&1",
        component: () => import("@/components/service/child/NewsPage1.vue"),
      },
      {
        path: "/news&2",
        component: () => import("@/components/service/child/NewsPage2.vue"),
      },
      {
        path: "/news&3",
        component: () => import("@/components/service/child/NewsPage3.vue"),
      },
      {
        path: "/news&4",
        component: () => import("@/components/service/child/NewsPage4.vue"),
      },
    ],
  },
  {
    path: "/contact",
    name: "Contact",
    component: () => import("@/views/Contact.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () => import("@/views/NotFound.vue"),
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  if (to.name === "Service") next({ path: "/news&1" })
  else next()
})

export default router
