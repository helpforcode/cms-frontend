// import Vue from 'vue'
import ls from '@/storage'

import router from "@/router";
import {ACCESS_TOKEN} from '@/store/constants'

router.beforeEach((to, from, next) => {
    let token = ls.get(ACCESS_TOKEN)
    if (!token) {
        // todo: whitelist urls
        if (to.path === '/login') {
            // no token, login --> login
            next()
        } else {
            // no token, others --> login
            // next({name: 'Login'})
            next({ name: 'Login', query: { redirect: to.fullPath } })
        }
    } else {
        console.log("Got token from storage:", token)
        console.log("to:", to)
        console.log("from:", from)

        if (to.path === '/login') {
            // has token, login-->home
            next({name: 'Home'})
        } else {
            // has token, others-->others
            next()
        }
    }
})
