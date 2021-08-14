<template>
    <div class="app-main">
        <keep-alive v-if="!$route.meta.single">
            <transition name="fade-transform" mode="out-in">
                <router-view v-if="$route.meta.keepAlive" :key="key" v-wechat-title="pageTitle" />
            </transition>
        </keep-alive>
        <transition name="fade-transform" mode="out-in">
            <router-view v-if="!$route.meta.keepAlive" :key="key" v-wechat-title="pageTitle" />
        </transition>
    </div>
</template>

<script>
import { title } from '@/settings.js'

export default {
    name: 'AppMain',
    computed: {
        key() {
            return this.$route.path
        },
        pageTitle() {
            return this.$route.meta.title ? this.$t(this.$route.meta.title) : title
        }
    }
}
</script>

<style lang="less">
.app-main {
    margin-top: 10px;
    margin-bottom: 70px;
    /* 50px = navbar height */
    // min-height: calc(100vh - 50px);
    // position: relative;
    // overflow: hidden;
    // width: 100%;
    // position: relative;
    // overflow: hidden;
    // background: #faf8f8;
}
.fixed-header + .app-main {
    padding-top: 50px;
}
.app-menu + .app-main {
    /* 100px app menu width */
    width: calc(100% - 150px);
    margin-left: 150px;
}
</style>
