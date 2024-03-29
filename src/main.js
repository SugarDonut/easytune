import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";

import Home from "@/pages/Home";
import Tuning from "@/pages/Tuning.vue";
import History from "@/pages/History.vue";
import Pay from "@/pages/Pay";
import Pattern from "@/pages/Pattern";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import UserAgreement from "@/pages/UserAgreement";
import Settings from "@/pages/Settings";

import EtModalBox from "@/components/ModalBox";
import EtHeader from "@/components/Header";
import EtFooter from "@/components/Footer";
import Btn from "@/components/Btn";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: Home },
    { path: "/tuning", component: Tuning },
    { path: "/history", component: History },
    { path: "/payment", component: Pay },
    { path: "/pattern", component: Pattern },
    { path: "/privacy-policy", component: PrivacyPolicy },
    { path: "/user-agreement", component: UserAgreement },
  ],
});

const app = createApp(App);

app.use(router);

app.component("et-modal-box", EtModalBox);
app.component("et-header", EtHeader);
app.component("et-footer", EtFooter);
app.component("et-settings", Settings);
app.component("et-btn", Btn);

app.mount("#app");
