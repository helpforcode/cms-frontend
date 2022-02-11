import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import http from './http/http'
// axios interceptor
import './http/axios'

import '@/permission'

import NutUI from '@nutui/nutui'
import '@nutui/nutui/dist/style.css'

let app = createApp(App)
    .use(store)
    .use(router)
    .use(NutUI)
;
// use axios
app.config.globalProperties.$http = http;
// error handle
app.config.errorHandler = (err, instance, info) => {
    console.log(err)
    console.log(instance)
    console.log(info)
}
app.mount('#app')
