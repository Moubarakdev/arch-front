// src/router.js
import { createRouter, createWebHistory } from "vue-router";

// Importez vos composants pour chaque vue
import Main from "./layouts/Main.vue";
import Login from "./pages/Login.vue";

const routes = [
  { path: "/", name: "Main", component: Main },
  { path: "/login", name: "Login", component: Login },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
