import Storage from "vue-ls";
import config from '@/defaultSettings'

// yarn add vue-ls
// https://www.jianshu.com/p/ab7f67878279

const {ls} = Storage.useStorage(config.storageOptions)

export default ls;
