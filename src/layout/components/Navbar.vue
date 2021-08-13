<template>
    <div class="app-navbar">
        <b-container>
            <b-navbar toggleable="md" type="light" variant="light">
                <b-navbar-brand to="/">{{ title }}</b-navbar-brand>

                <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

                <b-collapse id="nav-collapse" is-nav>
                    <b-navbar-nav>
                        <b-nav-item to="/">{{ $t('router.home') }}</b-nav-item>
                        <b-nav-item to="/price" :active="$route.path == '/price'">{{ $t('router.price') }}</b-nav-item>
                        <b-nav-item to="/about" :active="$route.path == '/about'">{{ $t('router.about') }}</b-nav-item>
                        <b-nav-item to="/support" :active="$route.path == '/support'">{{ $t('router.support') }}</b-nav-item>
                        <!-- <b-nav-item to="#" disabled>Disabled</b-nav-item> -->
                        <b-nav-item-dropdown :text="$t('common.more')">
                            <b-dropdown-item to="/contact" :active="$route.path == '/contact'">{{ $t('router.contact') }}</b-dropdown-item>
                            <b-dropdown-item to="/help" :active="$route.path == '/help'">{{ $t('router.help') }}</b-dropdown-item>
                            <b-dropdown-divider></b-dropdown-divider>
                            <b-dropdown-item to="/support" :active="$route.path == '/support'">{{ $t('router.support') }}</b-dropdown-item>
                            <b-dropdown-item to="/forum" :active="$route.path == '/forum'">{{ $t('router.forum') }}</b-dropdown-item>
                        </b-nav-item-dropdown>
                    </b-navbar-nav>

                    <!-- Right aligned nav items -->
                    <b-navbar-nav class="ml-auto">
                        <b-nav-item to="/login" :active="$route.path == '/login'">{{ $t('router.login') }}</b-nav-item>
                        <b-nav-item to="/signup" :active="$route.path == '/signup'">{{ $t('router.signup') }}</b-nav-item>
                        <b-nav-item-dropdown text="Lang" right>
                            <b-dropdown-item v-for="(item, index) in lang" :key="index" :active="item.key == locale" @click="changeLocale(item.key)">{{ item.name }}</b-dropdown-item>
                        </b-nav-item-dropdown>

                        <b-nav-item-dropdown right>
                            <!-- Using 'button-content' slot -->
                            <template v-slot:button-content>
                                <em>User</em>
                            </template>
                            <b-dropdown-item href="#">Profile</b-dropdown-item>
                            <b-dropdown-item href="#">Sign Out</b-dropdown-item>
                        </b-nav-item-dropdown>
                    </b-navbar-nav>
                </b-collapse>
            </b-navbar>
        </b-container>
    </div>
</template>

<script>
import { title } from '@/settings.js'

export default {
    name: 'Navbar',
    components: {},
    props: {},
    data() {
        return {
            title
        }
    },
    watch: {},
    activated() {},
    computed: {
        lang() {
            // 所有可选翻译
            return Object.values(this.$i18n.messages).map((i) => {
                return i.lang
            })
        },
        locale() {
            // 当前语言
            return this.$i18n.locale
        }
    },
    created() {},
    mounted() {},
    methods: {
        changeLocale(x) {
            this.$i18n.locale = x || this.lang[0].key
        }
    }
}
</script>

<style lang="less">
.app-navbar {
    margin-top: 10px;
}
</style>
