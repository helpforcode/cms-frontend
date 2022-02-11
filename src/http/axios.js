import axios from 'axios';
import {Toast} from '@nutui/nutui'
import cl from '@/storage';
import {ACCESS_TOKEN} from '@/store/constants'

// Full config:  https://github.com/axios/axios#request-config
axios.defaults.baseURL = process.env.VUE_APP_API_BASE_URL || '';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

// let config = {
    // baseURL: process.env.baseURL || process.env.apiUrl || ""
    // timeout: 60 * 1000, // Timeout
    // withCredentials: true, // Check cross-site Access-Control
// };
// const _axios = axios.create(config);

// 请求拦截
axios.interceptors.request.use(config => {
    config.headers['token'] = cl.get(ACCESS_TOKEN)
    // Do something before request is sent
    // 1. 这个位置就请求前最后的配置
    // 2. 当然你也可以在这个位置 加入你的后端需要的用户授权信息
    return config
}, error => {
    // Do something with request error
    return Promise.reject(error)
})

// 响应拦截
axios.interceptors.response.use(response => {
    // Do something with response data
    // 请求成功
    // 1. 根据自己项目需求定制自己的拦截
    // 2. 然后返回数据
    return response;
}, error => {
    // Do something with response error
    // 请求失败
    if (error && error.response) {
        switch (error.response.status) {
            case 400:
                // 对400错误您的处理\
                break
            case 401:
                // 对 401 错误进行处理
                break
            default:
                Toast.fail(error.response.data.message)
                // 如果以上都不是的处理
                return Promise.reject(error);
        }
    }

})
