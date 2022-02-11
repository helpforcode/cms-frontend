import {login} from "@/api/login";
import ls from '@/storage'
import {ACCESS_TOKEN} from '@/store/constants'

export default {
    state: {
        token: ''
    },
    mutations: {
        SET_TOKEN: (state, token) => {
            console.log('setToken to state:', token)
            state.token = token
        }
    },
    actions: {
        loginAction({commit}, userInfo) {
            return new Promise((resolve, reject) => {
                login(userInfo).then(response => {
                    if (response.status === 200 && response.data.code === 200) {
                        const token = response.data.data
                        // ls.set(ACCESS_TOKEN, token, 7 * 24 * 60 * 60 * 1000)
                        ls.set(ACCESS_TOKEN, token, 2 * 60 * 1000) // 2min

                        commit('SET_TOKEN', token)
                        resolve(response)
                    } else {
                        reject(response)
                    }
                }).catch(error => {
                    console.log(error.response.data)
                    reject(error)
                })
            })
        },
        logoutAction({commit}) {
            return new Promise((resolve => {
                ls.remove(ACCESS_TOKEN)
                commit('SET_TOKEN', '')
                resolve()
            }))
        }
    },
    getters: {
        userToken: () => {
            return ls.get(ACCESS_TOKEN)
        }
    }
}

