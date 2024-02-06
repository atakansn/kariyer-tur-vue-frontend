/*
import './assets/css/icons.css'
import './assets/css/tailwind.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

*/


import { createSSRApp } from "vue";
import App from './App.vue'
import {createRouter} from "@/router/index.js";
import {loadLayoutMiddleware} from "@/router/middleware/loadLayoutMiddleware.js";

export function createApp() {
    const app = createSSRApp(App)
    const router = createRouter()
    router.beforeEach(loadLayoutMiddleware)

    app.use(router)
    return {
        app,
        router
    }
}