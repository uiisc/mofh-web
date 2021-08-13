<template>
    <div class="app-wrapper">
        <Navbar />
        <AppMain />
        <Footbar />
    </div>
</template>

<script>
import Navbar from './components/Navbar'
import AppMain from './components/AppMain'
import Footbar from './components/Footbar'

export default {
    name: 'Layout',
    components: { Navbar, AppMain, Footbar },
    props: {},
    data() {
        return {}
    },
    watch: {},
    activated() {},
    computed: {},
    created() {},
    mounted() {},
    methods: {}
}
</script>

<style lang="less">
.app-wrapper {
    height: 100%;
    width: 100%;
}
</style>
