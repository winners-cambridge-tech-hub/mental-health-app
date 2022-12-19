import MyHome from "./components/MyHome.vue"
import MyHealth from "./components/MyHealth.vue"

import {createRouter, createWebHistory} from "vue-router"

const routes = [
    {
        name: "MyHome",
        component: MyHome,
        path: "/"
    },

    {
        name: "MyHealth",
        component: MyHealth,
        path: "/health"
    },
   


];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
