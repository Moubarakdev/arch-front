import { createApp } from "vue";

import App from "./App.vue";

import Auth from "./Auth.js";
import axios from "axios";
import VueAxios from "vue-axios";

import VueSmoothScroll from "vue3-smooth-scroll";
import Vuex from "./store";
import router from "./router";

import Button from "./components/Button.vue";
import LinkButton from "./components/LinkButton.vue";

import toast from "@k90mirzaei/vue-toast";
import "@k90mirzaei/vue-toast/dist/index.css";

import "./assets/style.css";

let app = createApp(App);

// Utilisez config.globalProperties pour rendre Auth accessible dans les composants
app.config.globalProperties.$auth = Auth;

app.use(Vuex);

app.use(router);
app.use(VueAxios, axios);

app.use(VueSmoothScroll);
app.use(toast);

app.component("Button", Button);
app.component("LinkButton", LinkButton);

app.mount("#app");
