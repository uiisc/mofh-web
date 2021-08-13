<template>
    <div class="app-footbar">
        <b-container>
            <b-navbar toggleable="sm" type="light" variant="light">
                <b-navbar-toggle target="nav-footer"></b-navbar-toggle>
                <b-collapse id="nav-footer" is-nav>
                    <b-navbar-nav>
                        <b-nav-text>@ 2021 Copyright {{ title }}</b-nav-text>
                    </b-navbar-nav>

                    <!-- Right aligned nav items -->
                    <b-navbar-nav class="ml-auto">
                        <b-nav-item to="/support">{{ $t('router.support') }}</b-nav-item>
                    </b-navbar-nav>
                </b-collapse>
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
            title
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
