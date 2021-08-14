import Vue from 'vue'
import VueI18n from 'vue-i18n'
Vue.use(VueI18n)

// this.$i18n.locale // 通过切换locale的值来实现语言切换

import lang from './lang'
import languages from './languages'

// let default_locale = 'zh-CN'

// function ck(x) {
//     if (x && lang[x]) {
//         return true
//     }
//     return false
// }

// if (ck(_COOKIE('locale'))) {
//     // 缓存
//     default_locale = _COOKIE('locale')
// } else if (ck(window.navigator.language)) {
//     // 浏览器默认
//     default_locale = window.navigator.language
// } else if (ck(window.navigator.languages[0])) {
//     // 浏览器可接受
//     default_locale = window.navigator.languages[0]
// }

// 通过选项创建 VueI18n 实例
const i18n = new VueI18n({
    locale: 'zh-CN', // 设置地区
    messages: lang
})

export { i18n, lang, languages }
