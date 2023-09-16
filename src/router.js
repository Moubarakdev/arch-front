import { createRouter, createWebHistory } from "vue-router";

import Auth from "./Auth.js";

// Importez vos composants pour chaque vue
import Main from "./layouts/Main.vue";
import Login from "./pages/Login.vue";
import Logout from "./pages/Logout.vue";
import Register from "./pages/Register.vue";
import Admin from "./Admin.vue";
import Dashboard from "../src/pages/admin/Dashboard.vue";

import UserList from "./pages/admin/users/UserList.vue";
import CreateUser from "./pages/admin/users/CreateUser.vue";

import FeatureList from "./pages/admin/features/FeatureList.vue";
import CreateFeature from "./pages/admin/features/CreateFeature.vue";
import EditFeature from "./pages/admin/features/EditFeature.vue";

import CreateFaq from "./pages/admin/faqs/CreateFaq.vue";
import EditFaq from "./pages/admin/faqs/EditFaq.vue";
import FaqList from "./pages/admin/faqs/FaqList.vue";

import Hero from "./pages/admin/hero/Hero.vue";
import EditHero from "./pages/admin/hero/EditHero.vue";

const routes = [
  { path: "/", name: "Main", component: Main },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/logout",
    name: "Logout",
    component: Logout,
    meta: {
      requiresAuth: true,
    },
  },
  // { path: "/register", name: "Register", component: Register },
  {
    path: "/admin",
    redirect: "/admin/dashboard",
    name: "Admin",
    component: Admin,
    meta: {
      requiresAuth: true,
    },
    children: [
      {
        path: "/admin/dashboard",
        name: "Dashboard",
        component: Dashboard,
      },
      { path: "/admin/users", name: "Users", component: UserList },
      {
        name: "createUser",
        path: "/admin/user/create",
        component: CreateUser,
      },
      {
        path: "/admin/features",
        name: "Features",
        component: FeatureList,
      },
      {
        path: "/admin/feature/create",
        name: "createFeature",
        component: CreateFeature,
      },
      {
        name: "editFeature",
        path: "/admin/feature/edit/:id",
        component: EditFeature,
      },
      { path: "/admin/faqs", name: "Faqs", component: FaqList },
      {
        path: "/admin/faq/create",
        name: "createFaq",
        component: CreateFaq,
      },
      {
        name: "editFaq",
        path: "/admin/faq/edit/:id",
        component: EditFaq,
      },
      {
        name: "editHero",
        path: "/admin/hero/edit/:id",
        component: EditHero,
      },
      {
        name: "Hero",
        path: "/admin/hero-section/:id",
        component: Hero,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (localStorage.getItem("accessToken")) {
      next();
    } else {
      router.push("/login");
    }
  } else if (to.matched.some((record) => record.meta.hideForAuth)) {
    if (localStorage.getItem("accessToken")) {
      next({ path: "/admin/dashboard" });
    } else {
      next();
    }
  } else {
    next();
  }
});
export default router;
