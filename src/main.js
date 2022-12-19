import { createApp } from 'vue';
import App from './App.vue';
import Vue from 'vue'
import VueAxios from 'vue-axios'
import router from "./routers"

createApp(App).use(router,Vue,VueAxios).mount('#app')
