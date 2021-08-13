<template>
    <div id="app">
        <router-view v-if="$route.meta.single" v-wechat-title="pageTitle" />
        <Layout v-else />
    </div>
</template>

<script>
import Layout from './layout'
import { title } from './settings.js'

export default {
    name: 'App',
    components: { Layout },
    props: {},
    data() {
        return {
            ready: true
        }
    },
    watch: {},
    activated() {},
    computed: {
        pageTitle() {
            return this.$route.meta.title || title
        }
    },
    created() {},
    mounted() {},
    methods: {}
}
</script>
