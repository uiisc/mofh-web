<template>
    <div class="app-footbar">
        <b-container>
            <b-navbar toggleable="sm" type="light" variant="light">
                <b-navbar-nav>
                    <b-nav-text>&copy;&nbsp;2021 {{ title }}</b-nav-text>
                    <b-nav-text class="d-none d-md-block">,Partnered with</b-nav-text>
                    <b-nav-item class="d-none d-md-block" href="https://ifastnet.com" target="_blank">iFastNet</b-nav-item>
                </b-navbar-nav>

                <!-- Right aligned nav items -->
                <b-navbar-nav class="ml-auto">
                    <b-nav-text class="d-none d-sm-block">Powered by</b-nav-text>
                    <b-nav-item href="https://crogram.org" target="_blank">Crogram</b-nav-item>
                </b-navbar-nav>
            </b-navbar>
        </b-container>
    </div>
</template>

<script>
import { title } from '@/settings.js'

export default {
    name: 'Footbar',
    components: {},
    props: {},
    data() {
        return {
            title,
            year: 2021 // new Date().getFullYear()
        }
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
.app-footbar {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 60px;
}
</style>
