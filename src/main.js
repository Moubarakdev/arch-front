import { createApp } from "vue";
import "./assets/style.css";
import App from "./App.vue";
import VueSmoothScroll from "vue3-smooth-scroll";
import router from "./router";

import Button from "./components/Button.vue";
import LinkButton from "./components/LinkButton.vue";

import i18n from "./i18n";

let app = createApp(App);
app.use(router);
app.use(VueSmoothScroll);
app.use(i18n());

app.component("Button", Button);
app.component("LinkButton", LinkButton);

app.mount("#app");
