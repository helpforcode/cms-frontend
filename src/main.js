import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import http from './http/http'
// axios interceptor
import './http/axios'

import '@/permission'

let app = createApp(App).use(store)
    .use(router)
;
// use axios
app.config.globalProperties.$http = http;
app.mount('#app')
