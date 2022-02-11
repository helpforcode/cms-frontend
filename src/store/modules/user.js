import {login} from "@/api/login";

const user = {
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
        Login({commit}, userInfo) {
            return new Promise((resolve, reject) => {
                login(userInfo).then(response => {

                    console.log(response)
                    commit('SET_TOKEN', 'whatever')

                    resolve(response)
                }).catch(error => {
                    reject(error)
                })
            })
        }
    }
}

export default user
