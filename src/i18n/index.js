import Vue from 'vue'
import VueI18n from 'vue-i18n'
Vue.use(VueI18n)

// this.$i18n.locale // 通过切换locale的值来实现语言切换

import zh_CN from './languages/zh-cn'
import en_US from './languages/en-us'

const lang = {
    'zh-CN': zh_CN,
    'en-US': en_US
}

// 通过选项创建 VueI18n 实例
const i18n = new VueI18n({
    locale: 'zh-CN', // 设置地区
    messages: lang
})

export { i18n, lang }
