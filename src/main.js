import { createApp } from "vue"

import "normalize.css"
import "./assets/css/base.less"

import App from "./App.vue"
import router from "./router"

createApp(App).use(router).mount("#app")
